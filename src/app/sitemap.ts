import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "cv"] as const;
  const now = new Date();

  return paths.map((path) => ({
    url: getSiteUrl(path),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
