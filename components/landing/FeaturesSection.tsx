import { AeoMockup } from "./feature-mockups/AeoMockup";
import { PublisherMockup } from "./feature-mockups/PublisherMockup";
import { AlertsMockup } from "./feature-mockups/AlertsMockup";
import { IntegrationsMockup } from "./feature-mockups/IntegrationsMockup";
import { ControlMockup } from "./feature-mockups/ControlMockup";

export function FeaturesSection() {
  return (
    <section id="platform" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="text-white font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em] mb-3">
          Everything you need.{" "}
          <span className="text-white/40">Nothing you don&apos;t.</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base max-w-lg leading-relaxed">
          AI visibility and publisher distribution in one place. Experience a{" "}
          <span className="text-white/70 font-medium">flexible toolkit</span> that
          makes every task feel like a breeze.
        </p>
      </div>

      {/* Card grid — mirrors Cobalt layout: 3 top + 2 bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        {/* Card 1 */}
        <FeatureCard
          visual={<AeoMockup />}
          title="AI visibility at your fingertips"
          description="All your data and AI rankings in one place. Provide quick answers and make decisions instantly."
        />

        {/* Card 2 */}
        <FeatureCard
          visual={<PublisherMockup />}
          title="Reach publishers in real time"
          description="Contact 100,000+ vetted publishers directly from the dashboard on any device. Because, you know, it's 2026."
        />

        {/* Card 3 */}
        <FeatureCard
          visual={<AlertsMockup />}
          title="Important AI ranking alerts"
          description="Choose the alerts you need and receive them via email or Slack. Review and take action in one click."
        />
      </div>

      {/* Bottom row: 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Card 4 */}
        <FeatureCard
          visual={<IntegrationsMockup />}
          title="Connect all your apps"
          description="Bring your data with built-in integrations for SEO tools, PR platforms, and reporting."
        />

        {/* Card 5 */}
        <FeatureCard
          visual={<ControlMockup />}
          title="You're in control"
          description="Lightning fast shortcuts for everything. Command-K on Mac, Ctrl-K on Windows. Dark mode."
        />
      </div>
    </section>
  );
}

// ─── Feature Card ───────────────────────────────────────────────
interface FeatureCardProps {
  visual: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ visual, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#0d0d0d] overflow-hidden flex flex-col">
      {/* Visual area */}
      <div className="flex-1 p-4 pb-0 min-h-[180px] flex items-end justify-center overflow-hidden">
        {visual}
      </div>

      {/* Text area */}
      <div className="p-5 pt-4">
        <h3 className="text-white text-sm font-semibold mb-1.5">{title}</h3>
        <p className="text-white/40 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
