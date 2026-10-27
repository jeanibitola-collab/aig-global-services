import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-brand-light py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">Testimonials</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            What our <span className="text-brand-blue">customers say</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name + t.quote} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <Quote className="h-8 w-8 text-brand-green" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-gray-700">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}