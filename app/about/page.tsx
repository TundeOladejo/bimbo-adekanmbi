import Link from "next/link";
import Image from "next/image";
import { candidate } from "@/content/candidate";
import { knowledgeBase } from "@/content/knowledge-base";

export const metadata = {
  title: `About ${candidate.name}`,
};

export default function AboutPage() {
  const bio = knowledgeBase.find((k) => k.title === "Biography and Background");
  const why = knowledgeBase.find((k) => k.title === "Vision and Why He Is Running");
  const POSITION_TITLES = [
    "Public Service in Oyo State",
    "2027 Governorship Candidacy",
    "Priority Areas",
    "Education Policy",
    "Healthcare Policy",
    "Agriculture and Economy",
    "Infrastructure, Security, Technology and Tourism",
    "Awards and Recognitions",
    "Family and Personal Life",
  ];
  const policies = POSITION_TITLES.map((t) =>
    knowledgeBase.find((k) => k.title === t)
  ).filter((k): k is NonNullable<typeof k> => Boolean(k));
  const clean = (s?: string) => (s ?? "").replace(/\s+/g, " ").trim();

  return (
    <>
      {/* header */}
      <section className="grain relative overflow-hidden border-b border-ink-900/5 bg-brand-dark text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-mid/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <span className="eyebrow text-sky-light">
            <span className="gold-rule !w-6" /> About
          </span>
          <h1 className="font-display mt-4 text-4xl font-semibold text-white sm:text-6xl">
            {candidate.name}
          </h1>
          <p className="mt-4 flex items-center gap-3 text-lg text-white/60">
            <span className="h-px w-8 bg-white/25" />
            {candidate.office}
            {candidate.party ? ` · ${candidate.party}` : ""}
          </p>
        </div>
      </section>

      {/* bio + why: editorial two-column */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 right-8 top-8 rounded-[2rem] border-2 border-gold/40" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-ink-900/5">
                {candidate.photo ? (
                  <Image
                    src={candidate.photo}
                    alt={`Portrait of ${candidate.name}`}
                    width={640}
                    height={800}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-[4/5] flex-col items-center justify-center bg-gradient-to-b from-brand to-brand-dark text-white/40">
                    <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                    </svg>
                    <span className="mt-3 text-xs">Add candidate photo</span>
                  </div>
                )}
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            {bio && (
              <div>
                <h2 className="text-xl font-semibold text-brand-dark">{bio.title}</h2>
                <div className="gold-rule mt-3" />
                <p className="mt-4 leading-relaxed text-ink-700">{clean(bio.content)}</p>
              </div>
            )}
            {why && (
              <div>
                <h2 className="text-xl font-semibold text-brand-dark">{why.title}</h2>
                <div className="gold-rule mt-3" />
                <p className="mt-4 leading-relaxed text-ink-700">{clean(why.content)}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* where he stands */}
      <section className="border-t border-ink-900/5 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <span className="eyebrow">
            <span className="gold-rule !w-6" /> Positions
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">Where he stands</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {policies.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-ink-900/5 bg-cloud p-6 transition-shadow hover:shadow-soft"
              >
                <h3 className="flex items-center gap-2 font-semibold text-brand-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{clean(p.content)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="relative overflow-hidden rounded-4xl bg-brand-dark p-10 text-center text-white shadow-lift">
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-brand-mid/50 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Ask our AI assistant anything about the candidate — in English or Yoruba.
            </p>
            <Link
              href="/chat"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-gold-light"
            >
              Ask the AI →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
