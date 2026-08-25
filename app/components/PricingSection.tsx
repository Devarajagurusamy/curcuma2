"use client";

import React, { useState } from "react";
import { 
  Check, 
  ShieldCheck, 
  Truck, 
  UserCheck, 
  Pill, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface PricingSectionProps {
  onSelectPackage?: (packageId: string) => void;
}

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState<string>("3-bottles");

  const handleOrder = (id: string) => {
    setActiveCard(id);
    if (onSelectPackage) {
      onSelectPackage(id);
    }
  };

  return (
    <section id="order" className="w-full py-12 sm:py-20 bg-[#FAF7F2] border-t border-[#ede3d5] relative overflow-hidden">
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 xl:gap-7 items-stretch">
          
          {/* Column 1: Choose Your Healing Routine & Guarantees */}
          <div className="lg:col-span-3 flex flex-col justify-between p-2 sm:p-4 space-y-6">
            
            <div>
              {/* Main Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#142319] leading-tight tracking-tight uppercase whitespace-pre-line">
                {t.pricing.headline}
              </h2>

              <p className="text-xs text-[#525f57] mt-2 leading-relaxed">
                {t.pricing.subheadline}
              </p>

              {/* Guarantees List */}
              <div className="space-y-3 mt-4 sm:mt-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#233329]">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>{t.pricing.guarantee1}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#233329]">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>{t.pricing.guarantee2}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#233329]">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>{t.pricing.guarantee3}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#233329]">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>{t.pricing.guarantee4}</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 sm:pt-6 border-t border-[#e8ded0] text-center">
              
              {/* 100% Authentic */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#f4ece1] border border-[#e2d5c2] flex items-center justify-center text-[#c58b28] mb-1.5 shadow-sm">
                  <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#142319] leading-tight whitespace-pre-line">
                  {t.pricing.trust1}
                </span>
              </div>

              {/* Fast Delivery */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#f4ece1] border border-[#e2d5c2] flex items-center justify-center text-[#c58b28] mb-1.5 shadow-sm">
                  <Truck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#142319] leading-tight whitespace-pre-line">
                  {t.pricing.trust2}
                </span>
              </div>

              {/* Doctor Trusted */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#f4ece1] border border-[#e2d5c2] flex items-center justify-center text-[#c58b28] mb-1.5 shadow-sm">
                  <UserCheck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#142319] leading-tight whitespace-pre-line">
                  {t.pricing.trust3}
                </span>
              </div>

            </div>

          </div>

          {/* Column 2: 1 BOTTLE Package Card */}
          <div className="lg:col-span-2 bg-[#FAF7F2] rounded-2xl border border-[#ede1d3] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all">
            
            {/* Header */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142319]">
                1 BOTTLE
              </h3>
              <p className="text-xs text-[#637067] font-medium mt-0.5">
                {t.pricing.capsules1}
              </p>
            </div>

            {/* Product Image */}
            <div className="my-4 sm:my-5 w-full flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden mix-blend-multiply flex items-center justify-center">
                <img
                  src="/images/pricing-1-bottle.jpg"
                  alt="1 Bottle Curcuma Caesia"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Pricing Details */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xs font-bold text-[#142319]">RM</span>
                <span className="text-2xl font-black text-[#142319] tracking-tight">159.90</span>
                <span className="text-xs text-gray-400 line-through">RM179.90</span>
              </div>
              <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">
                {t.pricing.save} RM20
              </div>

              {/* Solid Gold ORDER NOW Button */}
              <button
                onClick={() => handleOrder("1-bottle")}
                className="w-full py-3 rounded-xl bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs font-extrabold tracking-[0.08em] uppercase shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-black text-white">
                  ★
                </span>
                <span>{t.pricing.orderNow}</span>
              </button>
            </div>

          </div>

          {/* Column 3: 3 BOTTLES Package Card (MOST POPULAR - Highlighted) */}
          <div className="lg:col-span-3 bg-[#FAF7F2] rounded-2xl border-2 border-[#c58b28] shadow-[0_8px_32px_rgba(197,139,40,0.18)] flex flex-col justify-between text-center relative hover:shadow-[0_12px_40px_rgba(197,139,40,0.25)] transition-all lg:-translate-y-2">
            
            {/* Top Ribbon */}
            <div className="w-full bg-[#c58b28] text-white text-[11px] font-bold tracking-[0.18em] uppercase py-2 text-center rounded-t-[14px]">
              {t.pricing.mostPopularRibbon}
            </div>

            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              {/* Header */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#142319]">
                  3 BOTTLES
                </h3>
                <p className="text-xs text-[#637067] font-medium mt-0.5">
                  {t.pricing.capsules3}
                </p>
              </div>

              {/* Product Image */}
              <div className="my-4 w-full flex items-center justify-center">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-xl overflow-hidden mix-blend-multiply flex items-center justify-center">
                  <img
                    src="/images/pricing-3-bottles.jpg"
                    alt="3 Bottles Curcuma Caesia"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Pricing Details */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-xs font-bold text-[#142319]">RM</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#142319] tracking-tight">399.90</span>
                  <span className="text-xs text-gray-400 line-through">RM539.70</span>
                </div>
                <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">
                  {t.pricing.save} RM139.80 ({t.pricing.bestValue})
                </div>

                {/* Solid Gold ORDER NOW Button */}
                <button
                  onClick={() => handleOrder("3-bottles")}
                  className="w-full py-3.5 rounded-xl bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs font-extrabold tracking-[0.08em] uppercase shadow-[0_4px_16px_rgba(197,139,40,0.4)] hover:shadow-[0_6px_22px_rgba(197,139,40,0.55)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-black text-white">
                    ★
                  </span>
                  <span>{t.pricing.orderNow}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Column 4: 2 BOTTLES Package Card */}
          <div className="lg:col-span-2 bg-[#FAF7F2] rounded-2xl border border-[#ede1d3] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all">
            
            {/* Header */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#142319]">
                2 BOTTLES
              </h3>
              <p className="text-xs text-[#637067] font-medium mt-0.5">
                {t.pricing.capsules2}
              </p>
            </div>

            {/* Product Image */}
            <div className="my-4 sm:my-5 w-full flex items-center justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden mix-blend-multiply flex items-center justify-center">
                <img
                  src="/images/pricing-2-bottles.jpg"
                  alt="2 Bottles Curcuma Caesia"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Pricing Details */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xs font-bold text-[#142319]">RM</span>
                <span className="text-2xl font-black text-[#142319] tracking-tight">299.90</span>
                <span className="text-xs text-gray-400 line-through">RM359.80</span>
              </div>
              <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">
                {t.pricing.save} RM59.90
              </div>

              {/* Solid Gold ORDER NOW Button */}
              <button
                onClick={() => handleOrder("2-bottles")}
                className="w-full py-3 rounded-xl bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs font-extrabold tracking-[0.08em] uppercase shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-black text-white">
                  ★
                </span>
                <span>{t.pricing.orderNow}</span>
              </button>
            </div>

          </div>

          {/* Column 5: Recommended Dosage & Precaution Guide Card */}
          <div className="lg:col-span-2 bg-[#FAF6EE] rounded-2xl border border-[#ede1d3] p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4 sm:space-y-6">
            
            {/* Recommended Dosage */}
            <div>
              <h4 className="text-[12px] sm:text-[13px] font-bold text-[#c58b28] tracking-wider uppercase font-sans whitespace-pre-line">
                {t.pricing.dosageTitle}
              </h4>
              
              <div className="flex items-start gap-3 mt-3 sm:mt-4">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#e5d9c7] flex items-center justify-center text-[#142319] flex-shrink-0 shadow-sm">
                  <Pill className="w-4 h-4 text-[#c58b28]" />
                </div>
                <div className="text-xs text-[#28382e] font-semibold leading-snug">
                  {t.pricing.dosageDaily}<br />
                  <span className="font-normal text-[#5c6861]">{t.pricing.dosageNote}</span>
                </div>
              </div>
            </div>

            {/* Precaution */}
            <div className="pt-3 sm:pt-4 border-t border-[#e8ded0]">
              <h4 className="text-[12px] sm:text-[13px] font-bold text-[#c58b28] tracking-wider uppercase font-sans">
                {t.pricing.careTitle}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#5c6861] leading-relaxed mt-1.5 sm:mt-2 font-normal">
                {t.pricing.careDesc}
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
