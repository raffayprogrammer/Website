"use client";
import { useState } from "react";

const specialties = [
  "Primary Care / Family Medicine", "Internal Medicine", "Cardiology",
  "Orthopedics", "Behavioral Health / Psychiatry", "Telehealth",
  "Urgent Care", "Radiology", "Physical Therapy", "Dermatology",
  "Gastroenterology", "OB/GYN", "Neurology", "Pediatrics",
  "Ambulatory Surgery Center", "Hospital / Health System", "Other",
];

const painPoints = [
  "Denial Rate", "Collection Rate", "Staffing", "Credentialing", "Cash Flow", "Other",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    practice: "", specialty: "", providers: "", painPoints: [] as string[],
    source: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (val: string) =>
    setForm((f) => ({
      ...f,
      painPoints: f.painPoints.includes(val)
        ? f.painPoints.filter((p) => p !== val)
        : [...f.painPoints, val],
    }));

  const handleSubmit = (e: React.FormEvent) => {
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
            <h2 className="text-4xl font-bold font-[family-name:var(--font-poppins)] mb-6 leading-tight">
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

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-2">
                  Request My Free Audit
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">First Name *</label>
                    <input
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Last Name *</label>
                    <input
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Practice / Organization Name *</label>
                  <input
                    required
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                    value={form.practice}
                    onChange={(e) => setForm({ ...form, practice: e.target.value })}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Specialty *</label>
                    <select
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                      value={form.specialty}
                      onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                    >
                      <option value="">Select...</option>
                      {specialties.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Number of Providers *</label>
                    <select
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:border-cyan"
                      value={form.providers}
                      onChange={(e) => setForm({ ...form, providers: e.target.value })}
                    >
                      <option value="">Select...</option>
                      {["1", "2–5", "6–15", "16–50", "50+"].map((v) => <option key={v}>{v}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-2">Primary Pain Point (select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {painPoints.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => toggle(p)}
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

                <button
                  type="submit"
                  className="w-full bg-cyan text-white font-bold py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors text-sm"
                >
                  Get My Free Audit →
                </button>

                <p className="text-xs text-body text-center leading-relaxed">
                  🔒 Your information is secure and protected under HIPAA guidelines.
                  We will never share your data with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}