import Link from "next/link";

/* Section 3.14 — Final CTA Section */
export default function FinalCta() {
  return (
    <section className="py-20 bg-cyan">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="t-h2-section text-white font-[family-name:var(--font-poppins)] mb-4" style={{ color: "#fff" }}>
          Ready to Maximize Your Revenue?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Join 500+ healthcare providers who trust [Company Name] for their
          medical billing and revenue cycle management needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/free-audit"
            className="bg-white text-cyan t-cta px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center gap-2"
          >
            ▶ Schedule a Free Consultation →
          </Link>
          <Link
            href="tel:[PHONE]"
            className="border-2 border-white text-white t-cta px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2"
          >
            ▶ Call Us: [(XXX) XXX-XXXX] →
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap gap-6 justify-center text-white/80 text-sm">
          {[
            "No Setup Fees",
            "Month-to-Month Available",
            "HIPAA Compliant",
            "Onboard in 5–7 Days",
            "2-Hour Response SLA",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-white">✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}