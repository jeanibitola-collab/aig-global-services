import Link from "next/link";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mt-12 text-2xl font-extrabold text-ink">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-brand-green">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function LegalLayout({
  title,
  subtitle,
  effectiveDate,
  contents,
  children,
}: {
  title: string;
  subtitle: string;
  effectiveDate: string;
  contents: [string, string][];
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-[#071a3a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>
          <p className="mt-6 text-sm text-white/60">Effective date: {effectiveDate}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-green">On this page</p>
            <ul className="mt-4 space-y-2 text-sm">
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-gray-600 hover:text-brand-blue">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="max-w-3xl">{children}</article>
      </div>
    </>
  );
}