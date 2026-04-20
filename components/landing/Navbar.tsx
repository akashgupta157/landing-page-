"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#how", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scroll > 0;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 md:px-6 transition-[background,border,shadow,backdrop-filter] duration-300 ease-out ${
          isScrolled
            ? "border border-white/10 bg-[rgba(8,10,16,0.72)] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            : "border border-transparent bg-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <Link
          href="/"
          aria-label="AEOIX home"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(200,245,56,0.95),rgba(177,224,35,0.95))] shadow-[0_10px_30px_rgba(200,245,56,0.22)] transition-transform duration-300 hover:scale-[1.04]">
            <Image
              src="/logo.png"
              alt="AEOIX"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.22em] text-white">
              AEOIX
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-white/35">
              AI visibility OS
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/55 transition-all duration-300 hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="https://app.aeoix.com"
            target="_blank"
            className="button-shine inline-flex items-center rounded-full bg-[#c8f538] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-black shadow-[0_12px_32px_rgba(200,245,56,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(200,245,56,0.3)]"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
