import type { MetadataRoute } from "next";
import { property } from "@/data/property";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${property.siteUrl}/sitemap.xml`,
  };
}
