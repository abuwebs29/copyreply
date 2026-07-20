import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReplyLibrary from "@/components/ReplyLibrary";
import ReplyActions from "@/components/ReplyActions";
import { getReply, replies } from "@/lib/data";

export function generateStaticParams() {
  return replies.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = getReply(slug);
  if (!r) return {};
  return {
    title: `${r.title} – Copy-and-Paste Examples`,
    description: `${r.description} Browse ready-to-copy examples, tone options, personalization tips, and related replies.`,
    alternates: { canonical: `/reply/${r.slug}` },
    openGraph: { title: r.title, description: r.description, type: "article", url: `/reply/${r.slug}` },
  };
}

export default async function ReplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getReply(slug);
  if (!r) notFound();

  const related = replies.filter((x) => x.categorySlug === r.categorySlug && x.slug !== r.slug).slice(0, 6);
  const faq = [
    { q: `How should I personalize a ${r.title.toLowerCase()}?`, a: "Replace every bracketed placeholder, add one specific detail from the conversation, and keep the final message consistent with your normal voice." },
    { q: "Which tone should I choose?", a: "Use a professional or formal tone for work and unfamiliar recipients. Friendly or warm tones are usually better for people you know and less formal situations." },
    { q: "Can I copy these replies exactly?", a: "Yes, but a short personal detail will make the reply sound more genuine and reduce the chance that it feels generic." },
    { q: "How quickly should I respond?", a: "For work, customer, and scheduling messages, replying within one business day is a useful rule. Personal messages can follow the urgency and nature of the relationship." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://copyreply.com" },
          { "@type": "ListItem", position: 2, name: r.category, item: `https://copyreply.com/category/${r.categorySlug}` },
          { "@type": "ListItem", position: 3, name: r.title, item: `https://copyreply.com/reply/${r.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="pagehero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href={`/category/${r.categorySlug}`}>{r.category}</Link> / {r.title}</div>
          <span className="pill">{r.category}</span>
          <h1>{r.title}</h1>
          <p>{r.description} Choose the tone that fits your situation, copy it, and personalize the details before sending.</p>
          <ReplyActions slug={r.slug} title={r.title} />
        </div>
      </section>

      <main className="container replypage">
        <ReplyLibrary variants={r.variants} slug={r.slug} title={r.title} />

        <section className="guidecard">
          <h2>How to use these replies</h2>
          <ol>
            <li>Choose the reply closest to your situation and relationship with the recipient.</li>
            <li>Replace placeholders such as [name], [date], [amount], or [reason].</li>
            <li>Add one relevant personal detail so the message sounds natural.</li>
            <li>Read it once for tone and accuracy before you send it.</li>
          </ol>
        </section>

        <section className="guidecard">
          <h2>Personalization checklist</h2>
          <div className="checkgrid">
            <div><strong>Recipient</strong><span>Use the correct name, title, and level of formality.</span></div>
            <div><strong>Context</strong><span>Refer briefly to the message, event, request, or conversation.</span></div>
            <div><strong>Next step</strong><span>Make any action, date, question, or expectation clear.</span></div>
            <div><strong>Final tone</strong><span>Remove wording that feels too cold, emotional, or vague.</span></div>
          </div>
        </section>

        <section className="faqsection">
          <div className="sectionhead"><div><h2>Frequently asked questions</h2><p>Quick guidance for adapting the templates.</p></div></div>
          <div className="faqlist">
            {faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
          </div>
        </section>

        {related.length > 0 && (
          <section>
            <div className="sectionhead"><div><h2>Related replies</h2><p>Continue with closely related situations.</p></div></div>
            <div className="replygrid">
              {related.map((x) => <Link className="replycard" href={`/reply/${x.slug}`} key={x.slug}><span className="pill">{x.category}</span><h3>{x.title}</h3><p>{x.description}</p><span className="arrow">View replies →</span></Link>)}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
