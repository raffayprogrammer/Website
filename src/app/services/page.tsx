import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { services } from "@/data/services";

/* Section 5.0 — SEO */
export const metadata: Metadata = {
  title: "[Company Name] | Complete Medical Billing & RCM Services | USA",
  description:
    "Explore our comprehensive suite of medical billing, coding, RCM, denial management, credentialing, and virtual assistant services. HIPAA-compliant solutions for every healthcare provider.",
  keywords: [
    "medical billing services",
    "RCM services",
    "revenue cycle management",
    "denial management services",
    "healthcare credentialing",
    "prior authorization services",
  ],
};

/* Section 5.2 — Services Architecture (4 pillars per spec table) */
const pillars = [
  {
    title: "Front-End Revenue Cycle",
    outcome: "Prevent claim issues before they start",
    services: ["Eligibility Verification", "Prior Authorization", "Charge Entry"],
  },
  {
    title: "Mid-Cycle Revenue Management",
    outcome: "Accurate, compliant claims with faster reimbursements",
    services: ["Medical Coding", "Medical Billing", "Payment Posting"],
  },
  {
    title: "Back-End Revenue Optimization",
    outcome: "Maximum collection of all earned revenue",
    services: ["AR Recovery", "Denial Management", "Reporting & Analytics"],
  },
  {
    title: "Administrative & Operational",
    outcome: "Operational efficiency and provider enrollment",
    services: ["Credentialing", "Virtual Medical Assistants", "Healthcare BPO"],
  },
];

export default function ServicesOverview() {
  return (
    <PageLayout>
      {/* 5.1 Hero */}
      <PageHero
        eyebrow="Services"
        title="End-to-End Revenue Cycle Services — All Under One Roof"
        subtitle="Managing your revenue cycle shouldn't require 10 different vendors. [Company Name] delivers every service your practice needs — from the moment a patient schedules an appointment to the day that claim is fully adjudicated and paid."
        crumbs={[{ label: "Services" }]}
      />

      {/* 5.2 Services Architecture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Service Architecture
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-4">
              Four Integrated Pillars
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Our services are organized into integrated pillars covering every stage
              of your revenue cycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-ice border border-gray-100 rounded-2xl p-6 card-hover border-l-4 border-l-cyan flex flex-col"
              >
                <div className="text-cyan font-bold text-3xl font-[family-name:var(--font-poppins)] mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-2">
                  {p.title}
                </h3>
                <p className="text-body text-sm mb-4 leading-relaxed flex-1 italic">
                  {p.outcome}
                </p>
                <div>
                  <p className="text-cyan text-[10px] font-bold uppercase tracking-widest mb-2">
                    Services included
                  </p>
                  <ul className="space-y-1">
                    {p.services.map((s) => (
                      <li key={s} className="text-charcoal text-xs flex items-center gap-1">
                        <span className="text-cyan">›</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#all-services"
              className="inline-flex items-center gap-2 bg-navy text-white t-cta px-6 py-3 rounded-lg hover:bg-blue-mid transition-colors"
            >
              ▶ Explore Individual Services Below →
            </a>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-ice" id="all-services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              All Services
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Explore Each Service in Detail
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.values(services).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-gray-100 rounded-xl p-6 card-hover border-l-4 border-l-cyan group block"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                  {s.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-3">
                  {s.heroSubheadline.slice(0, 110)}…
                </p>
                <span className="text-cyan font-semibold text-sm group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}