import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$97",
    originalPrice: "$149",
    period: "/month",
    discount: "35% OFF — LAUNCH DEAL",
    features: [
      "50 AI prompts / month",
      "3 AI engines tracked",
      "1 project",
      "Publisher network access",
      "CSV export",
    ],
    cta: "Start free trial",
    ctaVariant: "outline" as const,
    featured: false,
  },
  {
    name: "Growth",
    price: "$194",
    originalPrice: "$299",
    period: "/month",
    discount: "35% OFF — LAUNCH DEAL",
    features: [
      "250 AI prompts / month",
      "All AI engines tracked",
      "5 projects",
      "Competitor analysis",
      "Publisher recommendations engine",
      "API access",
    ],
    cta: "Start free trial",
    ctaVariant: "accent" as const,
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: null,
    period: null,
    discount: null,
    features: [
      "Unlimited prompts",
      "Unlimited projects",
      "Custom reporting",
      "Dedicated success manager",
      "SSO + compliance",
    ],
    cta: "Contact sales",
    ctaVariant: "outline" as const,
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">
          Pricing
        </p>
        <h2 className="text-white font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em] mb-3">
          Transparent pricing.{" "}
          <span className="text-white/40">No surprises.</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base max-w-lg leading-relaxed">
          Launch deal active — all plans discounted 35%. 7-day free trial.
          Cancel anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border flex flex-col p-7 ${
              plan.featured
                ? "border-[#c8f538]/30 bg-[#111111]"
                : "border-white/[0.07] bg-[#0d0d0d]"
            }`}
          >
            {/* Featured badge */}
            {plan.badge && (
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <span className="bg-[#c8f538] text-black text-[10px] font-semibold font-mono px-3 py-1 rounded-b-lg whitespace-nowrap tracking-wide uppercase">
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Plan name */}
            <span className="text-white/30 text-[11px] font-mono uppercase tracking-widest block mb-5 mt-2">
              {plan.name}
            </span>

            {/* Price */}
            <div className="mb-1">
              <div className="flex items-baseline gap-1">
                <span className="text-white font-bold text-5xl tracking-[-0.04em] leading-none">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-white/30 text-sm font-normal">
                    {plan.period}
                  </span>
                )}
              </div>
            </div>

            {/* Original price */}
            {plan.originalPrice && (
              <p className="text-white/25 text-xs font-mono line-through mb-2">
                was {plan.originalPrice}
              </p>
            )}

            {/* Discount badge */}
            {plan.discount && (
              <div className="inline-flex mb-6">
                <span className="text-[#c8f538] text-[10px] font-mono bg-[#c8f538]/10 px-2.5 py-1 rounded tracking-wide uppercase">
                  {plan.discount}
                </span>
              </div>
            )}

            {!plan.discount && <div className="mb-6 h-6" />}

            {/* Divider */}
            <div className="h-px bg-white/[0.07] mb-6" />

            {/* Features */}
            <ul className="space-y-3.5 flex-1 mb-7">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-white/50">
                  <Check
                    size={13}
                    className={plan.featured ? "text-[#c8f538] flex-shrink-0" : "text-white/25 flex-shrink-0"}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              variant={plan.ctaVariant}
              size="lg"
              className={`w-full rounded-xl ${
                plan.featured
                  ? "bg-[#c8f538] text-black hover:opacity-90 border-0"
                  : "border-white/15 text-white hover:bg-white/5"
              }`}
              asChild
            >
              <Link href={plan.name === "Enterprise" ? "mailto:enterprise@aeoix.com" : "#cta"}>
                {plan.cta}
              </Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Fine print */}
      <p className="text-center text-white/20 text-[11px] font-mono mt-5 tracking-wide">
        Pricing in USD · EUR and GBP also available · Auto-detected at checkout ·
        No credit card required
      </p>
    </section>
  );
}
