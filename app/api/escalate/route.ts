import { NextRequest } from "next/server";

export const runtime = "nodejs";

/**
 * Escalation capture endpoint.
 *
 * When the campaign assistant declines a hostile or unanswerable message, it
 * asks the visitor for their name and phone number so the team can follow up.
 * This route receives those details and appends them to a Google Sheet via a
 * Google Apps Script Web App (a simple, keyless webhook).
 *
 * SETUP (see .env.example): create an Apps Script bound to your Sheet that
 * appends a row on POST, deploy it as a Web App ("Anyone" access), and put the
 * deployment URL in GOOGLE_SHEETS_WEBHOOK_URL.
 */

type Payload = {
  name?: string;
  phone?: string;
  message?: string;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 1000);

  if (!name || !phone) {
    return Response.json(
      { error: "Please provide both your full name and phone number." },
      { status: 400 }
    );
  }

  // Basic sanity check on the phone: must contain some digits.
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) {
    return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    // Don't leak configuration state to the client; log for the operator.
    console.error("[escalate] GOOGLE_SHEETS_WEBHOOK_URL is not set.");
    return Response.json(
      { error: "We couldn't submit your details right now. Please try again later." },
      { status: 503 }
    );
  }

  const row = {
    timestamp: new Date().toISOString(),
    name,
    phone,
    message,
    source: "website-chat",
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      // Apps Script can be slow to cold-start; give it room but don't hang.
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[escalate] webhook responded", res.status);
      return Response.json(
        { error: "We couldn't submit your details right now. Please try again later." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[escalate] webhook error", err);
    return Response.json(
      { error: "We couldn't submit your details right now. Please try again later." },
      { status: 502 }
    );
  }
}
