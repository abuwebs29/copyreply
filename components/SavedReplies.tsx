"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BookmarkX, Search } from "lucide-react";
import type { ReplyItem } from "@/lib/data";
import { getSavedSlugs, setSavedSlugs, trackEvent } from "@/lib/clientAnalytics";

export default function SavedReplies({ replies }: { replies: ReplyItem[] }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => setSaved(getSavedSlugs()), []);

  const items = useMemo(() => replies.filter((reply) => saved.includes(reply.slug) && `${reply.title} ${reply.description} ${reply.category}`.toLowerCase().includes(query.toLowerCase())), [replies, saved, query]);

  function remove(slug: string) {
    const next = saved.filter((item) => item !== slug);
    setSaved(next);
    setSavedSlugs(next);
    trackEvent("reply_unsaved", { reply_slug: slug, source: "saved_page" });
  }

  function clearAll() {
    setSaved([]);
    setSavedSlugs([]);
  }

  if (!saved.length) return <div className="empty saved-empty"><BookmarkX size={36}/><h2>No saved replies yet</h2><p>Use the “Save reply” button on any reply page to build your personal library.</p><Link className="button" href="/search">Find a reply</Link></div>;

  return <>
    <div className="saved-toolbar"><label className="saved-search"><Search size={18}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search saved replies"/></label><button className="actionbtn danger" type="button" onClick={clearAll}>Clear all</button></div>
    <div className="replygrid">{items.map((reply) => <article className="replycard saved-card" key={reply.slug}><span className="pill">{reply.category}</span><h3><Link href={`/reply/${reply.slug}`}>{reply.title}</Link></h3><p>{reply.description}</p><div className="saved-actions"><Link className="arrow" href={`/reply/${reply.slug}`}>Open reply →</Link><button className="textbutton" type="button" onClick={() => remove(reply.slug)}>Remove</button></div></article>)}</div>
    {!items.length && <div className="empty">No saved replies match “{query}”.</div>}
  </>;
}
