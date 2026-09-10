import Link from "next/link";
import { candidate } from "@/content/candidate";

function initials(name: string) {
  const parts = name.replace(/^(Hon\.|Chief|Dr\.|Mr\.|Mrs\.)\s*/i, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function Footer() {
  const c = candidate.contact;
  const socials = [
    { label: "Facebook", href: c.facebook },
    { label: "Instagram", href: c.instagram },
    { label: "LinkedIn", href: c.linkedin },
    { label: "Twitter / X", href: c.twitter },
  ].filter((s) => s.href);

  return (
    <footer className="mt-20 bg-brand-dark text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-sm font-bold text-white ring-1 ring-white/10">
                {initials(candidate.name)}
              </span>
              <div className="leading-tight">
                <p className="font-semibold text-white">{candidate.name}</p>
                <p className="text-xs text-white/50">
                  {candidate.office}
                  {candidate.electionYear ? ` · ${candidate.electionYear}` : ""}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Building on what works, fixing what does not — a data-driven government for all 33
              local governments of Oyo State.
            </p>
            <div className="gold-rule mt-5" />
          </div>

          {/* links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-white">About</Link></li>
              <li><Link href="/chat" className="transition-colors hover:text-white">Ask the assistant</Link></li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">Connect</p>
            <ul className="mt-4 space-y-2 text-sm">
              {c.website && (
                <li>
                  <a href={c.website} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                    bimboadekanbi.com
                  </a>
                </li>
              )}
              {c.email && <li>{c.email}</li>}
              {c.phone && <li>{c.phone}</li>}
              {c.address && <li className="text-white/50">{c.address}</li>}
            </ul>
            {socials.length > 0 && (
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs transition-colors hover:border-gold hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} {candidate.name} for {candidate.office}. All rights reserved.</p>
        <p className="mt-1 text-white/30">Paid for by the {candidate.name} Campaign Organisation.</p>
      </div>
    </footer>
  );
}
