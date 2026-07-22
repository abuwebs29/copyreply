import Link from "next/link";
import { buildLinkHealth, resolveJourneys } from "@/lib/linking";
import { replies } from "@/lib/data";
import { guides } from "@/lib/guides";

export default function LinkHealthDashboard() {
  const rows = buildLinkHealth(replies, guides);
  const journeys = resolveJourneys(replies);
  const orphanCount = rows.filter((row) => row.incoming === 0).length;
  const weakCount = rows.filter((row) => row.score < 60).length;
  const average = Math.round(rows.reduce((sum, row) => sum + row.score, 0) / Math.max(rows.length, 1));

  return (
    <main className="container admin-page">
      <div className="admin-heading">
        <div><span className="pill">Sprint 7.4</span><h1>Internal Link Health</h1><p>Review smart relationships, journeys, guide connections, and weak pages.</p></div>
        <Link className="button secondary" href="/admin/dashboard">Back to dashboard</Link>
      </div>
      <section className="admin-metrics">
        <article><strong>{average}/100</strong><span>Average link score</span></article>
        <article><strong>{orphanCount}</strong><span>Pages without incoming links</span></article>
        <article><strong>{weakCount}</strong><span>Pages below 60</span></article>
        <article><strong>{journeys.length}</strong><span>Active journeys</span></article>
      </section>
      <section className="guidecard">
        <h2>Communication journeys</h2>
        <div className="journey-admin-grid">
          {journeys.map((journey) => <article key={journey.slug}><strong>{journey.name}</strong><span>{journey.steps.length} connected steps</span><p>{journey.description}</p></article>)}
        </div>
      </section>
      <section className="link-health-table-wrap">
        <table className="link-health-table">
          <thead><tr><th>Page</th><th>Score</th><th>Incoming</th><th>Outgoing</th><th>Guides</th><th>Issues</th></tr></thead>
          <tbody>{rows.slice(0, 200).map((row) => (
            <tr key={row.slug}>
              <td><Link href={`/reply/${row.slug}`}>{row.title}</Link><small>{row.category}</small></td>
              <td><strong className={row.score < 60 ? "score-low" : "score-good"}>{row.score}</strong></td>
              <td>{row.incoming}</td><td>{row.outgoing}</td><td>{row.guideLinks}</td>
              <td>{row.issues.length ? row.issues.join("; ") : "Healthy"}</td>
            </tr>
          ))}</tbody>
        </table>
      </section>
    </main>
  );
}
