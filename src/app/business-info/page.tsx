import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Business Information Placeholders | Pre-Launch Checklist | [Company Name]",
  description:
    "Internal reference: all required business information fields that must be filled in before website launch. Replace every [PLACEHOLDER] with verified content.",
};

type Row = { field: string; placeholder: string; extra?: string };

const companyIdentity: Row[] = [
  { field: "Legal Company Name",        placeholder: "[LEGAL COMPANY NAME]" },
  { field: "Brand / Trade Name",        placeholder: "[BRAND NAME]" },
  { field: "Year Founded",              placeholder: "[YEAR]" },
  { field: "Headquarters City, State",  placeholder: "[CITY, STATE]" },
  { field: "Additional Office Locations",placeholder: "[CITY, STATE] | [CITY, STATE]" },
  { field: "Website URL",               placeholder: "[www.companyname.com]" },
  { field: "Google Business Profile URL",placeholder: "[URL]" },
  { field: "LinkedIn Company Page",     placeholder: "[URL]" },
  { field: "Twitter/X Handle",          placeholder: "[@handle]" },
  { field: "Facebook Page",             placeholder: "[URL]" },
];

const contactInfo: Row[] = [
  { field: "Main Phone Number",           placeholder: "[(XXX) XXX-XXXX]" },
  { field: "Toll-Free Number (if applicable)", placeholder: "[1-800-XXX-XXXX]" },
  { field: "General Email",              placeholder: "[info@domain.com]" },
  { field: "Sales Email",               placeholder: "[sales@domain.com]" },
  { field: "Support Email",             placeholder: "[support@domain.com]" },
  { field: "Compliance/Privacy Email",  placeholder: "[compliance@domain.com]" },
  { field: "Fax Number (if applicable)", placeholder: "[(XXX) XXX-XXXX]" },
  { field: "Business Hours",            placeholder: "[Mon–Fri, 8:00 AM – 6:00 PM, Timezone]" },
];

const keyStats: Row[] = [
  { field: "Years in Business",           placeholder: "[XX] Years" },
  { field: "Providers / Clients Served",  placeholder: "[XX]+ Providers" },
  { field: "Claims Processed Annually",   placeholder: "[X]M+ Claims" },
  { field: "Average Collection Rate",     placeholder: "[XX]%+" },
  { field: "Average Denial Rate for Clients", placeholder: "Under [X]%" },
  { field: "Average Days in AR (client avg)", placeholder: "[XX] Days" },
  { field: "Staff Size",                  placeholder: "[XX]+ Professionals" },
  { field: "EHR Integrations",           placeholder: "[XX]+ Systems" },
  { field: "Specialties Supported",      placeholder: "[XX]+ Specialties" },
  { field: "Client Satisfaction Score",  placeholder: "[X.X]/5 or [XX]%" },
];

const leadership: Row[] = [
  { field: "CEO Name & Credentials",        placeholder: "[FULL NAME], [Credentials]" },
  { field: "COO Name & Credentials",        placeholder: "[FULL NAME], [Credentials]" },
  { field: "CTO Name & Credentials",        placeholder: "[FULL NAME], [Credentials]" },
  { field: "VP Coding & Compliance",        placeholder: "[FULL NAME], [Credentials]" },
  { field: "VP Client Success",             placeholder: "[FULL NAME], [Credentials]" },
  { field: "Privacy Officer",               placeholder: "[FULL NAME]" },
  { field: "HIPAA Security Officer",        placeholder: "[FULL NAME]" },
];

type CertRow = { cert: string; body: string; url: string };
const certifications: CertRow[] = [
  { cert: "AAPC Membership",               body: "American Academy of Professional Coders",         url: "[URL]" },
  { cert: "AHIMA Membership",              body: "American Health Information Management Assoc.",    url: "[URL]" },
  { cert: "HIPAA Compliance Certification",body: "[Certifying Body]",                               url: "[URL]" },
  { cert: "SOC 2 Type II",                 body: "[Auditing Firm Name]",                            url: "[URL / available on request]" },
  { cert: "BBB Accreditation",             body: "Better Business Bureau",                          url: "[URL]" },
  { cert: "MGMA Membership",               body: "Medical Group Management Association",             url: "[URL]" },
  { cert: "HFMA Membership",               body: "Healthcare Financial Management Association",      url: "[URL]" },
  { cert: "Additional Award/Recognition",  body: "[Organization Name]",                             url: "[URL]" },
];

type TechRow = { category: string; systems: string };
const techPartners: TechRow[] = [
  {
    category: "EHR Systems (confirm active integrations)",
    systems: "Epic | Cerner | Athenahealth | eClinicalWorks | Kareo | DrChrono | Practice Fusion | NextGen | Meditech | Allscripts | ModMed",
  },
  {
    category: "PM Systems (confirm active integrations)",
    systems: "AdvancedMD | Brightree | CollaborateMD | Office Ally | WebPT | NueMD",
  },
];

function SectionTable({ cols, rows }: {
  cols: string[];
  rows: (string[])[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy text-white">
            {cols.map((c) => (
              <th key={c} className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-3.5 ${ci === 0 ? "font-semibold text-navy" : "text-body font-mono text-xs"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BusinessInfoPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Pre-Launch Checklist"
        title="Required Business Information Placeholders"
        subtitle="All placeholder values must be replaced with verified company information before publication."
        crumbs={[{ label: "Business Info" }]}
        ctaLabel="Contact Us →"
        ctaHref="/contact"
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Legal note */}
          <div className="bg-amber/10 border border-amber/30 rounded-xl px-6 py-4 mb-10 flex items-start gap-3">
            <span className="text-amber font-bold text-lg shrink-0 mt-0.5">⚠</span>
            <p className="text-charcoal text-sm leading-relaxed">
              <span className="font-semibold">Note:</span> The following information must be supplied
              by the company before website launch. Replace every{" "}
              <span className="font-mono text-amber font-semibold">[PLACEHOLDER]</span> with actual
              verified content.
            </p>
          </div>

          {/* 21.1 Company Identity */}
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
            21.1 Company Identity
          </h2>
          <SectionTable
            cols={["Field", "Placeholder"]}
            rows={companyIdentity.map((r) => [r.field, r.placeholder])}
          />

          {/* 21.2 Contact Information */}
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
            21.2 Contact Information
          </h2>
          <SectionTable
            cols={["Field", "Placeholder"]}
            rows={contactInfo.map((r) => [r.field, r.placeholder])}
          />

          {/* 21.3 Key Statistics */}
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
            21.3 Key Statistics <span className="text-body font-normal text-base">(For Homepage &amp; About Page)</span>
          </h2>
          <SectionTable
            cols={["Stat", "Placeholder"]}
            rows={keyStats.map((r) => [r.field, r.placeholder])}
          />

          {/* 21.4 Leadership */}
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
            21.4 Leadership Team Placeholders
          </h2>
          <SectionTable
            cols={["Field", "Placeholder"]}
            rows={leadership.map((r) => [r.field, r.placeholder])}
          />

          {/* 21.5 Certifications */}
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
            21.5 Certifications &amp; Credentials
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Certification</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Issuing Body</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Verification URL Placeholder</th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((c, idx) => (
                  <tr key={c.cert} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-3.5 font-semibold text-navy">{c.cert}</td>
                    <td className="px-5 py-3.5 text-charcoal text-xs">{c.body}</td>
                    <td className="px-5 py-3.5 font-mono text-body text-xs">{c.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 21.6 Technology & Integration Partners */}
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
            21.6 Technology &amp; Integration Partners
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Category</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">System Names to Confirm</th>
                </tr>
              </thead>
              <tbody>
                {techPartners.map((t, idx) => (
                  <tr key={t.category} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-3.5 font-semibold text-navy w-64">{t.category}</td>
                    <td className="px-5 py-3.5 text-charcoal text-xs leading-relaxed">{t.systems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Completion note */}
          <div className="bg-teal/10 border border-teal/30 rounded-xl px-6 py-4 flex items-start gap-3">
            <span className="text-teal font-bold text-lg shrink-0">✓</span>
            <p className="text-charcoal text-sm leading-relaxed">
              <span className="font-semibold">Before Launch:</span> All fields above must be populated
              with real, verified information. All placeholder values in{" "}
              <span className="font-mono text-amber font-semibold">[BRACKET]</span> must be replaced
              before publication. Document prepared for internal use by design, development, SEO, and
              marketing teams.
            </p>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}