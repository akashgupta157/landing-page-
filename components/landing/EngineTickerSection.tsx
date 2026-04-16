const engines = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Claude",
  "Copilot",
  "DeepSeek",
  "Google SGE",
  "Grok",
  "You.com",
  "Meta AI",
  "Mistral",
  "Cohere",
];

export function EngineTickerSection() {
  // Double array for seamless loop
  const doubled = [...engines, ...engines];

  return (
    <div
      className="relative border-t border-b border-white/[0.06] py-4 overflow-hidden bg-white/[0.01]"
      aria-label="AI engines tracked by AEOIX"
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #0a0a0a 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Label */}
      <span className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/25 text-[10px] font-mono uppercase tracking-widest">
        Tracked engines
      </span>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #0a0a0a 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Scrolling track */}
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: "ticker 28s linear infinite",
          paddingLeft: "180px",
        }}
        aria-hidden="true"
      >
        {doubled.map((engine, i) => (
          <span
            key={`${engine}-${i}`}
            className="flex items-center gap-2 text-white/30 text-sm font-mono flex-shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
            {engine}
          </span>
        ))}
      </div>
    </div>
  );
}
