import Link from "next/link";

export default function CtaBanner({
  title = "Ready to Maximize Your Revenue?",
  subtitle = "Join 500+ healthcare providers who trust [Company Name] for their medical billing and revenue cycle management needs.",
  primaryLabel = "▶ Schedule a Free Consultation",
  primaryHref = "/free-audit",
  secondaryLabel = "📞 Call Us: [(XXX) XXX-XXXX]",
  secondaryHref = "tel:[PHONE]",
  variant = "cyan",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "cyan" | "navy";
}) {
  const bg = variant === "cyan" ? "bg-cyan" : "bg-navy";
  const primaryColor = variant === "cyan" ? "text-cyan" : "text-navy";

  return (
    <section className={`py-16 ${bg}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-poppins)] mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-white/90 text-base lg:text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href={primaryHref}
            className={`bg-white ${primaryColor} font-bold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-sm shadow-lg`}
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}