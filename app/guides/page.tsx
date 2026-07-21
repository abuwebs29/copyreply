import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Communication Guides",
  description: "Practical guides for professional emails, interviews, customer service, freelancing, networking, and everyday replies.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Communication Guides",
    description: "Practical guides for clearer professional and everyday communication.",
    type: "website",
    url: "/guides",
    siteName: site.name,
  },
};

export default function GuidesPage() {
  const url = `${site.url}/guides`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: "CopyReply Communication Academy",
        description: "Practical guides for clearer professional and everyday communication.",
        url,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
        isPartOf: { "@id": `${site.url}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        numberOfItems: guides.length,
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${site.url}/guides/${guide.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="pagehero">
        <div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / Guides</div><h1>Communication Academy</h1><p>Practical, human-written guidance for clearer replies and stronger conversations.</p></div>
      </section>
      <main className="container guide-index">
        <div className="replygrid">{guides.map((guide) => <Link className="replycard" href={`/guides/${guide.slug}`} key={guide.slug}><span className="pill">{guide.category}</span><h2>{guide.title}</h2><p>{guide.description}</p><span className="arrow">Read guide →</span></Link>)}</div>
      </main>
    </>
  );
}
