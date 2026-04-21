import { ArrowUpRight } from "lucide-react";
import { Check } from "lucide-react";

import { AlertsMockup } from "./feature-mockups/AlertsMockup";
import { AeoMockup } from "./feature-mockups/AeoMockup";
import { ControlMockup } from "./feature-mockups/ControlMockup";
import { IntegrationsMockup } from "./feature-mockups/IntegrationsMockup";
import { PublisherMockup } from "./feature-mockups/PublisherMockup";
import { Reveal } from "./Reveal";

const features = [
  {
    visual: <AeoMockup />,
    title: "Analytics dashboard for AI visibility",
    description:
      "Track how your brand shows up across LLM answers with visibility, share of voice, sentiment, and rank—all in one view.",
    bullets: [
      "Visibility trend + rankings",
      "Top domains & domain types",
      "Recent chats for context",
    ],
  },
  {
    visual: <PublisherMockup />,
    title: "Action items that turn gaps into wins",
    description:
      "Get prioritized recommendations like content gaps, backlink opportunities, citation gaps, and visibility risks—ready to execute.",
    bullets: [
      "Backlink + content gap opportunities",
      "Citation & coverage boosts",
      "Priority + evidence baked in",
    ],
  },
  {
    visual: <AlertsMockup />,
    title: "Slack alerts your team actually uses",
    description:
      "Connect Slack, pick a channel, and choose exactly which events should notify your workspace—plus send test notifications.",
    bullets: [
      "OAuth connect + channel selection",
      "Event-level notification toggles",
      "One-click test message",
    ],
  },
  {
    visual: <IntegrationsMockup />,
    title: "Research tools for citations & competitors",
    description:
      "Go deeper with citation search, keyword tracking, and competitor research like backlink intersection to find what to fix next.",
    bullets: [
      "Citation Search",
      "Keywords trend tracking",
      "Backlinks Gap (competitor intersection)",
    ],
  },
  {
    visual: <ControlMockup />,
    title: "Prompts, sources, and workflow in one place",
    description:
      "Manage your prompts and explore the sources LLMs use (domains + URLs) with fast filters—built for ongoing optimization.",
    bullets: [
      "Prompt management & tracking",
      "Domain + URL sources explorer",
      "Fast filtering across pages",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="platform" className="mx-auto max-w-6xl px-6 py-20 xl:py-28 md:px-12">
      <Reveal>
        <div className="mb-12 xl:mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-px w-7 rounded-full"
                style={{ background: "var(--accent-lime)" }}
              />
              <p className="section-kicker">Platform</p>
            </div>
            <h2 className="max-w-3xl text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Everything Aeoix does,
              <span className="block text-white/40">
                shipped into one workflow.
              </span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/48 md:text-base">
            From visibility analytics to research, action items, and team
            alerts—Aeoix keeps the loop tight: find the gap, decide fast,
            execute, and measure the lift.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {features.map((feature, index) => (
          <Reveal
            key={feature.title}
            delay={index * 80}
            className={index < 3 ? "md:col-span-2" : "md:col-span-3"}
          >
            <div className="panel-shell interactive-card group relative h-full overflow-hidden rounded-[32px]">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#c8f538]/0 via-[#c8f538]/4 to-[#7cc8ff]/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-[#c8f538]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between px-5 pt-5">
                <span className="section-kicker">0{index + 1}</span>
                <span className="rounded-full border border-white/8 bg-white/3 p-2 text-white/40 transition-all duration-300 group-hover:border-[#c8f538]/30 group-hover:bg-[#c8f538]/10 group-hover:text-[#c8f538] group-hover:scale-110">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <div className="relative flex min-h-[220px] items-end justify-center overflow-hidden px-4 pb-0 pt-4">
                <div className="transition-all duration-300 group-hover:scale-[1.05] group-hover:-translate-y-2">
                  {feature.visual}
                </div>
                <div className="absolute bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 translate-y-4 rounded-full bg-[#c8f538]/20 opacity-0 blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>

              <div className="relative px-5 pb-6 pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#c8f538]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/46">
                  {feature.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-white/56 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/70"
                      style={{ transitionDelay: `${bulletIndex * 40}ms` }}
                    >
                      <span
                        className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#c8f538] transition-all duration-300 group-hover:border-[#c8f538]/25 group-hover:bg-[#c8f538]/10 group-hover:scale-110"
                        style={{ transitionDelay: `${bulletIndex * 40}ms` }}
                      >
                        <Check size={12} />
                      </span>
                      <span className="leading-6">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
