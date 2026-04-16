"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 h-14 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group" aria-label="AEOIX home">
        <div
          className="w-6 h-6 rounded-[5px] bg-[#c8f538] flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-black text-[10px] font-bold font-mono leading-none">A</span>
        </div>
        <span className="text-white text-sm font-semibold tracking-tight">
          aeoix
        </span>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="hidden md:block text-white/50 text-sm hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-white/20 text-white text-xs px-4 h-8 hover:bg-white/5"
          asChild
        >
          <Link href="#cta">Join the waitlist</Link>
        </Button>
      </div>
    </nav>
  );
}
