"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { divisions } from "@/lib/divisions";

export default function DivisionIndex() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      {/* Names */}
      <ul>
        {divisions.map((d, i) => (
          <li key={d.slug} className="border-t border-white/15 last:border-b">
            <Link
              href={`/services/${d.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`flex items-center gap-4 py-4 transition-colors motion-reduce:transition-none ${
                i === active ? "text-white" : "text-white/45 hover:text-white"
              }`}
            >
              {/* Small photo on mobile only */}
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md lg:hidden">
                <Image src={d.image} alt="" fill sizes="56px" className="object-cover" />
              </span>
              <span className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {d.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Large photo on desktop */}
      <div className="relative hidden min-h-[480px] overflow-hidden rounded-lg lg:block">
        {divisions.map((d, i) => (
          <Image
            key={d.slug}
            src={d.image}
            alt={d.name}
            fill
            priority={i === 0}
            sizes="50vw"
            className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-8 pt-24">
          <p className="max-w-sm text-lg text-white">{divisions[active].tagline}</p>
        </div>
      </div>
    </div>
  );
}