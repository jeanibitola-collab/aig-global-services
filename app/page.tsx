import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Home as HomeIcon,
  Car,
  ArrowLeftRight,
  Sun,
  Factory,
  ShieldCheck,
  Award,
  Lightbulb,
  Globe,
  Check,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { divisions, whatsappLink, PHONE_DISPLAY } from "@/lib/divisions";

const icons: Record<string, React.ElementType> = {
  gadgets: Smartphone,
  homes: HomeIcon,
  autos: Car,
  xchange: ArrowLeftRight,
  solar: Sun,
  "industrial-machines": Factory,
};

const values = [
  { icon: ShieldCheck, title: "Trusted", text: "Honest advice and transparent deals, every single time." },
  { icon: Award, title: "Reliable", text: "Consistent quality and timely delivery you can count on." },
  { icon: Lightbulb, title: "Innovative", text: "Smart, modern solutions for a better tomorrow." },
  { icon: Globe, title: "Global", text: "Connecting you to quality products and services worldwide." },
];

const enquiry = whatsappLink("Hi AIG Global Services, I'd like to make an enquiry.");

export default function Home() {
  return (
    <>
     {/* ---------- HERO ---------- */}
<section className="relative isolate overflow-hidden bg-[#071a3a] text-white lg:flex lg:min-h-[85vh] lg:items-center">
  {/* Video: full-width 16:9 strip on phones, full background on desktop */}
  <div className="relative aspect-video w-full bg-[url('/images/hero-poster.jpg')] bg-cover bg-center lg:absolute lg:inset-0 lg:-z-20 lg:aspect-auto">
    <video
      className="h-full w-full object-cover motion-reduce:hidden"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/videos/hero.webm" type="video/webm" />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    {/* Phones: soft fade from the video into the navy background */}
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#071a3a] to-transparent lg:hidden" />
  </div>

  {/* Desktop: dark overlay so the text stays readable */}
  <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-[#071a3a]/90 via-[#071a3a]/70 to-[#071a3a]/40 lg:block" />

  <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-4 md:px-10 lg:py-24">
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
        <Globe className="h-4 w-4 text-green-400" />
        Six divisions. One trusted partner.
      </span>

      <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
        One World.
        <br />
        <span className="text-green-400">Complete Solutions.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/80">
        From gadgets and cars to homes, solar power and industrial machines, AIG
        Global Services delivers innovative, reliable solutions for your lifestyle,
        your business, and your future.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="#services"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-green/30 transition hover:-translate-y-0.5"
        >
          Explore Services <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={enquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
        {["Original products", "Transparent pricing", "Fast response"].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-400" /> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

{/* ---------- SERVICES ---------- */}
<section id="services" className="scroll-mt-20 bg-brand-light py-20 md:py-24">
  <div className="mx-auto max-w-7xl px-6 md:px-10">
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
          What we do
        </p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
          Everything you need, <span className="text-brand-blue">under one roof</span>
        </h2>
      </div>
      <p className="max-w-md text-gray-600">
        Six specialist divisions, each built around quality, trust and real value
        for our customers.
      </p>
    </div>

    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {divisions.map((d, i) => {
        const Icon = icons[d.slug];
        return (
          <Link
            key={d.slug}
            href={`/services/${d.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className={`absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${
                  i % 2 === 0 ? "bg-brand-blue" : "bg-brand-green"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 pt-10">
              <h3 className="text-xl font-bold">{d.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{d.tagline}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {d.services.slice(0, 4).map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                      <Check className="h-3 w-3 text-brand-green" />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 font-semibold text-brand-blue transition group-hover:gap-2">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>

      {/* ---------- WHY US ---------- */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
              Why choose us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Built on trust, <span className="text-brand-blue">driven by results</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 p-6 transition hover:border-brand-green/40 hover:shadow-lg"
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

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="px-6 pb-20 md:px-10 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-r from-brand-blue to-brand-green px-6 py-14 text-center text-white md:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-2xl font-extrabold md:text-4xl">
            Your needs. Our solutions.
            <br />
            A better future together.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Tell us what you need and our team will get back to you fast.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+2347068057446"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-blue transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={enquiry}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}