"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  const [domain, setDomain] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean =
      domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "") ||
      "yourdomain.com";
    alert(
      `Analyzing ${clean}...\n\nYou'd be taken to the loading screen → dashboard.`
    );
  }

  return (
    <section
      id="cta"
      className="relative px-6 py-40 text-center overflow-hidden"
    >
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(200,245,56,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-white font-bold text-[clamp(36px,6vw,72px)] leading-[1.05] tracking-[-0.04em] mb-5">
          See where AI{" "}
          <span className="text-white/35">search can</span>
          <br />
          take your{" "}
          <span className="text-white/35">business.</span>
        </h2>

        <p className="text-white/40 text-base md:text-lg leading-relaxed mb-12 max-w-md mx-auto">
          The first AI visibility tool you&apos;ll love. And the last one
          you&apos;ll ever need.
        </p>

        {/* Domain input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-stretch w-full max-w-md mx-auto mb-4"
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
              className="m-1.5 px-4 py-2.5 bg-[#c8f538] text-black text-xs font-semibold rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0"
            >
              GET VETTED PUBLISHERS →
            </button>
          </div>
        </form>

        {/* Waitlist button */}
        <Button
          variant="outline"
          size="lg"
          className="rounded-full border-white/20 text-white/70 hover:bg-white/5 hover:text-white mx-auto"
          asChild
        >
          <a href="#">Join the waitlist</a>
        </Button>

        <p className="text-white/20 text-xs font-mono mt-5 tracking-wide">
          7-day free trial · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}
