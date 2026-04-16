export function MissionSection() {
  return (
    <section className="px-6 md:px-12 py-28 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Left: big heading */}
        <div>
          <h2 className="text-white font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em]">
            Who said AI visibility has to be complicated?
          </h2>
        </div>

        {/* Right: body copy */}
        <div className="space-y-4 text-white/50 text-sm md:text-base leading-relaxed">
          <p>
            With AEOIX, managing your AI search presence is effortless, empowering,
            and anything but boring. Our platform brings clarity to your AI rankings,
            simplifies your publisher outreach, and puts the power of advanced AI
            visibility right at your fingertips.
          </p>
          <p>
            Say no to scattered tools and agencies designed in the dark ages.{" "}
            <strong className="text-white font-medium">
              AEOIX gives you direct access to 100,000+ publishers
            </strong>{" "}
            — and shows you exactly which ones to target to outrank your competitors
            in ChatGPT, Gemini, and every major AI engine.
          </p>
        </div>
      </div>
    </section>
  );
}
