import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { industries } from "@/data/industries";
import { specialtyTable } from "@/data/specialty-table";

/* Section 7.0 — SEO */
export const metadata: Metadata = {
  title: "Medical Billing for All Specialties & Practice Types | [Company Name]",
  description:
    "Specialty-specific medical billing and RCM services for physician practices, hospitals, telehealth, behavioral health, urgent care, and more across the United States.",
  keywords: [
    "specialty medical billing",
    "physician practice billing",
    "hospital billing services",
    "telehealth billing",
    "behavioral health billing",
  ],
};

export default function IndustriesOverview() {
  return (
    <PageLayout>
      {/* 7.1 Hero */}
      <PageHero
        eyebrow="Industries"
        title="One Partner. Every Specialty."
        subtitle="Healthcare billing is not one-size-fits-all. Every specialty has unique coding rules, payer requirements, and documentation standards. [Company Name] builds specialty-specific RCM programs for every practice type."
        crumbs={[{ label: "Industries" }]}
      />

      {/* Practice-type cards (deep-dive industry pages) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Practice Types
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Built for Every Healthcare Setting
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.values(industries).map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-ice border border-gray-100 rounded-2xl p-6 card-hover border-l-4 border-l-cyan group block"
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                  {ind.title}
                </h3>
                <p className="text-body text-xs leading-snug mb-3 line-clamp-3">
                  {ind.heroSubheadline.slice(0, 110)}…
                </p>
                <span className="text-cyan font-semibold text-sm group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7.2 Industries Served — full specialty matrix */}
      <section className="py-16 bg-ice">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Specialty Matrix
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-3">
              Industries Served
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              16+ specialties with dedicated coding, billing, and RCM expertise.
              Click any specialty with a deep-dive page for full details.
            </p>
          </div>

          {/* Desktop / tablet table */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
            <div className="grid grid-cols-[1.2fr_2fr_1.3fr] bg-navy text-white font-semibold text-sm px-6 py-4">
              <div>Industry / Specialty</div>
              <div>Unique Billing Challenges We Solve</div>
              <div>Key Services</div>
            </div>
            {specialtyTable.map((row, i) => (
              <div
                key={row.industry}
                className={`grid grid-cols-[1.2fr_2fr_1.3fr] px-6 py-4 border-t border-gray-100 text-sm items-center ${
                  i % 2 === 1 ? "bg-ice/40" : "bg-white"
                }`}
              >
                <div className="font-semibold text-navy">
                  {row.href ? (
                    <Link href={row.href} className="hover:text-cyan transition-colors">
                      {row.industry} <span className="text-cyan">→</span>
                    </Link>
                  ) : (
                    row.industry
                  )}
                </div>
                <div className="text-body text-sm leading-snug">{row.challenges}</div>
                <div className="text-charcoal text-xs">
                  {row.services.split(",").map((s, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-cyan/10 text-cyan border border-cyan/20 rounded-full px-2.5 py-0.5 mr-1.5 mb-1 font-semibold"
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="md:hidden space-y-4">
            {specialtyTable.map((row) => (
              <div
                key={row.industry}
                className="bg-white rounded-xl p-5 border-l-4 border-l-cyan border border-gray-100 shadow-card"
              >
                <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                  {row.href ? (
                    <Link href={row.href} className="hover:text-cyan">
                      {row.industry} →
                    </Link>
                  ) : (
                    row.industry
                  )}
                </h3>
                <p className="text-body text-xs uppercase tracking-widest font-semibold mb-1">
                  Challenges We Solve
                </p>
                <p className="text-body text-sm mb-3">{row.challenges}</p>
                <p className="text-body text-xs uppercase tracking-widest font-semibold mb-1">
                  Key Services
                </p>
                <div>
                  {row.services.split(",").map((s, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-cyan/10 text-cyan border border-cyan/20 rounded-full px-2.5 py-0.5 mr-1.5 mb-1 font-semibold text-xs"
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Don't See Your Specialty?"
        subtitle="We support 30+ medical specialties beyond what's listed here. Contact us to learn how we can serve your practice."
        primaryLabel="▶ Talk to an Expert →"
        primaryHref="/contact"
        secondaryLabel="▶ View All Services →"
        secondaryHref="/services"
      />
    </PageLayout>
  );
}
