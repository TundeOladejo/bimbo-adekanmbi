import Link from "next/link";
import { candidate } from "@/content/candidate";

function initials(name: string) {
  const parts = name.replace(/^(Hon\.|Chief|Dr\.|Mr\.|Mrs\.)\s*/i, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

/** Brand glyphs (single-path SVGs) for the social buttons. */
const ICONS: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.2V14h2.4v7h2.9Z" />
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.2" />
    </>
  ),
  LinkedIn: (
    <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20v-6.3c0-3.1-1.65-4.55-3.85-4.55-1.77 0-2.56.98-3 1.66V8.5H10.3c.04.86 0 11.5 0 11.5h2.85v-6.42c0-.31.02-.62.11-.84.25-.62.82-1.26 1.77-1.26 1.25 0 1.75.95 1.75 2.34V20H20Z" />
  ),
  "Twitter / X": (
    <path d="M17.9 4h2.7l-5.9 6.7L21.6 20h-5.4l-4.2-5.5L7.1 20H4.4l6.3-7.2L4 4h5.5l3.8 5 4.6-5Zm-.95 14.4h1.5L8.1 5.5H6.5l10.45 12.9Z" />
  ),
  TikTok: (
    <path d="M15.5 3c.35 1.9 1.6 3.3 3.5 3.6v2.6c-1.3 0-2.5-.4-3.5-1.1v5.4c0 3-2.2 5.1-5 5.1a5 5 0 0 1-5-5c0-2.9 2.4-5.2 5.4-4.9v2.7c-.3-.1-.6-.1-.9-.1a2.3 2.3 0 0 0 0 4.6c1.3 0 2.3-1 2.3-2.4V3h2.7Z" />
  ),
};

export default function Footer() {
  const c = candidate.contact;
  const socials = [
    { label: "Facebook", href: c.facebook },
    { label: "Instagram", href: c.instagram },
    { label: "LinkedIn", href: c.linkedin },
    { label: "TikTok", href: (c as { tiktok?: string }).tiktok },
    { label: "Twitter / X", href: c.twitter },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href));

  const websiteLabel = c.website ? c.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";

  return (
    <footer className="mt-10 bg-brand-dark">
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
              For Governor of Oyo State
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
                    {websiteLabel}
                  </a>
                </li>
              )}
              {c.email && <li>{c.email}</li>}
              {c.phone && <li>{c.phone}</li>}
              {c.address && <li className="text-white/50">{c.address}</li>}
            </ul>
            {socials.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:border-gold hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 shrink-0 fill-current text-white/70 transition-colors group-hover:text-gold"
                      aria-hidden
                    >
                      {ICONS[s.label]}
                    </svg>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        <p>© {new Date().getFullYear()} {candidate.name} for {candidate.office}. All rights reserved.</p>
      </div>
    </footer>
  );
}
