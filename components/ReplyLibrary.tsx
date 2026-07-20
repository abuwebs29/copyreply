"use client";

import { useMemo, useState } from "react";
import CopyButton from "@/components/CopyButton";
import type { ReplyVariant } from "@/lib/data";

export default function ReplyLibrary({ variants, slug, title }: { variants: ReplyVariant[]; slug: string; title: string }) {
  const labels = useMemo(() => ["All", ...Array.from(new Set(variants.map((v) => v.label)))], [variants]);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? variants : variants.filter((v) => v.label === active);

  return <div><div className="tonebar" aria-label="Filter replies by tone"><span className="tonebarlabel">Filter by tone:</span>{labels.map((label) => <button type="button" key={label} className={`tonechip ${active === label ? "active" : ""}`} onClick={() => setActive(label)}>{label}</button>)}</div><div className="replyvariantslist">{visible.map((variant) => <article className="variant" key={variant.label}><div className="varianttop"><h2>{variant.label} reply</h2><CopyButton text={variant.text} slug={slug} title={title} variant={variant.label}/></div><blockquote>{variant.text}</blockquote></article>)}</div></div>;
}
