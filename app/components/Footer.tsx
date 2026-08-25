"use client";

import React from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Leaf, 
  FlaskConical, 
  Award, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
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
                alt="Curcuma Wellness - Pure Black Turmeric"
                className="h-20 sm:h-22 md:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md rounded-full"
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

          {/* Column 3: Customer Care & Policy */}
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
                  href="mailto:support@curcumawellness.com" 
                  className="hover:text-[#d9a74a] transition-colors font-medium break-all"
                >
                  support@curcumawellness.com
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

        {/* Quality & Trust Badges Row (Generic Dummy Standards) */}
        <div className="py-8 border-b border-[#1b3d2b] flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          
          {/* 100% Botanical */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 text-[#d9a74a]">
              <Leaf className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              100% BOTANICAL<br /><span className="text-[#8ba294] font-normal text-[9px]">Pure Herb Origin</span>
            </div>
          </div>

          {/* Lab Tested */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 text-[#d9a74a]">
              <FlaskConical className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              LAB TESTED<br /><span className="text-[#8ba294] font-normal text-[9px]">Safety Verified</span>
            </div>
          </div>

          {/* Quality Assured */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-[#d9a74a]/40 flex items-center justify-center p-1.5 text-[#d9a74a]">
              <Award className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              QUALITY ASSURED<br /><span className="text-[#8ba294] font-normal text-[9px]">Standard Controlled</span>
            </div>
          </div>

          {/* Clean Process */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 text-[#d9a74a]">
              <Sparkles className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              CLEAN PROCESS<br /><span className="text-[#8ba294] font-normal text-[9px]">Hygienic Facility</span>
            </div>
          </div>

          {/* Safe Formula */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 text-[#d9a74a]">
              <ShieldCheck className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              SAFE FORMULA<br /><span className="text-[#8ba294] font-normal text-[9px]">Zero Fillers</span>
            </div>
          </div>

          {/* Tested Care */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-1.5 text-[#d9a74a]">
              <CheckCircle2 className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-white">
              TESTED CARE<br /><span className="text-[#8ba294] font-normal text-[9px]">Trusted Wellness</span>
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
