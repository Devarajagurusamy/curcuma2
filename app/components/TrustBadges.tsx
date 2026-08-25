"use client";

import React from "react";
import { Leaf, FlaskConical, ShieldCheck, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Leaf,
      title: t.trustBadges.badge1Title,
      sub: t.trustBadges.badge1Sub,
    },
    {
      icon: FlaskConical,
      title: t.trustBadges.badge2Title,
      sub: t.trustBadges.badge2Sub,
    },
    {
      icon: Leaf,
      title: t.trustBadges.badge3Title,
      sub: t.trustBadges.badge3Sub,
    },
    {
      icon: ShieldCheck,
      title: t.trustBadges.badge4Title,
      sub: t.trustBadges.badge4Sub,
    },
    {
      icon: Award,
      title: t.trustBadges.badge5Title,
      sub: t.trustBadges.badge5Sub,
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-3">
      {/* Trust & Quality Pillars Bar with Solid Warm Ivory & Gold (No Green) */}
      <div className="py-4 px-4 sm:px-6 rounded-2xl bg-[#FAF7F2] border border-[#ede1d3] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
        <div className="flex w-max animate-marquee-smooth hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing select-none">
          
          {/* Track 1 */}
          <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14">
            {badges.map((b, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-3.5 whitespace-nowrap flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#c58b28] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <b.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#142319] tracking-wide leading-tight">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-[#5c6860] font-medium leading-tight mt-0.5">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
          <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14" aria-hidden="true">
            {badges.map((b, idx) => (
              <div key={`track2-${idx}`} className="flex items-center gap-3.5 whitespace-nowrap flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#c58b28] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <b.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#142319] tracking-wide leading-tight">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-[#5c6860] font-medium leading-tight mt-0.5">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
