import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { divisionDetails, type DivisionDetails } from "@/lib/divisionDetails";

const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

// How often (in seconds) the site checks Sanity for new content
const REVALIDATE = 60;

const divisionQuery = `*[_id == $id][0]{
  "mainImage": mainImage.asset->url,
  galleryTitle,
  galleryAspect,
  "gallery": gallery[]{ "image": asset->url, caption },
  listingsTitle,
  "listings": listings[]{ title, price, details, status, "image": image.asset->url },
  videosTitle,
  "videos": videos[]{ caption, "src": file.asset->url, "poster": poster.asset->url },
  highlights[]{ value, label },
  faqs[]{ q, a }
}`;

type SanityDivision = Partial<DivisionDetails> & { mainImage?: string | null };

// Use the Sanity list if it has items, otherwise keep the local one
function pick<T>(fromSanity: T[] | null | undefined, fallback: T[] | undefined) {
  return fromSanity && fromSanity.length > 0 ? fromSanity : fallback;
}

export async function getDivisionContent(slug: string) {
  const local = divisionDetails[slug] ?? {};
  let remote: SanityDivision | null = null;

  try {
    remote = await client.fetch<SanityDivision | null>(
      divisionQuery,
      { id: `division-${slug}` },
      { next: { revalidate: REVALIDATE } }
    );
  } catch (error) {
    console.error("Could not load content from Sanity:", error);
  }

  const r = remote ?? {};

  const details: DivisionDetails = {
    highlights: pick(r.highlights, local.highlights),
    listingsTitle: r.listingsTitle || local.listingsTitle,
    listings: pick(r.listings, local.listings),
    galleryTitle: r.galleryTitle || local.galleryTitle,
    galleryAspect: r.galleryAspect || local.galleryAspect,
    gallery: pick(r.gallery, local.gallery),
    videosTitle: r.videosTitle || local.videosTitle,
    videos: pick(r.videos, local.videos),
    faqs: pick(r.faqs, local.faqs),
  };

  return { details, mainImage: r.mainImage || null };
}

// Main images for all divisions, used on the homepage cards
export async function getMainImages(): Promise<Record<string, string>> {
  try {
    const rows = await client.fetch<{ id: string; url: string | null }[]>(
      `*[_type == "divisionContent" && defined(mainImage)]{ "id": _id, "url": mainImage.asset->url }`,
      {},
      { next: { revalidate: REVALIDATE } }
    );
    return Object.fromEntries(
      rows
        .filter((row) => row.url && !row.id.startsWith("drafts."))
        .map((row) => [row.id.replace("division-", ""), row.url as string])
    );
  } catch (error) {
    console.error("Could not load main images from Sanity:", error);
    return {};
  }
}