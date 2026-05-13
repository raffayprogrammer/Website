import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  ctaLabel = "Get Your Free Audit →",
  ctaHref = "/free-audit",
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,60,110,0.97) 60%, rgba(0,169,206,0.15) 100%)",
        }}
      />
      <div className="absolute -right-32 -top-32 w-[400px] h-[400px] rounded-full bg-cyan opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {crumbs && <Breadcrumb crumbs={crumbs} />}
        {eyebrow && (
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3 mt-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl font-[family-name:var(--font-poppins)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/75 max-w-3xl leading-relaxed mb-7">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          <Link
            href={ctaHref}
            className="bg-cyan text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0090B0] transition-colors text-sm"
          >
            {ctaLabel}
          </Link>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}