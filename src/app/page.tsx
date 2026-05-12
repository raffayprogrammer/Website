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
