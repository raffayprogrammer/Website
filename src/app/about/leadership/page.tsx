import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Leadership Team | [Company Name] Medical Billing & RCM",
  description:
    "Meet the leadership team behind [Company Name] — healthcare industry veterans driving the future of revenue cycle management.",
};

const team = [
  {
    name: "[Full Name]",
    title: "Chief Executive Officer",
    credentials: "CHFP, MBA",
    bio: "20+ years in healthcare revenue cycle management. Former VP of RCM at [Healthcare Org]. Drives the strategic vision and growth of [Company Name].",
    initials: "CE",
  },
  {
    name: "[Full Name]",
    title: "Chief Operating Officer",
    credentials: "CPC, CMPE",
    bio: "Expert in large-scale RCM operations and technology. Leads day-to-day operations across all client engagements and service lines.",
    initials: "CO",
  },
  {
    name: "[Full Name]",
    title: "Chief Technology Officer",
    credentials: "CPHIT",
    bio: "Healthcare IT expert with deep background in EHR integrations, HIPAA-compliant infrastructure, and AI-assisted coding tools.",
    initials: "CT",
  },
  {
    name: "[Full Name]",
    title: "VP of Coding & Compliance",
    credentials: "CPC, CCS, CPMA",
    bio: "AAPC/AHIMA certified with 15+ years of specialty coding leadership. Oversees coding accuracy and compliance audits.",
    initials: "VC",
  },
  {
    name: "[Full Name]",
    title: "VP of Client Success",
    credentials: "CMPE",
    bio: "Dedicated to client satisfaction and revenue performance. Leads our account management and onboarding teams.",
    initials: "VS",
  },
  {
    name: "[Full Name]",
    title: "HIPAA Security & Privacy Officer",
    credentials: "CHPS, CISM",
    bio: "Oversees HIPAA compliance program, security audits, breach response, and BAA management across all client engagements.",
    initials: "SP",
  },
];

export default function LeadershipPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Leadership"
        title="Meet the Team Driving Healthcare Revenue Forward"
        subtitle="Healthcare industry veterans with decades of combined experience in revenue cycle management, medical coding, healthcare technology, and HIPAA compliance."
        crumbs={[{ label: "About Us", href: "/about" }, { label: "Leadership" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.title}
                className="bg-ice border border-gray-100 rounded-2xl p-7 card-hover border-l-4 border-l-cyan"
              >
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-2xl font-[family-name:var(--font-poppins)]">
                    {m.initials}
                  </span>
                </div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-1">
                  {m.name}
                </h3>
                <p className="text-cyan font-semibold text-sm mb-1">{m.title}</p>
                <p className="text-body text-xs uppercase tracking-widest mb-3">
                  {m.credentials}
                </p>
                <p className="text-body text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to Work With Our Team?"
        subtitle="Schedule a free consultation and see how our leadership-driven approach can transform your revenue cycle."
        primaryLabel="Schedule a Consultation →"
        primaryHref="/contact"
        secondaryLabel="Join Our Team"
        secondaryHref="/careers"
      />
    </PageLayout>
  );
}