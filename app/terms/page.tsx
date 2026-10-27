import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection, LegalList } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when you use the AIG Global Services website and services.",
};

// ⚠️ Replace every [bracketed] item before launch
const TERMS = {
  effectiveDate: "[Date these terms take effect]",
  legalName: "[Registered company name]",
  rcNumber: "[RC number]",
  address: "[Registered office address], Abuja, Nigeria",
  email: "info@aigglobalservices.com",
  phone: "0706 805 7446",
};

const contents: [string, string][] = [
  ["about", "About these terms"],
  ["services", "Our services"],
  ["prices", "Prices and availability"],
  ["payments", "Payments"],
  ["xchange", "Exchange services"],
  ["website", "Using our website"],
  ["ip", "Intellectual property"],
  ["links", "Third-party links"],
  ["liability", "Limitation of liability"],
  ["changes", "Changes to these terms"],
  ["law", "Governing law"],
  ["contact", "Contact us"],
];

const link = "font-semibold text-brand-blue underline underline-offset-4";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="The terms that apply when you use our website and services."
      effectiveDate={TERMS.effectiveDate}
      contents={contents}
    >
      <LegalSection id="about" title="1. About these terms">
        <p>
          This website is operated by {TERMS.legalName} (RC {TERMS.rcNumber}), with its registered
          office at {TERMS.address} (&quot;AIG Global Services&quot;, &quot;we&quot;,
          &quot;us&quot;). By using this website, you agree to these terms. If you do not agree,
          please do not use the website.
        </p>
      </LegalSection>

      <LegalSection id="services" title="2. Our services">
        <p>
          AIG Global Services operates through six divisions: AIG Gadgets, AIG Homes, AIG Autos,
          AIG Xchange, Solar Installation and Industrial Machines. The information on this website
          is a general description of what we offer and does not form a contract.
        </p>
        <p>
          The specific terms of any purchase or service, including price, scope, delivery and
          warranty, are those set out in the written quote, invoice or agreement we provide for it.
          Our{" "}
          <Link href="/refund-policy" className={link}>Refund Policy</Link> also applies.
        </p>
      </LegalSection>

      <LegalSection id="prices" title="3. Prices and availability">
        <LegalList
          items={[
            "Prices are confirmed with you directly and may change until they are agreed in writing.",
            "Items shown on the website, such as vehicles, properties and devices, are subject to availability and may be sold or let without notice.",
            "We take care to keep information accurate, but descriptions and images are for guidance. Please confirm any details that matter to you before purchasing.",
          ]}
        />
      </LegalSection>

      <LegalSection id="payments" title="4. Payments">
        <p>
          Only make payments to account details that we have confirmed to you in writing. If you
          are ever unsure whether a request for payment genuinely comes from us, call us on{" "}
          <a href="tel:+2347068057446" className={link}>{TERMS.phone}</a> before paying. We are
          not responsible for payments made to accounts we have not confirmed.
        </p>
      </LegalSection>

      <LegalSection id="xchange" title="5. Exchange services">
        <LegalList
          items={[
            "Exchange rates change frequently and are confirmed with you at the time of each transaction.",
            "We may need to verify your identity, and may decline or delay a transaction where required by law or where we have reasonable concerns about it.",
            "Completed exchanges and transfers cannot be reversed.",
          ]}
        />
      </LegalSection>

      <LegalSection id="website" title="6. Using our website">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Use the website for any unlawful or fraudulent purpose",
            "Attempt to gain unauthorised access to the website or its systems",
            "Pretend to be AIG Global Services or any of our staff",
          ]}
        />
      </LegalSection>

      <LegalSection id="ip" title="7. Intellectual property">
        <p>
          The AIG Global Services name, logo and the content of this website belong to us or our
          licensors. You may not copy, reproduce or use them for commercial purposes without our
          written permission.
        </p>
      </LegalSection>

      <LegalSection id="links" title="8. Third-party links">
        <p>
          Our website links to services run by others, such as WhatsApp, our social media pages and
          aiggadgets.com. We are not responsible for the content or privacy practices of websites
          we do not control.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitation of liability">
        <p>
          The information on this website is provided for general purposes. To the extent permitted
          by law, we are not liable for any loss arising from your use of, or reliance on, the
          website. Nothing in these terms limits any liability that cannot be limited under
          Nigerian law, or your rights as a consumer.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="10. Changes to these terms">
        <p>
          We may update these terms from time to time. The latest version will always be available
          on this page, with the effective date shown at the top.
        </p>
      </LegalSection>

      <LegalSection id="law" title="11. Governing law">
        <p>
          These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute will
          be subject to the jurisdiction of the courts of the Federal Capital Territory, Abuja.
        </p>
        <p>
          How we use your personal data is explained in our{" "}
          <Link href="/privacy-policy" className={link}>Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact us">
        <div className="rounded-2xl border border-gray-100 bg-brand-light p-6">
          <p className="font-bold text-ink">{TERMS.legalName}</p>
          <p className="mt-1">{TERMS.address}</p>
          <p className="mt-3">
            Email:{" "}
            <a href={`mailto:${TERMS.email}`} className="font-semibold text-brand-blue">{TERMS.email}</a>
          </p>
          <p className="mt-1">
            Phone:{" "}
            <a href="tel:+2347068057446" className="font-semibold text-brand-blue">{TERMS.phone}</a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}