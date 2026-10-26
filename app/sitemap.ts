import type { MetadataRoute } from "next";
import { divisions } from "@/lib/divisions";

const SITE_URL = "https://www.aigglobalservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    ...divisions.map((d) => ({
      url: `${SITE_URL}/services/${d.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
  ];
}