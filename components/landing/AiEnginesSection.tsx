"use client";

import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const aiEngines = [
  { name: "ChatGPT", color: "#10a37f", logo: "/logos/openai.svg" },
  { name: "Perplexity", color: "#20B8CD", logo: "/logos/perplexity.svg" },
  { name: "Claude", color: "#D97757", logo: "/logos/claude.svg" },
  { name: "Gemini", color: "#8e8e8e", logo: "/logos/gemini.svg" },
  { name: "Grok", color: "#e5e5e5", logo: "/logos/grok.svg" },
  { name: "Copilot", color: "#0078d4", logo: "/logos/copilot.svg" },
  { name: "AI Mode", color: "#4285F4", logo: "/logos/google.svg" },
  { name: "AI Overview", color: "#4285F4", logo: "/logos/google.svg" },
];

export function AiEnginesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
      <Reveal>
        <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-px w-7 rounded-full"
                style={{ background: "var(--accent-lime)" }}
              />
              <p className="section-kicker">Coverage</p>
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Every AI Engine.
              <span className="block text-white/40">One Dashboard.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/48 md:text-base">
            Stop guessing where your brand shows up. AEOIX monitors all major AI answer engines
            and tells you exactly when and how your content gets cited.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        {/* Left: stat callout */}
        <Reveal>
          <div className="shrink-0 md:w-52">
            <div
              className="text-[80px] font-bold leading-none tracking-[-0.06em]"
              style={{ color: "var(--accent-lime)" }}
            >
              8+
            </div>
            <p className="mt-3 text-sm leading-6 text-white/40">
              AI answer engines tracked and growing every quarter.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-emerald-400/80 tracking-wide uppercase">Live monitoring</span>
            </div>
          </div>
        </Reveal>

        {/* Right: flowing pill cards */}
        <div className="flex flex-1 flex-wrap gap-2.5">
          {aiEngines.map((engine, index) => (
            <Reveal key={engine.name} delay={index * 55}>
              <div
                className="group relative flex cursor-default items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]"
              >
                {/* brand glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(70px circle at 20% 50%, ${engine.color}22, transparent 75%)`,
                  }}
                />

                {/* logo bubble */}
                <div
                  className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${engine.color}18` }}
                >
                  <img src={engine.logo} alt={engine.name} className="h-5 w-5" />
                </div>

                {/* text */}
                <div className="relative flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white">{engine.name}</span>
                  <span className="flex items-center gap-1.5 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                    Tracked
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

          {/* coming soon */}
          <Reveal delay={aiEngines.length * 55}>
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/[0.06] bg-transparent px-4 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07]">
                <Sparkles size={15} className="text-white/25" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-white/40">More Engines</span>
                <span className="text-[11px] text-white/20">Coming Soon</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}