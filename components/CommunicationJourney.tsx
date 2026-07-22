import Link from "next/link";
import type { ReturnTypeGetJourney } from "@/lib/linking-types";

export default function CommunicationJourney({ context }: { context: ReturnTypeGetJourney }) {
  if (!context) return null;
  const { journey, previous, next } = context;
  return (
    <section className="journey-card" aria-labelledby="journey-title">
      <div className="journey-head">
        <div>
          <span className="pill">Communication journey</span>
          <h2 id="journey-title">{journey.name}</h2>
          <p>{journey.description}</p>
        </div>
      </div>
      <ol className="journey-steps">
        {journey.steps.map((step, index) => (
          <li className={step.slug === context.current.slug ? "current" : ""} key={step.slug}>
            <span>{index + 1}</span>
            <Link href={`/reply/${step.slug}`}>{step.title}</Link>
          </li>
        ))}
      </ol>
      {(previous || next) && (
        <div className="journey-nav">
          {previous ? <Link href={`/reply/${previous.slug}`}>← Previous: {previous.title}</Link> : <span />}
          {next ? <Link href={`/reply/${next.slug}`}>Next: {next.title} →</Link> : null}
        </div>
      )}
    </section>
  );
}
