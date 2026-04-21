import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    label: "Analyze",
    title: "See where you stand",
    description:
      "Scan your brand across 40+ AI engines, capture mentions and citations, then benchmark against the competitors already showing up.",
  },
  {
    number: "02",
    label: "Diagnose",
    title: "Find the actual gap",
    description:
      "Surface the topics, publishers, and trust signals creating the difference between your visibility and theirs.",
  },
  {
    number: "03",
    label: "Execute",
    title: "Publish with more precision",
    description:
      "Use the marketplace and filters to move toward the placements most likely to shift ranking coverage quickly.",
  },
  {
    number: "04",
    label: "Track",
    title: "Watch rankings respond",
    description:
      "Measure which actions change your visibility score so the next move gets smarter rather than louder.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-20 xl:py-28 md:px-12">
      <Reveal>
        <div className="mb-10 xl:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-px w-7 rounded-full"
              style={{ background: "var(--accent-lime)" }}
            />
            <p className="section-kicker">Process</p>
          </div>
          <h2 className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
            From invisible
            <span className="block text-white/40">to convincingly ranked.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 90}>
            <div className="panel-shell interactive-card group relative h-full overflow-hidden rounded-[30px] p-6">
              {/* Left accent bar slides in on hover */}
              <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 rounded-r-full bg-[#c8f538] transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="mb-10 flex items-center justify-between">
                <span className="section-kicker transition-all duration-300 group-hover:text-[#c8f538]/60 group-hover:translate-x-1">
                  {step.number}
                </span>
                <span className="rounded-full border border-white/8 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/35 transition-all duration-300 group-hover:border-[#c8f538]/18 group-hover:text-[#c8f538] group-hover:shadow-[0_0_12px_rgba(200,245,56,0.12)]">
                  {step.label}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/46 transition-colors duration-300 group-hover:text-white/58">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
