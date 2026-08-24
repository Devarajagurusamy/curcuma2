"use client";

import React, { useState } from "react";
import { 
  ShoppingCart,
  Menu, 
  X
} from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "OUR STORY", href: "#story" },
    { name: "BENEFITS", href: "#benefits" },
    { name: "SCIENCE", href: "#science" },
    { name: "REVIEWS", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sticky top-0 z-50">
      
      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo: Prominently Sized */}
        <a href="#" className="flex items-center group flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Malaysian Royal Gold - Curcuma Caesia Roxb."
            className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[320px] object-contain group-hover:scale-[1.03] transition-transform duration-300 drop-shadow-sm"
          />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-9 text-[13px] xl:text-[14px] font-bold tracking-[0.06em]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
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

        {/* Right Utilities: Cart + Solid Gold CTA Button */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          
          

          {/* Solid Gold ORDER NOW CTA Button */}
          <a
            href="#order"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c59b3f] hover:bg-[#b08730] text-white text-xs xl:text-sm font-extrabold tracking-[0.08em] uppercase shadow-[0_2px_12px_rgba(197,155,63,0.35)] hover:shadow-[0_4px_18px_rgba(197,155,63,0.55)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <span className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center text-[10px] font-black text-white">
              ★
            </span>
            <span>ORDER NOW</span>
          </a>

        </div>

        {/* Mobile Right Controls (Cart + Hamburger) */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            aria-label="Cart"
            className="relative p-1 text-[#22312a] hover:text-[#c59b3f]"
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c59b3f] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-1.5 text-gray-700 hover:text-[#c59b3f] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          
          <div className="space-y-2 text-sm font-bold text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2 ${
                  activeTab === link.name ? "text-[#c59b3f] font-extrabold" : "text-gray-800 hover:text-[#c59b3f]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <a
              href="#order"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#c59b3f] text-white text-xs font-bold tracking-wider uppercase shadow-md"
            >
              <span>★ ORDER NOW</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
