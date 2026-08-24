"use client";

import React from "react";
import { 
  FlaskConical, 
  Leaf, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface BenefitCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const scientificBenefits: BenefitCard[] = [
  {
    number: "01",
    title: "2x ar–Curcumene (14.8%)",
    description:
      "Double the active therapeutic concentration of yellow turmeric for rapid bioavailability.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="4.5" strokeDasharray="1 1" />
        <circle cx="9" cy="9" r="2.5" />
        <circle cx="23" cy="9" r="2.5" />
        <circle cx="25" cy="22" r="3" fill="#e58e1b" stroke="#e58e1b" />
        <circle cx="7" cy="22" r="2.5" />
        <circle cx="16" cy="27" r="2" />
        <line x1="11" y1="10.5" x2="14" y2="13.5" />
        <line x1="21" y1="10.5" x2="18" y2="13.5" />
        <line x1="18.5" y1="18.5" x2="22.5" y2="21" />
        <line x1="13.5" y1="18.5" x2="9" y2="21" />
        <line x1="16" y1="20.5" x2="16" y2="25" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Joint & Cartilage Defense",
    description:
      "Inhibits inflammatory COX-2 pathways and protects bone and cartilage density.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Joint Bones */}
        <path d="M16 6 C13 6 12 10 12 13 C14 14 18 14 20 13 C20 10 19 6 16 6 Z" strokeLinejoin="round" />
        <path d="M16 26 C13 26 12 22 12 19 C14 18 18 18 20 19 C20 22 19 26 16 26 Z" strokeLinejoin="round" />
        {/* Cartilage Disc Gap */}
        <ellipse cx="16" cy="16" rx="6" ry="2" strokeDasharray="2 2" />
        {/* Protection Waves */}
        <path d="M8 12 C6 14 6 18 8 20" strokeLinecap="round" />
        <path d="M24 12 C26 14 26 18 24 20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Blood Glucose Stability",
    description:
      "Helps regulate post-meal glucose spikes and reduces sluggish after-meal fatigue.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Blood Drop */}
        <path d="M16 5 C16 5 9 14 9 20 A7 7 0 0 0 23 20 C23 14 16 5 16 5 Z" strokeLinejoin="round" />
        {/* 3D Sugar Glucose Cube Inside */}
        <path d="M19 18 L24 15 L24 21 L19 24 Z" fill="#d9a74a" fillOpacity="0.2" stroke="#e58e1b" strokeWidth="1.5" />
        <path d="M14 18 L19 15 L19 21 L14 24 Z" fill="#d9a74a" fillOpacity="0.1" stroke="#e58e1b" strokeWidth="1.5" />
        <path d="M14 18 L19 15 L24 18 L19 21 Z" fill="#d9a74a" fillOpacity="0.3" stroke="#e58e1b" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Liver & Kidney Protection",
    description:
      "Non-genotoxic antioxidants shield internal filtration organs from chemical and drug toxicity.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Organ Shield Contour */}
        <path d="M16 5 C10 5 7 9 7 15 C7 21 11 26 16 27 C21 26 25 21 25 15 C25 9 22 5 16 5 Z" strokeLinejoin="round" />
        <path d="M11 12 C13 16 19 16 21 12" strokeLinecap="round" />
        {/* Gold Medical Plus Circle */}
        <circle cx="21" cy="20" r="4.5" fill="#e58e1b" stroke="#e58e1b" strokeWidth="1" />
        <path d="M21 18 v4 M19 20 h4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Thrombolytic Blood Flow",
    description:
      "Promotes clean, unobstructed vascular circulation for cardiovascular wellness.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Vascular Artery Tube */}
        <path d="M11 6 C13 11 10 17 12 26" strokeLinecap="round" strokeWidth="2" />
        <path d="M21 6 C23 11 20 17 22 26" strokeLinecap="round" strokeWidth="2" />
        {/* Flowing Cells & Gold Active Particles */}
        <circle cx="16" cy="10" r="2" fill="#d9a74a" fillOpacity="0.4" />
        <circle cx="17" cy="16" r="2.5" fill="#e58e1b" stroke="#e58e1b" />
        <circle cx="15" cy="22" r="1.8" fill="#d9a74a" />
        <circle cx="18" cy="25" r="1.2" fill="#e58e1b" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Antispasmodic Cramp Relief",
    description:
      "Relaxes smooth muscle fibers to relieve painful menstrual and abdominal cramps.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Torso / Abdomen Silhouette */}
        <path d="M9 7 C12 12 12 18 8 25 M23 7 C20 12 20 18 24 25" strokeLinecap="round" />
        {/* Calming Core / Radiating Ring */}
        <circle cx="16" cy="16" r="3" fill="#e58e1b" stroke="#e58e1b" />
        <circle cx="16" cy="16" r="6.5" strokeDasharray="2 2" />
        <path d="M16 21 L16 25 M14 27 L16 25 L18 27" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Digestive & IBS Soothing",
    description:
      "Calms trapped stomach gas, acid reflux, bloating, and irregular bowel discomfort.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Stomach / GI Tract */}
        <path d="M15 6 C17 6 19 8 19 11 C20 16 24 18 24 21 C24 25 19 27 15 27 C10 27 8 23 8 18 C8 13 11 8 15 6 Z" strokeLinejoin="round" />
        <path d="M15 14 v5 M12.5 16.5 h5" stroke="#e58e1b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Brain Focus & Anti–Brain Fog",
    description:
      "Shields brain neurons against oxidative stress for sharper memory and mental clarity.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Brain Left & Right Lobes */}
        <path d="M16 8 C13 6 8 8 8 13 C8 16 10 18 10 21 C10 24 13 25 16 25 M16 8 C19 6 24 8 24 13 C24 16 22 18 22 21 C22 24 19 25 16 25" strokeLinejoin="round" />
        <path d="M16 8 L16 25" strokeDasharray="1.5 1.5" />
        <circle cx="16" cy="14" r="1.5" fill="#e58e1b" />
        <path d="M12 14 C12 17 14 18 16 18 M20 14 C20 17 18 18 16 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "09",
    title: "Broad–Spectrum Immune Shield",
    description:
      "Natural antibacterial and antiviral properties strengthen year-round bodily defenses.",
    icon: (
      <svg className="w-8 h-8 text-[#d9a74a] stroke-current fill-none stroke-[1.8]" viewBox="0 0 32 32">
        {/* Shield */}
        <path d="M16 5 L24 8 V16 C24 22 16 26 16 26 C16 26 8 22 8 16 V8 L16 5 Z" strokeLinejoin="round" />
        {/* Plus Symbol */}
        <path d="M16 11 v8 M12 15 h8" stroke="#d9a74a" strokeWidth="1.8" strokeLinecap="round" />
        {/* Defense Ring / Active Gear */}
        <circle cx="21" cy="20" r="3.5" fill="#e58e1b" stroke="#e58e1b" />
        <circle cx="21" cy="20" r="1.5" fill="#0d271c" />
      </svg>
    ),
  },
];

export default function ScientificBenefits() {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-[#FAF6F0]">
      
      {/* Background Ambience & Delicate Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c59b3f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0d271c]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8">
        
        {/* Header Tag, Main Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 text-[#c59b3f] font-serif text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase">
            <span>—</span>
            <span className="text-[10px]">❖</span>
            <span>SCIENCE BACKED BENEFITS</span>
            <span className="text-[10px]">❖</span>
            <span>—</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[45px] font-bold text-[#142319] leading-[1.18] tracking-tight">
            Top 9 Scientific Benefits of<br />
            <span className="text-[#c59b3f] font-serif">Curcuma Caesia</span> (Black Turmeric)
          </h2>

          {/* Small gold floral ornament */}
          <div className="text-[#c59b3f] text-xs pt-0.5">❖</div>

          {/* Subtitle */}
          <p className="text-[#59665f] text-xs sm:text-[14px] font-medium leading-relaxed max-w-xl mx-auto">
            Clinical and metabolomic studies confirm the biological superiority of authentic black turmeric over common yellow herbs.
          </p>

        </div>

        {/* 9 Scientific Benefit Cards (3x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {scientificBenefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group relative flex items-start gap-4 sm:gap-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ede1d3] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 min-h-[145px]"
            >
              {/* Left Dark Emerald Circle Container with Number Badge */}
              <div className="relative flex-shrink-0">
                {/* Circular Icon Container */}
                <div className="w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#0d271c] border border-[#c59b3f]/40 flex items-center justify-center shadow-inner group-hover:border-[#e58e1b] group-hover:scale-105 transition-all duration-300">
                  {benefit.icon}
                </div>

                {/* Number Badge (Top-Left of Circle) */}
                <div className="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#c59b3f] text-white font-serif text-[11px] font-bold flex items-center justify-center shadow-sm ring-2 ring-white">
                  {benefit.number}
                </div>
              </div>

              {/* Right Content: Title & Description */}
              <div className="flex flex-col">
                <h3 className="font-serif text-[15px] sm:text-base font-bold text-[#142319] leading-snug group-hover:text-[#c59b3f] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[11.5px] sm:text-xs text-[#59665f] leading-relaxed mt-1.5 font-normal">
                  {benefit.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
}
