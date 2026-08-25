"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselSlides = [
  {
    id: 1,
    imageSrc: "/images/hero-banner.png",
    altText: "Curcuma Wellness - Premium Black Turmeric (Curcuma Caesia Roxb.)",
  },
  {
    id: 2,
    imageSrc: "/images/hero-banner.png",
    altText: "100% Pure Black Turmeric - Natural Botanical Wellness",
  },
  {
    id: 3,
    imageSrc: "/images/hero-banner.png",
    altText: "The Journey of Natural Vitality - Botanical Heritage",
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

  // Optional subtle auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-2 scroll-mt-20">
      {/* Landscape Carousel Container */}
      <div className="relative w-full aspect-[2.4/1] sm:aspect-[2.7/1] lg:aspect-[2.85/1] max-h-[480px] rounded-[18px] sm:rounded-[24px] bg-[#14261d] overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.12)] border border-gray-100 group select-none">
        
        {/* Carousel Image Slides */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Full Carousel Image Banner */}
              <img
                src={slide.imageSrc}
                alt={slide.altText}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Minimalist Left Chevron Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-all z-30 group/btn cursor-pointer drop-shadow-lg hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.8] group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>

        {/* Minimalist Right Chevron Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-all z-30 group/btn cursor-pointer drop-shadow-lg hover:scale-110"
        >
          <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.8] group-hover/btn:translate-x-0.5 transition-transform" />
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
                  ? "w-6 h-2 bg-[#c59b3f] shadow-md"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
