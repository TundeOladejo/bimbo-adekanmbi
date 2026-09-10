import Link from "next/link";
import Image from "next/image";
import { candidate } from "@/content/candidate";
import { knowledgeBase } from "@/content/knowledge-base";

export const metadata = {
  title: `About ${candidate.name}`,
  description: `The record, agenda and story of ${candidate.name}, ${candidate.party} candidate for ${candidate.office}.`,
};

const clean = (s?: string) => (s ?? "").replace(/\s+/g, " ").trim();
const kb = (t: string) => knowledgeBase.find((k) => k.title === t);

/** Verified milestones for the timeline (honest, sourced record). */
const TIMELINE = [
  { year: "1998", text: "Graduates in Accounting from Obafemi Awolowo University, Ile-Ife." },
  { year: "2002–2011", text: "Finance and management consultant in the UK; qualifies as a Fellow of the ACCA (FCCA)." },
  { year: "2011", text: "Joins Oyo State Government as Deputy Chief of Staff to Gov. Abiola Ajimobi." },
  { year: "to 2019", text: "Commissioner for Finance, Budget and Planning through a national revenue downturn." },
  { year: "2023", text: "Contests the Oyo South senatorial seat (APC) — unsuccessfully. His only election so far." },
  { year: "2024", text: "Chairs the ~N41bn Ibadan (Ladoke Akintola) airport upgrade committee." },
  { year: "Dec 2025", text: "Formally joins the PDP." },
  { year: "May 2026", text: "Emerges APM governorship candidate; endorsed by Gov. Seyi Makinde as preferred successor." },
];

/** Positions grouped by theme so the page reads like a manifesto, not a list. */
const AGENDA_GROUPS = [
  {
    heading: "The economy and people's livelihoods",
    titles: [
      "Public Finance and Workers' Welfare",
      "Economy, Jobs and Youth Employment",
      "Agriculture and Food Security",
    ],
  },
  {
    heading: "Services and everyday life",
    titles: ["Education Policy", "Healthcare Policy", "Infrastructure, Roads and the Circular Road", "Security"],
  },
  {
    heading: "How he intends to govern",
    titles: ["Technology, Digital Government and Data-Driven Governance", "Leadership Philosophy"],
  },
];

export default function AboutPage() {
  const bio = kb("Biography and Background");
  const why = kb("Vision and Why He Is Running");
  const family = kb("Family and Personal Life");
  const candidacy = kb("2027 Governorship Candidacy and Endorsement");
  const criticisms = kb("Criticisms and Difficult Questions");

  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden border-b border-ink-900/5 bg-brand-dark text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-mid/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl animate-fade-up px-5 py-16 sm:py-20">
          <span className="eyebrow text-sky-light">
            <span className="gold-rule !w-6" /> The candidate
          </span>
          <h1 className="font-display mt-4 text-[2rem] font-semibold text-white sm:text-5xl">
            {candidate.name}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-white/60">
            <span className="h-px w-8 bg-white/25" />
            {candidate.office}
            {candidate.party ? ` · ${candidate.party}` : ""}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            An Ibadan son and chartered accountant who spent nine years helping run Oyo State&apos;s
            finances. Here&apos;s the record, the agenda, and the honest answers to the hard questions.
          </p>
        </div>
      </section>

      {/* bio + why: editorial two-column */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 right-8 top-8 rounded-[2rem] border-2 border-gold/40" />
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-ink-900/5">
                {candidate.photoAlt || candidate.photo ? (
                  <Image
                    src={candidate.photoAlt || candidate.photo}
                    alt={`Portrait of ${candidate.name}`}
                    width={640}
                    height={800}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center bg-brand text-white/40">
                    Add candidate photo
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-ink-900/5 bg-cloud p-5 text-sm">
              <p className="font-semibold text-brand-dark">At a glance</p>
              <dl className="mt-3 space-y-2 text-ink-700">
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Profession</dt><dd className="text-right">Chartered accountant (FCCA)</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Highest office</dt><dd className="text-right">Finance Commissioner, Oyo</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Home</dt><dd className="text-right">Ibadan</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Running mate</dt><dd className="text-right">{candidate.runningMate?.name?.replace("Engr. ", "")}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Election</dt><dd className="text-right">{candidate.electionDate}</dd></div>
              </dl>
            </div>
          </aside>

          <div className="space-y-10">
            {bio && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-dark">The story so far</h2>
                <div className="gold-rule mt-3" />
                <p className="mt-4 leading-relaxed text-ink-700">{clean(bio.content)}</p>
              </div>
            )}
            {why && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-dark">Why he is running</h2>
                <div className="gold-rule mt-3" />
                <p className="mt-4 leading-relaxed text-ink-700">{clean(why.content)}</p>
              </div>
            )}
            {candidacy && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-brand-dark">The 2027 candidacy</h2>
                <div className="gold-rule mt-3" />
                <p className="mt-4 leading-relaxed text-ink-700">{clean(candidacy.content)}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="border-t border-ink-900/5 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <span className="eyebrow">
            <span className="gold-rule !w-6" /> The record
          </span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
            From the ministry to the ballot
          </h2>
          <ol className="mt-9 space-y-6 border-l-2 border-brand-light pl-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-white" />
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-brand">{t.year}</p>
                <p className="mt-1 leading-relaxed text-ink-700">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* agenda, grouped */}
      <section className="border-t border-ink-900/5 bg-cloud">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <span className="eyebrow">
            <span className="gold-rule !w-6" /> Where he stands
          </span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">The agenda</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">
            These are the directions he has stated publicly. A full manifesto with measurable 100-day,
            six-month and one-year targets is promised. Where the detail is not yet public, this page
            says so rather than filling the gap.
          </p>

          <div className="mt-10 space-y-12">
            {AGENDA_GROUPS.map((group) => {
              const entries = group.titles
                .map(kb)
                .filter((k): k is NonNullable<typeof k> => Boolean(k));
              return (
                <div key={group.heading}>
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-brand-dark">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    {group.heading}
                  </h3>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {entries.map((p) => (
                      <div key={p.title} className="rounded-3xl border border-ink-900/5 bg-white p-6 transition-shadow hover:shadow-soft">
                        <h4 className="font-semibold text-brand-dark">{p.title}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-ink-700">{clean(p.content)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* the hard questions — signals honesty, not a brochure */}
      {criticisms && (
        <section className="border-t border-ink-900/5 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
            <div className="rounded-3xl border border-ink-900/5 bg-brand-light/60 p-7 sm:p-9">
              <span className="eyebrow">
                <span className="gold-rule !w-6" /> Straight talk
              </span>
              <h2 className="font-display mt-3 text-2xl font-semibold text-brand-dark">
                The questions people ask
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">{clean(criticisms.content)}</p>
              <Link
                href="/chat"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Ask the assistant the hard questions →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* family */}
      {family && (
        <section className="border-t border-ink-900/5 bg-cloud">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
            <span className="eyebrow"><span className="gold-rule !w-6" /> Family</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-brand-dark">Away from politics</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-700">{clean(family.content)}</p>
          </div>
        </section>
      )}

      {/* cta */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="relative overflow-hidden rounded-4xl bg-brand-dark p-10 text-center text-white shadow-lift">
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-brand-mid/50 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl font-semibold">Want to go deeper?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Ask the campaign assistant anything about {candidate.shortName} — his record, his plans,
              or the difficult questions. English or Yoruba.
            </p>
            <Link
              href="/chat"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-gold-light"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
