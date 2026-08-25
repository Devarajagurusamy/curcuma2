"use client";

import React from "react";
import { Star } from "lucide-react";

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
    quote: "“My knee pain used to keep me from playing with my grandkids. Now my knees feel so much lighter, and I wake up every morning with a smile.”",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "2",
    name: "Encik Farid",
    age: 45,
    location: "Kuala Lumpur",
    quote: "“After long work days, I used to feel totally drained. Taking 2 capsules daily gave me back my energy to enjoy evenings with my children.”",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "3",
    name: "Nurul A.",
    age: 28,
    location: "Shah Alam",
    quote: "“My monthly cramps used to leave me stuck in bed in tears. Now my cycle is smooth, gentle, and I feel comfortable all month.”",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: "4",
    name: "Uncle Tan",
    age: 64,
    location: "Penang",
    quote: "“My morning finger stiffness and sugar levels bothered me for years. Black turmeric has been such a blessing for my daily peace of mind.”",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "5",
    name: "Puan Rosnah",
    age: 58,
    location: "Ipoh",
    quote: "“Trapped stomach wind and bloating made me afraid to eat. Within a week, my tummy felt calm, and I finally sleep peacefully through the night.”",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "6",
    name: "Haji Zulkifli",
    age: 61,
    location: "Melaka",
    quote: "“Alhamdulillah, bending my knees during daily prayers feels smooth and painless again. Pure, natural herbs that truly care for your body.”",
    avatar: "/images/avatar-2.jpg",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[350px] rounded-2xl bg-[#FAF6EE] border border-[#ede1d3] p-5 sm:p-6 shadow-2xl flex flex-col justify-between text-[#142319] select-none hover:-translate-y-1 transition-all duration-300">
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
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="w-full bg-[#0d2218] py-14 sm:py-20 text-white relative overflow-hidden border-t border-[#183929] scroll-mt-20">
      
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
              REAL PEOPLE • REAL RELIEF
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight">
              Loved by Malaysian Families
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
                482 Grateful Customer Stories
              </div>
            </div>

          </div>

          {/* Right Column: Endless Loop Testimonial Slider */}
          <div className="lg:col-span-8 overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
              {/* First Set of Cards */}
              <div className="flex items-stretch gap-5 pr-5">
                {testimonials.map((item, index) => (
                  <TestimonialCard key={`track1-${item.id}-${index}`} item={item} />
                ))}
              </div>
              
              {/* Duplicate Set for Seamless Infinite Loop */}
              <div className="flex items-stretch gap-5 pr-5" aria-hidden="true">
                {testimonials.map((item, index) => (
                  <TestimonialCard key={`track2-${item.id}-${index}`} item={item} />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
