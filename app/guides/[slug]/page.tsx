import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { getReply } from "@/lib/data";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, type: "article", url: `/guides/${guide.slug}`, siteName: site.name },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const related = guide.relatedSlugs.map(getReply).filter(Boolean);
  const url = `${site.url}/guides/${guide.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        author: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: guide.title,
        description: guide.description,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        isPartOf: { "@id": `${site.url}/#website` },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="pagehero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / {guide.title}</div>
          <span className="pill">{guide.category}</span><h1>{guide.title}</h1><p>{guide.description}</p>
        </div>
      </section>
      <article className="container article-page">
        <p className="article-intro">{guide.intro}</p>
        {guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
        <section className="guidecard"><h2>Quick reply checklist</h2><ol><li>Acknowledge the message or situation.</li><li>State your answer or purpose clearly.</li><li>Include only relevant context.</li><li>End with a useful next step.</li><li>Check names, dates, facts, and tone.</li></ol></section>
        {related.length > 0 && (
          <section><h2>Ready-to-copy examples</h2><div className="replygrid">{related.map((reply) => <Link className="replycard" href={`/reply/${reply!.slug}`} key={reply!.slug}><h3>{reply!.title}</h3><p>{reply!.description}</p><span className="arrow">View replies →</span></Link>)}</div></section>
        )}
      </article>
    </>
  );
}
