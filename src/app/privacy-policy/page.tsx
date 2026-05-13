import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | [Company Name]",
  description:
    "Our privacy policy details how [Company Name] collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Introduction",
    body: "[Company Name] (\"Company,\" \"we,\" \"us,\" or \"our\") is committed to protecting the privacy of visitors to our website and clients who use our services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or use our services.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect contact information (name, email, phone, organization name), professional information (specialty, practice size, billing software used), website usage data (pages visited, time on site, browser type, IP address via cookies and analytics), and communications (messages sent through our contact forms or email).",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information to provide, operate, and improve our medical billing services; respond to inquiries and schedule consultations; send service updates, newsletters, and marketing communications (with consent); comply with legal and regulatory requirements; and analyze website performance.",
  },
  {
    title: "4. HIPAA and Protected Health Information (PHI)",
    body: "For clients whose services involve PHI, our handling of PHI is governed by our Business Associate Agreement (BAA) and applicable HIPAA regulations. Our website contact forms do not collect PHI. Clients should not submit PHI through web forms.",
  },
  {
    title: "5. Cookies and Tracking",
    body: "Our website uses cookies and similar tracking technologies for analytics and functionality. You may control cookie settings through your browser. We use analytics tools to understand website usage patterns. No PHI is collected through website analytics.",
  },
  {
    title: "6. Third-Party Sharing",
    body: "We do not sell, rent, or trade your personal information. We may share information with trusted service providers who assist in our operations (email platforms, CRM systems, analytics tools) who are contractually required to protect your data.",
  },
  {
    title: "7. Data Retention",
    body: "We retain website inquiry data for a limited period necessary to fulfill the purposes outlined in this policy. Client billing and clinical data retention follows HIPAA requirements (minimum 6 years from creation or last effective date).",
  },
  {
    title: "8. Your Rights",
    body: "You have the right to access your personal data, correct inaccurate information, request deletion (subject to legal retention requirements), and opt out of marketing communications.",
  },
  {
    title: "9. Contact for Privacy Matters",
    body: "Privacy Officer: [NAME] | Email: privacy@[domain].com | Phone: [(XXX) XXX-XXXX]",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Effective Date: [DATE] | Last Updated: [DATE]"
        crumbs={[{ label: "Privacy Policy" }]}
        ctaLabel="Contact Privacy Officer →"
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