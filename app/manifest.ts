import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "CopyReply", short_name: "CopyReply", description: "Ready-to-copy replies for work and everyday conversations.", start_url: "/", display: "standalone", background_color: "#f8fafc", theme_color: "#2563eb", icons: [] }; }
