import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

/* Section 4.0 SEO */
export const metadata: Metadata = {
  title: "About [Company Name] | Expert Medical Billing & RCM Company | USA",
  description:
    "Learn about [Company Name] — a dedicated medical billing and revenue cycle management company with 15+ years of experience serving healthcare providers across the United States.",
  keywords: [
    "about medical billing company",
    "RCM company USA",
    "healthcare billing experts",
    "HIPAA compliant RCM",
  ],
};

/* Section 4.4 — Core Values */
const values = [
  { title: "Integrity",   desc: "We operate with complete transparency in every billing decision, report, and communication." },
  { title: "Excellence",  desc: "We hold ourselves to the highest standards of coding accuracy, compliance, and client service." },
  { title: "Innovation",  desc: "We continuously invest in technology that makes our clients more efficient and profitable." },
  { title: "Compliance",  desc: "HIPAA and payer compliance are non-negotiable foundations of everything we do." },
  { title: "Partnership", desc: "We treat every client's success as our own. When you grow, we grow." },
];

/* Section 4.5 — Company Milestones (7 entries per spec) */
const milestones = [
  { year: "[YEAR]", text: "Company founded; first client onboarded in [State]" },
  { year: "[YEAR]", text: "Expanded to serve 50+ healthcare providers; HIPAA compliance certification achieved" },
  { year: "[YEAR]", text: "Launched proprietary real-time reporting dashboard" },
  { year: "[YEAR]", text: "Crossed $[X]M in monthly claims processed" },
  { year: "[YEAR]", text: "Expanded Virtual Medical Assistant division" },
  { year: "[YEAR]", text: "Achieved 500+ active client milestone; 98%+ collection rate maintained" },
  { year: "[YEAR]", text: "Named [Award/Recognition Placeholder] by [Publication]" },
];

/* Section 4.6 — Certifications & Accreditations (6 entries per spec) */
const certifications = [
  { icon: "🎓", name: "AAPC", full: "American Academy of Professional Coders — Certified Staff" },
  { icon: "📋", name: "AHIMA", full: "American Health Information Management Association — Certified Staff" },
  { icon: "🔒", name: "HIPAA", full: "HIPAA Compliance Certification" },
  { icon: "🛡️", name: "SOC 2", full: "SOC 2 Type II Compliant" },
  { icon: "⭐", name: "Additional", full: "[Additional Certification Placeholder]" },
  { icon: "🏆", name: "BBB", full: "Better Business Bureau — A+ Rating [Placeholder]" },
];

/* Section 4.7 — Leadership Team (5 profiles per spec) */
const leadership = [
  { initials: "CE", name: "[Name]", title: "Chief Executive Officer",      bio: "20+ years in healthcare revenue cycle management.",        creds: "CHFP, MBA" },
  { initials: "CO", name: "[Name]", title: "Chief Operating Officer",      bio: "Expert in large-scale RCM operations and technology.",     creds: "CPC, CMPE" },
  { initials: "CT", name: "[Name]", title: "Chief Technology Officer",     bio: "Healthcare IT expert with background in EHR integrations.",creds: "CPHIT" },
  { initials: "VC", name: "[Name]", title: "VP of Coding & Compliance",    bio: "AAPC/AHIMA certified with 15+ years specialty coding.",    creds: "CPC, CCS, CPMA" },
  { initials: "VS", name: "[Name]", title: "VP of Client Success",         bio: "Dedicated to client satisfaction and revenue performance.",creds: "CMPE" },
];

/* Section 4.8 — Why Providers Trust [Company Name] */
const trustReasons = [
  "Every client has a dedicated, named account manager",
  "We respond to client inquiries within 2 business hours",
  "Zero-tolerance policy for coding errors or HIPAA violations",
  "Monthly performance reviews with every client",
  "No long-term contracts — results speak for themselves",
  "US-based quality oversight with 24/7 support infrastructure",
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* 4.2 Hero Section */}
      <PageHero
        eyebrow="About Us"
        title="We're More Than a Billing Company"
        subtitle="We are your strategic revenue partner — a team of certified healthcare billing professionals dedicated to maximizing every dollar your practice earns, while protecting every piece of patient data we touch."
        crumbs={[{ label: "About Us" }]}
      />

      {/* 4.3 Company Story */}
      <section className="py-16 bg-white" id="our-story">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Company Story</p>
          <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-6">
            Our Story
          </h2>
          <div className="prose text-body leading-relaxed space-y-4">
            <p>
              [Company Name] was founded in [YEAR] with a singular mission: to give
              healthcare providers the financial clarity and operational efficiency they
              deserve. After witnessing the massive revenue losses that independent
              practices and growing health systems experienced due to billing inefficiencies,
              our founders — healthcare industry veterans with [X] years of combined
              experience — built a company that combines deep clinical coding expertise
              with enterprise technology.
            </p>
            <p>
              From our first client — a small family medicine practice in [City, State] — to
              serving 500+ providers across the country, our commitment to accuracy,
              compliance, and client success has never wavered. Today, [Company Name] is
              recognized as one of the most trusted Medical Billing and RCM partners in
              the United States.
            </p>
          </div>
        </div>
      </section>

      {/* 4.4 Mission, Vision & Values */}
      <section className="py-16 bg-ice" id="mission">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              What Drives Us
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Mission, Vision &amp; Values
            </h2>
          </div>

          {/* Mission + Vision */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-cyan shadow-card">
              <h3 className="font-bold text-navy text-xl font-[family-name:var(--font-poppins)] mb-3">
                🎯 Mission
              </h3>
              <p className="text-body leading-relaxed">
                To empower healthcare providers with the financial tools, expertise, and
                technology needed to maximize revenue, streamline operations, and deliver
                better patient outcomes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-teal shadow-card">
              <h3 className="font-bold text-navy text-xl font-[family-name:var(--font-poppins)] mb-3">
                🚀 Vision
              </h3>
              <p className="text-body leading-relaxed">
                To be the most trusted revenue cycle management partner for every
                healthcare provider in America — regardless of size, specialty, or location.
              </p>
            </div>
          </div>

          {/* 5 Core Values */}
          <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6 text-center">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-xl p-5 text-center card-hover border-l-4 border-l-cyan"
              >
                <h4 className="font-bold text-navy mb-2 font-[family-name:var(--font-poppins)]">
                  {v.title}
                </h4>
                <p className="text-body text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Company Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Our Journey
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Company Milestones
            </h2>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-5 bg-ice rounded-xl p-5 border-l-4 border-l-cyan">
                <div className="bg-navy text-white font-bold text-sm rounded-lg px-4 py-2 whitespace-nowrap font-[family-name:var(--font-poppins)]">
                  {m.year}
                </div>
                <p className="text-charcoal text-sm font-medium mt-2">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.6 Certifications & Accreditations */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Verified Credentials
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Certifications &amp; Accreditations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div
                key={c.full}
                className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-4 card-hover border-l-4 border-l-teal"
              >
                <div className="text-3xl shrink-0">{c.icon}</div>
                <div>
                  <div className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-1">
                    ✓ {c.name}
                  </div>
                  <p className="text-body text-sm leading-snug">{c.full}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about/certifications"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy t-cta px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              ▶ View All Certifications →
            </Link>
          </div>
        </div>
      </section>

      {/* 4.7 Leadership Team Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Leadership Team
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-3">
              The People Driving Healthcare Revenue Forward
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Healthcare industry veterans with decades of combined experience in
              revenue cycle management, coding, technology, and HIPAA compliance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {leadership.map((m) => (
              <div
                key={m.title}
                className="bg-ice border border-gray-100 rounded-2xl p-6 card-hover border-l-4 border-l-cyan text-center"
              >
                <div className="w-16 h-16 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-[family-name:var(--font-poppins)]">
                    {m.initials}
                  </span>
                </div>
                <div className="font-bold text-navy font-[family-name:var(--font-poppins)]">
                  {m.name}
                </div>
                <div className="text-cyan text-xs font-semibold mt-1 mb-1">{m.title}</div>
                <div className="text-body text-[10px] uppercase tracking-widest mb-3">
                  {m.creds}
                </div>
                <p className="text-body text-xs leading-snug">{m.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 bg-cyan text-white t-cta px-6 py-3 rounded-lg hover:bg-[#0090B0] transition-colors"
            >
              ▶ Meet Our Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* 4.8 Why Providers Trust [Company Name] */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Why We're Different
            </p>
            <h2 className="t-h2-section text-white font-[family-name:var(--font-poppins)] mb-4" style={{ color: "#fff" }}>
              Why Providers Trust [Company Name]
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              We understand that outsourcing your revenue cycle is a significant
              decision. Here is what sets us apart:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {trustReasons.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-cyan font-bold mt-0.5">✓</span>
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 bg-cyan text-white t-cta px-6 py-3 rounded-lg hover:bg-[#0090B0] transition-colors"
            >
              ▶ Meet Our Team →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}