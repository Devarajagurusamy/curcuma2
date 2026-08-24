"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  ShoppingBag, 
  ShoppingCart,
  ChevronDown, 
  Menu, 
  X,
  Sparkles
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] sticky top-0 z-50">
      
      {/* Top Utility Bar (Career, Location, Shop, Language) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-2.5 pb-1 flex justify-end items-center border-b border-gray-50 text-[11px] font-semibold tracking-wider text-[#636c66] gap-6">
        
        {/* Career */}
        <a 
          href="#career" 
          className="flex items-center gap-1.5 hover:text-[#007b78] transition-colors py-1 uppercase"
        >
          <Briefcase className="w-3.5 h-3.5 stroke-[1.8] text-[#717b75]" />
          <span>CAREER</span>
        </a>

        {/* Location */}
        <a 
          href="#location" 
          className="flex items-center gap-1.5 hover:text-[#007b78] transition-colors py-1 uppercase"
        >
          <MapPin className="w-3.5 h-3.5 stroke-[1.8] text-[#717b75]" />
          <span>LOCATION</span>
        </a>

        {/* Shop */}
        <a 
          href="#shop" 
          className="flex items-center gap-1.5 hover:text-[#007b78] transition-colors py-1 uppercase"
        >
          <ShoppingBag className="w-3.5 h-3.5 stroke-[1.8] text-[#717b75]" />
          <span>SHOP</span>
        </a>

        {/* Language selector */}
        <div className="flex items-center gap-1 text-[#636c66] hover:text-[#007b78] transition-colors cursor-pointer py-1 pl-2 border-l border-gray-200">
          <span className="text-xs leading-none">🇲🇾</span>
          <span>EN</span>
          <ChevronDown className="w-3 h-3 stroke-[2.2]" />
        </div>

      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo: MALAYSIAN ROYAL GOLD - CURCUMA CAESIA ROXB. */}
        <a href="#" className="flex items-center gap-3 group flex-shrink-0">
          {/* Gold Mandala Emblem */}
          <div className="w-9 h-9 flex-shrink-0 text-[#c59b3f] group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="2.5">
              <circle cx="50" cy="50" r="7" fill="currentColor" />
              <circle cx="50" cy="50" r="14" strokeDasharray="2 3" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="22" strokeWidth="1.5" />
              <path d="M50 28 C46 15 54 15 50 2" strokeLinecap="round" />
              <path d="M50 72 C46 85 54 85 50 98" strokeLinecap="round" />
              <path d="M28 50 C15 46 15 54 2 50" strokeLinecap="round" />
              <path d="M72 50 C85 46 85 54 98 50" strokeLinecap="round" />
              <circle cx="50" cy="28" r="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
              <circle cx="50" cy="72" r="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
              <circle cx="28" cy="50" r="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
              <circle cx="72" cy="50" r="4" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
              <path d="M34 34 C25 25 31 19 22 22 C25 31 19 25 34 34" strokeLinejoin="round" />
              <path d="M66 34 C75 25 69 19 78 22 C75 31 81 25 66 34" strokeLinejoin="round" />
              <path d="M34 66 C25 75 31 81 22 78 C25 69 19 75 34 66" strokeLinejoin="round" />
              <path d="M66 66 C75 75 69 81 78 78 C75 69 81 75 66 66" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="45" strokeWidth="1" strokeOpacity="0.4" />
            </svg>
          </div>

          {/* Logo Typography */}
          <div className="flex flex-col">
            <span className="font-serif text-[13px] sm:text-[14px] font-bold tracking-[0.12em] text-[#142319] uppercase leading-tight">
              MALAYSIAN
            </span>
            <span className="font-serif text-[13px] sm:text-[14px] font-bold tracking-[0.12em] text-[#142319] uppercase leading-tight">
              ROYAL GOLD
            </span>
            <span className="font-serif text-[7.5px] sm:text-[8px] font-bold tracking-[0.16em] text-[#c59b3f] uppercase mt-0.5">
              CURCUMA CAESIA ROXB.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Updated Content with Same Design) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12.5px] font-bold tracking-[0.05em] text-[#22312a]">
          
          {/* HOME */}
          <a href="#home" className="hover:text-[#007b78] transition-colors py-2 uppercase text-[#007b78]">
            HOME
          </a>

          {/* OUR STORY ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("story")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>OUR STORY</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "story" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#origin" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Johor Heritage Since 1930</a>
                <a href="#cultivation" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Natural Cultivation</a>
                <a href="#extraction" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Purity Standardisation</a>
              </div>
            )}
          </div>

          {/* BENEFITS ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("benefits")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>BENEFITS</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "benefits" && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#joint" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Joint Comfort (14.5% ar-Turmerone)</a>
                <a href="#immune" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Immune Support (26 Compounds)</a>
                <a href="#antioxidant" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Powerful Antioxidant (95.1% Purity)</a>
                <a href="#energy" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Natural Energy &amp; Liver Support</a>
              </div>
            )}
          </div>

          {/* SCIENCE ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("science")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>SCIENCE</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "science" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#university-studies" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">4 Malaysian Universities Research</a>
                <a href="#lab-tests" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Lab-Confirmed Purity Tests</a>
                <a href="#compounds" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Active Bioactive Compounds</a>
              </div>
            )}
          </div>

          {/* REVIEWS */}
          <a href="#reviews" className="hover:text-[#007b78] transition-colors py-2 uppercase">
            REVIEWS
          </a>

          {/* FAQ */}
          <a href="#faq" className="hover:text-[#007b78] transition-colors py-2 uppercase">
            FAQ
          </a>

          {/* Shopping Cart Icon Button */}
          <button 
            aria-label="Cart"
            className="relative p-1 text-[#22312a] hover:text-[#007b78] transition-colors cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#007b78] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* ORDER NOW ⌵ (Pill Button from the Design) */}
          <a
            href="#order"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#e8f6f4] text-[#007b78] hover:bg-[#d5f0ec] border border-[#cbe8e4] text-xs font-bold tracking-wider transition-all duration-200 shadow-sm group/btn hover:scale-105 active:scale-98 uppercase"
          >
            <span className="w-4 h-4 rounded-full border border-[#007b78] text-[#007b78] flex items-center justify-center text-[10px] font-black group-hover/btn:rotate-45 transition-transform">
              ★
            </span>
            <span>ORDER NOW</span>
            <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#007b78]" />
          </a>

        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 text-gray-700 hover:text-[#007b78] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          
          {/* Top utilities on mobile */}
          <div className="flex items-center justify-around pb-3 border-b border-gray-100 text-xs font-semibold text-gray-600">
            <a href="#career" className="flex items-center gap-1 hover:text-[#007b78]">
              <Briefcase className="w-3.5 h-3.5" /> CAREER
            </a>
            <a href="#location" className="flex items-center gap-1 hover:text-[#007b78]">
              <MapPin className="w-3.5 h-3.5" /> LOCATION
            </a>
            <a href="#shop" className="flex items-center gap-1 hover:text-[#007b78]">
              <ShoppingBag className="w-3.5 h-3.5" /> SHOP
            </a>
          </div>

          <div className="space-y-2 text-sm font-bold text-gray-800">
            <a href="#home" className="block py-2 text-[#007b78]">HOME</a>
            <a href="#story" className="block py-2 hover:text-[#007b78]">OUR STORY</a>
            <a href="#benefits" className="block py-2 hover:text-[#007b78]">BENEFITS</a>
            <a href="#science" className="block py-2 hover:text-[#007b78]">SCIENCE</a>
            <a href="#reviews" className="block py-2 hover:text-[#007b78]">REVIEWS</a>
            <a href="#faq" className="block py-2 hover:text-[#007b78]">FAQ</a>
          </div>

          <div className="pt-2">
            <a
              href="#order"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#007b78] text-white text-xs font-bold tracking-wider uppercase shadow-md"
            >
              <span>ORDER NOW</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
