# Oyo State Campaign Website + AI Assistant

A campaign website for a political candidate in Oyo State, featuring an AI chatbot
that answers visitors' questions about the candidate. The chatbot uses **RAG**
(retrieval-augmented generation): it answers **only** from the information you
provide, which keeps answers accurate and stops the AI from inventing facts.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS**, and
**Anthropic Claude**. Supports questions in **English and Yoruba**.

---

## 1. Setup

Install dependencies:

```bash
npm install
```

Add your Anthropic API key. Copy the example env file and edit it:

```bash
cp .env.example .env.local
```

Then open `.env.local` and paste your key (get one at
https://console.anthropic.com/settings/keys):

```
ANTHROPIC_API_KEY=sk-ant-...your key...
```

## 2. Run it locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

- Home page: `/`
- About page: `/about`
- AI chat: `/chat`

## 3. Edit the content (no coding needed)

Two files control everything:

| File | What it controls |
| --- | --- |
| `content/candidate.ts` | The candidate's name, office, party, slogan, contact details, social links. |
| `content/knowledge-base.ts` | Everything the AI knows and answers from (bio, policies, achievements). |

Just change the text inside the quotes. To add a new topic for the AI, copy an
existing block in `knowledge-base.ts` and edit it. Save the file — the next time
you run or deploy, the changes take effect.

> **Important:** The placeholder content is fictional. Replace it with the real
> candidate's verified information before publishing.

## 4. Deploy (free tier available)

The easiest option is [Vercel](https://vercel.com):

1. Push this project to GitHub.
2. Import the repo on Vercel.
3. Add the `ANTHROPIC_API_KEY` environment variable in the Vercel project settings.
4. Deploy.

## How the AI works

1. When a visitor asks a question, `lib/retrieval.ts` finds the most relevant
   topics from `content/knowledge-base.ts`.
2. Those topics are sent to Claude as trusted context (via the `system` prompt)
   along with strict instructions to answer only from that context.
3. The answer is streamed back to the chat window.

This means the AI stays grounded in your facts. If something isn't in the
knowledge base, the assistant will say it doesn't have that detail rather than
guessing.

## Cost note

Anthropic charges per use. The default model is `claude-sonnet-5`. You can change
the model via the `ANTHROPIC_MODEL` env variable (for example, a smaller Haiku
model for lower cost on high traffic).
