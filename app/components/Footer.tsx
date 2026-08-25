"use client";

import React from "react";
import { Mail, MapPin, Phone, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#081b12] text-white pt-16 pb-12 border-t border-[#183928] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#c59b3f]/5 rounded-full blur-3xl" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        
        {/* Main Footer Links & Company Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#1b3d2b]">
          
          {/* Logo Column */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <a href="#" className="inline-block group mb-4">
              <img
                src="/images/logo.png"
                alt="Malaysian Royal Gold - Curcuma Caesia Roxb."
                className="h-20 sm:h-22 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
              />
            </a>
            <p className="text-[#8ba294] text-xs leading-relaxed max-w-xs font-medium">
              {t.footer.desc}
            </p>
          </div>

          {/* Column 1: Company Profile & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-white uppercase">
              {t.footer.companyTitle}
            </h4>
            <div className="space-y-2 text-xs text-[#8ba294] leading-relaxed">
              <p className="font-semibold text-white/90">
                {t.footer.companySub}
              </p>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#d9a74a] flex-shrink-0 mt-0.5" />
                <p>
                  {t.footer.companyAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold tracking-[0.14em] text-[#d9a74a] uppercase">
              {t.footer.colExplore}
            </h4>
            <ul className="space-y-2 text-xs text-[#8ba294]">
              <li>
                <a href="#story" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.story}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.benefits}
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.science}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.reviews}
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.order}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold tracking-[0.14em] text-[#d9a74a] uppercase">
              {t.footer.colHelp}
            </h4>
            <ul className="space-y-2 text-xs text-[#8ba294]">
              <li>
                <a href="#faq" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.faq}
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.guarantee}
                </a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.shipping}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#d9a74a] transition-colors">
                  {t.footer.links.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold tracking-[0.14em] text-[#d9a74a] uppercase">
              {t.footer.colContact}
            </h4>
            <div className="space-y-2.5 text-xs text-[#8ba294]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d9a74a] flex-shrink-0" />
                <a 
                  href="mailto:curcumacaesiaroxb@gmail.com" 
                  className="hover:text-[#d9a74a] transition-colors font-medium break-all"
                >
                  curcumacaesiaroxb@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d9a74a] flex-shrink-0" />
                <span className="font-medium">
                  +60 12-345 6789
                </span>
              </div>
              <div className="text-[11px] text-[#6e8577] pt-1">
                {t.footer.workHours}
              </div>
            </div>
          </div>

        </div>

        {/* Accreditation & Certification Badges Row */}
        <div className="py-8 border-b border-[#1b3d2b] flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          
          {/* Buatan Malaysia */}
          <div className="flex items-center gap-2 text-white/90">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#002b7f" />
                <path d="M50 20 L60 40 L82 40 L65 53 L71 75 L50 62 L29 75 L35 53 L18 40 L40 40 Z" fill="#fcd116" />
                <path d="M15 70 Q50 90 85 70" stroke="#cc0000" strokeWidth="6" fill="none" />
              </svg>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              BUATAN<br />MALAYSIA
            </div>
          </div>

          {/* myGAP */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center shadow-sm">
              <span className="text-[#15803d] font-extrabold text-[9px]">my<span className="text-[#b45309]">GAP</span></span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              myGAP<br /><span className="text-[#8ba294] font-normal text-[9px]">Certified Farm</span>
            </div>
          </div>

          {/* GMP */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-[#b88c38] flex items-center justify-center p-1">
              <span className="text-[#d9a74a] font-black text-[9px]">GMP</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              GMP<br /><span className="text-[#8ba294] font-normal text-[9px]">Certified Facility</span>
            </div>
          </div>

          {/* HACCP */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-[#b88c38] flex items-center justify-center p-1">
              <span className="text-[#d9a74a] font-black text-[8px]">HACCP</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              HACCP<br /><span className="text-[#8ba294] font-normal text-[9px]">Food Safety Control</span>
            </div>
          </div>

          {/* FSMS ISO 22000 */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-[#16a34a] flex items-center justify-center p-1">
              <span className="text-[#86efac] font-bold text-[8px]">FSMS</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              FSMS<br /><span className="text-[#8ba294] font-normal text-[9px]">ISO 22000 Standard</span>
            </div>
          </div>

          {/* Halal Malaysia */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center shadow-sm">
              <span className="text-[#0f172a] font-extrabold text-[8px]">HALAL</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              HALAL<br /><span className="text-[#8ba294] font-normal text-[9px]">JAKIM Malaysia</span>
            </div>
          </div>

        </div>

        {/* Copyright & Health Disclaimer */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-xs text-white/90 font-medium tracking-wide">
            {t.footer.rights}
          </p>
          <p className="text-[10.5px] text-[#71887b] max-w-2xl mx-auto leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>

      </div>

    </footer>
  );
}
