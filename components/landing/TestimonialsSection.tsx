const testimonials = [
  {
    quote:
      "We finally understood why our competitors kept showing up in ChatGPT. The publisher recommendations flipped that within 8 weeks.",
    highlight: "why our competitors kept showing up in ChatGPT",
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
      "5× more traffic from AI search in three months. The source analysis was the game-changer — we finally knew which placements to prioritize.",
    highlight: "The source analysis was the game-changer",
    name: "CMO",
    role: "E-commerce brand, $8M ARR",
    initials: "CM",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">
          What teams say
        </p>
        <h2 className="text-white font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em]">
          Results speak louder.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {testimonials.map((t) => (
          <div
            key={t.initials}
            className="rounded-2xl border border-white/[0.07] bg-[#0d0d0d] p-6 flex flex-col"
          >
            {/* Quote mark */}
            <div className="text-white/10 text-4xl font-serif leading-none mb-4 select-none">
              &ldquo;
            </div>

            {/* Quote with highlight */}
            <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6 italic">
              {t.quote.split(t.highlight).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <strong className="text-white not-italic font-medium">
                      {t.highlight}
                    </strong>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center flex-shrink-0">
                <span className="text-white/50 text-[10px] font-mono">{t.initials}</span>
              </div>
              <div>
                <p className="text-white text-xs font-medium">{t.name}</p>
                <p className="text-white/30 text-[10px] font-mono">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
