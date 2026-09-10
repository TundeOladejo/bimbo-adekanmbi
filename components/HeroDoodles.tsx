/**
 * HeroDoodles — faint, hand-drawn style line icons scattered across the hero
 * background. Each doodle reflects a campaign theme (voting, agriculture,
 * roads, healthcare, education, growth, dialogue). Purely decorative.
 *
 * The icons use a slightly rough, sketchy stroke and gentle rotations so they
 * read as hand-drawn doodles rather than a clean icon set. They sit at low
 * opacity behind the content and gently float.
 */

type DoodleProps = {
  className?: string;
  /** floating animation delay in seconds */
  delay?: number;
};

function Doodle({
  className = "",
  delay = 0,
  children,
}: DoodleProps & { children: React.ReactNode }) {
  return (
    <span
      className={`absolute animate-float text-brand/[0.07] ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}

/* Shared sketchy stroke look */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---- individual doodles (loose, hand-drawn line art) ---- */

function VoteBox({ size = 88 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      {/* ballot box */}
      <path d="M8 30c-1 6 0 18 1 20s10 3 22 3 22-1 23-3 1-15 0-20" />
      <path d="M9 30c2-3 8-4 23-4s21 1 23 4c-2 3-9 4-23 4S11 33 9 30Z" />
      {/* slot */}
      <path d="M25 30h14" />
      {/* ballot going in with a check */}
      <path d="M26 8l14-2 3 18-14 2z" transform="rotate(-6 33 17)" />
      <path d="M30 15l3 3 6-6" transform="rotate(-6 33 17)" />
    </svg>
  );
}

function Leaf({ size = 66 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M14 50C10 30 30 12 52 12c2 20-14 40-38 38Z" />
      <path d="M20 46C30 34 38 26 48 20" />
      <path d="M32 40l-8-2M38 32l-7-3M42 24l-6-3" />
    </svg>
  );
}

function Road({ size = 92 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M22 56 28 10M42 56 36 10" />
      <path d="M32 16v6M32 28v6M32 40v6M32 50v4" strokeDasharray="0.1 9" />
    </svg>
  );
}

function Building({ size = 78 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M12 56V22l14-8 14 8v34" />
      <path d="M40 56V30h12v26" />
      <path d="M6 56h52" />
      <path d="M19 30h4M29 30h4M19 40h4M29 40h4M45 38h3M45 46h3" />
    </svg>
  );
}

function Chat({ size = 70 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M10 14c0-3 3-5 8-5h28c5 0 8 2 8 5v20c0 3-3 5-8 5H26l-12 9 1-9c-3-1-5-2-5-5z" />
      <path d="M22 21h20M22 29h13" />
    </svg>
  );
}

function Health({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M26 8h12v18h18v12H38v18H26V38H8V26h18z" />
    </svg>
  );
}

function Book({ size = 74 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M32 16C24 10 12 10 8 12v38c4-2 16-2 24 4 8-6 20-6 24-4V12c-4-2-16-2-24 4Z" />
      <path d="M32 16v40" />
    </svg>
  );
}

function Growth({ size = 76 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M10 52h44" />
      <path d="M14 52l12-16 10 8 16-24" />
      <path d="M46 20h8v8" />
    </svg>
  );
}

function Star({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M32 8l7 16 17 2-12 12 3 17-15-8-15 8 3-17-12-12 17-2z" />
    </svg>
  );
}

function Handshake({ size = 82 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" {...stroke} aria-hidden>
      <path d="M6 24l10-4 10 6 12-2" />
      <path d="M58 24l-10-4-8 4" />
      <path d="M26 26l8 8c2 2 5 2 7 0M40 24l8 8" />
      <path d="M34 34l-4 4c-2 2-5 2-7 0s-2-5 0-7l6-6" />
    </svg>
  );
}

export default function HeroDoodles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* left / upper cluster */}
      <Doodle className="left-[3%] top-[14%] rotate-[-8deg]" delay={0}>
        <VoteBox />
      </Doodle>
      <Doodle className="left-[16%] top-[64%] rotate-[10deg]" delay={1.2}>
        <Leaf />
      </Doodle>
      <Doodle className="left-[30%] top-[8%] rotate-[6deg] hidden sm:inline" delay={2.4}>
        <Book />
      </Doodle>
      <Doodle className="left-[40%] top-[78%] rotate-[-6deg] hidden lg:inline" delay={0.6}>
        <Health />
      </Doodle>

      {/* center-ish, only on wide screens so it stays clear of the text */}
      <Doodle className="left-[52%] top-[18%] rotate-[-10deg] hidden xl:inline" delay={1.8}>
        <Star />
      </Doodle>

      {/* right side — around and behind the portrait */}
      <Doodle className="right-[4%] top-[10%] rotate-[8deg]" delay={0.9}>
        <Chat />
      </Doodle>
      <Doodle className="right-[3%] top-[46%] rotate-[-6deg] hidden sm:inline" delay={2.1}>
        <Growth />
      </Doodle>
      <Doodle className="right-[16%] bottom-[6%] rotate-[6deg] hidden lg:inline" delay={1.5}>
        <Road />
      </Doodle>
      <Doodle className="right-[24%] top-[6%] rotate-[-12deg] hidden xl:inline" delay={3}>
        <Building />
      </Doodle>
      <Doodle className="left-[8%] bottom-[8%] rotate-[4deg] hidden lg:inline" delay={2.7}>
        <Handshake />
      </Doodle>
    </div>
  );
}
