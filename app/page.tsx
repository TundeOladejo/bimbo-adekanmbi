import Link from "next/link";
import Image from "next/image";
import { candidate } from "@/content/candidate";
import HeroDoodles from "@/components/HeroDoodles";
import LandingChat from "@/components/LandingChat";

export default function Home() {
  const first = candidate.shortName;

  return (
    <>
      {/* ============================================ HERO with embedded chat */}
      <section className="relative isolate overflow-hidden bg-white text-ink-700">
        {/* Ambient background: soft light glows + campaign doodles. */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-32 -top-24 h-[38rem] w-[38rem] rounded-full bg-brand/[0.06] blur-3xl" />
          <div className="absolute -bottom-40 right-[-6rem] h-[34rem] w-[34rem] rounded-full bg-sky/[0.08] blur-3xl" />
          <HeroDoodles />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[calc(100dvh-4rem)] lg:px-12 lg:py-16 2xl:px-6">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,30rem)] lg:gap-16 xl:gap-20">
            {/* intro copy — minimal on mobile, fuller on desktop */}
            <div className="flex max-w-2xl animate-fade-up flex-col items-center text-center lg:items-start lg:text-left">
              {/* candidate photo + name — clean and centered on mobile */}
              <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:gap-4">
                {candidate.photo && (
                  <div className="relative shrink-0">
                    <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-gold/60 to-sky/40 blur-[2px]" aria-hidden />
                    <Image
                      src={candidate.photo}
                      alt={`${candidate.name}, candidate for ${candidate.office}`}
                      width={160}
                      height={160}
                      priority
                      sizes="112px"
                      className="relative h-16 w-16 rounded-full object-cover object-top ring-2 ring-white sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                    />
                  </div>
                )}
                <div className="flex flex-col items-center gap-1.5 lg:items-start">
                  <p className="font-display text-base font-semibold text-brand-dark lg:hidden">
                    {candidate.name}
                  </p>
                  {/* chips: only party on mobile, both on larger screens */}
                  <div className="flex flex-wrap justify-center gap-2 text-[11px] sm:text-xs lg:justify-start">
                    {candidate.party && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/15 bg-brand/[0.04] px-2.5 py-1 font-medium text-brand sm:gap-2 sm:px-3 sm:py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
                        {candidate.party}
                      </span>
                    )}
                    <span className="hidden rounded-full border border-ink-900/10 px-3 py-1.5 font-medium text-ink-500 sm:inline">
                      Election · {candidate.electionDate}
                    </span>
                  </div>
                  <p className="hidden text-sm text-ink-500 lg:block">
                    {candidate.name} · <span className="text-ink-300">for {candidate.office}</span>
                  </p>
                </div>
              </div>

              <h1 className="font-display mt-5 text-[1.5rem] font-semibold leading-[1.14] text-brand-dark sm:mt-7 sm:text-[2.75rem] xl:text-[3.25rem]">
                Skip the rumours.
                <span className="mt-1 block text-brand sm:mt-1.5">
                  <span className="mark-gold">Ask me directly.</span>
                </span>
              </h1>

              {/* fuller intro + running mate: desktop only, to keep mobile clean */}
              <p className="mt-5 hidden max-w-xl text-base leading-relaxed text-ink-700 lg:block">
                I&apos;m {candidate.name} — chartered accountant, former Oyo finance commissioner, and
                a son of Ibadan. Ask me anything, right here.
              </p>

              {candidate.runningMate?.name && (
                <p className="mt-6 hidden flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500 lg:flex">
                  <span className="h-px w-8 bg-ink-900/15" />
                  Running with{" "}
                  <span className="font-medium text-ink-700">{candidate.runningMate.name}</span>
                  <span className="text-ink-300">· {candidate.runningMate.from}</span>
                </p>
              )}
            </div>

            {/* live chat — visible in the first fold */}
            <div className="animate-fade-up delay-2">
              <LandingChat />
            </div>
          </div>

          {/* desktop-only secondary link, kept out of the way */}
          <div className="mt-8 hidden justify-center lg:flex">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-6 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand/30 hover:bg-brand/5 hover:text-brand"
            >
              Prefer to read? A bit about {first} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
