"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

export function HeroSection() {
  const [domain, setDomain] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "") || "yourdomain.com";
    // In the real app: router.push(`/app?domain=${clean}`)
    alert(`Analyzing ${clean}...\n\nYou'd be taken to the loading screen → dashboard.`);
  }

  return (
    <section className="relative pt-32 pb-0 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Heading */}
      <h1 className="relative z-10 text-white font-bold text-[clamp(36px,6vw,72px)] leading-[1.08] tracking-[-0.03em] max-w-3xl mb-5">
        Your brand, ranked{" "}
        <span className="text-white/40">#1 in</span>{" "}
        every AI.
      </h1>

      {/* Sub */}
      <p className="relative z-10 text-white/50 text-base md:text-lg leading-relaxed max-w-xl mb-8">
        Track where ChatGPT, Gemini &amp; Perplexity mention your brand — then use
        our publisher network of 100,000+ outlets to push you to the top.
        Simple. Intuitive. And never boring.
      </p>

      {/* CTA: domain input */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col sm:flex-row items-stretch gap-3 mb-4 w-full max-w-md"
        role="search"
        aria-label="Enter your domain for free report"
      >
        <Button
          type="submit"
          variant="outline"
          className="rounded-full border-white/20 text-white text-sm px-6 h-10 whitespace-nowrap hover:bg-white/5 w-full sm:w-auto"
        >
          Get free report
        </Button>
      </form>

      {/* Domain input row */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex items-stretch w-full max-w-md mb-3"
      >
        <div className="flex w-full items-center bg-[#111111] border border-white/[0.08] rounded-xl overflow-hidden focus-within:border-white/20 transition-colors">
          <span className="text-white/30 text-sm font-mono pl-4 pr-1 flex-shrink-0">
            https://
          </span>
          <Input
            type="text"
            placeholder="yourdomain.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="flex-1 px-1 py-3 text-sm"
            aria-label="Your domain"
          />
          <button
            type="submit"
            className="m-1.5 px-4 py-2 bg-[#c8f538] text-black text-xs font-semibold rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label="Get free AI visibility report"
          >
            GET FREE REPORT →
          </button>
        </div>
      </form>

      {/* Fine print */}
      <p className="relative z-10 text-white/25 text-xs font-mono mb-10">
        No credit card · Results in 30 seconds · Cancel anytime
      </p>

      {/* Learn more */}
      <a
        href="#platform"
        className="relative z-10 flex flex-col items-center gap-1 text-white/30 text-xs hover:text-white/50 transition-colors mb-12"
        aria-label="Learn more, scroll down"
      >
        <span>Learn more</span>
        <ChevronDown size={14} />
      </a>

      {/* Dashboard screenshot mockup */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <DashboardMockup />
      </div>
    </section>
  );
}
