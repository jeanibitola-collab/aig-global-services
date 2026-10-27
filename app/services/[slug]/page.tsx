import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowRight,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";
import {
  divisions,
  getDivision,
  whatsappLink,
  PHONE_DISPLAY,
} from "@/lib/divisions";
import { divisionDetails } from "@/lib/divisionDetails";
import {
  Highlights,
  Listings,
  Gallery,
  Faqs,
} from "@/components/DivisionSections";

type Props = { params: Promise<{ slug: string }> };

// Build all division pages ahead of time
export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

// Page title and description for Google and browser tabs
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) return {};
  return { title: d.name, description: d.description };
}

const steps = [
  {
    title: "Tell us what you need",
    text: "Send us a WhatsApp message or give us a call, and tell us what you're looking for.",
  },
  {
    title: "Get clear advice and pricing",
    text: "Our specialists explain your options in plain language and agree the terms with you upfront.",
  },
  {
    title: "We handle it and stay with you",
    text: "We take care of the details from start to finish, and remain your point of contact afterwards.",
  },
];

export default async function DivisionPage({ params }: Props) {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) notFound();

  const chat = whatsappLink(d.whatsappMessage);
  const others = divisions.filter((x) => x.slug !== d.slug);
  const extra = divisionDetails[d.slug] ?? {};

  return (
    <>
      {/* ---------- BANNER ---------- */}
      <section className="relative isolate overflow-hidden bg-[#071a3a] text-white">
        <Image
          src={d.image}
          alt={d.name}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071a3a]/95 via-[#071a3a]/75 to-[#071a3a]/40" />

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{d.name}</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {d.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">{d.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={chat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-green/30 transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a
              href="tel:+2347068057446"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            {d.website && (
              <a
                href={d.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Visit {d.website.replace("https://", "")}{" "}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ---------- INTRO + SERVICES ---------- */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              What we offer
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Everything {d.name}{" "}
              <span className="text-brand-blue">can do for you</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {d.description}
            </p>
            <a
              href={chat}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue hover:gap-3 transition-all"
            >
              Ask us about {d.name} <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {d.services.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                  <Check className="h-4 w-4 text-brand-green" />
                </span>
                <span className="font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {extra.highlights && extra.highlights.length > 0 && (
        <Highlights items={extra.highlights} />
      )}

      {extra.listings && extra.listings.length > 0 && (
        <Listings
          title={extra.listingsTitle ?? "Available now"}
          items={extra.listings}
          divisionName={d.name}
        />
      )}

      {extra.gallery && extra.gallery.length > 0 && (
        <Gallery
          title={extra.galleryTitle ?? "Our work"}
          items={extra.gallery}
        />
      )}

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-brand-light py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Simple, from{" "}
              <span className="text-brand-blue">first message to done</span>
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-green text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {extra.faqs && extra.faqs.length > 0 && <Faqs items={extra.faqs} />}

      {/* ---------- OTHER DIVISIONS ---------- */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Explore our <span className="text-brand-blue">other divisions</span>
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={o.image}
                    alt={o.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <span className="font-semibold">{o.name}</span>
                  <ArrowRight className="h-4 w-4 text-brand-blue transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="px-6 pb-20 md:px-10 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-brand-blue to-brand-green px-6 py-14 text-center text-white md:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-2xl font-extrabold md:text-4xl">
            Ready to get started with {d.name}?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Message us now and a specialist will respond quickly.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={chat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-blue transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a
              href="tel:+2347068057446"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
