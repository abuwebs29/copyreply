import type { Metadata } from "next";
import SearchIntelligenceDashboard from "@/components/SearchIntelligenceDashboard";

export const metadata: Metadata = {
  title: "Search Intelligence & SEO Optimizer",
  description: "Private CopyReply search intelligence, content opportunity, and SEO quality dashboard.",
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function SearchIntelligencePage() {
  return <SearchIntelligenceDashboard />;
}
