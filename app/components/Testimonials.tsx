"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Puan Halimah",
    age: 52,
    location: "Johor Bahru",
    quote: "“Sakit lutut saya banyak berkurang. Bangun pagi lebih ringan dan bertenaga.”",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "2",
    name: "Encik Farid",
    age: 45,
    location: "Kuala Lumpur",
    quote: "“Ambil 2 kapsul setiap hari. Badan rasa lebih ringan dan fokus kerja meningkat.”",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "3",
    name: "Nurul A.",
    age: 28,
    location: "Shah Alam",
    quote: "“Period pain saya dah tak separah dulu. Sekarang lebih selesa setiap bulan.”",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: "4",
    name: "Dr. Tan Wei Lun",
    age: 39,
    location: "Penang",
    quote: "“Kandungan ar-Curcumene 14.8% terbukti membantu mengawal bacaan gula dan keradangan saya.”",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "5",
    name: "Puan Rosnah",
    age: 58,
    location: "Ipoh",
    quote: "“Masalah angin dan perut kembung reda dalam seminggu. Kualiti tidur pun makin baik.”",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "6",
    name: "Haji Zulkifli",
    age: 61,
    location: "Melaka",
    quote: "“Alhamdulillah pergerakan sendi lebih lancar bila solat. Herba kunyit hitam yang asli.”",
    avatar: "/images/avatar-2.jpg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#0d2218] py-14 sm:py-20 text-white relative overflow-hidden border-t border-[#183929]">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#c59b3f]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Score & Ratings */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Category Tag */}
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#d9a74a] uppercase font-sans">
              REAL PEOPLE. REAL RESULTS.
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight">
              Loved By Malaysians
            </h2>

            {/* Ratings Summary */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                {/* 4.6 Score Pill */}
                <div className="px-3 py-1 rounded-full border border-[#d9a74a] text-[#d9a74a] font-serif text-sm font-bold shadow-sm">
                  4.6
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#e58e1b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>
              </div>

              {/* Verified Count */}
              <div className="text-xs text-[#9ab3a3] font-medium mt-2">
                482 Verified Reviews
              </div>
            </div>

            {/* Elegant Navigation Buttons on Desktop / Tablet */}
            <div className="hidden sm:flex items-center gap-3 pt-3">
              <button
                onClick={scrollLeft}
                aria-label="Previous Reviews"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c58b28] text-white border border-white/20 hover:border-[#c58b28] flex items-center justify-center transition-all cursor-pointer group shadow-md"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2] group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next Reviews"
                className="w-10 h-10 rounded-full bg-[#c58b28] hover:bg-[#b0781e] text-white shadow-[0_2px_12px_rgba(197,139,40,0.4)] flex items-center justify-center transition-all cursor-pointer group hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Endless Loop Testimonial Slider */}
          <div className="lg:col-span-8 relative">
            
            {/* Testimonials Horizontal Carousel */}
            <div
              ref={sliderRef}
              className="flex items-stretch gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-3 pt-1 px-1 snap-x select-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.concat(testimonials).map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[350px] rounded-2xl bg-[#FAF6EE] border border-[#ede1d3] p-5 sm:p-6 shadow-2xl flex flex-col justify-between text-[#142319] snap-start hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top Area: Avatar + Quote */}
                  <div className="flex items-start gap-4">
                    {/* User Avatar */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-gray-200">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-[13px] text-[#142319] font-medium leading-relaxed italic">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom Area: Name & City */}
                  <div className="mt-5 pt-3 border-t border-[#e8ded0] flex flex-col">
                    <span className="text-xs text-[#525e56] font-bold">
                      – {item.name}, {item.age}
                    </span>
                    <span className="text-xs font-extrabold text-[#142319] tracking-tight mt-0.5">
                      {item.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Next Button on right edge */}
            <button
              onClick={scrollRight}
              aria-label="Next Reviews"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-11 h-11 rounded-full bg-[#c58b28] hover:bg-[#b0781e] text-white shadow-2xl flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 z-20"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
