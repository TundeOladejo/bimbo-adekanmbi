import Chat from "@/components/Chat";
import { candidate } from "@/content/candidate";

export const metadata = {
  title: `Talk with ${candidate.name}`,
};

export default async function ChatPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const initialQuestion = typeof q === "string" ? q.slice(0, 300) : undefined;

  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
      <div className="mb-8 text-center">
        <span className="eyebrow justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> A direct conversation
        </span>
        <h1 className="font-display mt-3 text-[1.75rem] font-semibold tracking-tight text-brand-dark sm:text-4xl">
          Talk with {candidate.shortName}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-500">
          Ask me about my record, my plans for Oyo State, or whatever is on your mind. I&apos;ll
          answer you directly — in English or Yoruba.
        </p>
      </div>

      <Chat initialQuestion={initialQuestion} />

      <p className="mt-4 text-center text-xs text-ink-300">
        This conversation is powered by AI and speaks on {candidate.shortName}&apos;s behalf using his
        published record and positions. Where something isn&apos;t settled yet, it&apos;ll say so. For
        official enquiries, please contact the campaign.
      </p>
    </section>
  );
}
