"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AlertTriangle, BarChart3, CheckCircle2, Download, Search, Sparkles, TrendingUp } from "lucide-react";
import { getAnalyticsEvents, type StoredAnalyticsEvent } from "@/lib/clientAnalytics";
import { buildSeoAudit, getStaticOpportunities, type SeoAuditRow } from "@/lib/seoIntelligence";

function countBy(events: StoredAnalyticsEvent[], key: string) {
  const counts = new Map<string, number>();
  for (const event of events) {
    const value = event.params[key];
    if (typeof value === "string" && value.trim()) counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

export default function SearchIntelligenceDashboard() {
  const [events, setEvents] = useState<StoredAnalyticsEvent[]>([]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const audit = useMemo(() => buildSeoAudit(), []);
  const summary = useMemo(() => getStaticOpportunities(), []);

  useEffect(() => setEvents(getAnalyticsEvents()), []);

  const zeroResults = useMemo(() => countBy(events.filter((event) => event.name === "search_submitted" && Number(event.params.results) === 0), "query").slice(0, 12), [events]);
  const topSearches = useMemo(() => countBy(events.filter((event) => event.name === "search_submitted"), "query").slice(0, 12), [events]);
  const topCopies = useMemo(() => countBy(events.filter((event) => event.name === "reply_copied" || event.name === "studio_reply_copied"), "reply_title").slice(0, 12), [events]);

  const visible = audit.filter((row) => {
    const matchesQuery = !query || `${row.title} ${row.category} ${row.slug}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "all" || (filter === "critical" && row.overall < 60) || (filter === "improve" && row.overall >= 60 && row.overall < 80) || (filter === "strong" && row.overall >= 80);
    return matchesQuery && matchesFilter;
  }).slice(0, 100);

  function exportCsv() {
    const header = ["Title", "Slug", "Category", "Overall", "SEO", "Content", "Linking", "Conversion", "Issues"];
    const rows = audit.map((row) => [row.title, row.slug, row.category, row.overall, row.seo, row.content, row.linking, row.conversion, row.issues.join("; ")]);
    const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "copyreply-seo-audit.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="container intelligence-dashboard">
      <section className="pagehero admin-hero">
        <span className="eyebrow"><TrendingUp size={16}/> Sprint 8.4</span>
        <h1>Search Intelligence & SEO Optimizer</h1>
        <p>Turn first-party search behavior and page-level quality checks into a prioritized growth plan.</p>
        <div className="admin-actions"><button className="button" onClick={exportCsv}><Download size={17}/> Export audit CSV</button><Link className="button secondary" href="/admin/content-factory">Open Content Factory</Link></div>
      </section>

      <section className="admin-metrics">
        <Metric label="Audited pages" value={summary.totalPages} icon={<BarChart3 size={20}/>} />
        <Metric label="Average score" value={`${summary.averageScore}%`} icon={<CheckCircle2 size={20}/>} />
        <Metric label="Need improvement" value={summary.weakPages} icon={<AlertTriangle size={20}/>} />
        <Metric label="Critical pages" value={summary.criticalPages} icon={<Sparkles size={20}/>} />
      </section>

      <section className="admin-grid intelligence-grid">
        <Ranking title="Zero-result content opportunities" empty="No zero-result searches captured in this browser yet." rows={zeroResults} />
        <Ranking title="Top internal searches" empty="Search activity will appear here." rows={topSearches} />
        <Ranking title="Most copied replies" empty="Copy activity will appear here." rows={topCopies} />
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head"><div><h2>Category quality map</h2><p>Lowest average scores appear first.</p></div></div>
        <div className="quality-bars">{summary.categoryScores.slice(0, 14).map((category) => <div className="quality-bar" key={category.name}><span>{category.name} <small>{category.pages} pages</small></span><div><i style={{ width: `${category.score}%` }} /></div><strong>{category.score}</strong></div>)}</div>
      </section>

      <section className="admin-panel">
        <div className="admin-panel-head"><div><h2>Page optimizer</h2><p>Review weak pages first, then export the full audit for your editorial queue.</p></div></div>
        <div className="optimizer-toolbar">
          <label><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, category, or slug" /></label>
          <select value={filter} onChange={(event) => setFilter(event.target.value)}><option value="all">All scores</option><option value="critical">Critical: below 60</option><option value="improve">Improve: 60–79</option><option value="strong">Strong: 80+</option></select>
        </div>
        <div className="optimizer-table-wrap"><table className="optimizer-table"><thead><tr><th>Page</th><th>Overall</th><th>SEO</th><th>Content</th><th>Links</th><th>Action</th></tr></thead><tbody>{visible.map((row) => <AuditRow row={row} key={row.slug}/>)}</tbody></table></div>
      </section>

      <section className="admin-panel admin-opportunity"><h2>Recommended weekly workflow</h2><p>1. Create pages for repeated zero-result searches. 2. Improve pages below 75. 3. Strengthen the weakest category. 4. Recheck copy activity to confirm that changes improve usefulness.</p><div className="admin-links"><Link href="/admin/link-health">Review link health</Link><Link href="/admin/content-factory">Create next topic</Link><a href="https://search.google.com/search-console" target="_blank" rel="noreferrer">Open Search Console</a></div></section>
    </main>
  );
}

function Metric({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) { return <article className="admin-metric"><span>{icon}</span><strong>{value}</strong><small>{label}</small></article>; }
function Ranking({ title, empty, rows }: { title: string; empty: string; rows: [string, number][] }) { return <section className="admin-panel"><div className="admin-panel-head"><h2>{title}</h2></div>{rows.length ? <div className="admin-ranking">{rows.map(([label, value]) => <div className="admin-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div> : <p className="admin-empty">{empty}</p>}</section>; }
function AuditRow({ row }: { row: SeoAuditRow }) { return <tr><td><Link href={`/reply/${row.slug}`}>{row.title}</Link><small>{row.category}</small>{row.issues[0] && <em>{row.issues[0]}</em>}</td><td><Score value={row.overall}/></td><td>{row.seo}</td><td>{row.content}</td><td>{row.linking}</td><td><Link href={`/reply/${row.slug}`}>Review</Link></td></tr>; }
function Score({ value }: { value: number }) { const status = value >= 80 ? "strong" : value >= 60 ? "medium" : "critical"; return <span className={`score-badge ${status}`}>{value}</span>; }
