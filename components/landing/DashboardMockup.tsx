export function DashboardMockup() {
  return (
    <div
      className="w-full rounded-t-2xl border border-white/[0.08] border-b-0 bg-[#0d0d0d] overflow-hidden shadow-2xl"
      style={{
        boxShadow: "0 -8px 80px rgba(255,255,255,0.04), 0 2px 40px rgba(0,0,0,0.6)",
      }}
      role="img"
      aria-label="AEOIX dashboard showing AI visibility monitoring and publisher network"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#111111]">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
            <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
            <div className="w-3 h-3 rounded-full bg-white/[0.08]" />
          </div>
        </div>
        {/* Fake search bar */}
        <div className="flex-1 mx-6 max-w-sm">
          <div className="flex items-center gap-2 bg-white/[0.04] rounded-lg px-3 py-1.5 border border-white/[0.06]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="5" cy="5" r="3.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
              <path d="M8 8l2 2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="text-white/20 text-xs font-mono">Search anything...</span>
          </div>
        </div>
        {/* Right icons */}
        <div className="flex items-center gap-2">
          {[0,1,2,3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-white/[0.06]" />
          ))}
          <div className="w-7 h-7 rounded-full bg-[#c8f538]/20 border border-[#c8f538]/30" />
        </div>
      </div>

      {/* Main layout: sidebar + content */}
      <div className="flex" style={{ minHeight: 380 }}>
        {/* Sidebar */}
        <div className="w-44 flex-shrink-0 border-r border-white/[0.06] bg-[#0d0d0d] p-3">
          <div className="mb-4">
            <div className="text-white/20 text-[10px] font-mono uppercase tracking-widest px-2 mb-2">
              AEOIX
            </div>
          </div>
          {[
            { label: "Insights", active: true },
            { label: "AI Engines" },
            { label: "Publishers" },
            { label: "Competitors" },
            { label: "Reports" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-md mb-0.5 ${
                item.active
                  ? "bg-white/[0.07] text-white"
                  : "text-white/30 hover:text-white/50"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}

          {/* Spacer */}
          <div className="mt-auto pt-8">
            {["Settings", "Partner rewards"].map((item) => (
              <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                <span className="text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Top stat cards */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { label: "AI Visibility Score", val: "74%", change: "+12%", up: true },
              { label: "Avg. mentions / day", val: "18.4", change: "+6%", up: true },
              { label: "Top publishers active", val: "1,247", change: null, up: false },
              { label: "Visibility vs last mo.", val: "▲ 31%", change: "↑ improving", up: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]"
              >
                <div className="text-white/40 text-[10px] mb-1 truncate">{stat.label}</div>
                <div className="text-white text-sm font-semibold">{stat.val}</div>
                {stat.change && (
                  <div className={`text-[10px] mt-0.5 ${stat.up ? "text-[#c8f538]" : "text-red-400"}`}>
                    {stat.change}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Filter bar */}
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1 text-white/40 text-xs">
              Last 4 weeks ▾
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1 text-white/40 text-xs">
              Jan 5 – Feb 2 ▾
            </div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1 text-white/40 text-xs">
              vs. Competitors ▾
            </div>
            <div className="ml-auto flex items-center gap-1">
              {["Daily","Weekly","Monthly"].map((t, i) => (
                <div
                  key={t}
                  className={`px-2.5 py-1 rounded-md text-[10px] ${i === 0 ? "bg-[#c8f538] text-black font-medium" : "text-white/30"}`}
                >
                  {t}
                </div>
              ))}
              <div className="ml-1 flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 py-1 text-[#c8f538] text-[10px]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 3h8M3 1v2M7 1v2M1 7h8M3 5v2M7 5v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Filter
              </div>
            </div>
          </div>

          {/* Big numbers */}
          <div className="flex items-baseline gap-6 mb-4">
            <div>
              <div className="text-white text-xl font-bold">$23,242<span className="text-white/40 text-sm font-normal">.31</span></div>
              <div className="text-white/30 text-[10px]">Revenue attributed</div>
            </div>
            <div>
              <div className="text-white text-xl font-bold">$4,507<span className="text-white/40 text-sm font-normal">.as</span></div>
              <div className="text-white/30 text-[10px]">Expenses</div>
            </div>
          </div>

          {/* Chart area */}
          <div className="relative h-28 w-full">
            {/* Y-axis labels */}
            <div className="absolute right-0 top-0 flex flex-col justify-between h-full pr-1">
              {["$2.0k", "$1.5k", "$1.0k", "$0.5k"].map((l) => (
                <span key={l} className="text-white/20 text-[9px] font-mono">{l}</span>
              ))}
            </div>

            {/* SVG chart */}
            <svg
              className="w-full h-full"
              viewBox="0 0 600 100"
              preserveAspectRatio="none"
              aria-label="AI visibility trend chart"
            >
              {/* Grid lines */}
              {[25, 50, 75].map((y) => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}

              {/* Area fill */}
              <path
                d="M0,90 C40,85 80,70 120,65 C160,60 200,72 240,60 C280,48 320,40 360,35 C400,30 440,42 480,28 C520,14 560,20 600,15 L600,100 L0,100 Z"
                fill="rgba(200,245,56,0.06)"
              />

              {/* Line */}
              <path
                d="M0,90 C40,85 80,70 120,65 C160,60 200,72 240,60 C280,48 320,40 360,35 C400,30 440,42 480,28 C520,14 560,20 600,15"
                fill="none"
                stroke="#c8f538"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Tooltip dot */}
              <circle cx="480" cy="28" r="4" fill="#c8f538" />
              <rect x="460" y="8" width="48" height="16" rx="4" fill="#1a1a1a" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
              <text x="484" y="19" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">$1,870</text>
            </svg>

            {/* X-axis */}
            <div className="flex justify-between pt-1">
              {["Jan 5","Jan 12","Jan 19","Jan 26","Feb 2"].map((d) => (
                <span key={d} className="text-white/20 text-[9px] font-mono">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
