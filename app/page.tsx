import Link from "next/link";
import Image from "next/image";
import { candidate } from "@/content/candidate";
import { knowledgeBase } from "@/content/knowledge-base";

const PRIORITIES = [
  { title: "Education Policy", label: "Education", icon: "M12 4.5 3 9l9 4.5L21 9l-9-4.5Z M6 10.7V15c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.3" },
  { title: "Healthcare Policy", label: "Healthcare", icon: "M12 21s-7-4.5-9.3-9.2C1 8.5 3 5 6.5 5 8.6 5 10 6.3 12 8.5 14 6.3 15.4 5 17.5 5 21 5 23 8.5 21.3 11.8 19 16.5 12 21 12 21Z" },
  { title: "Agriculture and Economy", label: "Agriculture & Economy", icon: "M4 7h16v12H4z M9 7V5h6v2 M3 12h18" },
  { title: "Infrastructure, Security, Technology and Tourism", label: "Infrastructure & Security", icon: "M12 3 5 6v6c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z" },
];

// Real, sourced credentials (from the verified knowledge base).
const CREDENTIALS = [
  { value: "FCCA", label: "Chartered Accountant" },
  { value: "2016–19", label: "Commissioner for Finance, Oyo State" },
  { value: "8 yrs", label: "In Oyo State public service" },
  { value: "2027", label: "APM governorship candidate" },
];

export default function Home() {
  const byTitle = (t: string) => knowledgeBase.find((k) => k.title === t);
  const firstName = candidate.name.replace(/^(Hon\.|Chief|Dr\.|Mr\.|Mrs\.)\s*/i, "").split(" ")[0];

  // Split the slogan so we can highlight the last word in gold.
  const words = candidate.slogan.trim().split(" ");
  const leadWords = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  return (
    <>
      {/* ================================================================= HERO */}
      <section className="grain relative overflow-hidden bg-brand-dark text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/3 h-[40rem] w-[40rem] rounded-full bg-brand-mid/40 blur-3xl" />
          <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-sky-dark/25 blur-3xl" />
          {/* Flowing contour/topographic lines — organic and map-like,
              rather than a technical grid. */}
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1200 700"
            fill="none"
            aria-hidden
            style={{
              maskImage: "radial-gradient(ellipse 80% 70% at 55% 20%, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 55% 20%, black, transparent 80%)",
            }}
          >
            <g stroke="rgba(255,255,255,0.5)" strokeWidth="1">
              <path d="M-50 120C220 60 420 200 640 150 860 100 1020 210 1260 150" opacity="0.35" />
              <path d="M-50 190C220 130 420 270 640 220 860 170 1020 280 1260 220" opacity="0.3" />
              <path d="M-50 270C220 210 420 350 640 300 860 250 1020 360 1260 300" opacity="0.25" />
              <path d="M-50 360C220 300 420 440 640 390 860 340 1020 450 1260 390" opacity="0.2" />
              <path d="M-50 460C220 400 420 540 640 490 860 440 1020 550 1260 490" opacity="0.16" />
              <path d="M-50 570C220 510 420 650 640 600 860 550 1020 660 1260 600" opacity="0.12" />
            </g>
            <g fill="rgba(245,197,24,0.55)">
              <circle cx="640" cy="150" r="3.5" />
              <circle cx="220" cy="130" r="2.5" />
              <circle cx="1020" cy="280" r="2.5" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
          {/* copy */}
          <div>
            {candidate.party && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-sky-light backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {candidate.party}
              </span>
            )}
            <h1 className="font-display mt-6 text-5xl font-semibold sm:text-[4.25rem]">
              {leadWords}{" "}
              <span className="mark-gold text-white">{lastWord}</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70">
              {candidate.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/chat"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-brand-dark shadow-lift transition-all hover:bg-gold-light"
              >
                Ask {firstName} anything
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Meet the candidate
              </Link>
            </div>

            <p className="mt-9 flex items-center gap-3 text-sm text-white/50">
              <span className="h-px w-8 bg-white/25" />
              {candidate.name} for {candidate.office}
              {candidate.electionYear ? ` · ${candidate.electionYear}` : ""}
            </p>
          </div>

          {/* portrait with overlapping frame */}
          <div className="relative mx-auto w-full max-w-sm">
            {/* offset gold frame behind */}
            <div className="absolute -right-4 -top-4 bottom-8 left-8 rounded-[2rem] border-2 border-gold/50" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 shadow-lift ring-1 ring-white/10">
              {candidate.photo ? (
                <Image
                  src={candidate.photo}
                  alt={`Portrait of ${candidate.name}`}
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-gradient-to-b from-brand-mid/40 to-brand-dark text-white/40">
                  <svg className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                  </svg>
                  <span className="mt-3 text-xs">Add candidate photo</span>
                </div>
              )}
              {/* gradient scrim for legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            </div>

            {/* floating chip overlapping bottom-left */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-brand-dark">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-brand-dark">{candidate.name}</p>
                <p className="text-[11px] text-ink-500">Chartered accountant · Ex-Commissioner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= CREDENTIALS BAND */}
      <section className="border-b border-ink-900/5 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ink-900/5 px-5 sm:grid-cols-4">
          {CREDENTIALS.map((c) => (
            <div key={c.label} className="px-4 py-8 text-center sm:py-10">
              <p className="font-display text-3xl font-semibold text-brand sm:text-4xl">{c.value}</p>
              <p className="mx-auto mt-2 max-w-[10rem] text-xs leading-snug text-ink-500">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================= PULL QUOTE */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-brand-light sm:h-36 sm:w-36">
            {candidate.photo ? (
              <Image
                src={candidate.photo}
                alt={candidate.name}
                width={288}
                height={288}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="h-full w-full bg-brand" />
            )}
          </div>
          <figure>
            <svg className="h-9 w-9 text-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm11 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" />
            </svg>
            <blockquote className="font-display mt-4 text-2xl font-semibold leading-snug text-brand-dark sm:text-[2rem]">
              My candidacy rests on three things —{" "}
              <span className="text-brand">competence, continuity, and capacity</span> — to keep
              Oyo State moving forward.
            </blockquote>
            <figcaption className="mt-5 text-sm text-ink-500">
              — {candidate.name}, {candidate.office} candidate
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================================================================= PRIORITIES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">
                <span className="gold-rule !w-6" /> The agenda
              </span>
              <h2 className="font-display mt-3 text-3xl font-semibold text-brand-dark sm:text-4xl">
                Priorities for Oyo State
              </h2>
            </div>
            <Link href="/about" className="text-sm font-semibold text-sky-dark hover:text-brand">
              See where he stands →
            </Link>
          </div>

          {/* Non-uniform grid: first item is a wide featured card. */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PRIORITIES.map((p, i) => {
              const entry = byTitle(p.title);
              const featured = i === 0;
              return (
                <div
                  key={p.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 ${
                    featured
                      ? "bg-brand text-white shadow-lift md:col-span-2 md:row-span-1"
                      : "border border-ink-900/5 bg-cloud shadow-soft hover:shadow-lift"
                  }`}
                >
                  {featured && (
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-dark/30 blur-2xl" />
                  )}
                  <div className="relative">
                    <span
                      className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl transition-colors ${
                        featured
                          ? "bg-white/10 text-gold"
                          : "bg-brand-light text-brand group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d={p.icon} />
                      </svg>
                    </span>
                    <h3 className={`text-base font-semibold ${featured ? "text-white" : "text-brand-dark"}`}>
                      {p.label}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${featured ? "max-w-md text-white/70" : "text-ink-500 line-clamp-4"}`}>
                      {entry?.content.replace(/\s+/g, " ").trim().slice(0, featured ? 220 : 140)}…
                    </p>
                  </div>
                  <span className={`relative mt-6 text-xs font-semibold ${featured ? "text-white/40" : "text-ink-300"}`}>
                    0{i + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= AI CTA */}
      <section className="mx-auto max-w-6xl px-5 py-8 pb-24">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-brand-dark p-8 text-white shadow-lift sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-mid/50 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow text-sky-light">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> AI Assistant
              </span>
              <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                Have a question? Just ask.
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                Chat with our assistant to learn about {firstName}&apos;s background, plans, and
                priorities — day or night. It answers only from verified information, in English or
                Yoruba.
              </p>
            </div>
            <Link
              href="/chat"
              className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-gold px-7 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-gold-light"
            >
              Start chatting →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
