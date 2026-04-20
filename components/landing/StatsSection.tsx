"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "./Reveal";

function parseNumber(str: string): { value: number; suffix: string } {
  const match = str.match(/^([\d.]+)(.*)$/);
  if (match) return { value: parseFloat(match[1]), suffix: match[2] };
  return { value: 0, suffix: str };
}

function AnimatedNumber({ target }: { target: string }) {
  const { value: targetValue, suffix } = parseNumber(target);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      setCurrent(Math.min(increment * step, targetValue));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, targetValue]);

  const display = target.includes(".")
    ? current.toFixed(1).replace(/\.0$/, "")
    : Math.floor(current);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { number: "47%", label: "of searches now answered by AI", gradient: true },
  { number: "12,000+", label: "Brands tracked daily", gradient: false },
  { number: "94%", label: "avg. visibility increase", gradient: true },
  { number: "6", label: "AI engines monitored", gradient: false },
];

export function StatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 90}>
            <div className="interactive-card group text-center">
              <span
                className={`block text-5xl font-semibold tracking-[-0.06em] md:text-6xl ${
                  stat.gradient
                    ? "bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
                    : "text-[#c8f538]"
                }`}
              >
                <AnimatedNumber target={stat.number} />
              </span>
              <span className="mt-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
