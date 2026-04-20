import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 md:px-12">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#c8f538] shadow-[0_10px_28px_rgba(200,245,56,0.18)]">
              <Image src="/logo.png" alt="AEOIX" width={22} height={22} className="h-[22px] w-[22px]" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white">AEOIX</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/28">
                Copyright 2026 AEOIX Technologies Inc.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Status"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs text-white/42 transition-colors duration-300 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {["X", "LinkedIn", "GitHub"].map((label) => (
              <a
                key={label}
                href="#"
                aria-label={`AEOIX on ${label}`}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] px-4 text-[11px] uppercase tracking-[0.18em] text-white/45 transition-all duration-300 hover:border-white/16 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/8 pt-5">
          <p className="max-w-3xl text-xs leading-6 text-white/20">
            AEOIX is an AI search visibility platform, not a financial or legal advisor.
            Rankings and publisher availability can change over time. All trademarks belong to
            their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
