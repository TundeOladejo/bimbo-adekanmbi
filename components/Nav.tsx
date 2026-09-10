import Link from "next/link";
import Image from "next/image";
import { candidate } from "@/content/candidate";

function initials(name: string) {
  const parts = name.replace(/^(Hon\.|Chief|Dr\.|Mr\.|Mrs\.)\s*/i, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-cloud/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-3">
          {candidate.photo ? (
            <Image
              src={candidate.photo}
              alt={candidate.name}
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-cover shadow-soft ring-1 ring-white/10"
            />
          ) : (
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white shadow-soft ring-1 ring-white/10">
              {initials(candidate.name)}
            </span>
          )}
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold text-brand-dark">{candidate.name}</span>
            {candidate.party && (
              <span className="mt-0.5 text-[11px] font-medium tracking-wide text-ink-500">
                {candidate.party}
              </span>
            )}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand/5 hover:text-brand sm:inline-block"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand/5 hover:text-brand sm:inline-block"
          >
            About
          </Link>
          <Link
            href="/chat"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-dark hover:shadow-lift"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Ask the AI
          </Link>
        </div>
      </nav>
    </header>
  );
}
