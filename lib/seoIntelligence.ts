import { replies, type ReplyItem } from "@/lib/data";
import { guides } from "@/lib/guides";
import { buildLinkHealth } from "@/lib/linking";

export type SeoAuditRow = {
  slug: string;
  title: string;
  category: string;
  overall: number;
  seo: number;
  content: number;
  linking: number;
  conversion: number;
  issues: string[];
};

function clamp(value: number) { return Math.max(0, Math.min(100, Math.round(value))); }
function words(value: string) { return value.trim().split(/\s+/).filter(Boolean).length; }

export function auditReply(reply: ReplyItem, linkScore: number): SeoAuditRow {
  const issues: string[] = [];
  const titleLength = reply.title.length;
  const descriptionLength = reply.description.length;
  const keywordCount = new Set(reply.keywords.map((keyword) => keyword.toLowerCase())).size;
  const variantCount = reply.variants.length;
  const avgVariantWords = variantCount ? reply.variants.reduce((sum, variant) => sum + words(variant.text), 0) / variantCount : 0;

  let seo = 100;
  if (titleLength < 24 || titleLength > 64) { seo -= 18; issues.push("Title length needs review"); }
  if (descriptionLength < 70 || descriptionLength > 165) { seo -= 18; issues.push("Meta description length needs review"); }
  if (keywordCount < 3) { seo -= 16; issues.push("Add more search-intent keywords"); }
  if (!reply.slug.includes("reply") && !reply.slug.includes("respond")) seo -= 5;

  let content = 100;
  if (variantCount < 3) { content -= 30; issues.push("Add at least three reply variants"); }
  if (avgVariantWords < 12) { content -= 22; issues.push("Reply examples may be too thin"); }
  if (reply.description.toLowerCase().startsWith("useful") || reply.description.toLowerCase().startsWith("ready")) content -= 8;
  if (new Set(reply.variants.map((variant) => variant.label.toLowerCase())).size !== variantCount) { content -= 15; issues.push("Duplicate variant labels detected"); }

  const linking = clamp(linkScore);
  if (linking < 70) issues.push("Strengthen internal links and journey coverage");

  let conversion = 100;
  if (!reply.variants.some((variant) => /professional|formal|short|warm|friendly/i.test(variant.label))) conversion -= 18;
  if (!reply.variants.some((variant) => /\[.+?\]/.test(variant.text))) conversion -= 10;
  if (avgVariantWords > 85) { conversion -= 12; issues.push("Examples may be too long for quick copying"); }

  const overall = clamp(seo * 0.32 + content * 0.30 + linking * 0.23 + conversion * 0.15);
  return { slug: reply.slug, title: reply.title, category: reply.category, overall, seo: clamp(seo), content: clamp(content), linking, conversion: clamp(conversion), issues };
}

export function buildSeoAudit(): SeoAuditRow[] {
  const linkRows = new Map(buildLinkHealth(replies, guides).map((row) => [row.slug, row.score]));
  return replies.map((reply) => auditReply(reply, linkRows.get(reply.slug) || 0)).sort((a, b) => a.overall - b.overall);
}

export function getStaticOpportunities() {
  const audit = buildSeoAudit();
  const weak = audit.filter((row) => row.overall < 75);
  const categories = new Map<string, { pages: number; score: number }>();
  for (const row of audit) {
    const current = categories.get(row.category) || { pages: 0, score: 0 };
    categories.set(row.category, { pages: current.pages + 1, score: current.score + row.overall });
  }
  return {
    totalPages: audit.length,
    averageScore: clamp(audit.reduce((sum, row) => sum + row.overall, 0) / Math.max(audit.length, 1)),
    weakPages: weak.length,
    criticalPages: audit.filter((row) => row.overall < 60).length,
    categoryScores: [...categories.entries()].map(([name, data]) => ({ name, pages: data.pages, score: clamp(data.score / data.pages) })).sort((a, b) => a.score - b.score),
  };
}
