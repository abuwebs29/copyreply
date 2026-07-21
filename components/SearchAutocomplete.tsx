"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { ReplyItem } from "@/lib/data";
import { getSuggestions, trendingSearches } from "@/lib/search";
import { trackEvent } from "@/lib/clientAnalytics";

export default function SearchAutocomplete({ replies, initialQuery = "", compact = false }: { replies: ReplyItem[]; initialQuery?: string; compact?: boolean }) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const suggestions = useMemo(() => getSuggestions(replies, query), [replies, query]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const submit = (value = query) => {
    const next = value.trim();
    if (!next) return;
    localStorage.setItem("copyreply-last-search", next);
    trackEvent("search_submitted", { search_term: next });
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(next)}`);
  };

  return <div className={`search-autocomplete ${compact ? "is-compact" : ""}`} ref={wrapperRef}>
    <form className="searchbox" onSubmit={(event) => { event.preventDefault(); submit(); }}>
      <input
        aria-label="Search replies"
        aria-expanded={open}
        aria-controls="search-suggestions"
        autoComplete="off"
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(event) => { setQuery(event.target.value); setOpen(true); setActiveIndex(-1); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((current) => Math.min(current + 1, suggestions.length - 1)); }
          if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((current) => Math.max(current - 1, -1)); }
          if (event.key === "Escape") setOpen(false);
          if (event.key === "Enter" && activeIndex >= 0) { event.preventDefault(); router.push(`/reply/${suggestions[activeIndex].slug}`); }
        }}
        placeholder="What do you need to reply to?"
      />
      <button className="button">Search replies</button>
    </form>
    {open && <div className="search-popover" id="search-suggestions" role="listbox">
      {query.trim() ? <>
        <div className="search-popover-label">Best matches</div>
        {suggestions.length ? suggestions.map((item, index) => <Link
          className={`search-suggestion ${index === activeIndex ? "is-active" : ""}`}
          href={`/reply/${item.slug}`}
          key={item.slug}
          role="option"
          aria-selected={index === activeIndex}
          onClick={() => trackEvent("search_result_clicked", { search_term: query, reply_slug: item.slug })}
        ><span><strong>{item.title}</strong><small>{item.category}</small></span><span>→</span></Link>) : <button className="search-query-button" type="button" onClick={() => submit()}>Search for “{query}”</button>}
      </> : <>
        <div className="search-popover-label">Trending searches</div>
        <div className="search-trends">{trendingSearches.map((term) => <button type="button" key={term} onClick={() => { setQuery(term); submit(term); }}>{term}</button>)}</div>
      </>}
    </div>}
  </div>;
}
