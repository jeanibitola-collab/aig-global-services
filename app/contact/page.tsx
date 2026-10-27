import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { divisions, whatsappLink, PHONE_DISPLAY, EMAIL } from "@/lib/divisions";
import { COMPANY } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or email AIG Global Services, or message any of our divisions directly.",
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, title: "Call us", value: PHONE_DISPLAY, href: "tel:+2347068057446" },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us now",
      href: whatsappLink("Hi AIG Global Services, I'd like to make an enquiry."),
      external: true,
    },
    { icon: Mail, title: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    ...(COMPANY.address ? [{ icon: MapPin, title: "Visit us", value: COMPANY.address }] : []),
    ...(COMPANY.hours ? [{ icon: Clock, title: "Opening hours", value: COMPANY.hours }] : []),
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#071a3a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Get in <span className="text-green-400">touch</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Call, message or email us, and we&apos;ll connect you with the right team.
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
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gray-500">{c.title}</p>
                <p className="mt-1 text-lg font-bold">{c.value}</p>
              </>
            );
            const style = "block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100";
            return "href" in c && c.href ? (
              <a
                key={c.title}
                href={c.href}
                {...("external" in c && c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`${style} transition hover:-translate-y-1 hover:shadow-lg`}
              >
                {content}
              </a>
            ) : (
              <div key={c.title} className={style}>{content}</div>
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

      {/* Map (shows once a map link is added) */}
      {COMPANY.mapEmbedUrl && (
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="overflow-hidden rounded-3xl ring-1 ring-gray-100">
              <iframe
                src={COMPANY.mapEmbedUrl}
                title="AIG Global Services location"
                className="h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      )}

      {/* Socials */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-3xl bg-[#071a3a] px-6 py-12 text-center text-white">
          <h2 className="text-2xl font-extrabold">Follow us</h2>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}