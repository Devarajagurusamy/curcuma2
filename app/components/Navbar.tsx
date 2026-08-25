"use client";

import React, { useState } from "react";
import { 
  ShoppingCart,
  ShoppingBag,
  Menu, 
  X,
  Globe
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

function MalaysiaFlagCircle({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={`${className} rounded-full overflow-hidden flex-shrink-0 shadow-xs`} aria-hidden="true">
      <mask id="my-circle-flag">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#my-circle-flag)">
        {/* 14 Stripes */}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect
            key={i}
            x="0"
            y={i * (512 / 14)}
            width="512"
            height={512 / 14}
            fill={i % 2 === 0 ? "#cc0000" : "#ffffff"}
          />
        ))}
        {/* Blue Canton */}
        <rect x="0" y="0" width="256" height={(512 / 14) * 8} fill="#002b7f" />
        {/* Crescent */}
        <path
          d="M 140,55 A 65,65 0 1 0 140,195 A 55,55 0 1 1 140,55 Z"
          fill="#fcd116"
        />
        {/* 14-pointed Star */}
        <polygon
          points="155,75 160,105 188,90 173,117 202,125 173,133 188,160 160,145 155,175 145,147 122,165 132,135 105,125 132,115 122,85 145,103"
          fill="#fcd116"
        />
      </g>
    </svg>
  );
}

function UKFlagCircle({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={`${className} rounded-full overflow-hidden flex-shrink-0 shadow-xs`} aria-hidden="true">
      <mask id="uk-circle-flag">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#uk-circle-flag)">
        {/* Blue background */}
        <rect width="512" height="512" fill="#012169" />
        {/* Diagonal white saltires */}
        <path d="M0,0 L512,512 M512,0 L0,512" stroke="#ffffff" strokeWidth="68" />
        {/* Diagonal red saltires */}
        <path d="M0,0 L512,512" stroke="#C8102E" strokeWidth="24" />
        <path d="M512,0 L0,512" stroke="#C8102E" strokeWidth="24" />
        {/* White cross */}
        <path d="M256,0 v512 M0,256 h512" stroke="#ffffff" strokeWidth="105" />
        {/* Red cross */}
        <path d="M256,0 v512 M0,256 h512" stroke="#C8102E" strokeWidth="64" />
      </g>
    </svg>
  );
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", name: t.nav.home, href: "#home" },
    { id: "story", name: t.nav.story, href: "#story" },
    { id: "benefits", name: t.nav.benefits, href: "#benefits" },
    { id: "science", name: t.nav.science, href: "#science" },
    { id: "reviews", name: t.nav.reviews, href: "#reviews" },
    { id: "faq", name: t.nav.faq, href: "#faq" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sticky top-0 z-50">
      
      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo: Prominently Sized */}
        <a href="#" className="flex items-center group flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Curcuma Wellness - Pure Black Turmeric"
            className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[320px] object-contain group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-sm rounded-full"
          />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-9 text-[13px] xl:text-[14px] font-bold tracking-[0.06em]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`py-2 uppercase transition-colors duration-200 relative ${
                  isActive
                    ? "text-[#c59b3f] font-extrabold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#c59b3f] after:rounded-full"
                    : "text-[#22312a] hover:text-[#c59b3f]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Utilities: Language Switcher + Solid Gold CTA Button */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          
          {/* Language Switcher Pill Toggle with Circular Flags */}
          <div className="flex items-center bg-[#FAF6EE] border border-[#ede1d3] p-1 rounded-full shadow-inner">
            <button
              onClick={() => setLanguage("bm")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                language === "bm"
                  ? "bg-[#142319] text-[#e5b869] shadow-sm scale-105"
                  : "text-[#5e6b63] hover:text-[#142319]"
              }`}
              title="Tukar ke Bahasa Melayu"
            >
              <MalaysiaFlagCircle className="w-4 h-4" />
              <span>BM</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "bg-[#142319] text-[#e5b869] shadow-sm scale-105"
                  : "text-[#5e6b63] hover:text-[#142319]"
              }`}
              title="Switch to English"
            >
              <UKFlagCircle className="w-4 h-4" />
              <span>EN</span>
            </button>
          </div>

          {/* Solid Gold ORDER NOW CTA Button (Opens Order Popup) */}
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs xl:text-[13px] font-extrabold tracking-[0.08em] uppercase shadow-[0_4px_16px_rgba(197,139,40,0.35)] hover:shadow-[0_6px_22px_rgba(197,139,40,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap group"
          >
            <ShoppingBag className="w-4 h-4 text-white stroke-[2.2] group-hover:scale-110 transition-transform duration-200" />
            <span>{t.nav.orderNow}</span>
          </button>

        </div>

        {/* Mobile Right Controls (Language Switch + Cart + Hamburger) */}
        <div className="flex lg:hidden items-center gap-2.5">
          {/* Mobile Language Switcher Pill with Circular Flags */}
          <div className="flex items-center bg-[#FAF6EE] border border-[#ede1d3] p-0.5 rounded-full">
            <button
              onClick={() => setLanguage("bm")}
              className={`flex items-center gap-1 px-2 py-1 text-[10px] font-extrabold rounded-full transition-all ${
                language === "bm"
                  ? "bg-[#142319] text-[#e5b869]"
                  : "text-[#5e6b63]"
              }`}
            >
              <MalaysiaFlagCircle className="w-3.5 h-3.5" />
              <span>BM</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1 px-2 py-1 text-[10px] font-extrabold rounded-full transition-all ${
                language === "en"
                  ? "bg-[#142319] text-[#e5b869]"
                  : "text-[#5e6b63]"
              }`}
            >
              <UKFlagCircle className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>
          </div>

          <button 
            onClick={onOpenOrderModal}
            aria-label="Cart"
            className="relative p-1 text-[#22312a] hover:text-[#c59b3f]"
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c59b3f] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#142319] hover:text-[#c59b3f] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2]" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#142319] hover:text-[#c59b3f] py-1 uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#142319] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#c59b3f]" />
                <span>Bahasa / Language</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("bm")}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black rounded-lg ${
                    language === "bm" ? "bg-[#142319] text-[#e5b869]" : "bg-white text-[#525e56] border border-gray-200"
                  }`}
                >
                  <MalaysiaFlagCircle className="w-3.5 h-3.5" />
                  <span>BM</span>
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black rounded-lg ${
                    language === "en" ? "bg-[#142319] text-[#e5b869]" : "bg-white text-[#525e56] border border-gray-200"
                  }`}
                >
                  <UKFlagCircle className="w-3.5 h-3.5" />
                  <span>EN</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenOrderModal) onOpenOrderModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs font-bold tracking-wider uppercase shadow-md cursor-pointer group transition-all"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.2] group-hover:scale-110 transition-transform duration-200" />
              <span>{t.nav.orderNow}</span>
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
