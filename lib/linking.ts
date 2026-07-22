import type { ReplyItem } from "./data";
import type { Guide } from "./guides";

export type JourneyDefinition = {
  slug: string;
  name: string;
  description: string;
  stageQueries: string[];
};

export type JourneyStep = {
  slug: string;
  title: string;
  index: number;
};

export type ResolvedJourney = Omit<JourneyDefinition, "stageQueries"> & {
  steps: JourneyStep[];
};

export type LinkHealthRow = {
  slug: string;
  title: string;
  category: string;
  incoming: number;
  outgoing: number;
  guideLinks: number;
  journeyLinks: number;
  score: number;
  issues: string[];
};

export const journeyDefinitions: JourneyDefinition[] = [
  {
    slug: "job-search",
    name: "Job Search Journey",
    description: "Move from application and interview communication to negotiation and acceptance.",
    stageQueries: ["job application", "interview invitation", "interview confirmation", "interview thank you", "salary negotiation", "job offer acceptance"],
  },
  {
    slug: "customer-support",
    name: "Customer Support Journey",
    description: "Turn a complaint into a clear resolution and thoughtful follow-up.",
    stageQueries: ["customer complaint", "apology customer", "support resolution", "customer follow up", "feedback request"],
  },
  {
    slug: "sales-pipeline",
    name: "Sales Pipeline Journey",
    description: "Guide prospects from first contact through proposal, follow-up, negotiation, and close.",
    stageQueries: ["sales introduction", "proposal", "sales follow up", "price negotiation", "close sale", "client thank you"],
  },
  {
    slug: "employee-lifecycle",
    name: "Employee Lifecycle Journey",
    description: "Handle key workplace moments from onboarding through growth and departure.",
    stageQueries: ["employee welcome", "first day", "performance feedback", "promotion", "leave request", "resignation"],
  },
  {
    slug: "client-onboarding",
    name: "Client Onboarding Journey",
    description: "Create a smooth path from inquiry to kickoff, delivery, payment, and follow-up.",
    stageQueries: ["client inquiry", "proposal client", "client onboarding", "project kickoff", "project delivery", "client payment", "client feedback"],
  },
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const tokens = (value: string) => new Set(normalize(value).split(/\s+/).filter((token) => token.length > 2));

function overlapScore(a: string, b: string) {
  const left = tokens(a);
  const right = tokens(b);
  let score = 0;
  left.forEach((token) => {
    if (right.has(token)) score += token.length > 7 ? 3 : 2;
  });
  return score;
}

function replyText(reply: ReplyItem) {
  return `${reply.title} ${reply.description} ${reply.category} ${reply.keywords.join(" ")}`;
}

export function similarityScore(source: ReplyItem, candidate: ReplyItem) {
  if (source.slug === candidate.slug) return -1;
  let score = 0;
  if (source.categorySlug === candidate.categorySlug) score += 12;
  score += overlapScore(replyText(source), replyText(candidate));
  score += overlapScore(source.keywords.join(" "), candidate.keywords.join(" ")) * 2;
  if (source.title.includes("Interview") && candidate.title.includes("Interview")) score += 5;
  if (source.title.includes("Customer") && candidate.title.includes("Customer")) score += 4;
  return score;
}

export function getRelatedReplies(reply: ReplyItem, allReplies: ReplyItem[], limit = 8) {
  return allReplies
    .filter((candidate) => candidate.slug !== reply.slug)
    .map((candidate) => ({ candidate, score: similarityScore(reply, candidate) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

function bestMatch(query: string, replies: ReplyItem[], used: Set<string>) {
  const ranked = replies
    .filter((reply) => !used.has(reply.slug))
    .map((reply) => ({ reply, score: overlapScore(query, replyText(reply)) + (normalize(reply.title).includes(normalize(query)) ? 20 : 0) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 1 ? ranked[0].reply : undefined;
}

export function resolveJourneys(replies: ReplyItem[]): ResolvedJourney[] {
  return journeyDefinitions.map((journey) => {
    const used = new Set<string>();
    const steps = journey.stageQueries.flatMap((query) => {
      const match = bestMatch(query, replies, used);
      if (!match) return [];
      used.add(match.slug);
      return [{ slug: match.slug, title: match.title, index: used.size - 1 }];
    });
    return { slug: journey.slug, name: journey.name, description: journey.description, steps };
  }).filter((journey) => journey.steps.length >= 3);
}

export function getJourneyContext(slug: string, replies: ReplyItem[]) {
  const journeys = resolveJourneys(replies);
  const journey = journeys.find((item) => item.steps.some((step) => step.slug === slug));
  if (!journey) return undefined;
  const index = journey.steps.findIndex((step) => step.slug === slug);
  return {
    journey,
    current: journey.steps[index],
    previous: index > 0 ? journey.steps[index - 1] : undefined,
    next: index < journey.steps.length - 1 ? journey.steps[index + 1] : undefined,
  };
}

export function getRelatedGuides(reply: ReplyItem, guides: Guide[], limit = 3) {
  return guides
    .map((guide) => ({
      guide,
      score: (guide.categorySlug === reply.categorySlug ? 12 : 0) + overlapScore(replyText(reply), `${guide.title} ${guide.description} ${guide.intro}`),
    }))
    .filter((entry) => entry.score > 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.guide);
}

export function buildLinkHealth(replies: ReplyItem[], guides: Guide[]): LinkHealthRow[] {
  const outgoingMap = new Map<string, string[]>();
  const incomingMap = new Map<string, number>();
  const journeys = resolveJourneys(replies);

  replies.forEach((reply) => {
    const related = getRelatedReplies(reply, replies, 8).map((item) => item.slug);
    outgoingMap.set(reply.slug, related);
    related.forEach((slug) => incomingMap.set(slug, (incomingMap.get(slug) || 0) + 1));
  });

  return replies.map((reply) => {
    const outgoing = outgoingMap.get(reply.slug)?.length || 0;
    const incoming = incomingMap.get(reply.slug) || 0;
    const guideLinks = getRelatedGuides(reply, guides, 3).length;
    const journeyLinks = journeys.some((journey) => journey.steps.some((step) => step.slug === reply.slug)) ? 2 : 0;
    const issues: string[] = [];
    if (incoming === 0) issues.push("No incoming smart links");
    if (outgoing < 4) issues.push("Few related replies");
    if (guideLinks === 0) issues.push("No related guide");
    if (journeyLinks === 0) issues.push("Not included in a journey");
    const score = Math.min(100, incoming * 6 + outgoing * 5 + guideLinks * 8 + journeyLinks * 10 + 20);
    return { slug: reply.slug, title: reply.title, category: reply.category, incoming, outgoing, guideLinks, journeyLinks, score, issues };
  }).sort((a, b) => a.score - b.score || a.title.localeCompare(b.title));
}
