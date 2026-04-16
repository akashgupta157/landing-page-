const steps = [
  {
    number: "01",
    label: "ANALYZE",
    title: "See where you stand",
    description:
      "Your domain gets scanned across 40+ AI engines. We capture every mention, recommendation, and source citation — mapped to your competitors.",
  },
  {
    number: "02",
    label: "DIAGNOSE",
    title: "Understand the gap",
    description:
      "Our recommendation engine identifies exactly which publishers, topics, and mentions are pushing your competitors ahead — and what will flip that.",
  },
  {
    number: "03",
    label: "EXECUTE",
    title: "Place & publish fast",
    description:
      "Browse the marketplace, filter by AI-impact score, and contact publishers directly. No middleman. No 3-week agency turnaround.",
  },
  {
    number: "04",
    label: "TRACK",
    title: "Watch rankings move",
    description:
      "Every placement gets tracked. See how your AI visibility score responds — and double down on what works with one click.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">
          Process
        </p>
        <h2 className="text-white font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em]">
          From invisible{" "}
          <span className="text-white/40">to #1 ranked.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#0d0d0d] p-7 group hover:bg-[#111111] transition-colors duration-300 relative"
          >
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c8f538] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t" />

            <span className="text-white/20 text-[10px] font-mono tracking-widest block mb-5">
              {step.number} / {step.label}
            </span>
            <h3 className="text-white text-base font-semibold tracking-tight mb-3">
              {step.title}
            </h3>
            <p className="text-white/40 text-xs leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
