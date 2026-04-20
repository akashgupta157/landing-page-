"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function CtaSection() {
  const [domain, setDomain] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean =
      domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "") ||
      "yourdomain.com";
    alert(
      `Analyzing ${clean}...\n\nYou'd be taken to the loading screen and dashboard.`,
    );
  }

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-32 md:px-12">
      <div className="spot-orb left-1/2 top-1/2 h-[380px] w-[660px] -translate-x-1/2 -translate-y-1/2 bg-[var(--glow-lime)] animate-pulse-soft" />
      <div className="spot-orb left-[20%] top-[30%] h-[200px] w-[200px] bg-[var(--glow-blue)] opacity-50" />

      <Reveal>
        <div className="panel-shell group relative z-10 mx-auto max-w-5xl rounded-[40px] px-6 py-12 text-center md:px-12 md:py-16">
          <div className="absolute -inset-px rounded-[42px] bg-gradient-to-r from-[#c8f538]/0 via-[#c8f538]/5 to-[#7cc8ff]/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <p className="section-kicker mb-4">Get Started</p>
          <h2 className="relative text-[clamp(40px,6vw,84px)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            The AI Search Revolution
            <span className="block bg-gradient-to-r from-[#c8f538] to-[#7cc8ff] bg-clip-text text-transparent">
              Is Happening Now
            </span>
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-base leading-7 text-white/48 md:text-lg">
            Every day you wait, competitors are getting cited and you're
            becoming invisible. Start free today.
          </p>

          <form
            onSubmit={handleSubmit}
            className="relative mx-auto mt-10 w-full max-w-2xl"
          >
            <div className="flex flex-col gap-3 rounded-[30px] border border-white/10 bg-black/14 p-3 md:flex-row transition-all duration-300 focus-within:border-[#c8f538]/30">
              <div className="flex flex-1 items-center rounded-[22px] border border-white/8 bg-white/3 px-4 py-3 transition-all duration-300 focus-within:border-[#c8f538]/20">
                <span className="pr-2 font-mono text-sm text-white/28">
                  https://
                </span>
                <input
                  type="text"
                  placeholder="yourdomain.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/28 md:text-base transition-colors duration-300 focus:text-white"
                  aria-label="Your domain"
                />
              </div>
              <button
                type="submit"
                className="button-shine group/btn relative overflow-hidden rounded-[22px] bg-[#c8f538] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_16px_40px_rgba(200,245,56,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(200,245,56,0.35)]"
              >
                <span className="relative z-10">Get vetted publishers</span>
              </button>
            </div>
          </form>

          <div className="relative mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-white/24">
            <span>7-day free trial</span>
            <span className="h-1 w-1 rounded-full bg-white/16" />
            <span>No credit card</span>
            <span className="h-1 w-1 rounded-full bg-white/16" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
