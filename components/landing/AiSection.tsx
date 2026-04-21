import { Reveal } from "./Reveal";

export function AiSection() {
  return (
    <section
      id="recommendations"
      className="mx-auto max-w-6xl px-6 py-20 xl:py-28 md:px-12"
    >
      <Reveal>
        <div className="mb-12 xl:mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-px w-7 rounded-full"
                style={{ background: "var(--accent-lime)" }}
              />
              <p className="section-kicker">Recommendations</p>
            </div>
            <h2 className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Recommendations that feel
              <span className="block text-white/40">more like a strategist than a report.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/62 md:text-base">
            Forecasts, alerts, and conversational insight — all grounded in your real ranking data.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Forecast card — lime accent */}
        <Reveal delay={80}>
          <div className="panel-shell interactive-card flex flex-col rounded-[32px] p-6">
            <div className="mb-5">
              <div className="accent-pill mb-3 inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                Predictive layer
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                Smart visibility forecasting
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-white/60">
                Spot where rankings slip before you lose attention — then prioritize publisher
                moves with a clearer sense of impact.
              </p>
            </div>

            <div className="mb-5 h-px bg-white/[0.06]" />

            <div className="flex-1 rounded-[24px] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-5">
              <ForecastMockup />
            </div>
          </div>
        </Reveal>

        {/* Chat card — blue accent */}
        <Reveal delay={160}>
          <div className="panel-shell interactive-card flex flex-col rounded-[32px] p-6">
            <div className="mb-5">
              <div
                className="mb-3 inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]"
                style={{
                  border: "1px solid rgba(124,200,255,0.18)",
                  background: "rgba(124,200,255,0.08)",
                  color: "rgba(124,200,255,0.85)",
                }}
              >
                Conversational layer
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                Chat with your ranking data
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-white/60">
                Ask focused questions, get concise answers grounded in the exact evidence
                behind each recommendation.
              </p>
            </div>

            <div className="mb-5 h-px bg-white/[0.06]" />

            <div className="flex-1 rounded-[24px] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-5">
              <ChatMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ForecastMockup() {
  return (
    <div className="space-y-4">
      <div className="interactive-card rounded-[24px] border border-amber-400/18 bg-amber-300/5 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-300">
            !
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300/80">
              Critical visibility alert
            </div>
            <div className="mt-1 text-sm leading-5 text-white/52">
              You may lose more than 18,500 AI-attributed visits next month unless
              citation coverage improves.
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-white/8 bg-black/10 p-4">
        <svg viewBox="0 0 300 100" className="h-28 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="forecast-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8f538" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#c8f538" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[20, 40, 60, 80].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="300"
              y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}

          <path
            d="M0,76 C30,70 60,56 90,50 C120,44 150,50 180,40"
            fill="none"
            stroke="#c8f538"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M180,40 C210,28 240,30 270,18 C286,12 294,12 300,10"
            fill="none"
            stroke="#7cc8ff"
            strokeWidth="1.6"
            strokeDasharray="4,4"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M0,76 C30,70 60,56 90,50 C120,44 150,50 180,40 L180,100 L0,100 Z"
            fill="url(#forecast-grad)"
          />
          <circle cx="180" cy="40" r="4" fill="#c8f538" className="pulse-soft origin-center" />
        </svg>
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/24">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span className="text-[#7cc8ff]/75">May</span>
        </div>
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <div className="rounded-[24px] rounded-br-md bg-[#c8f538] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-black shadow-[0_12px_26px_rgba(200,245,56,0.16)] transition-transform duration-300 hover:-translate-y-0.5">
          Show fastest ranking win
        </div>
      </div>

      <div className="flex items-end gap-3">
        <div className="h-8 w-8 rounded-full border border-white/8 bg-white/5" />
        <div className="max-w-[82%] rounded-[24px] rounded-bl-md border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-white/62">
          Which publisher category closes the gap with our top competitor fastest?
        </div>
      </div>

      <div className="rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker mb-2">Suggested priority</p>
            <p className="text-sm font-semibold text-white">Mid-market B2B publishers</p>
            <p className="mt-1 text-sm leading-6 text-white/46">
              Highest overlap with competitor citations and the shortest route to lift.
            </p>
          </div>
          <button className="button-shine cursor-pointer rounded-full border border-[#c8f538]/20 bg-[#c8f538]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8f538] transition-transform duration-300 hover:-translate-y-0.5">
            Ask AI
          </button>
        </div>
      </div>
    </div>
  );
}
