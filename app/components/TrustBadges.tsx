"use client";

import React from "react";

export default function TrustBadges() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-6 my-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-between border-t border-gray-100 pt-6">
        
        {/* Badge 1: Verified by 4 Malaysian Universities */}
        <div className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center text-[#182a20] shadow-sm flex-shrink-0 group-hover:border-[#007b78] group-hover:text-[#007b78] transition-colors">
            {/* University / Classical Pillar Icon */}
            <svg className="w-5 h-5 stroke-current stroke-[1.7] fill-none" viewBox="0 0 24 24">
              <path d="M3 21h18" strokeLinecap="round" />
              <path d="M4 18h16" strokeLinecap="round" />
              <path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7" strokeLinecap="round" />
              <path d="M2 11h20" strokeLinecap="round" />
              <path d="M12 3L2 8h20L12 3z" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#616b64] font-medium leading-none mb-1">
              Verified by
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-[#142319] leading-tight">
              4 Malaysian Universities
            </span>
          </div>
        </div>

        {/* Badge 2: 100% Natural Single Ingredient */}
        <div className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center text-[#182a20] shadow-sm flex-shrink-0 group-hover:border-[#007b78] group-hover:text-[#007b78] transition-colors">
            {/* Leaf Icon */}
            <svg className="w-5 h-5 stroke-current stroke-[1.7] fill-none" viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 4 13C4 7 11 3 11 3s7 4 7 10a7 7 0 0 1-7 7Zm0 0v-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#616b64] font-medium leading-none mb-1">
              100% Natural
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-[#142319] leading-tight">
              Single Ingredient
            </span>
          </div>
        </div>

        {/* Badge 3: Premium Quality Assured */}
        <div className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center text-[#182a20] shadow-sm flex-shrink-0 group-hover:border-[#007b78] group-hover:text-[#007b78] transition-colors">
            {/* Rosette Ribbon Seal Icon */}
            <svg className="w-5 h-5 stroke-current stroke-[1.7] fill-none" viewBox="0 0 24 24">
              <circle cx="12" cy="9" r="6" />
              <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#616b64] font-medium leading-none mb-1">
              Premium Quality
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-[#142319] leading-tight">
              Assured
            </span>
          </div>
        </div>

        {/* Badge 4: Johor Heritage Since 1930 */}
        <div className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center text-[#182a20] shadow-sm flex-shrink-0 group-hover:border-[#007b78] group-hover:text-[#007b78] transition-colors">
            {/* Flag / Heritage Icon */}
            <svg className="w-5 h-5 stroke-current stroke-[1.7] fill-none" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" strokeLinejoin="round" />
              <line x1="4" y1="22" x2="4" y2="15" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-[#616b64] font-medium leading-none mb-1">
              Johor Heritage
            </span>
            <span className="text-xs sm:text-[13px] font-bold text-[#142319] leading-tight">
              Since 1930
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

