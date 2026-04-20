"use client";

import { Reveal } from "./Reveal";

const row1 = [
  { name: "Notion", domain: "notion.so" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Semrush", domain: "semrush.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Linear", domain: "linear.app" },
  { name: "Webflow", domain: "webflow.com" },
  { name: "Ahrefs", domain: "ahrefs.com" },
];

const row2 = [
  { name: "Figma", domain: "figma.com" },
  { name: "Jasper", domain: "jasper.ai" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Moz", domain: "moz.com" },
  { name: "Intercom", domain: "intercom.com" },
  { name: "Loom", domain: "loom.com" },
];

type Company = { name: string; domain: string };

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Company[];
  reverse?: boolean;
}) {
  const duped = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="flex gap-3 animate-[ticker_32s_linear_infinite] [&:has(*:hover)]:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {duped.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-3.5 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.05] hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=128`}
              alt=""
              width={18}
              height={18}
              className="h-5 w-5 rounded-[5px] opacity-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110"
            />
            <span className="whitespace-nowrap text-sm font-medium text-white/55 transition-colors duration-200 group-hover:text-white/80">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Hairline borders top + bottom */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <Reveal>
        <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.26em] text-white/24">
          Trusted by growth teams at
        </p>
      </Reveal>

      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
