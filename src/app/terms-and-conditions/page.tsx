import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | [Company Name]",
  description: "Terms and conditions governing the use of [Company Name]'s services and website.",
};

const sections = [
  { title: "1. Acceptance of Terms", body: "By accessing our website or using our services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services." },
  { title: "2. Services", body: "[Company Name] provides medical billing, coding, revenue cycle management, credentialing, and related healthcare administrative services as described in individual service agreements executed with each client." },
  { title: "3. Client Obligations", body: "Clients agree to provide accurate and complete clinical and administrative documentation, maintain proper licensure and practice credentials, comply with all applicable healthcare laws and regulations, and notify [Company Name] promptly of any changes affecting billing operations." },
  { title: "4. Confidentiality and HIPAA", body: "Services involving PHI are governed by a separate BAA. Both parties agree to maintain the confidentiality of all proprietary and patient-related information in compliance with HIPAA and applicable state laws." },
  { title: "5. Payment Terms", body: "Invoices are issued monthly per the agreed billing model (percentage of collections, per-claim, or retainer). Payment is due within NET 30 days of invoice date unless otherwise specified." },
  { title: "6. Limitation of Liability", body: "[Company Name]'s liability for any claim arising out of services shall not exceed the total fees paid by the client in the three (3) months preceding the claim. [Company Name] is not liable for indirect, consequential, or punitive damages." },
  { title: "7. Intellectual Property", body: "All proprietary systems, workflows, reports, and technology provided by [Company Name] remain the intellectual property of [Company Name]. Clients may not reverse engineer, copy, or redistribute proprietary materials." },
  { title: "8. Termination", body: "Either party may terminate services with 30/60 days written notice per the service agreement terms. [Company Name] reserves the right to terminate immediately for material breach, including non-payment or HIPAA violation." },
  { title: "9. Governing Law", body: "These Terms shall be governed by the laws of the State of [STATE], without regard to conflict of law provisions." },
  { title: "10. Contact", body: "Legal inquiries: legal@[domain].com | [(XXX) XXX-XXXX]" },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Effective Date: [DATE]"
        crumbs={[{ label: "Terms & Conditions" }]}
        ctaLabel="Contact Legal →"
        ctaHref="/contact"
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-7">
          {sections.map((s) => (
            <div key={s.title} className="bg-ice rounded-2xl p-6 border-l-4 border-l-cyan">
              <h2 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-3">
                {s.title}
              </h2>
              <p className="text-body text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}