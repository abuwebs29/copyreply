import type { Metadata } from "next";
import GrowthDashboard from "@/components/GrowthDashboard";

export const metadata: Metadata = {
  title: "Growth Dashboard",
  description: "Private CopyReply growth and engagement dashboard.",
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function GrowthDashboardPage() {
  return <GrowthDashboard />;
}
