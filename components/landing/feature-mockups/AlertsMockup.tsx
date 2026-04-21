export function AlertsMockup() {
  return (
    <div className="w-[85%] mx-auto space-y-2">
      {[
        {
          icon: "↑",
          iconBg: "bg-[#c8f538]/10 text-[#c8f538]",
          title: "Visibility up on ChatGPT",
          body: "You moved from #4 to #2 for 'best CRM for startups'",
          time: "Just now",
          border: "border-[#c8f538]/20",
        },
        {
          icon: "⚠",
          iconBg: "bg-amber-500/10 text-amber-400",
          title: "Competitor gained ground",
          body: "HubSpot now ranks #1 on Perplexity for your top keyword",
          time: "2m ago",
          border: "border-white/[0.06]",
        },
        {
          icon: "✓",
          iconBg: "bg-emerald-500/10 text-emerald-400",
          title: "Publisher confirmed",
          body: "Forbes accepted your outreach request",
          time: "1h ago",
          border: "border-white/[0.06]",
        },
      ].map((alert, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 rounded-xl border ${alert.border} bg-[#111111]`}
        >
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0 ${alert.iconBg}`}>
            {alert.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white text-[11px] font-medium mb-0.5">{alert.title}</div>
            <div className="text-white/40 text-[10px] leading-relaxed truncate">{alert.body}</div>
          </div>
          <span className="text-white/20 text-[9px] font-mono shrink-0">{alert.time}</span>
        </div>
      ))}
    </div>
  );
}
