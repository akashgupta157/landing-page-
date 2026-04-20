"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  className?: string;
}

// Seeded shuffle — consistent order server + client to avoid hydration mismatch
function seededShuffle(arr: number[], seed: number): number[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function AnimatedHeading({ className }: AnimatedHeadingProps) {
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  const hasRun = useRef(false);

  const line1 = "Own the moments when";
  const line2 = "AI decides who gets seen.";
  const totalLine1 = line1.length;
  const total = line1.length + line2.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          runAnimation();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function runAnimation() {
    setStarted(true);

    const indices = Array.from({ length: total }, (_, i) => i);
    const shuffled = seededShuffle(indices, 73);

    const TOTAL_MS = 1600;
    const stagger = TOTAL_MS / total;

    shuffled.forEach((globalIdx, order) => {
      setTimeout(() => {
        setRevealedSet((prev) => new Set(prev).add(globalIdx));
      }, order * stagger);
    });
  }

  const renderText = (text: string, startIdx: number) =>
    text.split("").map((char, i) => {
      const idx = startIdx + i;

      if (char === " ") {
        // Spaces are invisible but always present — use a thin spacer
        return (
          <span key={i} style={{ display: "inline-block", width: "0.26em" }} />
        );
      }

      const visible = !started || revealedSet.has(idx);

      return (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transition: visible ? "opacity 0.4s ease" : "none",
          }}
        >
          {char}
        </span>
      );
    });

  return (
    <h1
      ref={ref}
      className={`mx-auto mt-6 max-w-5xl text-[clamp(44px,7vw,92px)] font-semibold leading-[0.94] tracking-[-0.06em] text-white ${className ?? ""}`}
      aria-label="Own the moments when AI decides who gets seen."
    >
      {/* Line 1 — plain white */}
      <span className="block" aria-hidden="true">
        {renderText(line1, 0)}
      </span>

      {/* Line 2 — white→lime gradient */}
      <span
        className="block"
        style={{
          background: "linear-gradient(180deg,#ffffff 0%,#c8f538 90%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        aria-hidden="true"
      >
        {renderText(line2, totalLine1)}
      </span>
    </h1>
  );
}
