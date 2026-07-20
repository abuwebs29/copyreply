export type CopyReplyEventName =
  | "reply_copied"
  | "reply_saved"
  | "reply_unsaved"
  | "reply_shared"
  | "search_submitted"
  | "studio_reply_copied";

const COUNTS_KEY = "copyreply-copy-counts";
const RECENT_KEY = "copyreply-recently-copied";
const SAVED_KEY = "copyreply-saved";
const MAX_RECENT = 12;

function safeParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function trackEvent(name: CopyReplyEventName, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", name, params);
}

export function getSavedSlugs(): string[] {
  if (typeof window === "undefined") return [];
  return safeParse<string[]>(localStorage.getItem(SAVED_KEY), []);
}

export function setSavedSlugs(slugs: string[]) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(Array.from(new Set(slugs))));
  window.dispatchEvent(new CustomEvent("copyreply:saved-change"));
}

export function recordReplyCopy(slug: string, title: string, variant: string) {
  if (typeof window === "undefined") return;
  const counts = safeParse<Record<string, number>>(localStorage.getItem(COUNTS_KEY), {});
  counts[slug] = (counts[slug] || 0) + 1;
  localStorage.setItem(COUNTS_KEY, JSON.stringify(counts));

  const recent = safeParse<Array<{ slug: string; title: string; variant: string; copiedAt: number }>>(
    localStorage.getItem(RECENT_KEY),
    []
  );
  const next = [
    { slug, title, variant, copiedAt: Date.now() },
    ...recent.filter((item) => item.slug !== slug),
  ].slice(0, MAX_RECENT);
  localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("copyreply:copy-change"));
  trackEvent("reply_copied", { reply_slug: slug, reply_title: title, variant });
}

export function getCopyCounts(): Record<string, number> {
  if (typeof window === "undefined") return {};
  return safeParse<Record<string, number>>(localStorage.getItem(COUNTS_KEY), {});
}

export function getRecentlyCopied() {
  if (typeof window === "undefined") return [];
  return safeParse<Array<{ slug: string; title: string; variant: string; copiedAt: number }>>(
    localStorage.getItem(RECENT_KEY),
    []
  );
}
