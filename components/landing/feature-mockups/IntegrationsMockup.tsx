export function IntegrationsMockup() {
  const integrations = [
    { name: "Ahrefs", color: "#FF6B35", letter: "A" },
    { name: "Semrush", color: "#FF642D", letter: "S" },
    { name: "HubSpot", color: "#FF7A59", letter: "H" },
    { name: "Slack", color: "#4A154B", letter: "S" },
    { name: "Stripe", color: "#635BFF", letter: "S" },
    { name: "Notion", color: "#000000", letter: "N" },
    { name: "Zapier", color: "#FF4A00", letter: "Z" },
    { name: "GA4", color: "#E37400", letter: "G" },
  ];

  return (
    <div className="w-full px-2">
      {/* Center AEOIX hub */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ top: "-40px", left: "-80px", width: "220px", height: "120px" }}
            aria-hidden="true"
          >
            {[30, 80, 130, 180].map((x, i) => (
              <line
                key={i}
                x1={x}
                y1="10"
                x2="110"
                y2="80"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            ))}
          </svg>

          {/* Hub icon */}
          <div className="w-10 h-10 rounded-xl bg-[#c8f538] flex items-center justify-center mx-auto relative z-10">
            <span className="text-black text-sm font-bold font-mono">A</span>
          </div>
        </div>
      </div>

      {/* Integration icons grid */}
      <div className="grid grid-cols-4 gap-2">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex flex-col items-center gap-1"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/[0.08]"
              style={{ backgroundColor: `${integration.color}22` }}
            >
              <span
                className="text-xs font-bold"
                style={{ color: integration.color }}
              >
                {integration.letter}
              </span>
            </div>
            <span className="text-white/30 text-[9px] font-mono text-center">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
