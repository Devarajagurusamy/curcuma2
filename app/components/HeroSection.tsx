"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Easily configure or replace carousel banner images here:
const carouselSlides = [
  {
    id: 1,
    imageSrc: "/images/carousel-placeholder.svg", // Replace with your original banner image (e.g. /images/banner-1.png)
    altText: "CurcumaCaesia Malaysia's University-Verified Black Turmeric",
  },
  {
    id: 2,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 2 - Pure Natural Single Ingredient",
  },
  {
    id: 3,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 3 - 30-Day Trial Offer",
  },
  {
    id: 4,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 4 - Johor Heritage Since 1930",
  },
  {
    id: 5,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 5 - University Research & Purity",
  },
  {
    id: 6,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 6 - Joint Comfort & Immune Defense",
  },
  {
    id: 7,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 7 - Natural Energy & Vitality",
  },
  {
    id: 8,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Slide 8 - The Gold of Wellness",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-3 sm:px-6 my-2">
      {/* Outer Rounded Carousel Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[1.95/1] max-h-[640px] rounded-[24px] sm:rounded-[36px] bg-black overflow-hidden shadow-2xl border border-black/20 group select-none">
        
        {/* Carousel Image Slides */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Entire Carousel Image Banner */}
              <img
                src={slide.imageSrc}
                alt={slide.altText}
                className="w-full h-full object-cover bg-black"
              />

              {/* Subdued placeholder indicator (disappears once replaced) */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-white/40 text-[10px] sm:text-xs font-mono tracking-wider">
                [Carousel Banner Placeholder #{slide.id}]
              </div>
            </div>
          ))}
        </div>

        {/* Floating Left Arrow Navigation */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#11241a] shadow-xl hover:bg-[#faf7f2] hover:scale-105 active:scale-95 flex items-center justify-center transition-all z-30 group/btn cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5] group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>

        {/* Floating Right Arrow Navigation */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#11241a] shadow-xl hover:bg-[#faf7f2] hover:scale-105 active:scale-95 flex items-center justify-center transition-all z-30 group/btn cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5] group-hover/btn:translate-x-0.5 transition-transform" />
        </button>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentIndex
                  ? "w-4 h-2 bg-[#e58e1b] ring-2 ring-[#e58e1b]/40"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
