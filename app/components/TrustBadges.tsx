"use client";

import React from "react";
import { Leaf, FlaskConical, ShieldCheck, Award } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-3">
      {/* Trust & Quality Pillars Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ede1d3] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-between">
          
          {/* Pillar 1: Backed by Real Science */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <Leaf className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Backed by Science
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Tested by top universities
              </div>
            </div>
          </div>

          {/* Pillar 2: Deep Daily Relief */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <FlaskConical className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Fast Natural Relief
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Absorbs quickly for daily energy
              </div>
            </div>
          </div>

          {/* Pillar 3: 100% Pure & Natural */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <Leaf className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                100% Pure &amp; Clean
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Zero harmful chemicals or fillers
              </div>
            </div>
          </div>

          {/* Pillar 4: Safe & Gentle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Gentle on Stomach
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Certified safe &amp; Halal verified
              </div>
            </div>
          </div>

          {/* Pillar 5: Crafted with Care */}
          <div className="flex items-center gap-3 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#e8dac8] flex items-center justify-center text-[#c59b3f] flex-shrink-0 shadow-sm">
              <Award className="w-4 h-4 stroke-[1.8]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#142319] leading-tight">
                Made with Care
              </div>
              <div className="text-[10px] text-[#616e66] leading-tight mt-0.5">
                Pure Malaysian harvest you can trust
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
