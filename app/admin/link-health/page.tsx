import type { Metadata } from "next";
import LinkHealthDashboard from "@/components/LinkHealthDashboard";
export const metadata: Metadata = { title: "Internal Link Health", description: "Private CopyReply internal linking dashboard.", robots: { index: false, follow: false, noarchive: true, nocache: true } };
export default function LinkHealthPage(){ return <LinkHealthDashboard />; }
