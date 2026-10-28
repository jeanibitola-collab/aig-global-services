import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Lightbulb,
  Globe,
  Target,
  ArrowRight,
  MessageCircle,
  Users,
  Quote,
} from "lucide-react";
import { divisions, whatsappLink } from "@/lib/divisions";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in Abuja in 2017, AIG Global Services brings together six specialist divisions under one trusted name.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted",
    text: "Honest advice and transparent dealings with every customer.",
  },
  {
    icon: Award,
    title: "Reliable",
    text: "Consistent quality and timely delivery you can count on.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    text: "Smart, modern solutions for a better tomorrow.",
  },
  {
    icon: Globe,
    title: "Global",
    text: "Connecting you to quality products and services worldwide.",
  },
];

const defaultIntro = [
  "AIG Global Services brings together six specialist divisions under one trusted name: gadgets, real estate, automobiles, currency exchange, solar installation and industrial machines.",
  "Instead of searching for a different provider for every need, our customers deal with one team they already know.",
];

export default function AboutPage() {
  const intro = COMPANY.story.length > 0 ? COMPANY.story : defaultIntro;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#071a3a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            About <span className="text-green-400">AIG Global Services</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            One World. Complete Solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              Who we are
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Six businesses,{" "}
              <span className="text-brand-blue">one trusted name</span>
            </h2>
            {COMPANY.founded && (
              <p className="mt-6 inline-block rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-blue">
                Serving customers since {COMPANY.founded}
              </p>
            )}
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our CEO */}
      {COMPANY.leader.name && (
        <section className="pb-20 md:pb-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#071a3a] text-white md:grid-cols-[2fr_3fr]">
              <div className="relative aspect-[4/5] md:h-full">
                <Image
                  src={COMPANY.leader.photo}
                  alt={`${COMPANY.leader.name}, ${COMPANY.leader.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pb-10 md:px-0 md:py-12 md:pr-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                  Meet our CEO
                </p>
                {COMPANY.leader.message && (
                  <blockquote className="mt-6">
                    <Quote className="h-8 w-8 text-green-400" />
                    <p className="mt-4 text-xl leading-relaxed text-white/90 md:text-2xl">
                      {COMPANY.leader.message}
                    </p>
                  </blockquote>
                )}
                <p className="mt-8 text-xl font-bold">{COMPANY.leader.name}</p>
                <p className="text-white/70">{COMPANY.leader.title}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission + values */}
      <section className="bg-brand-light py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col gap-6 rounded-3xl bg-linear-to-r from-brand-blue to-brand-green p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Target className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                Our mission
              </p>
              <p className="mt-2 text-xl font-bold md:text-2xl">
                {COMPANY.mission}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-green text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Who we <span className="text-brand-blue">serve</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY.customers.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <p className="font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-brand-light py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Our <span className="text-brand-blue">divisions</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <Link
                key={d.slug}
                href={`/services/${d.slug}`}
                className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold">{d.name}</p>
                  <p className="text-sm text-gray-600">{d.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-brand-blue transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#071a3a] px-6 py-14 text-center text-white md:px-12">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Let&apos;s talk about what you need
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(
                "Hi AIG Global Services, I'd like to make an enquiry.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
