import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { AiEnginesSection } from "@/components/landing/AiEnginesSection";
import { MissionSection } from "@/components/landing/MissionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AiSection } from "@/components/landing/AiSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";
import { DashboardMockup } from "@/components/landing/DashboardMockup";
import { Reveal } from "@/components/landing/Reveal";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <Navbar />

      {/* Hero — centered heading + domain input + dashboard screenshot */}
      <HeroSection />
      
      <Reveal delay={500} className="mt-14">
        <div className="float-soft relative px-6 mx-auto max-w-6xl">
          <DashboardMockup />
        </div>
      </Reveal>

      {/* Trusted by logos */}
      <TrustedBySection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* AI Engines coverage */}
      <AiEnginesSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* "Who said AI visibility has to be complicated?" */}
      <MissionSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* "Everything you need. Nothing you don't." — feature card grid */}
      <FeaturesSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* "Meet Recommendations" — forecast + chat AI panels */}
      <AiSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* Stats row */}
      <StatsSection />

      {/* How it works — 4-step process */}
      <HowItWorksSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/6" />
      </div>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <FaqSection />

      {/* Full-width divider */}
      <div className="h-px bg-white/6" />

      {/* Final CTA */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
