import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Medical Billing for Every Specialty | [Company Name]",
  description:
    "Specialty-specific medical billing and RCM services for physician practices, hospitals, clinics, telehealth, behavioral health, urgent care, and more.",
};

export default function IndustriesOverview() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Industries"
        title="One Partner. Every Specialty."
        subtitle="Healthcare billing is not one-size-fits-all. Every specialty has unique coding rules, payer requirements, and documentation standards. We build specialty-specific RCM programs for every practice type."
        crumbs={[{ label: "Industries" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Built for Every Healthcare Setting
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Specialties &amp; Practice Types We Support
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(industries).map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-ice border border-gray-100 rounded-2xl p-7 card-hover border-l-4 border-l-cyan group block"
              >
                <div className="text-4xl mb-4">{ind.icon}</div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-2">
                  {ind.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-4">
                  {ind.heroSubheadline.slice(0, 130)}…
                </p>
                <span className="text-cyan font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't See Your Specialty?"
        subtitle="We support 30+ medical specialties beyond what's listed here. Contact us to learn how we can serve your practice."
        primaryLabel="Talk to an Expert →"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </PageLayout>
  );
}