import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { divisions, whatsappLink, PHONE_DISPLAY, EMAIL } from "@/lib/divisions";
import { COMPANY } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit AIG Global Services at New Banex Plaza, Wuse 2, Abuja. Call, WhatsApp or email us.",
};

type Card = {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
  links?: { label: string; href: string }[];
};

function telHref(phone: string) {
  return `tel:+234${phone.replace(/\s/g, "").slice(1)}`;
}

export default function ContactPage() {
  const cards: Card[] = [
    {
      icon: Phone,
      title: "Call us",
      value: "",
      links: COMPANY.phones.map((p) => ({ label: p, href: telHref(p) })),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us now",
      href: whatsappLink(
        "Hi AIG Global Services, I'd like to make an enquiry.",
      ),
      external: true,
    },
    { icon: Mail, title: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    ...COMPANY.offices.map((o) => ({
      icon: MapPin,
      title: o.label,
      value: o.address,
    })),
    ...(COMPANY.hours
      ? [{ icon: Clock, title: "Opening hours", value: COMPANY.hours }]
      : []),
  ];

  const cardStyle =
    "block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100";

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
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Get in <span className="text-green-400">touch</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Visit us at New Banex Plaza, Wuse 2, Abuja, or call, message or
            email us, and we&apos;ll connect you with the right team.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {cards.map((c) => {
            const content = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-brand-blue to-brand-green text-white">
                  <c.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {c.title}
                </p>
                {c.links ? (
                  <ul className="mt-1 space-y-1">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-lg font-bold hover:text-brand-blue"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-lg font-bold">{c.value}</p>
                )}
              </>
            );
            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`${cardStyle} transition hover:-translate-y-1 hover:shadow-lg`}
              >
                {content}
              </a>
            ) : (
              <div key={c.title} className={cardStyle}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* Message a division */}
      <section className="bg-brand-light py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Message a <span className="text-brand-blue">division directly</span>
          </h2>
          <p className="mt-3 max-w-xl text-gray-600">
            Tap a division to open WhatsApp with your message ready to send.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <a
                key={d.slug}
                href={whatsappLink(d.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 font-semibold shadow-sm ring-1 ring-gray-100 transition hover:ring-brand-green"
              >
                {d.name}
                <MessageCircle className="h-5 w-5 text-brand-green" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Find <span className="text-brand-blue">our offices</span>
          </h2>
          <div className="mt-10 grid gap-8">
            {COMPANY.offices.map((o) => (
              <div
                key={o.label}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100"
              >
                <iframe
                  src={o.map}
                  title={`Map showing ${o.label}`}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-6">
                  <p className="font-bold">{o.label}</p>
                  <p className="mt-1 text-gray-600">{o.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-semibold text-brand-blue underline underline-offset-4"
                  >
                    Get directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-3xl bg-[#071a3a] px-6 py-12 text-center text-white">
          <h2 className="text-2xl font-extrabold">Follow us</h2>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
