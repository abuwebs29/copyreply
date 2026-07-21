"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReplyItem } from "@/lib/data";
import { searchReplies, trendingSearches } from "@/lib/search";
import SearchAutocomplete from "./SearchAutocomplete";
import { trackEvent } from "@/lib/clientAnalytics";

const tones = ["Professional", "Friendly", "Warm", "Short", "Firm", "Polite", "Confident", "Empathetic"];

export default function SearchExperience({ replies, categories, initialQuery }: { replies: ReplyItem[]; categories: ReadonlyArray<{ slug: string; name: string }>; initialQuery: string }) {
  const [category, setCategory] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState<"" | "short" | "medium" | "long">("");
  const [visible, setVisible] = useState(24);
  const ranked = useMemo(() => searchReplies(replies, initialQuery, { category, tone, length }), [replies, initialQuery, category, tone, length]);
  const results = ranked.slice(0, visible);
  const clearFilters = () => { setCategory(""); setTone(""); setLength(""); setVisible(24); };

  return <>
    <section className="pagehero"><div className="container"><h1>Search replies</h1><p>Smart matching for situations, people, tone, and intent—even when the wording is different.</p><SearchAutocomplete replies={replies} initialQuery={initialQuery}/></div></section>
    <section className="section"><div className="container search-layout">
      <aside className="search-filters" aria-label="Search filters">
        <div className="filter-head"><h2>Filters</h2><button type="button" onClick={clearFilters}>Clear</button></div>
        <label>Category<select value={category} onChange={(event) => { setCategory(event.target.value); setVisible(24); }}><option value="">All categories</option>{categories.map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select></label>
        <label>Tone<select value={tone} onChange={(event) => { setTone(event.target.value); setVisible(24); }}><option value="">Any tone</option>{tones.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Average length<select value={length} onChange={(event) => { setLength(event.target.value as typeof length); setVisible(24); }}><option value="">Any length</option><option value="short">Short</option><option value="medium">Medium</option><option value="long">Long</option></select></label>
      </aside>
      <div className="search-results">
        <div className="sectionhead"><div><h2>{initialQuery ? `${ranked.length} result${ranked.length === 1 ? "" : "s"} for “${initialQuery}”` : "Browse all replies"}</h2><p>Results are ranked by title, keywords, category, reply text, synonyms, and typo similarity.</p></div></div>
        {results.length ? <><div className="replygrid">{results.map(({ item }) => <Link className="replycard" href={`/reply/${item.slug}`} key={item.slug} onClick={() => trackEvent("search_result_clicked", { search_term: initialQuery, reply_slug: item.slug })}><span className="pill">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><div className="result-meta"><span>{item.variants.length} reply options</span><span>View replies →</span></div></Link>)}</div>{visible < ranked.length && <button className="button load-more" type="button" onClick={() => setVisible((value) => value + 24)}>Load more results</button>}</> : <div className="empty"><h3>No exact reply found</h3><p>Try a broader phrase or one of these popular searches.</p><div className="search-trends centered">{trendingSearches.map((term) => <Link href={`/search?q=${encodeURIComponent(term)}`} key={term}>{term}</Link>)}</div><Link className="button" href="/studio">Create it in Reply Studio</Link></div>}
      </div>
    </div></section>
  </>;
}
