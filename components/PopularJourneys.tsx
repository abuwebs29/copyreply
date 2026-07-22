import Link from "next/link";
import { replies } from "@/lib/data";
import { resolveJourneys } from "@/lib/linking";

export default function PopularJourneys() {
  const journeys = resolveJourneys(replies).slice(0, 3);
  if (!journeys.length) return null;
  return (
    <section className="section journey-home">
      <div className="container">
        <div className="sectionhead"><div><h2>Communication journeys</h2><p>Follow a complete sequence instead of handling each message in isolation.</p></div></div>
        <div className="journey-grid">
          {journeys.map((journey) => (
            <article className="journey-summary" key={journey.slug}>
              <span className="pill">{journey.steps.length} steps</span>
              <h3>{journey.name}</h3><p>{journey.description}</p>
              <ol>{journey.steps.slice(0, 4).map((step) => <li key={step.slug}><Link href={`/reply/${step.slug}`}>{step.title}</Link></li>)}</ol>
              <Link className="arrow" href={`/reply/${journey.steps[0].slug}`}>Start journey →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
