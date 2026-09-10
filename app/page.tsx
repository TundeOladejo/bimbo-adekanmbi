import Link from "next/link";
import Image from "next/image";
import { candidate } from "@/content/candidate";
import HeroDoodles from "@/components/HeroDoodles";

/** A few conversation-starters that jump straight into the chat. */
const STARTERS = [
  "What did you do as finance commissioner?",
  "How will you support farmers?",
  "What's your plan for youth jobs?",
  "Why should I trust you with Oyo?",
];

export default function Home() {
  const first = candidate.shortName;
  const chatHref = (q?: string) => (q ? `/chat?q=${encodeURIComponent(q)}` : "/chat");

  return (
    <>
      {/* ================================================================= HERO */}
      <section className="relative isolate overflow-hidden bg-brand-dark text-white">
        {/* Ambient background: layered glows anchored to the composition. */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-32 -top-24 h-[38rem] w-[38rem] rounded-full bg-brand-mid/40 blur-3xl" />
          <div className="absolute -bottom-40 right-[-6rem] h-[34rem] w-[34rem] rounded-full bg-sky-dark/20 blur-3xl" />
          <div className="grain absolute inset-0" />
          {/* hand-drawn doodles of what the campaign is about */}
          <HeroDoodles />
        </div>

        <div className="relative mx-auto flex min-h-[36rem] max-w-7xl items-center px-6 py-16 sm:px-8 lg:min-h-[calc(100dvh-4rem)] lg:py-20 2xl:px-12">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] lg:gap-16 xl:gap-20">
            {/* copy */}
            <div className="flex max-w-2xl animate-fade-up flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {candidate.party && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 font-medium text-sky-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {candidate.party}
                  </span>
                )}
                <span className="rounded-full border border-white/10 px-3.5 py-1.5 font-medium text-white/60">
                  Election · {candidate.electionDate}
                </span>
              </div>

              <h1 className="font-display mt-6 text-[2.75rem] font-semibold leading-[1.03] sm:text-6xl xl:text-[4.5rem]">
                Don&apos;t take my word for it.
                <span className="mt-2 block text-white/85">
                  <span className="mark-gold text-white">Ask me yourself.</span>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 xl:text-xl">
                I&apos;m {candidate.name} — chartered accountant, former Oyo finance commissioner, and
                a son of Ibadan. Instead of reading a brochure, have a real conversation with me about
                the things that matter to you.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/chat"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-brand-dark shadow-lift transition-all hover:bg-gold-light"
                >
                  Start talking with me
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  A bit about me
                </Link>
              </div>

              {candidate.runningMate?.name && (
                <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/50">
                  <span className="h-px w-8 bg-white/25" />
                  Running with{" "}
                  <span className="font-medium text-white/75">{candidate.runningMate.name}</span>
                  <span className="text-white/40">· {candidate.runningMate.from}</span>
                </p>
              )}
            </div>

            {/* portrait */}
            <div className="relative mx-auto w-full max-w-sm animate-fade-up self-center delay-2 lg:mx-0 lg:max-w-none lg:justify-self-end">
              <div className="absolute -right-4 -top-4 bottom-8 left-8 rounded-[2.25rem] border-2 border-gold/50" />
              <div className="relative overflow-hidden rounded-[2.25rem] bg-white/5 shadow-lift ring-1 ring-white/10">
                {candidate.photo ? (
                  <Image
                    src={candidate.photo}
                    alt={`${candidate.name}, APM candidate for Governor of Oyo State`}
                    width={720}
                    height={900}
                    priority
                    sizes="(min-width: 1024px) 34rem, (min-width: 640px) 24rem, 90vw"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-brand-mid/40 text-white/40">
                    Add candidate photo
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-dark/90 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-display text-xl font-semibold">{candidate.name}</p>
                  <p className="text-sm text-white/70">for {candidate.office}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= INVITE TO ASK */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <span className="eyebrow justify-center">
            <span className="gold-rule !w-6" /> Ask me anything
          </span>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-3xl font-semibold text-brand-dark sm:text-4xl">
            What would you like to ask {first}?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-500">
            Pick a question to get started, or type your own. I answer honestly — and if something
            isn&apos;t settled yet, I&apos;ll tell you.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-2xl gap-3 sm:grid-cols-2">
          {STARTERS.map((q, i) => (
            <Link
              key={q}
              href={chatHref(q)}
              className={`group flex animate-fade-up items-center justify-between gap-3 rounded-2xl border border-ink-900/5 bg-white px-5 py-4 text-left shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-lift delay-${i + 1}`}
            >
              <span className="text-sm font-medium text-ink-700 group-hover:text-brand">{q}</span>
              <span className="text-ink-300 transition-colors group-hover:text-brand" aria-hidden>→</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-dark hover:shadow-lift"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Open the conversation
          </Link>
          <p className="mt-3 text-xs text-ink-300">English or Yoruba · Béèrè ní Gẹ̀ẹ́sì tàbí Yorùbá</p>
        </div>
      </section>
    </>
  );
}
