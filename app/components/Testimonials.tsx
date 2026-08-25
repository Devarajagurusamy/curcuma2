"use client";

import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const avatarList = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="w-full bg-[#0d2218] py-14 sm:py-20 text-white relative overflow-hidden border-t border-[#183929] scroll-mt-20">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#c59b3f]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Score & Ratings */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Category Tag */}
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#d9a74a] uppercase font-sans">
              {t.reviews.tag}
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight">
              {t.reviews.mainTitle}
            </h2>

            {/* Ratings Summary */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                {/* 4.6 Score Pill */}
                <div className="px-3 py-1 rounded-full border border-[#d9a74a] text-[#d9a74a] font-serif text-sm font-bold shadow-sm">
                  4.6
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#e58e1b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>
              </div>

              {/* Verified Count */}
              <div className="text-xs text-[#9ab3a3] font-medium mt-2">
                {t.reviews.verifiedCount}
              </div>
            </div>

          </div>

          {/* Right Column: Endless Loop Testimonial Slider */}
          <div className="lg:col-span-8 overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
              {/* First Set of Cards */}
              <div className="flex items-stretch gap-5 pr-5">
                {t.reviews.items.map((item, index) => (
                  <div 
                    key={`track1-${item.id}-${index}`}
                    className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[350px] rounded-2xl bg-[#FAF6EE] border border-[#ede1d3] p-5 sm:p-6 shadow-2xl flex flex-col justify-between text-[#142319] select-none hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-gray-200">
                        <img
                          src={avatarList[index % avatarList.length]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#142319] font-medium leading-relaxed italic">
                        {item.quote}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#e8ded0] flex flex-col">
                      <span className="text-xs text-[#525e56] font-bold">
                        – {item.name}, {item.age}
                      </span>
                      <span className="text-xs font-extrabold text-[#142319] tracking-tight mt-0.5">
                        {item.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate Set for Seamless Infinite Loop */}
              <div className="flex items-stretch gap-5 pr-5" aria-hidden="true">
                {t.reviews.items.map((item, index) => (
                  <div 
                    key={`track2-${item.id}-${index}`}
                    className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[350px] rounded-2xl bg-[#FAF6EE] border border-[#ede1d3] p-5 sm:p-6 shadow-2xl flex flex-col justify-between text-[#142319] select-none hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-gray-200">
                        <img
                          src={avatarList[index % avatarList.length]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#142319] font-medium leading-relaxed italic">
                        {item.quote}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#e8ded0] flex flex-col">
                      <span className="text-xs text-[#525e56] font-bold">
                        – {item.name}, {item.age}
                      </span>
                      <span className="text-xs font-extrabold text-[#142319] tracking-tight mt-0.5">
                        {item.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
