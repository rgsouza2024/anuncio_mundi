import type { MetadataRoute } from "next";
import { property } from "@/data/property";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: property.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
