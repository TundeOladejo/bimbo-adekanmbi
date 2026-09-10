import { NextRequest } from "next/server";
import { getAnthropic, ANTHROPIC_MODEL, MAX_TOKENS } from "@/lib/anthropic";
import { retrieve, buildContext } from "@/lib/retrieval";
import { candidate } from "@/content/candidate";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt(context: string): string {
  return `You are the official AI assistant for the campaign of ${candidate.name}, who is running for ${candidate.office}${
    candidate.party ? ` under the ${candidate.party}` : ""
  }.

Your job is to help visitors learn about the candidate by answering their questions
politely, clearly, and factually.

STRICT RULES:
- Answer ONLY using the information in the "CANDIDATE INFORMATION" section below.
- If the answer is not covered by that information, say honestly that you don't have
  that detail yet and suggest the visitor contact the campaign. Do NOT make up facts,
  figures, promises, dates, or quotes.
- Never invent achievements, statistics, or policy positions.
- Be warm, respectful, and encouraging. Keep answers concise (a short paragraph or a
  few bullet points) unless asked for detail.
- Stay non-partisan in tone toward other people; do not attack opponents.

LANGUAGE:
- Detect the language of the user's question.
- If the user writes in Yoruba, reply in simple, clear Yoruba.
- If the user writes in English (or Nigerian Pidgin), reply in English.
- If unsure, reply in English.

CANDIDATE INFORMATION:
${context}`;
}

export async function POST(req: NextRequest) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user");

  if (!lastUser || !lastUser.content.trim()) {
    return Response.json({ error: "No question provided." }, { status: 400 });
  }

  // RAG step: retrieve relevant candidate info for the latest question.
  const retrieved = retrieve(lastUser.content);
  const context = buildContext(retrieved);

  // Friendly, generic message shown to visitors. Never expose raw API errors,
  // billing details, model names, or request IDs to end users.
  const USER_FACING_ERROR =
    "Sorry, the assistant is temporarily unavailable. Please try again in a moment, or contact the campaign directly.";

  let anthropic;
  try {
    anthropic = getAnthropic();
  } catch (e) {
    // Log the real reason server-side; return a generic message to the client.
    console.error("[chat] configuration error:", e);
    return Response.json({ error: USER_FACING_ERROR }, { status: 503 });
  }

  // Keep only the recent conversation to control token usage. The Anthropic
  // Messages API expects alternating user/assistant turns and the system
  // prompt passed separately, so we map our messages to that shape.
  const history = messages.slice(-8).map((m) => ({
    role: m.role,
    content: m.content,
  }));

  try {
    const stream = anthropic.messages.stream({
      model: ANTHROPIC_MODEL,
      max_tokens: MAX_TOKENS,
      temperature: 0.3,
      system: buildSystemPrompt(context),
      messages: history,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        let sentAnyText = false;
        try {
          stream.on("text", (text) => {
            sentAnyText = true;
            controller.enqueue(encoder.encode(text));
          });
          await stream.finalMessage();
        } catch (err) {
          // Log the real error server-side so it appears in the terminal,
          // but only show the visitor a friendly, generic message.
          console.error("[chat] streaming error:", err);
          const friendly = sentAnyText
            ? "\n\n(Sorry, the response was cut short. Please try again.)"
            : USER_FACING_ERROR;
          controller.enqueue(encoder.encode(friendly));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (e) {
    // Log the real error server-side; return a generic message to the client.
    console.error("[chat] request error:", e);
    return Response.json({ error: USER_FACING_ERROR }, { status: 503 });
  }
}
