import type { MetadataRoute } from "next";
import { categories, replies } from "@/lib/data";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

const releaseDate = new Date("2026-07-21T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1, frequency: "weekly" },
    { path: "/search", priority: 0.8, frequency: "weekly" },
    { path: "/studio", priority: 0.85, frequency: "monthly" },
    { path: "/guides", priority: 0.8, frequency: "weekly" },
    { path: "/about", priority: 0.5, frequency: "yearly" },
    { path: "/contact", priority: 0.4, frequency: "yearly" },
    { path: "/privacy", priority: 0.3, frequency: "yearly" },
    { path: "/terms", priority: 0.3, frequency: "yearly" },
  ].map(({ path, priority, frequency }) => ({
    url: `${site.url}${path}`,
    lastModified: releaseDate,
    changeFrequency: frequency as "weekly" | "monthly" | "yearly",
    priority,
  }));


  const localizedRoutes: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/ar`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: { languages: { en: site.url, ar: `${site.url}/ar`, "x-default": site.url } },
    },
    {
      url: `${site.url}/ar/about`,
      lastModified: releaseDate,
      changeFrequency: "yearly",
      priority: 0.45,
      alternates: { languages: { en: `${site.url}/about`, ar: `${site.url}/ar/about`, "x-default": `${site.url}/about` } },
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${site.url}/category/${category.slug}`,
    lastModified: releaseDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${site.url}/guides/${guide.slug}`,
    lastModified: releaseDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const replyRoutes: MetadataRoute.Sitemap = replies.map((reply) => ({
    url: `${site.url}/reply/${reply.slug}`,
    lastModified: releaseDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...localizedRoutes, ...categoryRoutes, ...guideRoutes, ...replyRoutes];
}
