import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "EHR/EMR Integrations | 50+ Healthcare Systems | [Company Name]",
  description:
    "Seamlessly integrated with 50+ EHR/EMR systems, practice management platforms, clearinghouses, and patient payment tools.",
};

const groups = {
  "EHR / EMR Systems": [
    "Epic", "Cerner (Oracle Health)", "Athenahealth", "eClinicalWorks", "Meditech",
    "Allscripts", "NextGen Healthcare", "Greenway Health", "Practice Fusion",
    "Kareo", "DrChrono", "ModMed", "ChARM EHR", "SimplePractice", "TherapyNotes",
  ],
  "Practice Management Systems": [
    "AdvancedMD", "Brightree", "CollaborateMD", "Lytec", "NueMD",
    "Office Ally", "WebPT", "Kareo PM", "Practice Fusion PM", "Netsmart",
  ],
  Clearinghouses: [
    "Change Healthcare", "Availity", "Waystar", "Optum360", "Trizetto", "Emdeon", "Office Ally Clearinghouse",
  ],
  "Patient Payment Platforms": [
    "Stripe", "Square", "InstaMed", "PaySimple", "Rectangle Health", "Updox",
  ],
  "Coding Support Tools": [
    "3M CodeFinder", "Optum Encoder Pro", "TruCode", "Find-A-Code", "Codify (AAPC)",
  ],
};

export default function IntegrationsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Integrations"
        title="Connected to the Tools You Already Use"
        subtitle="No disruption. No data migration headaches. We integrate seamlessly with the EHR/EMR systems, practice management platforms, clearinghouses, and payment tools you already rely on."
        crumbs={[
          { label: "Technology", href: "/technology" },
          { label: "Integrations" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {Object.entries(groups).map(([category, names]) => (
            <div key={category}>
              <h3 className="text-navy font-bold text-xl font-[family-name:var(--font-poppins)] mb-2">
                {category}
              </h3>
              <p className="text-body text-sm mb-5">
                {names.length} supported systems in this category
              </p>
              <div className="flex flex-wrap gap-2.5">
                {names.map((name) => (
                  <div
                    key={name}
                    className="bg-ice border border-gray-100 rounded-lg px-4 py-2.5 text-sm font-medium text-charcoal hover:border-cyan hover:text-cyan transition-colors"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Don't See Your System?"
        subtitle="We integrate with 50+ platforms and continuously add new ones. Contact us to confirm support for your specific software."
        primaryLabel="Ask About Your System →"
        primaryHref="/contact"
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </PageLayout>
  );
}