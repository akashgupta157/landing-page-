import { Reveal } from "./Reveal";

const missionPoints = [
  {
    label: "Unified",
    body: "One dashboard for mentions, citations, and publisher opportunities — no tab-switching.",
  },
  {
    label: "Actionable",
    body: "Clearer recommendations instead of agency-style guesswork and vague reports.",
  },
  {
    label: "Fast",
    body: "A workflow that feels sharp on desktop and actually usable on mobile.",
  },
];

export function MissionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 xl:py-36 md:px-12">

      {/* Header — pure typography, no panels */}
      <Reveal>
        <div className="mb-14 xl:mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-px w-7 rounded-full"
                style={{ background: "var(--accent-lime)" }}
              />
              <p className="section-kicker">Why teams switch</p>
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              AI visibility should feel
              <span className="block text-white/40">sharp, calm, and obvious.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/45 md:text-base">
            With AEOIX, your AI search presence becomes something your team can
            actually understand and act on — fast.
          </p>
        </div>
      </Reveal>

      {/* Three-column cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {missionPoints.map((point, index) => (
          <Reveal key={point.label} delay={index * 80}>
            <div className="panel-shell interactive-card group relative overflow-hidden rounded-[28px] p-7">

              {/* Top accent bar */}
              <div
                className="mb-6 h-px w-full rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-70"
                style={{ background: `linear-gradient(90deg, var(--accent-lime), transparent)` }}
              />

              {/* Ghost number */}
              <div
                className="pointer-events-none absolute right-4 top-3 select-none text-[88px] font-black leading-none tracking-[-0.06em] text-white/[0.04] transition-all duration-300 group-hover:text-white/[0.07]"
                aria-hidden
              >
                0{index + 1}
              </div>

              <div className="relative flex flex-col gap-3">
                {/* Lime keyword */}
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: "var(--accent-lime)" }}
                >
                  {point.label}
                </span>

                {/* Body */}
                <p className="text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/70">
                  {point.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
