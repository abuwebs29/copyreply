"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";

export default function ReplyActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("copyreply-saved") || "[]") as string[];
    setSaved(current.includes(slug));
  }, [slug]);
  function toggleSaved() {
    const current = JSON.parse(localStorage.getItem("copyreply-saved") || "[]") as string[];
    const next = current.includes(slug) ? current.filter((x) => x !== slug) : [...current, slug];
    localStorage.setItem("copyreply-saved", JSON.stringify(next));
    setSaved(next.includes(slug));
  }
  async function share() {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title, url });
    else await navigator.clipboard.writeText(url);
    setShared(true);
    window.setTimeout(() => setShared(false), 1800);
  }
  return <div className="replyactions">
    <button type="button" className="actionbtn" onClick={toggleSaved}>{saved ? <BookmarkCheck size={18}/> : <Bookmark size={18}/>} {saved ? "Saved" : "Save reply"}</button>
    <button type="button" className="actionbtn" onClick={share}><Share2 size={18}/> {shared ? "Link copied" : "Share"}</button>
  </div>;
}
