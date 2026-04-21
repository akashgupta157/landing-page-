import Link from "next/link";

import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Starter",
    price: "$89",
    originalPrice: "$199",
    period: "/month",
    discount: "35% off",
    features: [
      "1 domain monitored",
      "3 AI engines tracked",
      "Weekly AEO reports",
      "Basic recommendations",
      "1 project access",
      "Publisher network access",
    ],
    cta: "Start free trial",
    featured: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$219",
    originalPrice: "$349",
    period: "/month",
    discount: "35% off",
    features: [
      " 5 domains monitored",
      " All 8 AI engines tracked",
      " Daily AEO reports",
      " Advanced content optimizer",
      " 10 competitors tracked",
      " Slack & email alerts",
      " Publisher network access",
    ],
    cta: "Start free trial",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Agency",
    price: "$399",
    originalPrice: "$599",
    period: "/month",
    discount: "35% off",
    features: [
      " Unlimited domains",
      " All 8 AI engines tracked",
      " Real-time monitoring",
      " White-label reports",
      " Unlimited competitors",
      " Full API access",
    ],
    cta: "Contact sales",
    featured: false,
    badge: null,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-6 py-20 xl:py-28 md:px-12"
    >
      <Reveal>
        <div className="mb-14 xl:mb-20 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-px w-7 rounded-full"
                style={{ background: "var(--accent-lime)" }}
              />
              <p className="section-kicker">Pricing</p>
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Transparent pricing.
              <span className="block text-white/40">No surprises, ever.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/45 md:text-base">
            Cancel anytime. Launch pricing won&apos;t last — lock it in now.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3 md:items-center">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 90}>
            <div
              className={`panel-shell interactive-card group relative flex flex-col rounded-[32px] p-7 ${
                plan.featured
                  ? "border-[#c8f538]/28 md:-my-4 md:rounded-[36px] md:p-9 md:shadow-[0_0_80px_rgba(200,245,56,0.12)]"
                  : ""
              }`}
            >
              {/* Featured: permanent subtle lime tint */}
              {plan.featured && (
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,56,0.06),transparent)]" />
              )}

              {/* Badge or spacer */}
              <div className="relative mb-5 h-6">
                {plan.badge && (
                  <span className="inline-flex rounded-full bg-[#c8f538] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_24px_rgba(200,245,56,0.38)]">
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Plan name */}
              <p className="section-kicker mb-4">{plan.name}</p>

              {/* Price */}
              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-[-0.06em] text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="pb-2 text-sm text-white/30">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Was + discount — same row */}
              <div className="mt-2.5 flex min-h-[22px] flex-wrap items-center gap-2.5">
                {plan.originalPrice && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/22 line-through">
                    was {plan.originalPrice}
                  </span>
                )}
                {plan.discount && (
                  <span className="accent-pill inline-flex rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                    {plan.discount}
                  </span>
                )}
              </div>

              <div className="my-6 h-px bg-white/[0.07]" />

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3.5">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm leading-6 text-white/55 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/70"
                    style={{ transitionDelay: `${featureIndex * 30}ms` }}
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition-all duration-300 group-hover:scale-110 ${
                        plan.featured
                          ? "bg-[#c8f538]/15 text-[#c8f538] group-hover:bg-[#c8f538]/25"
                          : "bg-white/[0.06] text-white/35 group-hover:bg-white/[0.1]"
                      }`}
                      style={{ transitionDelay: `${featureIndex * 30}ms` }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={
                  plan.name === "Enterprise"
                    ? "mailto:enterprise@aeoix.com"
                    : "#cta"
                }
                className={`button-shine inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-[#c8f538] text-black shadow-[0_14px_36px_rgba(200,245,56,0.24)]"
                    : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:text-white/90"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/18">
          Pricing in USD · EUR &amp; GBP at checkout · No credit card required
        </p>
      </Reveal>
    </section>
  );
}
