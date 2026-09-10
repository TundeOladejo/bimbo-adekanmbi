"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { candidate } from "@/content/candidate";

function initials(name: string) {
  const parts = name.replace(/^(Hon\.|Chief|Dr\.|Mr\.|Mrs\.)\s*/i, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-ink-900/5 bg-cloud/85 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-cloud/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-3">
          {candidate.photo ? (
            <Image
              src={candidate.photo}
              alt={candidate.name}
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-cover object-top shadow-soft ring-1 ring-white/10 transition-transform group-hover:scale-105"
            />
          ) : (
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white shadow-soft ring-1 ring-white/10">
              {initials(candidate.name)}
            </span>
          )}
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold text-brand-dark">
              {candidate.name}
            </span>
            <span className="mt-0.5 text-[11px] font-medium tracking-wide text-ink-500">
              for {candidate.office}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`hidden rounded-full px-4 py-2 text-sm font-medium transition-colors sm:inline-block ${
                  active
                    ? "bg-brand/5 text-brand"
                    : "text-ink-700 hover:bg-brand/5 hover:text-brand"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/chat"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-dark hover:shadow-lift"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform group-hover:scale-125" />
            Ask Bimbo
          </Link>
        </div>
      </nav>
    </header>
  );
}
