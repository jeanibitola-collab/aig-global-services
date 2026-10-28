import Link from "next/link";
import Image from "next/image";
import { divisions, EMAIL, PHONE_DISPLAY, whatsappLink } from "@/lib/divisions";
import { COMPANY } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src="/images/logo.png"
              alt="AIG Global Services"
              width={240}
              height={54}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-4 text-sm">
            One World. Complete Solutions. Serving individuals, businesses and public
            institutions since {COMPANY.founded}.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link href={`/services/${d.slug}`} className="hover:text-brand-green">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-green">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-green">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brand-green">Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-brand-green">Refund Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-green">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            {COMPANY.offices.map((o) => (
              <li key={o.label}>
                <span className="block font-semibold text-white">{o.label}</span>
                {o.address}
              </li>
            ))}
            <li>
              Phone:{" "}
              <a href="tel:+2347068057446" className="hover:text-brand-green">{PHONE_DISPLAY}</a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${EMAIL}`} className="hover:text-brand-green">{EMAIL}</a>
            </li>
            {COMPANY.hours && <li>Opening hours: {COMPANY.hours}</li>}
            <li>
              <a
                href={whatsappLink("Hi AIG Global Services, I'd like to make an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-green"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="pt-2">
              <SocialLinks />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-5 text-center text-xs">
        © {new Date().getFullYear()} {COMPANY.legalName} (RC {COMPANY.rcNumber}). All rights reserved.
      </div>
    </footer>
  );
}