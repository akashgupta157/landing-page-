export function ControlMockup() {
  const commands = [
    { key: "⌘K", label: "Open command palette", active: true },
    { key: "⌘P", label: "View all summary reports", active: false },
    { key: "⌘E", label: "Export data" , active: false },
    { key: "⌘,", label: "Manage settings", active: false },
    { key: "⌘D", label: "Toggle dark mode", active: false },
  ];

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Command palette mock */}
      <div className="rounded-xl border border-white/[0.1] bg-[#111111] overflow-hidden shadow-2xl">
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.06]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="5" cy="5" r="3.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
            <path d="M8 8l2 2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-white/25 text-xs">What would you like to do?</span>
        </div>

        {/* Command list */}
        <div className="py-1">
          {commands.map((cmd, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-3 py-2 ${
                i === 1
                  ? "bg-[#c8f538]/10 border-l-2 border-[#c8f538]"
                  : "hover:bg-white/[0.03]"
              }`}
            >
              <span
                className={`text-[11px] ${
                  i === 1 ? "text-[#c8f538]" : "text-white/50"
                }`}
              >
                {cmd.label}
              </span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                  i === 1
                    ? "border-[#c8f538]/30 text-[#c8f538] bg-[#c8f538]/10"
                    : "border-white/[0.08] text-white/25"
                }`}
              >
                {cmd.key}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
