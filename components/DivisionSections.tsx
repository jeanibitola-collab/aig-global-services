import Image from "next/image";
import { ChevronDown, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/divisions";
import type { Highlight, GalleryItem, Listing, Faq } from "@/lib/divisionDetails";

const container = "mx-auto max-w-7xl px-6 md:px-10";

/* ---------- Highlights ---------- */
export function Highlights({ items }: { items: Highlight[] }) {
  return (
    <section className="bg-[#071a3a] py-12 text-white">
      <div className={`${container} grid grid-cols-2 gap-8 text-center md:grid-cols-4`}>
        {items.map((h) => (
          <div key={h.label}>
            <p className="text-3xl font-extrabold text-green-400 md:text-4xl">{h.value}</p>
            <p className="mt-1 text-sm text-white/75">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Listings ---------- */
export function Listings({
  title,
  items,
  divisionName,
}: {
  title: string;
  items: Listing[];
  divisionName: string;
}) {
  return (
    <section className="py-20 md:py-24">
      <div className={container}>
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
            >
              <div className="relative aspect-[4/3] bg-brand-light">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {item.status && (
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Available"
                        ? "bg-brand-green text-white"
                        : "bg-white text-ink"
                    }`}
                  >
                    {item.status}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">{item.title}</h3>
                {item.price && (
                  <p className="mt-1 text-xl font-extrabold text-brand-blue">{item.price}</p>
                )}
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>

                {item.status !== "Sold" && (
                  <div className="mt-auto pt-6">
                    <a
                      href={whatsappLink(`Hi ${divisionName}, I'm interested in: ${item.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" /> Ask about this
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
export function Gallery({ title, items }: { title: string; items: GalleryItem[] }) {
  return (
    <section className="py-20 md:py-24">
      <div className={container}>
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g) => (
            <figure key={g.image} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light">
              <Image
                src={g.image}
                alt={g.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-4 pt-12 text-sm font-medium text-white">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */
export function Faqs({ items }: { items: Faq[] }) {
  // Lets Google show these questions directly in search results
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">
          Frequently asked <span className="text-brand-blue">questions</span>
        </h2>
        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-blue transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}