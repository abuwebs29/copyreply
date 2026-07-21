import type { ReplyItem } from "./data";

export type SearchFilters = {
  category?: string;
  tone?: string;
  length?: "short" | "medium" | "long" | "";
};

const SYNONYMS: Record<string, string[]> = {
  "quit job": ["resignation", "leave job", "notice"],
  resign: ["resignation", "quit job", "notice"],
  "money back": ["refund", "return payment"],
  refund: ["money back", "reimbursement"],
  "no response": ["follow up", "follow-up", "reminder"],
  ghosted: ["no response", "follow up"],
  "say no": ["decline", "reject politely"],
  sorry: ["apology", "apologize"],
  boss: ["manager", "supervisor"],
  coworker: ["colleague", "teammate"],
  customer: ["client", "buyer"],
  booking: ["reservation", "appointment"],
  late: ["delay", "overdue"],
  thanks: ["thank you", "appreciation"],
  interview: ["recruiter", "job interview"],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const temp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = temp;
    }
  }
  return row[b.length];
}

export function expandQuery(query: string) {
  const normalized = normalize(query);
  const expanded = new Set([normalized]);
  for (const [key, values] of Object.entries(SYNONYMS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      values.forEach((value) => expanded.add(normalize(value)));
    }
  }
  return Array.from(expanded).filter(Boolean);
}

function scoreText(text: string, query: string, weight: number) {
  if (!query) return 0;
  const normalized = normalize(text);
  if (normalized === query) return weight * 12;
  if (normalized.startsWith(query)) return weight * 8;
  if (normalized.includes(query)) return weight * 5;

  const queryWords = query.split(" ");
  const textWords = normalized.split(" ");
  let score = 0;
  for (const q of queryWords) {
    if (textWords.includes(q)) score += weight * 2;
    else if (q.length >= 4 && textWords.some((word) => levenshtein(q, word) <= 1)) score += weight;
  }
  return score;
}

export function searchReplies(items: ReplyItem[], query: string, filters: SearchFilters = {}) {
  const expanded = expandQuery(query);
  const hasQuery = expanded.length > 0;

  return items
    .map((item) => {
      let score = hasQuery ? 0 : 1;
      for (const term of expanded) {
        score += scoreText(item.title, term, 7);
        score += scoreText(item.description, term, 4);
        score += scoreText(item.category, term, 3);
        score += scoreText(item.keywords.join(" "), term, 5);
        score += scoreText(item.variants.map((variant) => `${variant.label} ${variant.text}`).join(" "), term, 1);
      }
      return { item, score };
    })
    .filter(({ item, score }) => {
      if (hasQuery && score <= 0) return false;
      if (filters.category && item.categorySlug !== filters.category) return false;
      if (filters.tone && !item.variants.some((variant) => normalize(variant.label).includes(normalize(filters.tone || "")))) return false;
      if (filters.length) {
        const average = item.variants.reduce((sum, variant) => sum + variant.text.length, 0) / Math.max(item.variants.length, 1);
        if (filters.length === "short" && average > 170) return false;
        if (filters.length === "medium" && (average <= 100 || average > 260)) return false;
        if (filters.length === "long" && average <= 200) return false;
      }
      return true;
    })
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
}

export function getSuggestions(items: ReplyItem[], query: string, limit = 7) {
  if (!query.trim()) return [];
  return searchReplies(items, query)
    .slice(0, limit)
    .map(({ item }) => item);
}

export const trendingSearches = [
  "interview invitation",
  "refund request",
  "no response follow up",
  "decline politely",
  "salary expectations",
  "customer complaint",
];
