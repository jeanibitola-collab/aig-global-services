import type { MetadataRoute } from "next";
import { divisions } from "@/lib/divisions";

const SITE_URL = "https://www.aig-global-services.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), priority: 0.7 },
    ...divisions.map((d) => ({
      url: `${SITE_URL}/services/${d.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
        { url: `${SITE_URL}/refund-policy`, lastModified: new Date(), priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), priority: 0.3 },
  ];
}