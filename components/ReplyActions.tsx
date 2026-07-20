"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { getSavedSlugs, setSavedSlugs, trackEvent } from "@/lib/clientAnalytics";

export default function ReplyActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => setSaved(getSavedSlugs().includes(slug)), [slug]);

  function toggleSaved() {
    const current = getSavedSlugs();
    const willSave = !current.includes(slug);
    const next = willSave ? [...current, slug] : current.filter((item) => item !== slug);
    setSavedSlugs(next);
    setSaved(willSave);
    trackEvent(willSave ? "reply_saved" : "reply_unsaved", { reply_slug: slug, reply_title: title });
  }

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title, url });
      else await navigator.clipboard.writeText(url);
      trackEvent("reply_shared", { reply_slug: slug, reply_title: title });
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch {
      // Native share was dismissed; no success state is shown.
    }
  }

  return <div className="replyactions"><button type="button" className="actionbtn" onClick={toggleSaved}>{saved ? <BookmarkCheck size={18}/> : <Bookmark size={18}/>} {saved ? "Saved" : "Save reply"}</button><button type="button" className="actionbtn" onClick={share}><Share2 size={18}/> {shared ? "Link copied" : "Share"}</button></div>;
}
