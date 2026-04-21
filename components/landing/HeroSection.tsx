"use client";

import Image from "next/image";
import { Sparkles, ChevronDown, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { DashboardMockup } from "./DashboardMockup";
import { Reveal } from "./Reveal";
import { VerifyEmailModal } from "./VerifyEmailModal";

interface MetricResult {
  label: string;
  icon: string;
  value: number;
}

interface AnalysisResult {
  score: number;
  grade: string;
  metrics: MetricResult[];
}

const heroChips = [
  "Tracks 40+ engines",
  "Publisher recommendations",
  "Live competitor gaps",
];

function gradeFor(score: number): string {
  if (score >= 80) return "Grade A";
  if (score >= 65) return "Grade B";
  if (score >= 50) return "Grade C";
  return "Grade D";
}

function generateResult(): AnalysisResult {
  const score = Math.floor(Math.random() * 35) + 45;
  return {
    score,
    grade: gradeFor(score),
    metrics: [
      {
        label: "AI Citation Rate",
        icon: "AI",
        value: Math.floor(Math.random() * 40) + 40,
      },
      {
        label: "Structured Data",
        icon: "SD",
        value: Math.floor(Math.random() * 40) + 20,
      },
      {
        label: "Content Clarity",
        icon: "CC",
        value: Math.floor(Math.random() * 35) + 40,
      },
      {
        label: "E-E-A-T Signals",
        icon: "EE",
        value: Math.floor(Math.random() * 35) + 45,
      },
    ],
  };
}

function ScoreRing({ score }: { score: number }) {
  const r = 45;
  const circumference = 2 * Math.PI * r;
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const duration = 1300;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(score * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [score]);

  const offset = circumference * (1 - displayScore / 100);

  return (
    <div className="relative h-[108px] w-[108px]">
      <svg
        width="108"
        height="108"
        viewBox="0 0 108 108"
        className="-rotate-90"
      >
        <circle
          cx="54"
          cy="54"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="9"
        />
        <circle
          cx="54"
          cy="54"
          r={r}
          fill="none"
          stroke="#c8f538"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            filter: "drop-shadow(0 0 10px rgba(200,245,56,0.55))",
            transition: "stroke-dashoffset 0.1s linear",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[28px] font-bold leading-none text-white">
          {displayScore}
        </span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/35">
          AEO score
        </span>
      </div>
    </div>
  );
}

function MetricBar({
  metric,
  opacity,
  delay,
}: {
  metric: MetricResult;
  opacity: string;
  delay: string;
}) {
  return (
    <div
      className="animate-fade-in space-y-[6px]"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[9px] font-semibold tracking-[0.18em] text-white/60">
            {metric.icon}
          </span>
          <span className="text-[13px] font-medium text-white/65">
            {metric.label}
          </span>
        </div>
        <span className="text-[13px] font-bold text-white/90">
          {metric.value}%
        </span>
      </div>
      <div className="h-[5px] overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full"
          style={{
            width: `${metric.value}%`,
            background: `rgba(200,245,56,${opacity})`,
            boxShadow:
              opacity === "1" ? "0 0 8px rgba(200,245,56,0.35)" : undefined,
            transition: `width 1s ${delay} cubic-bezier(0.4,0,0.2,1)`,
          }}
        />
      </div>
    </div>
  );
}

function ResultScreen({
  cleanDomain,
  result,
  onReset,
}: {
  cleanDomain: string;
  result: AnalysisResult;
  onReset: () => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const barOpacities = ["1", "0.55", "0.35", "0.2"];
  const barDelays = ["0.15s", "0.28s", "0.41s", "0.54s"];

  return (
    <section className="relative flex min-h-screen flex-col items-center px-6 pb-16 pt-32">
      <div className="spot-orb left-1/2 top-10 h-[320px] w-[560px] -translate-x-1/2 bg-[var(--glow-lime)]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col gap-4">
        <Reveal>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="panel-shell flex flex-1 items-center gap-3 rounded-[26px] px-4 py-3">
              <Image
                src={`https://favicon.vemetric.com/${cleanDomain}`}
                alt={cleanDomain}
                width={18}
                height={18}
                unoptimized
                className="h-[18px] w-[18px] rounded-sm"
              />
              <span className="flex-1 truncate font-mono text-sm text-white/60">
                {cleanDomain}
              </span>
              <span className="accent-pill rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                Live audit
              </span>
            </div>
            <button
              onClick={onReset}
              className="panel-shell interactive-card rounded-[26px] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
            >
              Analyze another
            </button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="panel-shell rounded-[32px] p-6 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <div className="accent-pill mb-4 inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                  Analysis complete
                </div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Visibility signals mapped clearly.
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/45">
                  We scored your AI footprint, surfaced the biggest ranking
                  gaps, and lined up the fastest wins for publisher outreach.
                </p>
              </div>
              <span className="rounded-full border border-[#c8f538]/20 bg-[#c8f538]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8f538]">
                {result.grade}
              </span>
            </div>

            <div className="flex flex-col gap-7 md:flex-row md:items-start">
              <div className="flex flex-col items-center rounded-[28px] border border-white/8 bg-white/[0.03] px-6 py-5">
                <ScoreRing score={result.score} />
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/35">
                  Relative strength
                </p>
              </div>

              <div className="flex-1 space-y-4">
                {result.metrics.map((metric, index) => (
                  <MetricBar
                    key={metric.label}
                    metric={metric}
                    opacity={barOpacities[index]}
                    delay={barDelays[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="panel-shell interactive-card flex flex-col items-start justify-between gap-4 rounded-[32px] border-[#c8f538]/15 p-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to improve your score?
              </p>
              <p className="mt-1 text-xs text-white/45">
                Get the publishers, outreach priorities, and ranking
                opportunities we would tackle first.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="button-shine group relative rounded-full bg-[#c8f538] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_14px_36px_rgba(200,245,56,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(200,245,56,0.35)]"
            >
              <span className="relative z-10">Get full report</span>
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </Reveal>

        <VerifyEmailModal
          open={showModal}
          onOpenChange={setShowModal}
          onGoogleContinue={() => console.log("Google continue")}
          onEmailSubmit={(email) => console.log("Email submit:", email)}
        />
      </div>
    </section>
  );
}

export function HeroSection() {
  const [domain, setDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [cleanDomain, setCleanDomain] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean =
      domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "") ||
      "yourdomain.com";
    setCleanDomain(clean);
    setIsLoading(true);
    setResult(null);
    startFakeLoading();
  }

  function startFakeLoading() {
    const steps = [
      "Analyzing domain...",
      "Fetching AI mentions...",
      "Scanning competitors...",
      "Calculating visibility score...",
      "Finalizing report...",
    ];

    let stepIndex = 0;
    let prog = 0;

    const interval = setInterval(() => {
      prog += Math.random() * 12 + 5;

      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          setResult(generateResult());
        }, 500);
      }

      if (stepIndex < steps.length && prog > (stepIndex + 1) * 20) {
        setCurrentStep(steps[stepIndex]);
        stepIndex++;
      }

      setProgress(prog);
    }, 500);
  }

  function handleReset() {
    setResult(null);
    setDomain("");
    setProgress(0);
    setCurrentStep("");
    setCleanDomain("");
  }

  if (result) {
    return (
      <ResultScreen
        cleanDomain={cleanDomain}
        result={result}
        onReset={handleReset}
      />
    );
  }

  if (isLoading) {
    return (
      <section className="relative flex h-screen flex-col items-center justify-center px-6 text-white">
        <div className="spot-orb left-1/2 top-24 h-[360px] w-[600px] -translate-x-1/2 bg-[var(--glow-blue)]" />
        <div className="panel-shell relative z-10 w-full max-w-xl rounded-[36px] px-8 py-10 text-center">
          <div className="mb-8 flex flex-col items-center gap-3 animate-fade-in">
            <div className="relative">
              <Image
                width={56}
                height={56}
                src={`https://favicon.vemetric.com/${cleanDomain}`}
                alt="favicon"
                unoptimized
                className="h-14 w-14 rounded-2xl"
              />
              <div className="pulse-soft absolute inset-0 rounded-2xl border border-[#c8f538]/30" />
            </div>
            <p className="font-mono text-sm text-white/50">{cleanDomain}</p>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full bg-[#c8f538] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-5 text-sm text-white/60 animate-fade-in">
            {currentStep || "Starting analysis..."}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center text-xs text-white/40 animate-fade-in">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-3 py-4">
              <p className="text-lg font-semibold text-white">
                +{Math.floor(progress * 2)}
              </p>
              Mentions
            </div>
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-3 py-4">
              <p className="text-lg font-semibold text-white">
                {Math.min(100, Math.floor(progress))}%
              </p>
              Visibility
            </div>
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-3 py-4">
              <p className="text-lg font-semibold text-white">
                {Math.floor(progress / 8)}
              </p>
              Sources
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-0 pt-32 text-center">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="spot-orb left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 bg-[var(--glow-lime)] animate-pulse-soft" />
      <div className="spot-orb right-[12%] top-24 h-[240px] w-[240px] bg-[var(--glow-blue)]" />
      <div className="spot-orb left-[5%] bottom-1/3 h-[180px] w-[180px] bg-[var(--glow-lime)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="accent-pill mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em]">
            <Sparkles size={14} className="text-[#c8f538]" />
            AI search visibility, redesigned for speed
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-8 max-w-5xl text-[clamp(44px,7vw,92px)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
            Own the moments when
            <span className="block bg-[linear-gradient(180deg,#ffffff_0%,#c8f538_90%)] bg-clip-text text-transparent">
              AI decides who gets seen.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-6 xl:mt-8 max-w-2xl text-base leading-relaxed text-white/52 md:text-lg">
            Audit how ChatGPT, Gemini, Perplexity, and the rest describe your
            brand, then move faster with publisher recommendations built for
            ranking lift.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 xl:mt-14 flex flex-wrap items-center justify-center gap-3">
            {heroChips.map((chip, i) => (
              <div
                key={chip}
                className="group cursor-pointer rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs text-white/68 transition-all duration-300 hover:border-[#c8f538]/30 hover:bg-[#c8f538]/6 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(200,245,56,0.15)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {chip}
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  →
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <form
            // onSubmit={handleSubmit}
            className="mx-auto mt-12 xl:mt-16 w-full max-w-2xl"
          >
            <div className="panel-shell group relative flex flex-col gap-3 rounded-[30px] p-3 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-[22px] border border-white/8 bg-black/15 px-4 py-3 transition-all duration-300 focus-within:border-[#c8f538]/40 focus-within:bg-black/25">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] transition-all duration-300 group-hover:border-[#c8f538]/20 group-hover:bg-[#c8f538]/5">
                  <Zap
                    size={16}
                    className="text-[#c8f538] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex min-w-0 flex-1 items-center">
                  <span className="text-sm font-mono text-white/28">
                    https://
                  </span>
                  <input
                    type="text"
                    placeholder="yourdomain.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent text-sm font-mono text-white/28 outline-none placeholder:text-white/28 md:text-base transition-colors duration-300 focus:text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="button-shine group relative overflow-hidden rounded-[22px] bg-[#c8f538] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_16px_40px_rgba(200,245,56,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(200,245,56,0.35)]"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  Get free report
                </span>
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-5 xl:mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/28">
            <span>No credit card</span>
            <span className="h-1 w-1 rounded-full bg-white/18" />
            <span>Results in 30 seconds</span>
            <span className="h-1 w-1 rounded-full bg-white/18" />
            <span>Actionable publisher list</span>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <a
            href="#platform"
            className="mt-12 xl:mt-16 inline-flex flex-col items-center gap-2 text-xs text-white/34 transition-colors duration-300 hover:text-white/60"
          >
            <span className="uppercase tracking-[0.24em]">
              Explore the platform
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <ChevronDown size={14} />
            </span>
          </a>
        </Reveal>

        <Reveal delay={500} className="mt-16 xl:mt-24">
          <div className="relative mx-auto max-w-6xl">
            {/* <div className="pointer-events-none absolute -left-2 top-10 hidden rounded-full border border-white/10 bg-[rgba(11,14,22,0.78)] px-4 py-3 text-left shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:block">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Brand lift</p>
              <p className="mt-1 text-sm font-semibold text-white">
                +31% visibility score
              </p>
            </div> */}
            {/* <div className="pointer-events-none absolute -right-2 top-20 hidden rounded-full border border-white/10 bg-[rgba(11,14,22,0.78)] px-4 py-3 text-left shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:block">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Top publisher</p>
              <p className="mt-1 text-sm font-semibold text-white">Forbes, TechRadar</p>
            </div> */}
            {/* <div className="pointer-events-none absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#c8f538]/30 bg-[#c8f538]/10">
                <Star size={16} className="text-[#c8f538]" />
                <span className="orbit-dot absolute h-2 w-2 rounded-full bg-[#7cc8ff]" />
              </div>
            </div> */}
            <div className="float-soft">
              <DashboardMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
