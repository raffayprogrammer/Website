import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | [Company Name]",
  description:
    "Our privacy policy details how [Company Name] collects, uses, and protects your information in compliance with HIPAA and applicable privacy laws.",
};

type PolicySection =
  | { title: string; body: string; list?: never }
  | { title: string; list: string[]; body?: never };

const sections: PolicySection[] = [
  {
    title: "1. Introduction",
    body: '[Company Name] ("Company," "we," "us," or "our") is committed to protecting the privacy of visitors to our website and clients who use our services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website [www.companyname.com] or use our services.',
  },
  {
    title: "2. Information We Collect",
    list: [
      "Contact information: name, email, phone number, organization name",
      "Professional information: specialty, practice size, billing software used",
      "Website usage data: pages visited, time on site, browser type, IP address (via cookies and analytics)",
      "Communications: messages sent through our contact forms or email",
    ],
  },
  {
    title: "3. How We Use Your Information",
    list: [
      "To provide, operate, and improve our medical billing services",
      "To respond to inquiries and schedule consultations",
      "To send service updates, newsletters, and marketing communications (with consent)",
      "To comply with legal and regulatory requirements",
      "To analyze website performance and improve user experience",
    ],
  },
  {
    title: "4. HIPAA and Protected Health Information (PHI)",
    body: "For clients whose services involve Protected Health Information (PHI), our handling of PHI is governed by our Business Associate Agreement (BAA) and applicable HIPAA regulations. Our website contact forms do not collect PHI. Clients should not submit PHI through web forms.",
  },
  {
    title: "5. Cookies and Tracking",
    body: "Our website uses cookies and similar tracking technologies for analytics and functionality. You may control cookie settings through your browser. We use [Google Analytics / similar] to understand website usage patterns. No PHI is collected through website analytics.",
  },
  {
    title: "6. Third-Party Sharing",
    body: "We do not sell, rent, or trade your personal information. We may share information with trusted service providers who assist in our operations (email platforms, CRM systems, analytics tools) who are contractually required to protect your data.",
  },
  {
    title: "7. Data Retention",
    body: "We retain website inquiry data for [X] years. Client billing and clinical data retention follows HIPAA requirements (minimum 6 years from creation or last effective date).",
  },
  {
    title: "8. Your Rights",
    list: [
      "Right to access your personal data",
      "Right to correct inaccurate information",
      "Right to request deletion (subject to legal retention requirements)",
      "Right to opt out of marketing communications",
    ],
  },
  {
    title: "9. Contact for Privacy Matters",
    body: "Privacy Officer: [NAME] | Email: [privacy@companyname.com] | Phone: [PHONE]",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy — [Company Name]"
        subtitle="Effective Date: [DATE] | Last Updated: [DATE]"
        crumbs={[{ label: "Privacy Policy" }]}
        ctaLabel="Contact Privacy Officer →"
        ctaHref="/contact"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          {/* Legal counsel note */}
          <div className="bg-amber/10 border border-amber/30 rounded-xl px-6 py-4 mb-8 flex items-start gap-3">
            <span className="text-amber font-bold text-lg shrink-0 mt-0.5">⚠</span>
            <p className="text-charcoal text-sm leading-relaxed">
              <span className="font-semibold">Note:</span> The following is a structural template.
              Final Privacy Policy must be reviewed and approved by legal counsel.
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