import type { MetadataRoute } from "next";
import { portfolioProjects } from "./content";
import { SITE_URL } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/studio/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/usluge/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/stilovi/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/portfolio/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [
    ...corePages,
    ...portfolioProjects.map((project) => ({
      url: `${SITE_URL}/portfolio/${project.slug}/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: Array.from(
        { length: project.galleryCount },
        (_, index) =>
          `${SITE_URL}/portfolio/${project.slug}/${String(index + 1).padStart(2, "0")}.webp`,
      ),
    })),
  ];
}
