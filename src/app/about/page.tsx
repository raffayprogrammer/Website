import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "About [Company Name] | Expert Medical Billing & RCM Company",
  description:
    "Learn about [Company Name] — a dedicated medical billing and revenue cycle management company with 15+ years of experience serving healthcare providers nationwide.",
};

const values = [
  { title: "Integrity", desc: "We operate with complete transparency in every billing decision, report, and communication." },
  { title: "Excellence", desc: "We hold ourselves to the highest standards of coding accuracy, compliance, and client service." },
  { title: "Innovation", desc: "We continuously invest in technology that makes our clients more efficient and profitable." },
  { title: "Compliance", desc: "HIPAA and payer compliance are non-negotiable foundations of everything we do." },
  { title: "Partnership", desc: "We treat every client's success as our own. When you grow, we grow." },
];

const milestones = [
  { year: "[YEAR]", text: "Company founded; first client onboarded in [State]" },
  { year: "[YEAR]", text: "Expanded to 50+ healthcare providers; HIPAA certification achieved" },
  { year: "[YEAR]", text: "Launched proprietary real-time reporting dashboard" },
  { year: "[YEAR]", text: "Crossed $[X]M in monthly claims processed" },
  { year: "[YEAR]", text: "Expanded Virtual Medical Assistant division" },
  { year: "[YEAR]", text: "Achieved 500+ active client milestone; 98%+ collection rate maintained" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="We're More Than a Billing Company"
        subtitle="We are your strategic revenue partner — a team of certified healthcare billing professionals dedicated to maximizing every dollar your practice earns, while protecting every piece of patient data we touch."
        crumbs={[{ label: "About Us" }]}
      />

      {/* Story */}
      <section className="py-16 bg-white" id="our-story">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Our Story</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6 leading-tight">
            Built by Healthcare Industry Veterans
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

      {/* Mission & Vision */}
      <section className="py-16 bg-ice" id="mission">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-cyan shadow-sm">
              <h3 className="font-bold text-navy text-xl font-[family-name:var(--font-poppins)] mb-3">
                🎯 Mission
              </h3>
              <p className="text-body leading-relaxed">
                To empower healthcare providers with the financial tools, expertise, and
                technology needed to maximize revenue, streamline operations, and deliver
                better patient outcomes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-teal shadow-sm">
              <h3 className="font-bold text-navy text-xl font-[family-name:var(--font-poppins)] mb-3">
                🚀 Vision
              </h3>
              <p className="text-body leading-relaxed">
                To be the most trusted revenue cycle management partner for every
                healthcare provider in America — regardless of size, specialty, or location.
              </p>
            </div>
          </div>

          {/* Values */}
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

      {/* Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
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

      {/* Why Trust Us */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Why We're Different
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-poppins)]">
              Why Providers Trust [Company Name]
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Every client has a dedicated, named account manager",
              "We respond to client inquiries within 2 business hours",
              "Zero-tolerance policy for coding errors or HIPAA violations",
              "Monthly performance reviews with every client",
              "No long-term contracts — results speak for themselves",
              "US-based quality oversight with 24/7 support infrastructure",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <span className="text-cyan font-bold mt-0.5">✓</span>
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 bg-cyan text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0090B0] transition-colors"
            >
              Meet Our Team →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}