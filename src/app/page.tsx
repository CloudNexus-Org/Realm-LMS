import Hero from "@/components/home/Hero";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import CareerTracks from "@/components/home/CareerTracks";
import CareerPipeline from "@/components/home/CareerPipeline";
import StudentSupport from "@/components/home/StudentSupport";
import Pricing from "@/components/home/Pricing";
import WhyUs from "@/components/home/WhyUs";
import ContactSection from "@/components/home/ContactSection";
import ScrollReveal from "@/components/home/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <CareerTracks />
      <CareerPipeline />
      <StudentSupport />
      <Pricing />
      <WhyUs />
      <ContactSection />
      <ScrollReveal />
    </>
  );
}
