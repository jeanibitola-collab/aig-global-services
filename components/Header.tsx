"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { divisions, whatsappLink } from "@/lib/divisions";

const enquiry = whatsappLink("Hi AIG Global Services, I'd like to make an enquiry.");

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="AIG Global Services"
            width={240}
            height={80}
            priority
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 text-[15px] font-medium text-ink lg:flex">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <Link href="/about" className="hover:text-brand-blue">About</Link>

          <div className="group relative">
            <button className="inline-flex items-center gap-1 whitespace-nowrap hover:text-brand-blue">
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-md border border-gray-200 bg-white py-2 shadow-xl">
                {divisions.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/services/${d.slug}`}
                    className="block px-5 py-2.5 hover:bg-mist hover:text-brand-blue"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className="hover:text-brand-blue">Contact</Link>
        </nav>

        <a
          href={enquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 whitespace-nowrap rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 lg:inline-flex"
        >
          Message us on WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-200 bg-white px-6 pb-6 pt-2 text-ink lg:hidden">
          <Link href="/" onClick={close} className="block py-3 font-medium">Home</Link>
          <Link href="/about" onClick={close} className="block py-3 font-medium">About</Link>
          <p className="pb-1 pt-3 text-sm text-muted">Services</p>
          {divisions.map((d) => (
            <Link
              key={d.slug}
              href={`/services/${d.slug}`}
              onClick={close}
              className="block py-2.5 pl-4 font-medium"
            >
              {d.name}
            </Link>
          ))}
          <Link href="/contact" onClick={close} className="block py-3 font-medium">Contact</Link>
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-md bg-brand-green py-3 text-center font-semibold text-white"
          >
            Message us on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}