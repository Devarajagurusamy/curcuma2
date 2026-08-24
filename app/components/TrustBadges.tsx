"use client";

import React from "react";
import { Leaf, FlaskConical, ShieldCheck, Award } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-3">
      {/* Trust & Quality Pillars Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ede1d3] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-between">
          
          {/* Pillar 1: Clinically Studied */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <Leaf className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Clinically Studied
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Backed by modern science &amp; research
              </div>
            </div>
          </div>

          {/* Pillar 2: High Potency */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <FlaskConical className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                High Potency
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Maximum bioactive compounds
              </div>
            </div>
          </div>

          {/* Pillar 3: 100% Natural */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <Leaf className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                100% Natural
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Pure, authentic &amp; safely sourced
              </div>
            </div>
          </div>

          {/* Pillar 4: Safe & Trusted */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Safe &amp; Trusted
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Tested for purity and quality
              </div>
            </div>
          </div>

          {/* Pillar 5: Premium Quality */}
          <div className="flex items-center gap-3 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <Award className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Premium Quality
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Standardized for consistency
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
