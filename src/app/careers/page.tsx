"use client";
import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision benefits",
  "Remote and hybrid work flexibility",
  "Continuing education and certification reimbursement (AAPC/AHIMA)",
  "Career advancement pathways — 80% of leadership promoted internally",
  "Collaborative, respectful work environment",
  "Cutting-edge technology and tools",
  "Paid time off and flexible scheduling",
];

const roles = [
  { title: "Certified Professional Coder (CPC)", dept: "Medical Coding", type: "Full-time / Remote", req: "AAPC CPC, 2+ yrs experience" },
  { title: "Medical Billing Specialist", dept: "Billing Operations", type: "Full-time / Remote", req: "2+ yrs billing, EHR knowledge" },
  { title: "RCM Account Manager", dept: "Client Success", type: "Full-time / Hybrid", req: "3+ yrs RCM, client management" },
  { title: "Denial Management Specialist", dept: "AR & Denials", type: "Full-time / Remote", req: "2+ yrs denial management, appeals" },
  { title: "Credentialing Coordinator", dept: "Credentialing", type: "Full-time / Remote", req: "1+ yr credentialing, CAQH" },
  { title: "Virtual Medical Assistant", dept: "Healthcare BPO", type: "Full-time / Remote", req: "Healthcare admin experience" },
  { title: "Prior Authorization Specialist", dept: "Clinical Operations", type: "Full-time / Remote", req: "Prior auth experience" },
  { title: "RCM Implementation Specialist", dept: "Technology", type: "Full-time / Hybrid", req: "EHR integration, project management" },
];

export default function CareersPage() {
  const [filter, setFilter] = useState<"all" | "remote" | "hybrid">("all");
  const [submitted, setSubmitted] = useState(false);

  const filtered = roles.filter((r) =>
    filter === "all" ? true : r.type.toLowerCase().includes(filter)
  );

  return (
    <PageLayout>
      <PageHero
        eyebrow="Careers"
        title="Build Your Healthcare Career with the Best"
        subtitle="At [Company Name], we invest in people who are passionate about healthcare, committed to excellence, and ready to grow. Join a team where your expertise is recognized and your work makes a real difference."
        crumbs={[{ label: "Careers" }]}
        ctaLabel="See Open Roles ↓"
        ctaHref="#open-roles"
        secondaryCtaLabel="Submit Your Resume"
        secondaryCtaHref="#apply"
      />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Why Work Here
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Benefits &amp; Culture
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="bg-ice border border-gray-100 rounded-xl p-5 flex items-start gap-3 card-hover border-l-4 border-l-cyan"
              >
                <span className="text-teal font-bold mt-0.5">✓</span>
                <span className="text-charcoal text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 bg-ice" id="open-roles">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Open Roles
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Find Your Next Role
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {(["all", "remote", "hybrid"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${
                  filter === f
                    ? "bg-navy text-white"
                    : "bg-white text-charcoal border border-gray-200 hover:border-cyan"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((r) => (
              <div
                key={r.title}
                className="bg-white border border-gray-100 rounded-xl p-5 card-hover border-l-4 border-l-cyan grid lg:grid-cols-[2fr_1fr_1fr_auto] gap-3 items-center"
              >
                <div>
                  <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)]">
                    {r.title}
                  </h3>
                  <p className="text-body text-xs">{r.dept}</p>
                </div>
                <span className="text-cyan text-xs font-semibold bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20 inline-block w-fit">
                  {r.type}
                </span>
                <span className="text-body text-xs">{r.req}</span>
                <a
                  href="#apply"
                  className="bg-navy text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-blue-mid transition-colors text-center"
                >
                  Apply →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 bg-white" id="apply">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Apply
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Submit Your Application
            </h2>
          </div>

          {submitted ? (
            <div className="bg-ice rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-2">
                Application Received
              </h3>
              <p className="text-body">
                Thanks for your interest. Our HR team will review your application and reach
                out within 5 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-ice rounded-2xl p-7 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Full Name *</label>
                  <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Email *</label>
                  <input type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Phone *</label>
                <input type="tel" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Position Applying For *</label>
                <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                  <option value="">Select...</option>
                  {roles.map((r) => <option key={r.title}>{r.title}</option>)}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Years of Experience *</label>
                  <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                    <option value="">Select...</option>
                    <option>0–1</option>
                    <option>2–3</option>
                    <option>4–6</option>
                    <option>7–10</option>
                    <option>10+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Work Preference *</label>
                  <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                    <option value="">Select...</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-Site</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">LinkedIn Profile URL (optional)</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Cover Letter / Why You're a Fit</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
              </div>
              <button type="submit" className="w-full bg-cyan text-white font-bold py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors text-sm">
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>

      <CtaBanner
        title="Don't See a Role That Fits?"
        subtitle="We're always interested in hearing from exceptional healthcare professionals. Send us your resume anytime."
        primaryLabel="Email careers@[domain].com →"
        primaryHref="mailto:careers@[domain].com"
        secondaryLabel="About Our Team"
        secondaryHref="/about/leadership"
      />
    </PageLayout>
  );
}