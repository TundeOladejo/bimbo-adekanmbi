import { knowledgeBase, type KnowledgeEntry } from "@/content/knowledge-base";

/**
 * Lightweight retrieval (the "R" in RAG).
 *
 * For a knowledge base of this size, a full vector database is overkill.
 * We use a simple keyword-overlap scoring function to rank topics by how
 * relevant they are to the user's question, then return the top matches.
 * This is fast, free, and runs entirely in-process.
 *
 * If the knowledge base grows very large, this can be swapped for embeddings
 * without changing the chat route's interface.
 */

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "is", "are", "was", "were", "be", "to",
  "of", "in", "on", "for", "with", "what", "who", "how", "when", "where", "why",
  "do", "does", "did", "can", "will", "would", "should", "his", "he", "him",
  "about", "tell", "me", "i", "you", "your", "this", "that", "please",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
}

function scoreEntry(queryTokens: string[], entry: KnowledgeEntry): number {
  const haystack = new Set([
    ...tokenize(entry.title),
    ...entry.tags.map((t) => t.toLowerCase()),
    ...tokenize(entry.content),
  ]);

  let score = 0;
  for (const token of queryTokens) {
    if (haystack.has(token)) score += 1;
    // Tag matches are weighted more heavily since tags are curated.
    if (entry.tags.some((t) => t.toLowerCase() === token)) score += 2;
    // Title matches are also strong signals.
    if (tokenize(entry.title).includes(token)) score += 1;
  }
  return score;
}

/**
 * Returns the most relevant knowledge entries for a question.
 * Falls back to the first few entries so the AI always has some grounding
 * (useful for greetings or very general questions).
 */
export function retrieve(query: string, topK = 4): KnowledgeEntry[] {
  const queryTokens = tokenize(query);

  const ranked = knowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(queryTokens, entry) }))
    .sort((a, b) => b.score - a.score);

  const hits = ranked.filter((r) => r.score > 0).slice(0, topK);

  if (hits.length === 0) {
    // No keyword match — return a general set so the AI can still respond.
    return knowledgeBase.slice(0, Math.min(topK, knowledgeBase.length));
  }

  return hits.map((h) => h.entry);
}

/** Formats retrieved entries into a context block for the AI prompt. */
export function buildContext(entries: KnowledgeEntry[]): string {
  return entries
    .map((e) => `### ${e.title}\n${e.content.replace(/\s+/g, " ").trim()}`)
    .join("\n\n");
}
