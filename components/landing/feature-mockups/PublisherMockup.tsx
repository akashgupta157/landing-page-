export function PublisherMockup() {
  return (
    <div
      className="w-40 rounded-2xl border border-white/8 bg-[#111111] overflow-hidden mx-auto"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
    >
      {/* Phone notch */}
      <div className="flex justify-center pt-3 pb-2">
        <div className="w-12 h-1 rounded-full bg-white/10" />
      </div>

      {/* App header */}
      <div className="px-3 pb-2">
        <div className="text-white text-[11px] font-semibold mb-0.5">Publishers</div>
        <div className="text-white/30 text-[9px]">100,000+ verified</div>
      </div>

      {/* Publisher list */}
      <div className="px-2 pb-3 space-y-1.5">
        {[
          { name: "TechCrunch", score: "9.4", active: true },
          { name: "Forbes", score: "8.8" },
          { name: "Reuters", score: "8.2" },
          { name: "Wired", score: "7.9" },
        ].map((pub) => (
          <div
            key={pub.name}
            className={`flex items-center justify-between px-2.5 py-2 rounded-lg ${
              pub.active ? "bg-[#c8f538]/10 border border-[#c8f538]/20" : "bg-white/3"
            }`}
          >
            <span className={`text-[10px] font-medium ${pub.active ? "text-[#c8f538]" : "text-white/50"}`}>
              {pub.name}
            </span>
            <span className={`text-[9px] font-mono ${pub.active ? "text-[#c8f538]" : "text-white/30"}`}>
              {pub.score}
            </span>
          </div>
        ))}

        {/* Contact button */}
        <div className="mt-2 bg-white text-black text-[10px] font-semibold text-center py-2 rounded-lg">
          Contact Publisher →
        </div>
      </div>
    </div>
  );
}
