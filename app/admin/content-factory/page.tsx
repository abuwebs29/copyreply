import type { Metadata } from "next";
import ContentFactory from "@/components/ContentFactory";

export const metadata: Metadata = {
  title: "Content Factory",
  description: "Private CopyReply editorial content creation workspace.",
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function ContentFactoryPage() {
  return <ContentFactory />;
}
