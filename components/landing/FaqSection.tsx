"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the practice of optimizing your content and website to be cited, referenced, and recommended by AI-powered answer engines like ChatGPT, Perplexity, Google SGE, and Claude. Unlike traditional SEO which optimizes for ranking in search results, AEO focuses on being the source that AI engines trust and cite when answering user questions.",
  },
  {
    question: "How does AEOIX calculate my AEO Score?",
    answer:
      "Your AEO Score is calculated from 4 key pillars: AI Citation Rate (how often AI engines cite you), Structured Data quality (schema markup, FAQ pages), Content Clarity (how easily AI can parse and summarize your content), and E-E-A-T Signals (expertise, experience, authoritativeness, trustworthiness). Each pillar is weighted and combined into a 0–100 score.",
  },
  {
    question: "Which AI engines does AEOIX monitor?",
    answer:
      "We currently monitor ChatGPT (GPT-4 & GPT-4o), Perplexity AI, Google SGE (Search Generative Experience), Claude by Anthropic, Microsoft Bing Copilot, and Grok by xAI. We're continuously adding new AI engines as they gain market share.",
  },
  {
    question: "How quickly can I expect to see results?",
    answer:
      "Most customers see measurable improvement in their AEO score within 2–4 weeks of implementing our recommendations. AI citation rates typically improve within 30–60 days. The speed depends on how quickly you implement the optimizations and how competitive your niche is.",
  },
  {
    question: "Is AEOIX suitable for agencies managing multiple clients?",
    answer:
      "Absolutely. Our Agency plan includes unlimited domains, white-label reporting, client management dashboard, and API access for custom integrations. Many agencies use AEOix as a key differentiator to offer AEO services to their clients.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 xl:py-28 md:px-12">
      <Reveal>
        <div className="mb-10 xl:mb-14 text-center">
          <p className="section-kicker mb-3">FAQ</p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
            Common <span className="text-white/40">Questions</span>
          </h2>
        </div>
      </Reveal>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 80}>
            <div className="panel-shell overflow-hidden rounded-[20px] border border-white/8">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <span className="pr-4 font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-white/52 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-6 text-sm leading-7 text-white/68">
                  {faq.answer}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
