import SearchExperience from "@/components/SearchExperience";
import { categories, replies } from "@/lib/data";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <SearchExperience replies={replies} categories={categories} initialQuery={q.trim()} />;
}
