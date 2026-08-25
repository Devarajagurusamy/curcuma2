"use client";

import React from "react";
import Image from "next/image";

const heritageSteps = [
  {
    step: "01",
    subtitle: "1930s Discovery",
    title: "A Search for Real Healing",
    description:
      "Tuan Ismail brought pure black turmeric to his family, searching for a natural way to relieve deep fatigue, ease body aches, and restore strength.",
    imageSrc: "/images/heritage-step-1.jpg",
    imageAlt: "Founder Tuan Ismail at plantation homestead",
  },
  {
    step: "02",
    subtitle: "Johor Homestead",
    title: "Standing Strong Again",
    description:
      "When a family member was too weak to get out of bed, drinking this fresh herbal tea helped them regain energy, walk comfortably, and smile again.",
    imageSrc: "/images/heritage-step-2.jpg",
    imageAlt: "Fresh cut black turmeric rhizomes with rich purple interior",
  },
  {
    step: "03",
    subtitle: "Tested & Certified",
    title: "Clean & Safe for Your Body",
    description:
      "Official laboratory tests proved it is naturally rich in soothing nutrients, very low in sugar and salt, and 100% safe for daily family wellness.",
    imageSrc: "/images/heritage-step-3.jpg",
    imageAlt: "Laboratory analysis and safety test report",
  },
  {
    step: "04",
    subtitle: "Your Daily Routine",
    title: "A Cup of Warm Comfort",
    description:
      "Carefully prepared so you can easily enjoy lighter joints, calm digestion, and fresh morning energy every single day.",
    imageSrc: "/images/heritage-step-4.jpg",
    imageAlt: "Daily herbal coffee and wellness ritual",
  },
];

export default function BotanicalHeritage() {
  return (
    <section id="story" className="relative w-full py-16 sm:py-24 overflow-hidden bg-[#FBF7F2] scroll-mt-20">
      {/* Background Graphic Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-90"
        style={{ backgroundImage: "url('/images/heritage-bg.png')" }}
      />

      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 pointer-events-none" />

      {/* Left Bottom Floating Badge */}
      <div className="hidden lg:flex absolute left-0 bottom-16 z-20 bg-[#0a1b24] text-white py-5 px-4 rounded-r-2xl shadow-2xl border-y border-r border-[#c59b3f]/30 flex-col items-center text-center gap-2 max-w-[100px]">
        {/* Gold Leaf Icon */}
        <div className="w-7 h-7 text-[#e2aa47]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 4 13C4 7 11 3 11 3s7 4 7 10a7 7 0 0 1-7 7Zm0 0v-7" />
          </svg>
        </div>
        <span className="font-serif text-[9px] font-bold tracking-[0.18em] text-[#e2aa47] uppercase leading-tight">
          NATURE<br />MEETS<br />WELLNESS
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8">
        
        {/* Header Tag, Main Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-20">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 text-[#c59b3f] font-serif text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase">
            <span>|</span>
            <span className="text-[10px]">❖</span>
            <span>A TRUE STORY OF HEALING</span>
            <span>|</span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#142319] leading-[1.18] tracking-tight">
            A Natural Gift From 1930 for Your{" "}
            <span className="italic font-serif font-medium text-[#c59b3f] drop-shadow-sm">
              Everyday Energy &amp; Comfort
            </span>
          </h2>

          {/* Gold floral decorative star */}
          <div className="text-[#c59b3f] text-xs pt-1">❖</div>

          {/* Subtitle */}
          <p className="text-[#5c6861] text-xs sm:text-[14px] font-medium leading-relaxed max-w-lg mx-auto">
            From a family's miraculous healing to your daily morning routine — pure, comforting, and backed by caring science.
          </p>

        </div>

        {/* 4 Connected Milestone Cards Grid */}
        <div className="relative">
          
          {/* Connecting Gold Line across top badges */}
          <div className="hidden lg:block absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-[#d9a74a]/40 z-0" />

          {/* The 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {heritageSteps.map((item) => (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl bg-white/90 backdrop-blur-md border border-[#edd8c4] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[440px]"
              >
                {/* Card Top: Numbered Step Badge + Text Header */}
                <div className="space-y-3.5">
                  {/* Step Badge Circle */}
                  <div className="flex justify-center -mt-9 sm:-mt-10 mb-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#c59b3f] text-white font-serif font-bold text-sm sm:text-base flex items-center justify-center shadow-md ring-4 ring-white group-hover:scale-110 group-hover:bg-[#b08730] transition-all">
                      {item.step}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="text-center">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-[#c59b3f] uppercase font-sans">
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
                <div className="mt-5 pt-3 border-t border-[#f0e6d8] flex items-center justify-center overflow-hidden rounded-xl">
                  <div className="relative w-full h-[150px] sm:h-[160px] rounded-xl overflow-hidden bg-[#faf6f0]">
                    <img
                      src={item.imageSrc}
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
          <div className="inline-flex items-center gap-3 text-xs sm:text-[13.5px] text-[#55635b] font-medium leading-relaxed font-sans">
            <span className="text-[#c59b3f] font-serif text-2xl sm:text-3xl font-light leading-none">
              &#123;
            </span>
            <p className="max-w-2xl mx-auto italic font-sans text-[#4f5d55]">
              “No one deserves to live with constant knee aches, tired mornings, or uncomfortable bloating. Our family’s goal is simple: to help you wake up feeling lighter, happier, and full of life for the people you love.”
            </p>
            <span className="text-[#c59b3f] font-serif text-2xl sm:text-3xl font-light leading-none">
              &#125;
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
