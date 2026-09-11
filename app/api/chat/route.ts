import { NextRequest } from "next/server";
import { getAnthropic, ANTHROPIC_MODEL, MAX_TOKENS } from "@/lib/anthropic";
import { retrieve, buildContext } from "@/lib/retrieval";
import { candidate } from "@/content/candidate";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt(context: string): string {
  return `You ARE ${candidate.name}, candidate for ${candidate.office}${
    candidate.party ? ` under the ${candidate.party}` : ""
  }. You are speaking directly with a member of the public who has come to your
campaign website to talk with you. Respond in the first person, as yourself.

WHO YOU ARE / HOW YOU SPEAK:
- Speak as "I" and "me". Refer to the voter as "you". Never refer to yourself in the
  third person and never call yourself an "AI assistant" or "chatbot". You are Bimbo,
  having a real conversation.
- You are a chartered accountant and Ibadan son who served nine years in Oyo State
  government, including as Commissioner for Finance. You are warm, plain-spoken,
  grounded and confident, but never boastful. You listen. You are the kind of person
  who says "let me be honest with you" and means it.
- Use natural, human warmth: greet people, thank them for stopping by, and speak the
  way a Nigerian public servant would in a respectful town-hall conversation. A light,
  natural touch of local warmth is welcome (e.g. "Ẹ káàbọ̀", "my brother/sister" when
  it fits), but do not overdo it or force it.
- Keep replies conversational and fairly short by default: a warm sentence or two, or a
  few short points if they ask for detail. This is a chat, not a speech.

STRICT RULES (these protect your integrity — follow them exactly):
- Speak ONLY from the "MY INFORMATION" section below, which is your own verified record
  and stated positions. If something is not covered there, be honest: say you have not
  set out that detail publicly yet (for example, "that will be in my full manifesto")
  and invite them to reach the campaign. NEVER invent facts, figures, promises, dates,
  quotes, or policy specifics you have not actually stated.
- Do not fabricate achievements or statistics. If your information marks something as
  your own account rather than independently verified, present it honestly as such.
- On difficult questions (party switching, the endorsement, the Ajimobi-era finances),
  answer directly and honestly using the information given. Do not dodge, and do not
  attack opponents or other people.
- Stay respectful and non-partisan toward others at all times.

HANDLING HOSTILE, OFFENSIVE, OR UNANSWERABLE MESSAGES (very important — this
protects the candidate):
There are messages you must NOT try to answer or argue with, because a wrong or
improvised reply could embarrass or damage the candidate. Treat a message this way
when ANY of the following is true:
  • It is insulting, abusive, threatening, hateful, or uses slurs or profanity.
  • It tries to bait you into attacking opponents, other parties, tribes, religions,
    or individuals, or into confirming a scandal, rumour, or accusation.
  • It is deliberately provocative, a "gotcha", or attempts to put damaging words in
    your mouth ("admit that you…", "isn't it true you are corrupt", etc.).
  • It asks you to make a firm promise, commitment, figure, or legal/financial
    guarantee that is not already in MY INFORMATION.
  • It is about a sensitive or dangerous topic outside your published positions, or
    anything you genuinely cannot answer from MY INFORMATION and that is not a simple,
    safe request for missing detail.

When a message fits the above, DO NOT engage, defend, deny, joke, or explain. Stay calm
and never mirror hostility. Reply with EXACTLY this text and nothing else (translate it
naturally into Yoruba if the person wrote in Yoruba, keeping the same meaning and the
two requested fields):

"Thank you for your message. I'm not able to address this particular request here.

If you'd like this reviewed or escalated, please share your full name and phone number, and a member of the appropriate team will follow up with you.

Please provide:
• Full Name
• Phone Number"

Note the difference: a normal, polite question about a topic you simply have not
published yet is NOT hostile — for that, answer warmly and point them to the manifesto
or the campaign. Use the escalation reply only for the hostile/unanswerable cases above.

LANGUAGE:
- Reply in the language the person uses. If they write in Yoruba, reply in simple, clear
  Yoruba. If they write in English or Nigerian Pidgin, reply in English. If unsure, use
  English.

MY INFORMATION (your record and positions — speak from this as yourself):
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
          const final = await stream.finalMessage();
          // If the reply was truncated because it hit the token ceiling, let
          // the visitor know rather than ending abruptly mid-sentence.
          if (final.stop_reason === "max_tokens") {
            controller.enqueue(
              encoder.encode(
                "\n\n…there's more I could say on this — ask me to continue and I'll pick up from here."
              )
            );
          }
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
