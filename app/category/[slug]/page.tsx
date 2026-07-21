import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { categories, getCategory, replies } from "@/lib/data";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.name} Reply Templates`;
  const description = `${category.description} Browse ready-to-copy examples and practical communication guidance.`;
  return {
    title,
    description,
    alternates: { canonical: `/category/${category.slug}` },
    openGraph: { title, description, type: "website", url: `/category/${category.slug}`, siteName: site.name },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = replies.filter((reply) => reply.categorySlug === slug);
  const categoryGuides = guides.filter((guide) => guide.categorySlug === slug);
  const url = `${site.url}/category/${category.slug}`;
  const faq = [
    {
      q: `What are ${category.name.toLowerCase()} reply templates?`,
      a: `They are editable message examples designed for common ${category.name.toLowerCase()} situations. Choose the closest example and personalize names, dates, facts, and next steps.`,
    },
    { q: "Can I use these templates exactly as written?", a: "Yes, but adding one specific detail makes the message more natural and accurate." },
    { q: "Which tone should I choose?", a: "Use professional wording for formal or unfamiliar recipients, and warmer wording when the relationship allows it." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: category.name, item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: `${category.name} Reply Templates`,
        description: category.description,
        url,
        isPartOf: { "@id": `${site.url}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        name: `${category.name} reply situations`,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: `${site.url}/reply/${item.slug}`,
        })),
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
      <JsonLd data={schema} />
      <section className="pagehero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / {category.name}</div>
          <span className="pill">{items.length} situations</span>
          <h1>{category.name} reply templates</h1>
          <p>{category.description} Choose a situation, copy a suitable reply, and adapt it before sending.</p>
        </div>
      </section>
      <main className="container category-page">
        <section className="guidecard">
          <h2>How to get the best result</h2>
          <div className="checkgrid">
            <div><strong>Choose the closest situation</strong><span>Start with the page that matches the purpose of your message.</span></div>
            <div><strong>Match the relationship</strong><span>Use a more formal tone for unfamiliar or senior recipients.</span></div>
            <div><strong>Add concrete details</strong><span>Include the correct name, date, decision, amount, or next step.</span></div>
            <div><strong>Review before sending</strong><span>Check facts and remove anything that does not sound like you.</span></div>
          </div>
        </section>
        <section>
          <div className="sectionhead"><div><h2>Browse {category.name.toLowerCase()} replies</h2><p>Ready-to-copy options for common situations.</p></div></div>
          {items.length ? (
            <div className="replygrid">
              {items.map((reply) => (
                <Link className="replycard" href={`/reply/${reply.slug}`} key={reply.slug}>
                  <span className="pill">{reply.category}</span><h3>{reply.title}</h3><p>{reply.description}</p><span className="arrow">View replies →</span>
                </Link>
              ))}
            </div>
          ) : <div className="empty">More replies are being prepared for this category.</div>}
        </section>
        {categoryGuides.length > 0 && (
          <section>
            <div className="sectionhead"><div><h2>Related guides</h2><p>Learn the principles behind better messages.</p></div></div>
            <div className="replygrid">
              {categoryGuides.map((guide) => (
                <Link className="replycard" href={`/guides/${guide.slug}`} key={guide.slug}>
                  <span className="pill">Guide</span><h3>{guide.title}</h3><p>{guide.description}</p><span className="arrow">Read guide →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section className="faqsection">
          <div className="sectionhead"><div><h2>Frequently asked questions</h2></div></div>
          <div className="faqlist">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </section>
      </main>
    </>
  );
}
