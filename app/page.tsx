import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { MTMSection } from "@/components/sections/MTMSection";
import { NCDSection } from "@/components/sections/NCDSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "CVX Pharmacy | Advanced Clinical Pharmacy & Patient Care — Jalna",
  description: "CVX Pharmacy in Jalna, Maharashtra — Medication Therapy Management, NCD care, clinical counseling, and evidence-based pharmaceutical care."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <MTMSection />
      <NCDSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
