"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BarChart2,
  Zap,
  Globe,
  Users,
  FileText,
  Settings,
  Tag,
  Layers,
  MessageSquare,
  ChevronDown,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

// ── Dummy Data ────────────────────────────────────────────────────────────────

const visibilityData = [
  {
    date: "Apr 12",
    NexaFlow: 12,
    Semrush: 8,
    Blogtec: 6,
    AEOix: 9,
    Linkbroker: 4,
    PressWhizz: 3,
  },
  {
    date: "Apr 13",
    NexaFlow: 14,
    Semrush: 10,
    Blogtec: 8,
    AEOix: 11,
    Linkbroker: 5,
    PressWhizz: 4,
  },
  {
    date: "Apr 14",
    NexaFlow: 11,
    Semrush: 13,
    Blogtec: 10,
    AEOix: 8,
    Linkbroker: 6,
    PressWhizz: 5,
  },
  {
    date: "Apr 15",
    NexaFlow: 16,
    Semrush: 12,
    Blogtec: 9,
    AEOix: 13,
    Linkbroker: 5,
    PressWhizz: 3,
  },
  {
    date: "Apr 16",
    NexaFlow: 18,
    Semrush: 14,
    Blogtec: 11,
    AEOix: 10,
    Linkbroker: 7,
    PressWhizz: 6,
  },
  {
    date: "Apr 17",
    NexaFlow: 15,
    Semrush: 16,
    Blogtec: 13,
    AEOix: 12,
    Linkbroker: 6,
    PressWhizz: 4,
  },
  {
    date: "Apr 18",
    NexaFlow: 22,
    Semrush: 15,
    Blogtec: 14,
    AEOix: 14,
    Linkbroker: 8,
    PressWhizz: 5,
  },
];

const brandLines = [
  { key: "NexaFlow", color: "#c8f538" },
  { key: "Semrush", color: "#f59e0b" },
  { key: "Blogtec", color: "#38bdf8" },
  { key: "AEOix", color: "#a78bfa" },
  { key: "Linkbroker", color: "#f472b6" },
  { key: "PressWhizz", color: "#34d399" },
];

const rankings = [
  {
    rank: 1,
    brand: "NexaFlow",
    domain: "nexaflow.io",
    visibility: 32,
    sov: 32,
    sentiment: 78,
    you: true,
  },
  {
    rank: 2,
    brand: "Semrush",
    domain: "semrush.com",
    visibility: 24,
    sov: 24,
    sentiment: 71,
  },
  {
    rank: 3,
    brand: "Blogtec",
    domain: "blogtec.io",
    visibility: 19,
    sov: 19,
    sentiment: 84,
  },
  {
    rank: 4,
    brand: "AEOix",
    domain: "aeoix.com",
    visibility: 12,
    sov: 12,
    sentiment: 67,
  },
  {
    rank: 5,
    brand: "Linkbroker",
    domain: "linkbroker.io",
    visibility: 7,
    sov: 7,
    sentiment: 60,
  },
  {
    rank: 6,
    brand: "PressWhizz",
    domain: "presswhizz.com",
    visibility: 4,
    sov: 4,
    sentiment: 55,
  },
  {
    rank: 7,
    brand: "ContentHive",
    domain: "contenthive.co",
    visibility: 2,
    sov: 2,
    sentiment: 48,
  },
];

const topDomains = [
  {
    domain: "linkedin.com",
    used: "22%",
    avgCitations: 9.1,
    type: "UGC",
    typeColor: "#6366f1",
  },
  {
    domain: "reddit.com",
    used: "19%",
    avgCitations: 11.3,
    type: "UGC",
    typeColor: "#6366f1",
  },
  {
    domain: "hostinger.com",
    used: "16%",
    avgCitations: 6.2,
    type: "CORP",
    typeColor: "#f59e0b",
  },
  {
    domain: "godaddy.com",
    used: "13%",
    avgCitations: 7.8,
    type: "CORP",
    typeColor: "#f59e0b",
  },
  {
    domain: "clutch.co",
    used: "11%",
    avgCitations: 5.4,
    type: "UGC",
    typeColor: "#6366f1",
  },
  {
    domain: "youtube.com",
    used: "10%",
    avgCitations: 12.1,
    type: "UGC",
    typeColor: "#6366f1",
  },
  {
    domain: "searchenginejournal.com",
    used: "9%",
    avgCitations: 8.7,
    type: "NEWS",
    typeColor: "#f97316",
  },
  {
    domain: "designrush.com",
    used: "8%",
    avgCitations: 5.9,
    type: "UGC",
    typeColor: "#6366f1",
  },
];

const domainTypes = [
  { name: "Corporate", value: 68, color: "#6366f1" },
  { name: "UGC", value: 17, color: "#f59e0b" },
  { name: "News", value: 9, color: "#f97316" },
  { name: "Education", value: 6, color: "#34d399" },
];

const sidebarGeneral = [
  { label: "Analytics", icon: BarChart2, active: true },
  { label: "Prompts", icon: Zap },
  { label: "Sources", icon: Globe },
  { label: "Actions", icon: Layers },
];

const sidebarOutreach = [
  { label: "Publishers", icon: Users },
  { label: "Messages", icon: MessageSquare },
  { label: "Articles", icon: FileText },
];

const sidebarSettings = [
  { label: "Project", icon: LayoutDashboard },
  { label: "Brands", icon: Tag },
  { label: "Tags", icon: Settings },
];

// ── Favicon helper ────────────────────────────────────────────────────────────
function Favicon({ domain, size = 16 }: { domain: string; size?: number }) {
  const [err, setErr] = useState(false);
  return err ? (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-white/10 flex items-center justify-center text-[8px] text-white/40"
    >
      {domain[0].toUpperCase()}
    </div>
  ) : (
    <Image
      src={`https://favicon.vemetric.com/${domain}`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      unoptimized
      className="rounded-sm object-contain"
      onError={() => setErr(true)}
    />
  );
}

// ── Custom Tooltip ─────────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-[#0d1017] px-3 py-2 shadow-xl text-xs">
      <p className="mb-1 text-white/40 font-mono">{label}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span style={{ color: p.color }}>●</span>
          <span className="text-white/70">{p.dataKey}</span>
          <span className="ml-auto text-white font-semibold">{p.value}%</span>
        </div>
      ))}
    </div>
  );
}

// ── Sidebar Content (shared between drawer & static sidebar) ──────────────────
function SidebarContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full p-3">
      {/* Logo */}
      <div className="mb-5 flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-[#c8f538] flex items-center justify-center">
            <span className="text-black font-bold text-[10px]">AX</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white text-xs font-semibold tracking-tight">
              AEOIX
            </span>
            <ChevronDown size={10} className="text-white/30" />
          </div>
        </div>
        {/* Close button — only shown in mobile drawer */}
        {onClose && (
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors lg:hidden"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* General */}
      <div className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-widest text-white/25">
        General
      </div>
      <nav className="mb-3">
        {sidebarGeneral.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`mb-0.5 flex items-center gap-2.5 rounded-md px-2 py-1.5 text-xs cursor-default transition-colors ${
              active
                ? "bg-white/[0.08] text-white"
                : "text-white/35 hover:text-white/55"
            }`}
          >
            <Icon size={13} className="shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      {/* Outreach */}
      <div className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-widest text-white/25">
        Outreach
      </div>
      <nav className="mb-3">
        {sidebarOutreach.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={`mb-0.5 flex items-center gap-2.5 rounded-md px-2 py-1.5 text-xs cursor-default text-white/35 hover:text-white/55 ${
              label === "Messages" ? "bg-[#1a2340] text-[#6080ff]" : ""
            }`}
          >
            <Icon size={13} className="shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      {/* Settings */}
      <div className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-widest text-white/25">
        Settings
      </div>
      <nav>
        {sidebarSettings.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="mb-0.5 flex items-center gap-2.5 rounded-md px-2 py-1.5 text-xs cursor-default text-white/35 hover:text-white/55"
          >
            <Icon size={13} className="shrink-0" />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="mt-auto pt-4 border-t border-white/6 flex items-center gap-2 px-1">
        <div className="h-7 w-7 rounded-full bg-[#c8f538]/20 border border-[#c8f538]/30 flex items-center justify-center text-[10px] text-[#c8f538] font-bold shrink-0">
          KR
        </div>
        <div className="min-w-0">
          <div className="text-[10px] text-white/70 truncate font-medium text-left">
            Karan Rajput
          </div>
          <div className="text-[9px] text-white/30 truncate">
            karan@aeoix.com
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function DashboardMockup() {
  const [animated, setAnimated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!drawerOpen) return;
    const handler = (e: MouseEvent) => {
      const drawer = document.getElementById("mobile-drawer");
      if (drawer && !drawer.contains(e.target as Node)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [drawerOpen]);

  return (
    <div
      className="w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0c12] shadow-[0_0_80px_rgba(200,245,56,0.04),0_2px_60px_rgba(0,0,0,0.7)]"
      role="img"
      aria-label="AEOIX analytics dashboard"
      style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}
    >
      {/* ── Browser chrome ── */}
      <div className="flex items-center gap-1.5 border-b border-white/6 bg-[#0d1017] px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-3 flex-1 max-w-xs rounded-md border border-white/6 bg-white/4 px-3 py-1 text-[10px] text-white/20 font-mono">
          app.aeoix.com/analytics
        </div>
      </div>

      {/* ── Layout wrapper ── */}
      <div className="flex relative" style={{ minHeight: 560 }}>
        {/* ── Mobile drawer overlay ── */}
        {drawerOpen && (
          <div className="fixed inset-0 z-40 bg-black/60 lg:hidden" />
        )}

        {/* ── Mobile slide-in drawer ── */}
        <aside
          id="mobile-drawer"
          className={`
            fixed top-0 left-0 h-full z-50 w-52 bg-[#0b0d14] border-r border-white/6
            transform transition-transform duration-300 ease-in-out
            lg:hidden
            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <SidebarContent onClose={() => setDrawerOpen(false)} />
        </aside>

        {/* ── Static sidebar (tablet md+ shows icon-only, lg+ shows full) ── */}
        <aside
          className="
            hidden lg:flex
            w-48 shrink-0 border-r border-white/6 bg-[#0b0d14] flex-col
          "
        >
          <SidebarContent />
        </aside>

        {/* ── Tablet icon-only sidebar (md to lg) ── */}
        <aside
          className="
            hidden md:flex lg:hidden
            w-12 shrink-0 border-r border-white/6 bg-[#0b0d14] flex-col items-center py-3 gap-1
          "
        >
          {/* Logo icon */}
          <div className="h-6 w-6 rounded-md bg-[#c8f538] flex items-center justify-center mb-4">
            <span className="text-black font-bold text-[10px]">AX</span>
          </div>
          {[...sidebarGeneral, ...sidebarOutreach, ...sidebarSettings].map(
            ({ label, icon: Icon, active }: any) => (
              <div
                key={label}
                title={label}
                className={`flex items-center justify-center w-8 h-8 rounded-md cursor-default transition-colors ${
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-white/35 hover:text-white/55"
                }`}
              >
                <Icon size={14} />
              </div>
            ),
          )}
          {/* User avatar at bottom */}
          <div className="mt-auto pt-4 border-t border-white/6 w-full flex justify-center pb-1">
            <div className="h-7 w-7 rounded-full bg-[#c8f538]/20 border border-[#c8f538]/30 flex items-center justify-center text-[10px] text-[#c8f538] font-bold">
              KR
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 overflow-hidden flex flex-col min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-3 sm:px-5 py-3 bg-[#0a0c12] gap-2">
            <div className="flex items-center gap-2">
              {/* Hamburger — mobile only */}
              <button
                className="md:hidden text-white/50 hover:text-white transition-colors"
                onClick={() => setDrawerOpen(true)}
              >
                <Menu size={16} />
              </button>
              <h1 className="text-sm font-semibold text-white">Analytics</h1>
            </div>

            {/* Filter chips — scroll on mobile, wrap on tablet+ */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide max-w-full">
              {[
                { label: "AEOIX ×", accent: true },
                { label: "Last 3 days ▾" },
                { label: "All Tags ▾" },
                { label: "All Models ▾" },
                { label: "All Topics ▾" },
              ].map(({ label, accent }) => (
                <div
                  key={label}
                  className={`rounded-lg border px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] cursor-default whitespace-nowrap shrink-0 ${
                    accent
                      ? "border-[#c8f538]/30 bg-[#c8f538]/10 text-[#c8f538]"
                      : "border-white/8 bg-white/4 text-white/40"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Grid body */}
          <div className="flex-1 overflow-auto p-3 sm:p-4">
            {/*
              Responsive grid:
              - Mobile  (<md):  1 column
              - Tablet  (md):   2 columns  (same as desktop but content scrolls)
              - Laptop+ (lg):   2 columns  (original layout)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* ── Visibility Chart ── */}
              <div className="rounded-xl border border-white/6 bg-[#0d1017] p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-xs font-semibold text-white shrink-0">
                      Visibility
                    </span>
                    <span className="text-[10px] text-white/30 truncate hidden sm:block">
                      · Percentage of chats mentioning each brand
                    </span>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {["D", "W", "M"].map((t, i) => (
                      <div
                        key={t}
                        className={`px-2 py-0.5 rounded text-[10px] cursor-default ${i === 0 ? "bg-white/10 text-white" : "text-white/30"}`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                  {brandLines.map(({ key, color }) => (
                    <div key={key} className="flex items-center gap-1">
                      <span style={{ color }} className="text-[10px]">
                        ●
                      </span>
                      <span className="text-[10px] text-white/50">{key}</span>
                    </div>
                  ))}
                </div>

                <div style={{ height: 160, width: "100%" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={visibilityData}
                      margin={{ top: 4, right: 4, bottom: 0, left: -24 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.04)"
                      />
                      <XAxis
                        dataKey="date"
                        tick={{
                          fontSize: 9,
                          fill: "rgba(255,255,255,0.25)",
                          fontFamily: "monospace",
                        }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{
                          fontSize: 9,
                          fill: "rgba(255,255,255,0.25)",
                          fontFamily: "monospace",
                        }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      {brandLines.map(({ key, color }) => (
                        <Line
                          key={key}
                          type="monotone"
                          dataKey={key}
                          stroke={color}
                          strokeWidth={1.5}
                          dot={{ r: 2.5, fill: color, strokeWidth: 0 }}
                          activeDot={{ r: 4 }}
                          isAnimationActive={animated}
                          animationDuration={1200}
                          animationEasing="ease-out"
                        />
                      ))}
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <p className="mt-2 text-[9px] text-white/25">
                  Your visibility tracking started 3 days ago · Trends become
                  more meaningful after 2+ weeks.
                </p>
              </div>

              {/* ── Rankings ── */}
              <div className="rounded-xl border border-white/6 bg-[#0d1017] p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-white">
                      Rankings
                    </span>
                    <span className="text-[10px] text-white/30 hidden sm:block">
                      · Top brands across LLMs
                    </span>
                  </div>
                  <span className="text-[10px] text-[#c8f538] cursor-default shrink-0">
                    Show All →
                  </span>
                </div>

                {/* Rankings table — hide SOV column on small screens */}
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="text-white/30 border-b border-white/5">
                      <th className="text-left pb-2 font-medium w-4">#</th>
                      <th className="text-left pb-2 font-medium">BRAND</th>
                      <th className="text-right pb-2 font-medium">
                        VISIBILITY
                      </th>
                      <th className="text-right pb-2 font-medium hidden sm:table-cell">
                        SOV
                      </th>
                      <th className="text-right pb-2 font-medium">SENT.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankings.map((r) => (
                      <tr
                        key={r.rank}
                        className="border-b border-white/4 last:border-0"
                      >
                        <td className="py-1.5 text-white/30 pr-2">{r.rank}</td>
                        <td className="py-1.5">
                          <div className="flex items-center gap-1.5">
                            <Favicon domain={r.domain} size={14} />
                            <span
                              className={
                                r.you
                                  ? "text-white font-semibold"
                                  : "text-white/70"
                              }
                            >
                              {r.brand}
                            </span>
                            {r.you && (
                              <span className="ml-1 rounded px-1 py-0.5 text-[8px] bg-[#c8f538]/15 text-[#c8f538] font-medium hidden sm:inline">
                                you
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-1.5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <div className="w-10 sm:w-16 h-1 rounded-full bg-white/8 overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-1000"
                                style={{
                                  width: animated
                                    ? `${(r.visibility / 35) * 100}%`
                                    : "0%",
                                  background: r.you
                                    ? "#c8f538"
                                    : "rgba(255,255,255,0.25)",
                                }}
                              />
                            </div>
                            <span className="text-white/70 w-7 sm:w-8 text-right">
                              {r.visibility}%
                            </span>
                          </div>
                        </td>
                        <td className="py-1.5 text-right text-white/50 hidden sm:table-cell">
                          {r.sov}%
                        </td>
                        <td className="py-1.5 text-right">
                          <span
                            className={`${r.sentiment >= 75 ? "text-[#34d399]" : r.sentiment >= 60 ? "text-[#f59e0b]" : "text-white/40"}`}
                          >
                            ● {r.sentiment}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Top Domains ── */}
              <div className="rounded-xl border border-white/6 bg-[#0d1017] p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Globe size={12} className="text-white/40" />
                    <span className="text-xs font-semibold text-white">
                      Top Domains
                    </span>
                    <span className="text-[10px] text-white/30 hidden sm:block">
                      · Top domains used by AI models
                    </span>
                  </div>
                  <span className="text-[10px] text-[#c8f538] cursor-default shrink-0">
                    Show All →
                  </span>
                </div>

                {/* Domains table — hide avg citations on mobile */}
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="text-white/30 border-b border-white/5">
                      <th className="text-left pb-2 font-medium">DOMAIN</th>
                      <th className="text-right pb-2 font-medium">USED</th>
                      <th className="text-right pb-2 font-medium hidden sm:table-cell">
                        AVG. CITATIONS
                      </th>
                      <th className="text-right pb-2 font-medium">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topDomains.map((d) => (
                      <tr
                        key={d.domain}
                        className="border-b border-white/4 last:border-0"
                      >
                        <td className="py-1.5">
                          <div className="flex items-center gap-1.5">
                            <Favicon domain={d.domain} size={13} />
                            <span className="text-white/70 truncate max-w-[90px] sm:max-w-none">
                              {d.domain}
                            </span>
                          </div>
                        </td>
                        <td className="py-1.5 text-right text-white/60">
                          {d.used}
                        </td>
                        <td className="py-1.5 text-right text-white/60 hidden sm:table-cell">
                          {d.avgCitations}
                        </td>
                        <td className="py-1.5 text-right">
                          <span
                            className="rounded-md px-1.5 py-0.5 text-[9px] font-medium"
                            style={{
                              background: `${d.typeColor}22`,
                              color: d.typeColor,
                            }}
                          >
                            {d.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Domain Types ── */}
              <div className="rounded-xl border border-white/6 bg-[#0d1017] p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Tag size={12} className="text-white/40" />
                    <span className="text-xs font-semibold text-white">
                      Domain types
                    </span>
                  </div>
                  <span className="text-[10px] text-white/30">
                    Total citations: 2.6k
                  </span>
                </div>

                {/* Stack pie + legend vertically on mobile, side-by-side on sm+ */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-36 h-36 sm:w-[150px] sm:h-[150px] shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={domainTypes}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={68}
                          paddingAngle={2}
                          dataKey="value"
                          isAnimationActive={animated}
                          animationDuration={1000}
                          animationEasing="ease-out"
                        >
                          {domainTypes.map((entry) => (
                            <Cell
                              key={entry.name}
                              fill={entry.color}
                              opacity={0.9}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    {domainTypes.map(({ name, value, color }) => (
                      <div key={name} className="flex items-center gap-2">
                        <span style={{ color }} className="text-[11px]">
                          ●
                        </span>
                        <span className="text-[11px] text-white/60 flex-1">
                          {name}
                        </span>
                        <div className="w-16 sm:w-24 h-1 rounded-full bg-white/8 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: animated ? `${value}%` : "0%",
                              background: color,
                            }}
                          />
                        </div>
                        <span className="text-[11px] text-white/50 w-10 text-right">
                          {value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
