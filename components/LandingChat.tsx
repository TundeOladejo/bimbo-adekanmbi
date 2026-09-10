"use client";

import { useState } from "react";
import Chat from "@/components/Chat";
import { candidate } from "@/content/candidate";

const STARTERS = [
  "What did you do as finance commissioner?",
  "How will you support farmers?",
  "What's your plan for youth jobs?",
];

/**
 * Landing-page chat: an embedded, working chat that sits inside the hero so
 * it's visible in the first fold. Tapping a starter chip sends that question
 * straight into the conversation — no navigation. Chips clear once the
 * conversation begins to keep things clean.
 */
export default function LandingChat() {
  const [starter, setStarter] = useState<string | undefined>();
  const [started, setStarted] = useState(false);

  return (
    <div>
      <Chat
        initialQuestion={starter}
        showSuggestions={false}
        className="h-[62vh] max-h-[560px] min-h-[24rem]"
      />

      {/* Quick starters below the chat, styled for the dark hero. On mobile we
          show only the first two to keep it clean; all three from sm up. */}
      {!started && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {STARTERS.map((q, i) => (
            <button
              key={q}
              type="button"
              onClick={() => {
                setStarter(q);
                setStarted(true);
              }}
              className={`rounded-full border border-ink-900/10 bg-white px-3.5 py-2 text-xs font-medium text-ink-700 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:text-sm ${
                i === 2 ? "hidden sm:inline-block" : ""
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-[11px] leading-relaxed text-ink-300">
        AI, speaking on {candidate.shortName}&apos;s behalf from his published record.
      </p>
    </div>
  );
}
