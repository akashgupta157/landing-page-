import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { EngineTickerSection } from "@/components/landing/EngineTickerSection";
import { MissionSection } from "@/components/landing/MissionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AiSection } from "@/components/landing/AiSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <Navbar />

      {/* Hero — centered heading + domain input + dashboard screenshot */}
      <HeroSection />

      {/* Scrolling AI engine ticker */}
      <EngineTickerSection />

      {/* "Who said AI visibility has to be complicated?" */}
      <MissionSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* "Everything you need. Nothing you don't." — feature card grid */}
      <FeaturesSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* "Meet Recommendations" — forecast + chat AI panels */}
      <AiSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Stats row */}
      <StatsSection />

      {/* How it works — 4-step process */}
      <HowItWorksSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Horizontal divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Pricing */}
      <PricingSection />

      {/* Full-width divider */}
      <div className="h-px bg-white/[0.06]" />

      {/* Final CTA */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
