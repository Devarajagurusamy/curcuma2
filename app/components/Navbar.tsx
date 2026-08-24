"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  ShoppingBag, 
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
      
      {/* Top Utility Bar (Career, Location, Shop) */}
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

      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo: CARiNG PHARMACY */}
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <div className="flex items-center gap-2">
            {/* CARiNG Typography Logo */}
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-[#007b78] font-black text-2xl tracking-tight leading-none font-sans">
                  CAR<span className="text-[#e5252a] text-[26px] leading-none">i</span>NG
                </span>
                <sup className="text-[#007b78] text-[9px] font-bold ml-0.5">®</sup>
              </div>
              <span className="text-[#007b78] text-[8.5px] font-extrabold tracking-[0.28em] uppercase -mt-0.5">
                PHARMACY
              </span>
            </div>

            {/* Heart Emblem (Red Heart with Green Ribbon Outline) */}
            <div className="w-7 h-7 flex-shrink-0 text-[#007b78] relative -mt-0.5 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Green Outer Ribbon Contour */}
                <path 
                  d="M50 88 C20 62 8 46 8 28 C8 14 18 6 32 6 C41 6 47 11 50 16 C53 11 59 6 68 6 C82 6 92 14 92 28 C92 46 80 62 50 88 Z" 
                  fill="none" 
                  stroke="#007b78" 
                  strokeWidth="9" 
                  strokeLinejoin="round"
                />
                {/* Red Inner Heart Fill */}
                <path 
                  d="M50 78 C26 56 16 43 16 29 C16 18 24 12 34 12 C41 12 46 16 50 21 C54 16 59 12 66 12 C76 12 84 18 84 29 C84 43 74 56 50 78 Z" 
                  fill="#e5252a" 
                />
              </svg>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12.5px] font-bold tracking-[0.05em] text-[#22312a]">
          
          {/* ABOUT ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>ABOUT</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#about-us" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Our Profile</a>
                <a href="#heritage" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Corporate Milestones</a>
                <a href="#leadership" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Board of Directors</a>
              </div>
            )}
          </div>

          {/* SUSTAINABILITY */}
          <a href="#sustainability" className="hover:text-[#007b78] transition-colors py-2 uppercase">
            SUSTAINABILITY
          </a>

          {/* SERVICES ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>SERVICES</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#pharmacy-care" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Pharmacist Consultation</a>
                <a href="#health-checks" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Health Screenings</a>
                <a href="#home-delivery" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Medication Delivery</a>
              </div>
            )}
          </div>

          {/* HEALTH CENTRE ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("health-centre")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>HEALTH CENTRE</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "health-centre" && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#health-tips" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Health Articles &amp; Tips</a>
                <a href="#wellness-guide" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Wellness Guides</a>
              </div>
            )}
          </div>

          {/* EVENTS ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("events")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>EVENTS</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "events" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#roadshows" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Health Roadshows</a>
                <a href="#webinars" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Virtual Workshops</a>
              </div>
            )}
          </div>

          {/* PROMOTION ⌵ */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setActiveDropdown("promotion")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#007b78] transition-colors py-2 uppercase">
              <span>PROMOTION</span>
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.2] text-[#617068]" />
            </button>
            {activeDropdown === "promotion" && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-xl rounded-xl p-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-1">
                <a href="#monthly-deals" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Monthly Catalog</a>
                <a href="#exclusive-vouchers" className="block px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-[#e8f6f4] hover:text-[#007b78] rounded-lg">Special Vouchers</a>
              </div>
            )}
          </div>

          {/* ORDER NOW ⌵ (Replaces MEMBER button as requested) */}
          <a
            href="#order"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#e8f6f4] text-[#007b78] hover:bg-[#d5f0ec] border border-[#cbe8e4] text-xs font-bold tracking-wider transition-all duration-200 shadow-sm group/btn hover:scale-105 active:scale-98 uppercase"
          >
            {/* Circular badge icon (like member icon in image) */}
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
            <a href="#about" className="block py-2 hover:text-[#007b78]">ABOUT</a>
            <a href="#sustainability" className="block py-2 hover:text-[#007b78]">SUSTAINABILITY</a>
            <a href="#services" className="block py-2 hover:text-[#007b78]">SERVICES</a>
            <a href="#health-centre" className="block py-2 hover:text-[#007b78]">HEALTH CENTRE</a>
            <a href="#events" className="block py-2 hover:text-[#007b78]">EVENTS</a>
            <a href="#promotion" className="block py-2 hover:text-[#007b78]">PROMOTION</a>
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
