import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/divisions";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">
          Page not found
        </p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
          Sorry, we couldn&apos;t find <span className="text-brand-blue">that page</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-gray-600">
          It may have moved, or it&apos;s still being built. You can head back home or
          message us directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-brand-blue px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
          >
            Back to home
          </Link>
          <a
            href={whatsappLink("Hi AIG Global Services, I'd like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-green px-6 py-3.5 font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}