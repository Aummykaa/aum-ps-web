import type { MetadataRoute } from "next";

import { getSiteOrigin } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const paths = ["", "/cv"] as const;
  const now = new Date();

  return paths.map((path) => ({
    url: new URL(path || "/", base).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
