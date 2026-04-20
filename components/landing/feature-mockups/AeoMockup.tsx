export function AeoMockup() {
  return (
    <div className="w-full rounded-t-xl border border-white/[0.07] bg-[#111111] p-3 space-y-2">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-white/40 text-[10px] font-mono">Today</span>
        <div className="flex gap-1">
          <div className="w-12 h-4 rounded bg-[#c8f538]/20 border border-[#c8f538]/30" />
          <div className="w-8 h-4 rounded bg-white/4" />
        </div>
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Visibility", val: "74%" },
          { label: "Mentions", val: "18.4" },
          { label: "Score Δ", val: "+12%" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white/3 rounded-lg p-2 border border-white/4"
          >
            <div className="text-white/30 text-[9px] mb-0.5">{s.label}</div>
            <div className="text-white text-xs font-semibold">{s.val}</div>
          </div>
        ))}
      </div>

      {/* Sparklines chart */}
      <div className="pt-1">
        <svg viewBox="0 0 220 50" className="w-full h-12" aria-hidden="true">
          <defs>
            <linearGradient id="aeo-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8f538" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c8f538" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,42 C20,38 40,30 60,28 C80,26 100,32 120,24 C140,16 160,18 180,12 C200,6 210,8 220,6 L220,50 L0,50 Z"
            fill="url(#aeo-grad)"
          />
          <path
            d="M0,42 C20,38 40,30 60,28 C80,26 100,32 120,24 C140,16 160,18 180,12 C200,6 210,8 220,6"
            fill="none"
            stroke="#c8f538"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Engine rows */}
      {[
        { engine: "ChatGPT", rank: "#2", up: true },
        { engine: "Gemini", rank: "#1", up: true },
        { engine: "Perplexity", rank: "#4", up: false },
      ].map((row) => (
        <div
          key={row.engine}
          className="flex items-center justify-between py-1 border-t border-white/4"
        >
          <span className="text-white/40 text-[10px] font-mono">
            {row.engine}
          </span>
          <span
            className={`text-[10px] font-mono ${row.up ? "text-[#c8f538]" : "text-white/30"}`}
          >
            {row.rank}
          </span>
        </div>
      ))}
    </div>
  );
}
