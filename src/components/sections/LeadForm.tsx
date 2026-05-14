"use client";
import { useState } from "react";
import Link from "next/link";

/* Section 3.12 — Lead Capture Section
   Specialty dropdown: 30+ options per spec. */
const specialties = [
  "Primary Care / Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics & Sports Medicine",
  "Behavioral Health / Psychiatry",
  "Telehealth / Virtual Care",
  "Urgent Care",
  "Radiology & Imaging",
  "Physical Therapy & Rehabilitation",
  "Dermatology",
  "Gastroenterology",
  "OB/GYN",
  "Neurology",
  "Pediatrics",
  "Endocrinology",
  "Pulmonology",
  "Nephrology",
  "Rheumatology",
  "Ophthalmology",
  "ENT / Otolaryngology",
  "Urology",
  "Oncology / Hematology",
  "Pain Management",
  "Sleep Medicine",
  "Allergy & Immunology",
  "Wound Care",
  "Podiatry",
  "Chiropractic",
  "Anesthesiology",
  "Pathology",
  "Emergency Medicine",
  "Ambulatory Surgery Center (ASC)",
  "Hospital / Health System",
  "FQHC / Community Health",
  "Dental",
  "Other",
];

const painPoints = [
  "Denial Rate", "Collection Rate", "Staffing", "Credentialing", "Cash Flow", "Other",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practice: string;
  specialty: string;
  providers: string;
  monthlyRevenue: string;
  painPoints: string[];
  source: string;
  notes: string;
};

const stepTitles = ["Contact Info", "Practice Details", "Specific Needs"];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "",
    practice: "", specialty: "", providers: "", monthlyRevenue: "",
    painPoints: [], source: "", notes: "",
  });

  const update = <K extends keyof FormState>(key: K, val: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const togglePain = (val: string) =>
    setForm((f) => ({
      ...f,
      painPoints: f.painPoints.includes(val)
        ? f.painPoints.filter((p) => p !== val)
        : [...f.painPoints, val],
    }));

  const canAdvance = () => {
    if (step === 1)
      return form.firstName && form.lastName && form.email && form.phone;
    if (step === 2)
      return form.practice && form.specialty && form.providers;
    return true;
  };

  const next = () => canAdvance() && setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-navy" id="free-audit">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: copy */}
          <div className="text-white">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
              Free Audit
            </p>
            <h2 className="t-h1-page text-white mb-6 leading-tight" style={{ color: "#fff" }}>
              Get Your Free Revenue Cycle Audit Today
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Discover exactly how much revenue your practice is leaving on the
              table. Our RCM experts will analyze your current billing
              performance and provide a custom improvement roadmap —
              absolutely free.
            </p>
            <ul className="space-y-3">
              {[
                "Analysis of your current collection rate vs. benchmarks",
                "Denial rate breakdown by category",
                "Estimate of annual revenue you are currently losing",
                "Top 5 billing improvement opportunities",
                "No-obligation conversation with a senior RCM specialist",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="text-cyan font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: multi-step form */}
          <div className="bg-white rounded-2xl p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-2">
                  Request Received!
                </h3>
                <p className="text-body">
                  Our team will contact you within 2 business hours to schedule
                  your free revenue cycle audit.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                {/* Progress bar */}
                <div className="mb-7">
                  <div className="flex justify-between mb-2 text-xs font-semibold">
                    {stepTitles.map((title, idx) => {
                      const stepNum = idx + 1;
                      const isActive = step === stepNum;
                      const isComplete = step > stepNum;
                      return (
                        <div
                          key={title}
                          className={`flex items-center gap-1.5 ${
                            isActive ? "text-cyan" : isComplete ? "text-teal" : "text-body"
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isActive
                                ? "bg-cyan text-white"
                                : isComplete
                                ? "bg-teal text-white"
                                : "bg-gray-200 text-body"
                            }`}
                          >
                            {isComplete ? "✓" : stepNum}
                          </span>
                          <span className="hidden sm:inline">{title}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-cyan h-full rounded-full transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-1">
                  Step {step} of 3: {stepTitles[step - 1]}
                </h3>
                <p className="text-body text-xs mb-5">
                  {step === 1 && "Tell us how to reach you."}
                  {step === 2 && "A bit about your practice."}
                  {step === 3 && "What are you looking to fix?"}
                </p>

                {/* Step 1: Contact */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1">First Name *</label>
                        <input
                          required
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                          value={form.firstName}
                          onChange={(e) => update("firstName", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1">Last Name *</label>
                        <input
                          required
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                          value={form.lastName}
                          onChange={(e) => update("lastName", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Practice */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">Practice / Organization Name *</label>
                      <input
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                        value={form.practice}
                        onChange={(e) => update("practice", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">Specialty *</label>
                      <select
                        required
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                        value={form.specialty}
                        onChange={(e) => update("specialty", e.target.value)}
                      >
                        <option value="">Select...</option>
                        {specialties.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1">Number of Providers *</label>
                        <select
                          required
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                          value={form.providers}
                          onChange={(e) => update("providers", e.target.value)}
                        >
                          <option value="">Select...</option>
                          {["1", "2–5", "6–15", "16–50", "50+"].map((v) => <option key={v}>{v}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-charcoal mb-1">Monthly Revenue Volume</label>
                        <select
                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                          value={form.monthlyRevenue}
                          onChange={(e) => update("monthlyRevenue", e.target.value)}
                        >
                          <option value="">Select...</option>
                          {["< $50K", "$50K–$200K", "$200K–$500K", "$500K–$1M", "$1M+"].map((v) => <option key={v}>{v}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Specific needs */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-2">Primary Pain Points (select all that apply)</label>
                      <div className="flex flex-wrap gap-2">
                        {painPoints.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => togglePain(p)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                              form.painPoints.includes(p)
                                ? "bg-cyan text-white border-cyan"
                                : "bg-white text-charcoal border-gray-200 hover:border-cyan"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">How did you hear about us?</label>
                      <select
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                        value={form.source}
                        onChange={(e) => update("source", e.target.value)}
                      >
                        <option value="">Select...</option>
                        {["Google Search", "Referral", "LinkedIn", "Conference / Event", "Webinar", "Other"].map((v) => <option key={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">Anything else you'd like us to know?</label>
                      <textarea
                        rows={3}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan"
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={back}
                      className="flex-1 border border-gray-200 text-charcoal font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      ← Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canAdvance()}
                      className="flex-1 bg-navy text-white t-cta py-3 rounded-lg hover:bg-blue-mid transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 bg-cyan text-white t-cta py-3 rounded-lg hover:bg-[#0090B0] transition-colors"
                    >
                      ▶ Get My Free Audit →
                    </button>
                  )}
                </div>

                {/* HIPAA notice — directly below submit (per spec 3.12) */}
                <p className="text-xs text-body text-center mt-4 leading-relaxed">
                  🔒 Your information is secure and protected under HIPAA
                  guidelines. We will never share your data with third parties.
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-cyan hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" className="text-cyan hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}