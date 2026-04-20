"use client";

import { Reveal } from "./Reveal";

const companies = [
  { name: "Notion", domain: "notion.so" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Semrush", domain: "semrush.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Linear", domain: "linear.app" },
  { name: "Webflow", domain: "webflow.com" },
  { name: "Ahrefs", domain: "ahrefs.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Jasper", domain: "jasper.ai" },
  { name: "Moz", domain: "moz.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Stripe", domain: "stripe.com" },
];

export function TrustedBySection() {
  return (
    <section className="relative overflow-hidden py-12">
      <Reveal>
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/28">
          Trusted by growth teams at
        </p>
      </Reveal>
      
      <div className="mt-8 overflow-hidden">
        <div className="flex animate-[ticker_25s_linear_infinite]">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="mx-8 flex items-center gap-3 whitespace-nowrap"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white/70">{company.name}</span>
                <span className="text-[10px] text-white/30">{company.domain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
