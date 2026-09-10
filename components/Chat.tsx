"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { candidate } from "@/content/candidate";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What did you do as finance commissioner?",
  "How will you support farmers and agriculture?",
  "Why are you the APM candidate if you joined the PDP?",
  "Kí ni ètò rẹ fún iṣẹ́ àwọn ọ̀dọ́?", // Yoruba: What is your plan for youth jobs?
];

function initials(name: string) {
  const parts = name.replace(/^(Hon\.|Chief|Dr\.|Mr\.|Mrs\.)\s*/i, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function Chat({
  initialQuestion,
  className = "",
  showSuggestions = true,
}: {
  initialQuestion?: string;
  /** Extra classes to control the height/shape where the chat is embedded. */
  className?: string;
  /** Show the built-in suggestion chips in the empty state. */
  showSuggestions?: boolean;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoSent = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // If the visitor arrived from a homepage question (/chat?q=...), ask it once.
  useEffect(() => {
    if (initialQuestion && !autoSent.current) {
      autoSent.current = true;
      send(initialQuestion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "The assistant is unavailable right now.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: `⚠️ ${msg}` };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-4xl border border-ink-900/5 bg-white shadow-lift ${
        className || "h-[72vh] max-h-[680px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-ink-900/5 bg-brand px-5 py-4 text-white">
        {candidate.photo ? (
          <Image
            src={candidate.photo}
            alt={candidate.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15"
          />
        ) : (
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-bold ring-1 ring-white/15">
            {initials(candidate.name)}
          </span>
        )}
        <div className="leading-tight">
          <p className="font-semibold">{candidate.name}</p>
          <p className="flex items-center gap-1.5 text-xs text-sky-light">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Here to talk · English or Yoruba
          </p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="thin-scroll flex-1 space-y-5 overflow-y-auto bg-cloud px-4 py-6">
        {messages.length === 0 && (
          <div className="mx-auto mt-6 max-w-md text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-light text-brand">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="mt-4 text-ink-700">
              Ẹ káàbọ̀ — thank you for stopping by. It&apos;s {candidate.shortName}. Ask me anything
              about my record, my plans for Oyo State, or the things you&apos;re concerned about.
            </p>
            {showSuggestions && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-ink-900/10 bg-white px-3.5 py-2 text-sm text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-soft"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex items-end gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "assistant" &&
              (candidate.photo ? (
                <Image
                  src={candidate.photo}
                  alt={candidate.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">
                  {initials(candidate.name)}
                </span>
              ))}
            <div
              className={
                m.role === "user"
                  ? "max-w-[78%] rounded-3xl rounded-br-md bg-brand px-4 py-3 text-white shadow-soft"
                  : "max-w-[78%] whitespace-pre-wrap rounded-3xl rounded-bl-md border border-ink-900/5 bg-white px-4 py-3 text-ink-700 shadow-soft"
              }
            >
              {m.content ||
                (loading && i === messages.length - 1 ? (
                  <span className="inline-flex gap-1 py-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-300 [animation-delay:-0.2s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-300 [animation-delay:-0.1s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-ink-300" />
                  </span>
                ) : (
                  ""
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex gap-2 border-t border-ink-900/5 bg-white p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          enterKeyHint="send"
          className="min-w-0 flex-1 rounded-full border border-ink-900/10 bg-cloud px-4 py-3 text-base text-ink-700 outline-none transition-shadow placeholder:text-ink-300 focus:border-brand focus:ring-4 focus:ring-brand/10"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-white transition-all hover:bg-brand-dark disabled:opacity-40"
          aria-label="Send"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13 M22 2l-7 20-4-9-9-4Z" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}
