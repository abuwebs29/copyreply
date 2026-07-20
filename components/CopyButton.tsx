"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { recordReplyCopy, trackEvent } from "@/lib/clientAnalytics";

export default function CopyButton({ text, slug, title, variant }: { text: string; slug?: string; title?: string; variant?: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    if (slug && title) recordReplyCopy(slug, title, variant || "Template");
    else trackEvent("reply_copied", { source: "generic_copy_button" });
    setDone(true);
    window.setTimeout(() => setDone(false), 1600);
  }

  return <button className="copybtn" type="button" onClick={copy}>{done ? <><Check size={15}/> Copied</> : <><Copy size={15}/> Copy</>}</button>;
}
