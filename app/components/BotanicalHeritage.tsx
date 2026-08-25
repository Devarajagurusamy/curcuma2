"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const heritageImages = [
  "/images/heritage-step-1.jpg",
  "/images/heritage-step-2.jpg",
  "/images/heritage-step-3.jpg",
  "/images/heritage-step-4.jpg",
];

export default function BotanicalHeritage() {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative w-full py-16 sm:py-24 overflow-hidden bg-[#0e261b] text-white border-y border-[#183d2a] scroll-mt-20">
      
      {/* Background Graphic Image with Deep Theme Green Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-0 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/heritage-bg.png')" }}
      />

      {/* Ambient Lighting & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#c59b3f]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Left Bottom Floating Badge */}
      <div className="hidden lg:flex absolute left-0 bottom-16 z-20 bg-[#07170f] text-white py-5 px-4 rounded-r-2xl shadow-2xl border-y border-r border-[#c59b3f]/30 flex-col items-center text-center gap-2 max-w-[100px]">
        {/* Gold Leaf Icon */}
        <div className="w-7 h-7 text-[#e2aa47]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 4 13C4 7 11 3 11 3s7 4 7 10a7 7 0 0 1-7 7Zm0 0v-7" />
          </svg>
        </div>
        <span className="font-serif text-[9px] font-bold tracking-[0.18em] text-[#e2aa47] uppercase leading-tight whitespace-pre-line">
          {t.story.badgeText}
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8">
        
        {/* Header Tag, Main Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-20">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 text-[#d9a74a] font-serif text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase">
            <span>|</span>
            <span className="text-[10px]">❖</span>
            <span>{t.story.tag}</span>
            <span>|</span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.18] tracking-tight">
            {t.story.mainTitlePrefix}{" "}
            <span className="italic font-serif font-medium text-[#d9a74a] drop-shadow-sm">
              {t.story.mainTitleHighlight}
            </span>
          </h2>

          {/* Gold floral decorative star */}
          <div className="text-[#d9a74a] text-xs pt-1">❖</div>

          {/* Subtitle */}
          <p className="text-[#9ab3a3] text-xs sm:text-[14px] font-medium leading-relaxed max-w-lg mx-auto">
            {t.story.subtitle}
          </p>

        </div>

        {/* 4 Connected Milestone Cards Grid */}
        <div className="relative">
          
          {/* Connecting Gold Line across top badges */}
          <div className="hidden lg:block absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-[#d9a74a]/50 z-0" />

          {/* The 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {t.story.steps.map((item, idx) => (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#FAF7F2] border border-[#ede1d3] p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 min-h-[440px] text-[#142319]"
              >
                {/* Card Top: Numbered Step Badge + Text Header */}
                <div className="space-y-3.5">
                  {/* Step Badge Circle */}
                  <div className="flex justify-center -mt-9 sm:-mt-10 mb-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#c58b28] text-white font-serif font-bold text-sm sm:text-base flex items-center justify-center shadow-lg ring-4 ring-[#0e261b] group-hover:scale-110 group-hover:bg-[#b0781e] transition-all">
                      {item.step}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="text-center">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#c58b28] uppercase font-sans">
                      {item.subtitle}
                    </span>
                    {/* Main Card Title */}
                    <h3 className="font-serif text-base sm:text-[17px] font-bold text-[#142319] leading-snug mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description Copy */}
                  <p className="text-[11.5px] sm:text-xs text-[#59655e] leading-relaxed text-center font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Illustration / Visual Graphic Image */}
                <div className="mt-5 pt-3 border-t border-[#ede1d3] flex items-center justify-center overflow-hidden rounded-xl">
                  <div className="relative w-full h-[150px] sm:h-[160px] rounded-xl overflow-hidden bg-[#faf6f0]">
                    <img
                      src={heritageImages[idx] || "/images/heritage-step-1.jpg"}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Quote / Mission Callout */}
        <div className="mt-14 sm:mt-18 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 text-xs sm:text-[13.5px] text-[#9ab3a3] font-medium leading-relaxed font-sans">
            <span className="text-[#d9a74a] font-serif text-2xl sm:text-3xl font-light leading-none">
              &#123;
            </span>
            <p className="max-w-2xl mx-auto italic font-sans text-[#b8cfc2]">
              {t.story.missionQuote}
            </p>
            <span className="text-[#d9a74a] font-serif text-2xl sm:text-3xl font-light leading-none">
              &#125;
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
