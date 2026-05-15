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
  { title: "Certified Professional Coder (CPC)", dept: "Medical Coding", type: "Full-time / Remote", req: "AAPC CPC certification, 2+ years experience" },
  { title: "Medical Billing Specialist", dept: "Billing Operations", type: "Full-time / Remote", req: "2+ years billing experience, EHR knowledge" },
  { title: "RCM Account Manager", dept: "Client Success", type: "Full-time / Hybrid", req: "3+ years RCM, client management skills" },
  { title: "Denial Management Specialist", dept: "AR & Denials", type: "Full-time / Remote", req: "2+ years denial management, appeal writing" },
  { title: "Credentialing Coordinator", dept: "Credentialing", type: "Full-time / Remote", req: "1+ year credentialing, CAQH experience" },
  { title: "Virtual Medical Assistant", dept: "Healthcare BPO", type: "Full-time / Remote", req: "Healthcare admin experience, EMR knowledge" },
  { title: "Prior Authorization Specialist", dept: "Clinical Operations", type: "Full-time / Remote", req: "Prior auth experience, payer portal knowledge" },
  { title: "RCM Implementation Specialist", dept: "Technology", type: "Full-time / Hybrid", req: "EHR integration, project management skills" },
];

const certificationOptions = ["CPC", "CCS", "RHIA", "CHFP", "Other"];

export default function CareersContent() {
  const [filter, setFilter] = useState<"all" | "remote" | "hybrid">("all");
  const [submitted, setSubmitted] = useState(false);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);

  const filtered = roles.filter((r) =>
    filter === "all" ? true : r.type.toLowerCase().includes(filter)
  );

  const toggleCert = (cert: string) =>
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );

  return (
    <PageLayout>
      <PageHero
        eyebrow="Careers"
        title="Build Your Healthcare Career with the Best"
        subtitle="At [Company Name], we invest in people who are passionate about healthcare, committed to excellence, and ready to grow. Join a team where your expertise is recognized, your work makes a real difference, and your career has no ceiling."
        crumbs={[{ label: "Careers" }]}
        ctaLabel="See Open Roles ↓"
        ctaHref="#open-roles"
        secondaryCtaLabel="Submit Your Resume"
        secondaryCtaHref="#apply"
      />

      {/* Why Work Here */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Why Work Here
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Why Work at [Company Name]?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="bg-ice border border-gray-100 rounded-xl p-5 flex items-start gap-3 card-hover border-l-4 border-l-cyan"
              >
                <span className="text-teal font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-charcoal text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 bg-ice" id="open-roles">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Open Roles
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Find Your Next Role
            </h2>
            <p className="text-body text-sm mt-2">Placeholder — Updated Regularly</p>
          </div>

          {/* Filter buttons */}
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
                {f === "all" ? "All" : f === "remote" ? "Remote" : "Hybrid"}
              </button>
            ))}
          </div>

          {/* Roles table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-4 font-semibold font-[family-name:var(--font-poppins)]">Role</th>
                  <th className="text-left px-5 py-4 font-semibold font-[family-name:var(--font-poppins)]">Department</th>
                  <th className="text-left px-5 py-4 font-semibold font-[family-name:var(--font-poppins)]">Type</th>
                  <th className="text-left px-5 py-4 font-semibold font-[family-name:var(--font-poppins)]">Requirements</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, idx) => (
                  <tr key={r.title} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-4 font-semibold text-navy">{r.title}</td>
                    <td className="px-5 py-4 text-charcoal">{r.dept}</td>
                    <td className="px-5 py-4">
                      <span className="text-cyan text-xs font-semibold bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
                        {r.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-body text-xs">{r.req}</td>
                    <td className="px-5 py-4">
                      <a
                        href="#apply"
                        className="bg-navy text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-mid transition-colors"
                      >
                        Apply →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Form */}
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
                Thanks for your interest. Our HR team will review your application and reach out within 5 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="bg-ice rounded-2xl p-7 space-y-4"
            >
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Full Name *</label>
                <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Email Address *</label>
                  <input type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Phone Number *</label>
                  <input type="tel" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Position Applying For *</label>
                <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                  <option value="">Select position...</option>
                  {roles.map((r) => <option key={r.title}>{r.title}</option>)}
                </select>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">LinkedIn Profile URL (optional)</label>
                <input placeholder="https://linkedin.com/in/yourprofile" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Resume Upload (PDF or DOCX) *</label>
                <input
                  type="file"
                  required
                  accept=".pdf,.docx"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-cyan file:text-white"
                />
              </div>

              {/* Certifications */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-2">
                  Certifications (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {certificationOptions.map((cert) => (
                    <button
                      key={cert}
                      type="button"
                      onClick={() => toggleCert(cert)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        selectedCerts.includes(cert)
                          ? "bg-cyan text-white border-cyan"
                          : "bg-white text-charcoal border-gray-200 hover:border-cyan"
                      }`}
                    >
                      {cert}
                    </button>
                  ))}
                </div>
              </div>

              {/* Years of Experience + Work Preference */}
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

              {/* Cover Letter */}
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">Cover Letter / Message (optional)</label>
                <textarea rows={4} placeholder="Tell us why you're a great fit..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
              </div>

              <button type="submit" className="w-full bg-cyan text-white font-bold py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors text-sm">
                ▶ Submit Application →
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