"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Activity, BarChart3, Copy, Download, Search, Share2, Sparkles } from "lucide-react";
import { getAnalyticsEvents, clearAnalyticsEvents, type StoredAnalyticsEvent } from "@/lib/clientAnalytics";

function countBy(events: StoredAnalyticsEvent[], key: string) {
  const counts = new Map<string, number>();
  for (const event of events) {
    const value = event.params[key];
    if (typeof value === "string" && value.trim()) counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

export default function GrowthDashboard() {
  const [events, setEvents] = useState<StoredAnalyticsEvent[]>([]);

  useEffect(() => {
    setEvents(getAnalyticsEvents());
  }, []);

  const stats = useMemo(() => {
    const count = (name: string) => events.filter((event) => event.name === name).length;
    return {
      searches: count("search_submitted"),
      copies: count("reply_copied") + count("studio_reply_copied"),
      shares: count("reply_shared") + count("studio_shared"),
      exports: count("studio_exported"),
      studio: events.filter((event) => event.name.startsWith("studio_")).length,
    };
  }, [events]);

  const topSearches = useMemo(() => countBy(events.filter((event) => event.name === "search_submitted"), "query").slice(0, 8), [events]);
  const topReplies = useMemo(() => countBy(events.filter((event) => event.name === "reply_copied" || event.name === "studio_reply_copied"), "reply_title").slice(0, 8), [events]);
  const recent = events.slice(0, 12);

  function clearData() {
    clearAnalyticsEvents();
    setEvents([]);
  }

  return (
    <div className="container admin-dashboard">
      <section className="pagehero admin-hero">
        <span className="eyebrow"><BarChart3 size={16} /> Growth Dashboard</span>
        <h1>CopyReply mission control</h1>
        <p>Privacy-friendly first-party analytics stored in this browser. GA4 remains the source of truth for site-wide traffic.</p>
        <div className="admin-actions">
          <a className="button" href="https://analytics.google.com/" target="_blank" rel="noreferrer">Open Google Analytics</a>
          <button className="actionbtn" onClick={clearData}>Clear local analytics</button>
        </div>
      </section>

      <section className="admin-metrics" aria-label="Key metrics">
        <Metric icon={<Search size={20} />} label="Searches" value={stats.searches} />
        <Metric icon={<Copy size={20} />} label="Copies" value={stats.copies} />
        <Metric icon={<Sparkles size={20} />} label="Studio actions" value={stats.studio} />
        <Metric icon={<Download size={20} />} label="Exports" value={stats.exports} />
        <Metric icon={<Share2 size={20} />} label="Shares" value={stats.shares} />
      </section>

      <section className="admin-grid">
        <Panel title="Top searches" empty="Search activity will appear here.">
          {topSearches.map(([label, value]) => <Row key={label} label={label} value={value} />)}
        </Panel>
        <Panel title="Most copied replies" empty="Copied replies will appear here.">
          {topReplies.map(([label, value]) => <Row key={label} label={label} value={value} />)}
        </Panel>
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head"><h2>Recent activity</h2><Activity size={20} /></div>
        {recent.length ? <div className="admin-event-list">{recent.map((event) => (
          <div key={event.id} className="admin-event">
            <strong>{event.name.replaceAll("_", " ")}</strong>
            <span>{new Date(event.timestamp).toLocaleString()}</span>
          </div>
        ))}</div> : <p className="admin-empty">No local events yet. Use search, copy a reply, or customize something in Studio.</p>}
      </section>

      <section className="admin-panel admin-opportunity">
        <h2>Next growth actions</h2>
        <p>Use zero-result and high-frequency searches in GA4 to prioritize new reply pages. Expand categories whose replies receive the most copies.</p>
        <div className="admin-links"><Link href="/admin/content-factory">Open Content Factory</Link><Link className="button secondary" href="/admin/link-health">Link Health</Link><Link href="/search">Test search</Link><Link href="/studio">Test Studio</Link><Link href="/guides">Review guides</Link></div>
      </section>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return <article className="admin-metric"><span>{icon}</span><strong>{value}</strong><small>{label}</small></article>;
}

function Panel({ title, empty, children }: { title: string; empty: string; children: React.ReactNode }) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children);
  return <section className="admin-panel"><div className="admin-panel-head"><h2>{title}</h2></div>{hasChildren ? <div className="admin-ranking">{children}</div> : <p className="admin-empty">{empty}</p>}</section>;
}

function Row({ label, value }: { label: string; value: number }) {
  return <div className="admin-row"><span>{label}</span><strong>{value}</strong></div>;
}
