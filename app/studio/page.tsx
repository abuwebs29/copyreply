import type { Metadata } from "next";
import Link from "next/link";
import ReplyStudio from "@/components/ReplyStudio";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { replies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reply Studio – Customize a Ready-to-Send Reply | CopyReply",
  description: "Choose a situation, tone, length, and personal details to create a polished reply from CopyReply's curated template library.",
  alternates: { canonical: "https://copyreply.com/studio" },
};

export default function StudioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}/studio#application`,
    name: "CopyReply Reply Studio",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: `${site.url}/studio`,
    description: "A browser-based tool for customizing ready-to-send reply templates.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${site.url}/#organization` },
    isAccessibleForFree: true,
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="pagehero studio-hero">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / Reply Studio</div>
          <span className="eyebrow">Free browser-based reply customizer</span>
          <h1>Build the right reply in seconds.</h1>
          <p>Choose a real-life situation, adjust the tone and length, add personal details, then copy a polished message ready to review and send.</p>
        </div>
      </section>
      <main className="container studio-page">
        <ReplyStudio replies={replies} />
        <section className="guidecard">
          <h2>How Reply Studio works</h2>
          <div className="checkgrid">
            <div><strong>1. Pick a situation</strong><span>Choose from the full CopyReply library of workplace, customer, social, education, travel, and relationship situations.</span></div>
            <div><strong>2. Choose the tone</strong><span>Select one of the carefully written variations available for that exact situation.</span></div>
            <div><strong>3. Personalize</strong><span>Add names, company details, dates, roles, and a specific next step.</span></div>
            <div><strong>4. Copy and review</strong><span>Copy the final message and check factual details before sending it.</span></div>
          </div>
        </section>
      </main>
    </>
  );
}
