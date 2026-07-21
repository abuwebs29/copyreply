import type { MetadataRoute } from "next";
import { categories, replies } from "@/lib/data";
import { guides } from "@/lib/guides";
const base = "https://copyreply.com";
export default function sitemap(): MetadataRoute.Sitemap {
 const staticRoutes=["","/about","/contact","/privacy","/terms","/search","/studio","/saved","/guides"].map((p)=>({url:`${base}${p}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:p===""?1:0.6}));
 const categoryRoutes=categories.map((c)=>({url:`${base}/category/${c.slug}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:0.8}));
 const guideRoutes=guides.map((g)=>({url:`${base}/guides/${g.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.75}));
 const replyRoutes=replies.map((r)=>({url:`${base}/reply/${r.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.9}));
 return [...staticRoutes,...categoryRoutes,...guideRoutes,...replyRoutes];
}
