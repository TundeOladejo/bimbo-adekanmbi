import Anthropic from "@anthropic-ai/sdk";

/**
 * Shared Anthropic (Claude) client. Reads the API key from the
 * ANTHROPIC_API_KEY environment variable (set in .env.local — never commit
 * real keys).
 */
let client: Anthropic | null = null;

export function getAnthropic(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      "ANTHROPIC_API_KEY is not set. Copy .env.example to .env.local and add your key."
    );
  }
  if (!client) {
    // If an org/admin key is used, Anthropic requires a workspace id header.
    // Set ANTHROPIC_WORKSPACE_ID in .env.local to use one. With a
    // workspace-scoped key this is not needed and can be left unset.
    const workspaceId = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      ...(workspaceId
        ? { defaultHeaders: { "anthropic-workspace-id": workspaceId } }
        : {}),
    });
  }
  return client;
}

/** Claude model to use. Override with the ANTHROPIC_MODEL env variable. */
export const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

/** Max tokens for a single reply. */
export const MAX_TOKENS = 700;
