export function AiSection() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-10">
        <h2 className="text-white font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em] mb-3">
          Meet Recommendations
        </h2>
        <p className="text-white/40 text-sm md:text-base max-w-lg leading-relaxed">
          Our AI-driven engine is designed to decode complex AI ranking signals and{" "}
          <span className="text-white/70 font-medium">
            illuminate the exact publishers to target
          </span>{" "}
          for your brand.
        </p>
      </div>

      {/* Two panel grid */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* Panel 1: Smart forecasting */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0d0d0d] overflow-hidden">
          {/* Visual */}
          <div className="p-5 pb-0">
            <ForecastMockup />
          </div>
          {/* Text */}
          <div className="p-5 pt-4">
            <h3 className="text-white text-sm font-semibold mb-1.5">
              Smart visibility forecasting
            </h3>
            <p className="text-white/40 text-xs leading-relaxed">
              Harness the power of AEOIX&apos;s predictive analytics to map out the AI
              visibility future of your brand.
            </p>
          </div>
        </div>

        {/* Panel 2: Chat with AI */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0d0d0d] overflow-hidden">
          {/* Visual */}
          <div className="p-5 pb-0">
            <ChatMockup />
          </div>
          {/* Text */}
          <div className="p-5 pt-4">
            <h3 className="text-white text-sm font-semibold mb-1.5">
              Chat with your data
            </h3>
            <p className="text-white/40 text-xs leading-relaxed">
              Just ask. With AEOIX by your side, navigating the AI visibility maze
              becomes intuitive and effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Forecast Mockup ────────────────────────────────────────────
function ForecastMockup() {
  return (
    <div className="space-y-3">
      {/* Alert card */}
      <div className="flex items-start gap-3 p-3 rounded-xl border border-amber-500/20 bg-amber-500/5">
        <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
          <span className="text-amber-400 text-xs">!</span>
        </div>
        <div>
          <div className="text-amber-400 text-[10px] font-medium">Critical visibility alert</div>
          <div className="text-white/40 text-[10px] leading-snug mt-0.5">
            You will lose more than 18,500 AI-attributed visits in May.
          </div>
        </div>
      </div>

      {/* Mini forecast chart */}
      <svg viewBox="0 0 300 80" className="w-full h-16" aria-hidden="true">
        <defs>
          <linearGradient id="forecast-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8f538" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c8f538" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[20, 40, 60].map((y) => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}

        {/* Solid history line */}
        <path
          d="M0,65 C30,58 60,45 90,40 C120,35 150,42 180,30"
          fill="none"
          stroke="#c8f538"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Dashed forecast */}
        <path
          d="M180,30 C210,18 240,25 270,15 C285,10 295,12 300,10"
          fill="none"
          stroke="#c8f538"
          strokeWidth="1.5"
          strokeDasharray="4,3"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Area under history */}
        <path
          d="M0,65 C30,58 60,45 90,40 C120,35 150,42 180,30 L180,80 L0,80 Z"
          fill="url(#forecast-grad)"
        />
      </svg>

      <div className="flex justify-between text-white/20 text-[9px] font-mono">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span className="text-amber-400/60">May ←</span>
      </div>
    </div>
  );
}

// ─── Chat Mockup ─────────────────────────────────────────────────
function ChatMockup() {
  return (
    <div className="space-y-2.5">
      {/* User message */}
      <div className="flex justify-end">
        <div className="bg-[#c8f538] text-black text-[11px] font-medium px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
          Hey! How can I help you?
        </div>
      </div>

      {/* User query */}
      <div className="flex items-end gap-2">
        <div className="w-6 h-6 rounded-full bg-white/[0.08] flex-shrink-0" />
        <div className="bg-white/[0.05] border border-white/[0.08] text-white/70 text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[85%]">
          Who&apos;s our most profitable AI channel?
        </div>
      </div>

      {/* AI response row with button */}
      <div className="flex items-center gap-2 justify-end">
        <div className="bg-white/[0.04] border border-white/[0.06] text-white/50 text-[10px] px-3 py-1.5 rounded-xl flex-1">
          Ranked publisher: <span className="text-[#c8f538]">Forbes (+27% visibility)</span>
        </div>
        <button className="bg-[#c8f538] text-black text-[10px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity">
          Ask AI →
        </button>
      </div>
    </div>
  );
}
