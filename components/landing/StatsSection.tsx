const stats = [
  { number: "100K+", label: "Verified publishers" },
  { number: "40+",   label: "AI engines tracked" },
  { number: "73%",   label: "Cheaper than agencies" },
  { number: "90+",   label: "Countries covered" },
];

export function StatsSection() {
  return (
    <section className="px-6 md:px-12 py-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#0d0d0d] px-8 py-10 text-center"
          >
            <span className="block text-[#c8f538] font-bold text-4xl md:text-5xl tracking-[-0.04em] leading-none mb-3 tabular-nums">
              {stat.number}
            </span>
            <span className="text-white/30 text-[11px] font-mono uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
