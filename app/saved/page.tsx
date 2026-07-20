import type { Metadata } from "next";
import SavedReplies from "@/components/SavedReplies";
import { replies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Saved Replies",
  description: "View and manage the CopyReply templates saved in your browser.",
  alternates: { canonical: "/saved" },
  robots: { index: false, follow: true },
};

export default function SavedPage() {
  return <><section className="pagehero"><div className="container"><span className="pill">Your library</span><h1>Saved replies</h1><p>Your saved templates are stored privately in this browser. No account is required.</p></div></section><main className="container saved-page"><SavedReplies replies={replies}/></main></>;
}
