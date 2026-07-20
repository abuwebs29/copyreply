"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Clock3, Flame, Bookmark } from "lucide-react";
import type { ReplyItem } from "@/lib/data";
import { getCopyCounts, getRecentlyCopied, getSavedSlugs } from "@/lib/clientAnalytics";

export default function HomeDiscovery({ replies }: { replies: ReplyItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const refresh = () => {
      setCounts(getCopyCounts());
      setRecentSlugs(getRecentlyCopied().map((item) => item.slug));
      setSavedCount(getSavedSlugs().length);
    };
    refresh();
    window.addEventListener("copyreply:copy-change", refresh);
    window.addEventListener("copyreply:saved-change", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("copyreply:copy-change", refresh);
      window.removeEventListener("copyreply:saved-change", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const popular = useMemo(() => {
    const ranked = replies
      .filter((reply) => (counts[reply.slug] || 0) > 0)
      .sort((a, b) => (counts[b.slug] || 0) - (counts[a.slug] || 0));
    return (ranked.length ? ranked : replies.slice(0, 6)).slice(0, 6);
  }, [counts, replies]);

  const recent = useMemo(
    () => recentSlugs.map((slug) => replies.find((reply) => reply.slug === slug)).filter(Boolean).slice(0, 4) as ReplyItem[],
    [recentSlugs, replies]
  );

  return (
    <>
      <section className="section discovery-section">
        <div className="container">
          <div className="sectionhead">
            <div><h2><Flame size={28}/> Popular for you</h2><p>Based on replies copied in this browser. Your activity stays on your device.</p></div>
            <Link className="arrow" href="/search">Browse all →</Link>
          </div>
          <div className="replygrid">
            {popular.map((reply) => (
              <Link className="replycard" href={`/reply/${reply.slug}`} key={reply.slug}>
                <div className="cardmeta"><span className="pill">{reply.category}</span>{counts[reply.slug] ? <span>{counts[reply.slug]} copies</span> : null}</div>
                <h3>{reply.title}</h3><p>{reply.description}</p><span className="arrow">View replies →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section personal-dashboard">
        <div className="container dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-icon"><Bookmark size={22}/></div>
            <div><span className="dashboard-number">{savedCount}</span><h3>Saved replies</h3><p>Keep useful templates together and return to them anytime on this device.</p><Link className="arrow" href="/saved">Open saved replies →</Link></div>
          </div>
          <div className="dashboard-card recent-card">
            <div className="dashboard-icon"><Clock3 size={22}/></div>
            <div className="dashboard-content"><h3>Recently copied</h3>{recent.length ? <div className="recent-links">{recent.map((reply) => <Link href={`/reply/${reply.slug}`} key={reply.slug}>{reply.title}</Link>)}</div> : <p>Copied replies will appear here for quick access.</p>}</div>
          </div>
        </div>
      </section>
    </>
  );
}
