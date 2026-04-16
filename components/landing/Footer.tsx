import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-[4px] bg-[#c8f538] flex items-center justify-center flex-shrink-0">
              <span className="text-black text-[9px] font-bold font-mono leading-none">A</span>
            </div>
            <span className="text-white/30 text-xs font-mono">
              © 2026 AEOIX Technologies Inc.
            </span>
          </div>

          {/* Policy links */}
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-white/30 text-xs font-mono hover:text-white/60 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="AEOIX on X"
              className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center hover:bg-white/[0.08] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M7.167 5.084 11.333 0H10.31L6.71 4.412 3.833 0H.667l4.378 6.373L.667 12H1.69l3.828-4.653L8.167 12h3.166L7.167 5.084ZM5.99 6.793l-.444-.635L2.07.8h1.52l2.85 4.075.444.635 3.706 5.298H9.07L5.99 6.793Z"
                  fill="rgba(255,255,255,0.4)"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="AEOIX on LinkedIn"
              className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center hover:bg-white/[0.08] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM.5 3.5h2V10h-2V3.5ZM4.5 3.5h1.9v.9h.027C6.64 3.9 7.33 3.4 8.35 3.4c2.04 0 2.42 1.34 2.42 3.09V10H8.77V6.88c0-.74-.014-1.7-1.035-1.7-1.036 0-1.195.81-1.195 1.645V10H4.5V3.5Z"
                  fill="rgba(255,255,255,0.4)"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              aria-label="AEOIX on GitHub"
              className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center hover:bg-white/[0.08] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 0a6 6 0 0 0-1.897 11.698c.3.055.41-.13.41-.29v-1.01C2.8 10.8 2.44 9.6 2.44 9.6c-.273-.694-.667--.879-.667-.879-.546-.373.04-.366.04-.366.603.043.92.619.92.619.536.918 1.406.652 1.748.499.054-.389.21-.652.38-.802-1.333-.152-2.733-.666-2.733-2.965 0-.655.233-1.19.617-1.61-.062-.151-.267-.76.058-1.585 0 0 .503-.161 1.648.614A5.742 5.742 0 0 1 6 3.4c.51.002 1.022.069 1.5.202 1.144-.775 1.646-.614 1.646-.614.327.825.121 1.434.06 1.585.384.42.615.955.615 1.61 0 2.305-1.403 2.812-2.74 2.96.215.186.408.552.408 1.113v1.65c0 .161.108.348.413.289A6.001 6.001 0 0 0 6 0Z"
                  fill="rgba(255,255,255,0.4)"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/[0.05] pt-5">
          <p className="text-white/15 text-[10px] font-mono leading-relaxed max-w-3xl">
            AEOIX is an AI search visibility platform, not a financial or legal
            advisor. AI engine rankings are subject to change and results may
            vary. Publisher availability depends on network coverage. All trademarks
            belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
