import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import type { IndustryData } from "@/data/industries";
import { services } from "@/data/services";

function findServiceSlug(label: string) {
  const found = Object.values(services).find(
    (s) => s.title.toLowerCase() === label.toLowerCase()
  );
  return found?.slug;
}

export default function IndustryPageTemplate({ data }: { data: IndustryData }) {
  return (
    <PageLayout>
      <PageHero
        eyebrow={data.title}
        title={data.heroHeadline}
        subtitle={data.heroSubheadline}
        crumbs={[
          { label: "Industries", href: "/industries" },
          { label: data.title },
        ]}
        ctaLabel={`Get a Free Audit for Your ${data.title} →`}
        secondaryCtaLabel="Talk to an Expert"
        secondaryCtaHref="/contact"
      />

      {/* Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-7xl mb-4">{data.icon}</div>
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Industry Challenges
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5 leading-tight">
                Unique Billing Challenges in {data.title}
              </h2>
              <p className="text-body leading-relaxed">
                Every healthcare specialty has its own billing complexity. We
                understand the pain points specific to {data.title.toLowerCase()} and
                have built dedicated workflows to address each one.
              </p>
            </div>
            <div className="space-y-3">
              {data.challenges.map((c) => (
                <div
                  key={c}
                  className="bg-ice border-l-4 border-l-amber rounded-xl p-5 flex items-start gap-3"
                >
                  <span className="text-amber text-xl shrink-0">⚠</span>
                  <p className="text-charcoal text-sm font-medium leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              How We Solve It
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Our {data.title} Solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.solutions.map((s) => (
              <div
                key={s}
                className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-3 card-hover border-l-4 border-l-teal shadow-sm"
              >
                <span className="w-6 h-6 bg-teal rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-charcoal text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services for This Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Recommended Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Key Services for {data.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.keyServices.map((label) => {
              const slug = findServiceSlug(label);
              const content = (
                <>
                  <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                    {label}
                  </h3>
                  <span className="text-cyan font-semibold text-sm inline-flex items-center gap-1">
                    Learn More →
                  </span>
                </>
              );
              return slug ? (
                <Link
                  key={label}
                  href={`/services/${slug}`}
                  className="bg-ice border border-gray-100 rounded-xl p-6 card-hover border-l-4 border-l-cyan block"
                >
                  {content}
                </Link>
              ) : (
                <div key={label} className="bg-ice border border-gray-100 rounded-xl p-6 border-l-4 border-l-cyan">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to Optimize Your ${data.title} Revenue?`}
        subtitle="Get a free revenue cycle audit tailored to your specialty."
      />
    </PageLayout>
  );
}