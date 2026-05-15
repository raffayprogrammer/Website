import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | [Company Name]",
  description:
    "Terms and conditions governing the use of [Company Name]'s medical billing services and website.",
};

type TermsSection =
  | { title: string; body: string; list?: never }
  | { title: string; list: string[]; body?: never };

const sections: TermsSection[] = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing our website or using our services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.",
  },
  {
    title: "2. Services",
    body: "[Company Name] provides medical billing, coding, revenue cycle management, credentialing, and related healthcare administrative services as described in individual service agreements executed with each client.",
  },
  {
    title: "3. Client Obligations",
    list: [
      "Provide accurate and complete clinical and administrative documentation",
      "Maintain proper licensure and practice credentials",
      "Comply with all applicable healthcare laws and regulations",
      "Notify [Company Name] promptly of any changes affecting billing operations",
    ],
  },
  {
    title: "4. Confidentiality and HIPAA",
    body: "Services involving PHI are governed by a separate BAA. Both parties agree to maintain the confidentiality of all proprietary and patient-related information in compliance with HIPAA and applicable state laws.",
  },
  {
    title: "5. Payment Terms",
    body: "Invoices are issued monthly per the agreed billing model (percentage of collections, per-claim, or retainer). Payment is due within NET 30 days of invoice date.",
  },
  {
    title: "6. Limitation of Liability",
    body: "[Company Name]'s liability for any claim arising out of services shall not exceed the total fees paid by the client in the three (3) months preceding the claim. [Company Name] is not liable for indirect, consequential, or punitive damages.",
  },
  {
    title: "7. Intellectual Property",
    body: "All proprietary systems, workflows, reports, and technology provided by [Company Name] remain the intellectual property of [Company Name]. Clients may not reverse engineer, copy, or redistribute [Company Name] proprietary materials.",
  },
  {
    title: "8. Termination",
    body: "Either party may terminate services with [30/60] days written notice per the service agreement terms. [Company Name] reserves the right to terminate immediately for material breach, including non-payment or HIPAA violation.",
  },
  {
    title: "9. Governing Law",
    body: "These Terms shall be governed by the laws of the State of [STATE], without regard to conflict of law provisions.",
  },
  {
    title: "10. Contact",
    body: "Legal inquiries: [legal@companyname.com] | [PHONE]",
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions — [Company Name]"
        subtitle="Effective Date: [DATE]"
        crumbs={[{ label: "Terms & Conditions" }]}
        ctaLabel="Contact Legal →"
        ctaHref="/contact"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          {/* Legal counsel note */}
          <div className="bg-amber/10 border border-amber/30 rounded-xl px-6 py-4 mb-8 flex items-start gap-3">
            <span className="text-amber font-bold text-lg shrink-0 mt-0.5">⚠</span>
            <p className="text-charcoal text-sm leading-relaxed">
              <span className="font-semibold">Note:</span> The following is a structural template.
              Final Terms &amp; Conditions must be reviewed and approved by legal counsel.
            </p>
          </div>

          <div className="space-y-5">
            {sections.map((s) => (
              <div
                key={s.title}
                className="bg-ice rounded-2xl p-6 border-l-4 border-l-cyan"
              >
                <h2 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-3">
                  {s.title}
                </h2>
                {s.list ? (
                  <ul className="space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-body text-sm leading-relaxed">
                        <span className="text-cyan font-bold mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-body text-sm leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}