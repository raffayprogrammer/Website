import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import EhrStrip from "@/components/sections/EhrStrip";
import StatsBar from "@/components/sections/StatsBar";
import ValueProp from "@/components/sections/ValueProp";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HipaaSection from "@/components/sections/HipaaSection";
import Testimonials from "@/components/sections/Testimonials";
import TechIntegrations from "@/components/sections/TechIntegrations";
import LeadForm from "@/components/sections/LeadForm";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "[Company Name] | Medical Billing & Revenue Cycle Management Services USA",
  description:
    "Maximize your practice revenue with expert medical billing, RCM, and denial management. HIPAA-compliant. 98%+ collection rate. Trusted by 500+ providers nationwide. Get your free audit today.",
  keywords: [
    "medical billing company",
    "revenue cycle management services",
    "healthcare RCM",
    "medical billing outsourcing",
    "HIPAA compliant billing",
    "denial management",
    "physician billing services",
  ],
  openGraph: {
    title: "[Company Name] | Medical Billing & Revenue Cycle Management Services USA",
    description:
      "Expert medical billing and RCM services. 98%+ collection rate. HIPAA-compliant. Trusted by 500+ providers nationwide.",
    type: "website",
    locale: "en_US",
    siteName: "[Company Name]",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Company Name] | Medical Billing & RCM Services USA",
    description:
      "Maximize your practice revenue with expert medical billing and RCM. 98%+ collection rate. HIPAA-compliant.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EhrStrip />
        <StatsBar />
        <ValueProp />
        <ServicesGrid />
        <HowItWorks />
        <Industries />
        <WhyChooseUs />
        <HipaaSection />
        <Testimonials />
        <TechIntegrations />
        <LeadForm />
        <FaqPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
