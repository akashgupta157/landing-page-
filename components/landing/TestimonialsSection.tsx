import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "We finally understood why our competitors kept showing up in ChatGPT. The publisher recommendations flipped that within 8 weeks.",
    highlight: "publisher recommendations",
    name: "Head of Marketing",
    role: "SaaS startup, Series A",
    initials: "HM",
  },
  {
    quote:
      "AEOIX replaced three subscriptions and our PR agency. One tool, direct access, zero markup. I wish we'd found it sooner.",
    highlight: "One tool, direct access, zero markup.",
    name: "SEO Lead",
    role: "Digital agency, 80+ clients",
    initials: "SL",
  },
  {
    quote:
      "5x more traffic from AI search in three months. The source analysis was the game-changer because we knew which placements to prioritize.",
    highlight: "source analysis",
    name: "CMO",
    role: "E-commerce brand, $8M ARR",
    initials: "CM",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-6 py-20 xl:py-28 md:px-12"
    >
      <Reveal>
        <div className="mb-10 xl:mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-px w-7 rounded-full"
                style={{ background: "var(--accent-lime)" }}
              />
              <p className="section-kicker">What teams say</p>
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Proof with a little more
              <span className="block text-white/40">presence and polish.</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/46 md:text-base">
            This section now reads more like social proof on a modern product
            site: stronger card framing, cleaner author blocks, and enough
            motion to feel alive.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.initials} delay={index * 90}>
            <div className="panel-shell interactive-card group flex h-full flex-col rounded-[32px] p-6">
              <div className="mb-5 inline-block origin-left text-5xl leading-none text-white/10 transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:text-[#c8f538]/20">
                &ldquo;
              </div>
              <p className="flex-1 text-sm leading-7 text-white/54">
                {testimonial.quote
                  .split(testimonial.highlight)
                  .map((part, partIndex, array) =>
                    partIndex < array.length - 1 ? (
                      <span key={partIndex}>
                        {part}
                        <strong className="font-medium text-white">
                          {testimonial.highlight}
                        </strong>
                      </span>
                    ) : (
                      <span key={partIndex}>{part}</span>
                    ),
                  )}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/8 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-[11px] text-white/55 transition-all duration-300 group-hover:border-[#c8f538]/25 group-hover:bg-[#c8f538]/6 group-hover:text-[#c8f538]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
