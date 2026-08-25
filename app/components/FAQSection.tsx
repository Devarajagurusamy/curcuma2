"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    activeCategory === "all"
      ? t.faq.items
      : t.faq.items.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#ede3d5] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59b3f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14261d]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-8">
        
        {/* Header Title Section */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-[#c59b3f] font-serif text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase">
            <span>—</span>
            <span className="text-[10px]">❖</span>
            <span>{t.faq.tag}</span>
            <span className="text-[10px]">❖</span>
            <span>—</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#142319] leading-tight tracking-tight">
            {t.faq.mainTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-[#59665f] text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto pt-1">
            {t.faq.subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center sm:justify-center gap-2 pt-5 overflow-x-auto scrollbar-none pb-2 sm:pb-0 px-2">
            {[
              { id: "all", label: t.faq.tabs.all },
              { id: "science", label: t.faq.tabs.science },
              { id: "usage", label: t.faq.tabs.usage },
              { id: "safety", label: t.faq.tabs.safety },
              { id: "shipping", label: t.faq.tabs.shipping },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeCategory === tab.id
                    ? "bg-[#142319] text-[#e5b869] shadow-md scale-105"
                    : "bg-white text-[#525f57] border border-[#e5d9c7] hover:bg-[#f4ece1] hover:text-[#142319]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion FAQ Cards */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm ${
                  isOpen
                    ? "border-[#c59b3f] shadow-[0_8px_25px_rgba(197,155,63,0.12)] ring-1 ring-[#c59b3f]/20"
                    : "border-[#ede1d3] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#dbc7af]"
                }`}
              >
                {/* Question Header Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Small Icon Badge */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#0d271c] text-[#e5b869]"
                          : "bg-[#f5ede2] text-[#8c7a65] group-hover:text-[#c59b3f]"
                      }`}
                    >
                      <HelpCircle className="w-4 h-4 stroke-[2]" />
                    </div>

                    <span className="font-serif text-[15px] sm:text-base font-bold text-[#142319] group-hover:text-[#c59b3f] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Accordion Chevron Icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#c59b3f] text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-gray-100 text-xs sm:text-[13.5px] text-[#55635b] leading-relaxed animate-in slide-in-from-top-1">
                    <p className="pl-11 pr-2">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? WhatsApp Help Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#e5d9c7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0d271c] text-[#e5b869] flex items-center justify-center flex-shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#142319]">
                {t.faq.helpBoxTitle}
              </h4>
              <p className="text-xs text-[#637067] mt-0.5">
                {t.faq.helpBoxDesc}
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex-shrink-0 cursor-pointer"
          >
            <span>{t.faq.helpBoxCta}</span>
          </a>
        </div>

      </div>

    </section>
  );
}
