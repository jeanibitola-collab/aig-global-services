import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection, LegalList } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Returns, refunds and warranty information for AIG Global Services and its divisions.",
};

// ⚠️ The client must decide these values. Replace every [bracketed] item before launch.
const POLICY = {
  effectiveDate: "[Date this policy takes effect]",
  gadgetsReportDays: "[7]", // days to report a faulty or wrong device
  repairWarrantyDays: "[30]", // warranty on repair work
  responseDays: "[3]", // working days to respond to a refund request
  refundDays: "[14]", // working days to process an approved refund
  email: "info@aigglobalservices.com",
  phone: "0706 805 7446",
};

const contents: [string, string][] = [
  ["overview", "Overview"],
  ["gadgets", "AIG Gadgets"],
  ["autos", "AIG Autos"],
  ["homes", "AIG Homes"],
  ["xchange", "AIG Xchange"],
  ["solar-industrial", "Solar and Industrial Machines"],
  ["how-to", "How to request a refund"],
  ["contact", "Contact us"],
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="How returns, refunds and warranties work across our divisions."
      effectiveDate={POLICY.effectiveDate}
      contents={contents}
    >
      <LegalSection id="overview" title="1. Overview">
        <p>
          This policy applies to products and services purchased from AIG Global Services and its
          divisions. Because each division offers very different products and services, the terms
          below are set out division by division.
        </p>
        <p>
          Where you receive a written invoice, quote or agreement for a specific purchase, the
          terms in that document apply to that purchase. Nothing in this policy affects your
          rights under Nigerian consumer protection law, including the Federal Competition and
          Consumer Protection Act 2018.
        </p>
      </LegalSection>

      <LegalSection id="gadgets" title="2. AIG Gadgets">
        <p>
          If a device you bought from us is faulty or is not what you ordered, please tell us
          within <strong>{POLICY.gadgetsReportDays} days</strong> of receiving it. We will inspect
          the device and, where the fault is confirmed, repair it, replace it or refund you.
        </p>
        <p>To help us process your request, please provide:</p>
        <LegalList
          items={[
            "Your receipt or proof of purchase",
            "The device with its original packaging and accessories",
            "A description of the fault",
          ]}
        />
        <p>This policy does not cover:</p>
        <LegalList
          items={[
            "Physical, liquid or accidental damage after purchase",
            "Damage caused by misuse, unauthorised repairs or software modifications",
            "A change of mind, unless agreed with us in writing at the time of purchase",
          ]}
        />
        <p>
          <strong>Repairs.</strong> Repair work is covered for{" "}
          <strong>{POLICY.repairWarrantyDays} days</strong>. If the same fault returns within that
          period, we will fix it again at no charge for labour. This does not cover new faults or
          damage unrelated to the original repair.
        </p>
      </LegalSection>

      <LegalSection id="autos" title="3. AIG Autos">
        <p>
          We encourage every buyer to inspect and test drive a vehicle before completing a
          purchase. Any concerns about a vehicle&apos;s condition should be raised before you take
          delivery.
        </p>
        <p>
          The terms for deposits, vehicle procurement (sourcing a vehicle on your behalf) and
          trade-ins, including whether a deposit is refundable, are set out in the written agreement
          for your purchase.
        </p>
      </LegalSection>

      <LegalSection id="homes" title="4. AIG Homes">
        <p>
          Fees for inspections, agency services, legal documentation and property management are
          agreed with you in writing before any work begins, together with any conditions for
          refunds. Rent and security deposits are governed by your tenancy agreement.
        </p>
      </LegalSection>

      <LegalSection id="xchange" title="5. AIG Xchange">
        <p>
          The exchange rate and amount are confirmed with you before every transaction. Once an
          exchange or transfer has been completed, it cannot be reversed.
        </p>
        <LegalList
          items={[
            "If we are unable to complete a transaction, any funds you have sent us for that transaction will be returned in full.",
            "We are not responsible for losses caused by incorrect account or wallet details provided by you, although we will help where we reasonably can.",
          ]}
        />
      </LegalSection>

      <LegalSection id="solar-industrial" title="6. Solar Installation and Industrial Machines">
        <p>
          Equipment such as solar panels, inverters, batteries and machines is covered by the
          manufacturer&apos;s warranty, the details of which we will provide with your purchase.
          The warranty on our installation work, and the terms for deposits on custom designs or
          special orders, are stated in your quote or agreement.
        </p>
      </LegalSection>

      <LegalSection id="how-to" title="7. How to request a refund">
        <p>Contact us with your name, proof of purchase, a description of the issue and any relevant photos.</p>
        <LegalList
          items={[
            <>We will respond within <strong>{POLICY.responseDays} working days</strong>.</>,
            <>Approved refunds are processed within <strong>{POLICY.refundDays} working days</strong>, normally to the original payment method.</>,
          ]}
        />
        <p>
          How we handle your personal data during this process is explained in our{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand-blue underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="contact" title="8. Contact us">
        <div className="rounded-2xl border border-gray-100 bg-brand-light p-6">
          <p>
            Email:{" "}
            <a href={`mailto:${POLICY.email}`} className="font-semibold text-brand-blue">{POLICY.email}</a>
          </p>
          <p className="mt-1">
            Phone:{" "}
            <a href="tel:+2347068057446" className="font-semibold text-brand-blue">{POLICY.phone}</a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}