import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AIG Global Services collects, uses and protects your personal data under the Nigeria Data Protection Act 2023.",
};

// ⚠️ Replace every [bracketed] value with the client's real details before launch
const COMPANY = {
  legalName: "[AIG Global Services Limited]",
  rcNumber: "[RC number]",
  address: "[Registered office address], Abuja, Nigeria",
  email: "info@aigglobalservices.com",
  privacyEmail: "[privacy@aigglobalservices.com]",
  phone: "0706 805 7446",
  effectiveDate: "[Date this policy takes effect]",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mt-12 text-2xl font-extrabold text-ink">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-gray-700">{children}</div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-brand-green">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const contents = [
  ["who-we-are", "Who we are"],
  ["what-we-collect", "Information we collect"],
  ["how-we-use", "How we use your information"],
  ["lawful-basis", "Our lawful basis for processing"],
  ["sharing", "Who we share it with"],
  ["transfers", "Transfers outside Nigeria"],
  ["cookies", "Cookies"],
  ["retention", "How long we keep your data"],
  ["security", "How we protect your data"],
  ["rights", "Your rights"],
  ["children", "Children"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#071a3a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            How we collect, use and protect your personal data, in line with the Nigeria Data
            Protection Act 2023.
          </p>
          <p className="mt-6 text-sm text-white/60">Effective date: {COMPANY.effectiveDate}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* Table of contents */}
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

        {/* Policy */}
        <article className="max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700">
            Your privacy matters to us. This policy explains what personal data AIG Global Services
            collects when you visit our website or contact any of our divisions (AIG Gadgets, AIG
            Homes, AIG Autos, AIG Xchange, Solar Installation and Industrial Machines), why we
            collect it, and the choices and rights you have.
          </p>

          <Section id="who-we-are" title="1. Who we are">
            <p>
              This website is operated by {COMPANY.legalName} (RC {COMPANY.rcNumber}), with its
              registered office at {COMPANY.address} (&quot;AIG Global Services&quot;, &quot;we&quot;,
              &quot;us&quot;). We are the data controller responsible for your personal data.
            </p>
          </Section>

          <Section id="what-we-collect" title="2. Information we collect">
            <p><strong>Information you give us</strong> when you message us on WhatsApp, call, email or visit us:</p>
            <List
              items={[
                "Your name, phone number and email address",
                "Details of what you are enquiring about, such as the product, property, vehicle, solar system or equipment you are interested in, and your budget",
                "Any other information you choose to share in your messages",
              ]}
            />
            <p>
              <strong>Information needed for specific services.</strong> If you go ahead with a
              purchase or service, we may need further details, such as a delivery or installation
              address, payment information, or proof of identity. Some services, particularly
              property, vehicle and exchange transactions, may legally require us to verify your
              identity. We will tell you what is needed at the time.
            </p>
            <p>
              <strong>Information collected automatically.</strong> When you visit our website, our
              hosting provider automatically records basic technical information, such as your IP
              address, browser type, device type and the pages you visit. This is used to keep the
              website secure and working properly.
            </p>
          </Section>

          <Section id="how-we-use" title="3. How we use your information">
            <List
              items={[
                "To respond to your enquiries and connect you with the right division",
                "To provide quotes, advice and the products or services you request",
                "To arrange delivery, installation, maintenance and after-sales support",
                "To process payments and keep records of transactions",
                "To verify identity and meet our legal and regulatory obligations",
                "To keep our website secure and improve how it works",
                "To send you updates or offers, but only where you have agreed to receive them",
              ]}
            />
            <p>We do not sell your personal data, and we do not make decisions about you based solely on automated processing.</p>
          </Section>

          <Section id="lawful-basis" title="4. Our lawful basis for processing">
            <p>Under the Nigeria Data Protection Act 2023, we only process your personal data where we have a lawful basis to do so:</p>
            <List
              items={[
                <><strong>Contract:</strong> to respond to your requests and provide the products and services you ask for.</>,
                <><strong>Legal obligation:</strong> to keep financial records, verify identity and comply with applicable laws and regulations.</>,
                <><strong>Legitimate interests:</strong> to run, secure and improve our business and website, where this does not override your rights.</>,
                <><strong>Consent:</strong> to send you marketing messages. You can withdraw your consent at any time, and this will not affect processing carried out before you withdrew it.</>,
              ]}
            />
          </Section>

          <Section id="sharing" title="5. Who we share it with">
            <p>We only share your personal data where necessary, and with parties who are required to protect it:</p>
            <List
              items={[
                "Staff within the relevant AIG Global Services division handling your request",
                "Service providers who help us operate, such as our website host, email provider and messaging platforms (including WhatsApp, operated by Meta)",
                "Partners needed to complete your request, such as delivery, installation, payment or logistics providers",
                "Professional advisers, regulators, law enforcement or courts, where required by law",
              ]}
            />
          </Section>

          <Section id="transfers" title="6. Transfers outside Nigeria">
            <p>
              Some of our service providers, including our website host and WhatsApp, store or
              process data outside Nigeria. Where this happens, we take steps to ensure your data
              receives a level of protection consistent with the Nigeria Data Protection Act, as
              required by law.
            </p>
          </Section>

          <Section id="cookies" title="7. Cookies">
            <p>
              Our website does not currently use advertising or analytics cookies. If we introduce
              non-essential cookies in future, we will ask for your consent first and update this
              policy.
            </p>
          </Section>

          <Section id="retention" title="8. How long we keep your data">
            <p>
              We keep personal data only for as long as we need it for the purposes described in
              this policy, or as long as the law requires. Enquiry messages that do not lead to a
              transaction are kept for no longer than [24 months]. Transaction and financial
              records are kept for the period required by Nigerian law. When data is no longer
              needed, we securely delete or anonymise it.
            </p>
          </Section>

          <Section id="security" title="9. How we protect your data">
            <p>
              We use appropriate technical and organisational measures to protect your personal data
              against loss, misuse and unauthorised access, including secure (HTTPS) connections and
              restricting access to staff who need it. If a personal data breach occurs that is
              likely to put your rights at risk, we will notify the Nigeria Data Protection
              Commission and, where required, you, in line with the law.
            </p>
          </Section>

          <Section id="rights" title="10. Your rights">
            <p>Under the Nigeria Data Protection Act 2023, you have the right to:</p>
            <List
              items={[
                "Be informed about how your personal data is used",
                "Access the personal data we hold about you and receive a copy",
                "Ask us to correct inaccurate or incomplete data",
                "Ask us to delete your data where it is no longer needed or there is no lawful basis to keep it",
                "Ask us to restrict how we use your data in certain situations",
                "Object to our processing, including for direct marketing",
                "Withdraw your consent at any time, where we rely on consent",
                "Receive your data in a commonly used format and have it transferred to another organisation, where applicable",
              ]}
            />
            <p>
              To exercise any of these rights, contact us using the details below. We may need to
              confirm your identity before responding, and we will respond without undue delay.
            </p>
            <p>
              If you are unhappy with how we have handled your data, you have the right to lodge a
              complaint with the <strong>Nigeria Data Protection Commission (NDPC)</strong> at{" "}
              <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-blue underline underline-offset-4">
                ndpc.gov.ng
              </a>
              . We would appreciate the chance to resolve your concern first, so please contact us.
            </p>
          </Section>

          <Section id="children" title="11. Children">
            <p>
              Our services are intended for adults. We do not knowingly collect personal data from
              anyone under 18 without the consent of a parent or guardian. If you believe a child
              has shared personal data with us, please contact us and we will delete it.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to this policy">
            <p>
              We may update this policy from time to time. The latest version will always be
              available on this page, with the effective date shown at the top.
            </p>
          </Section>

          <Section id="contact" title="13. Contact us">
            <p>For any questions about this policy or your personal data, contact us:</p>
            <div className="rounded-2xl border border-gray-100 bg-brand-light p-6">
              <p className="font-bold text-ink">{COMPANY.legalName}</p>
              <p className="mt-1">{COMPANY.address}</p>
              <p className="mt-3">
                Email:{" "}
                <a href={`mailto:${COMPANY.privacyEmail}`} className="font-semibold text-brand-blue">
                  {COMPANY.privacyEmail}
                </a>
              </p>
              <p className="mt-1">
                Phone:{" "}
                <a href="tel:+2347068057446" className="font-semibold text-brand-blue">{COMPANY.phone}</a>
              </p>
            </div>
          </Section>
        </article>
      </div>
    </>
  );
}