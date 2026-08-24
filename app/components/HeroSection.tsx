"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Easily configure or replace carousel banner images here:
const carouselSlides = [
  {
    id: 1,
    imageSrc: "/images/carousel-placeholder.svg", // Replace with your original banner image (e.g. /images/banner-1.png)
    altText: "Banner 1 - CurcumaCaesia Malaysian Royal Gold",
  },
  {
    id: 2,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 2",
  },
  {
    id: 3,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 3",
  },
  {
    id: 4,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 4",
  },
  {
    id: 5,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 5",
  },
  {
    id: 6,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 6",
  },
  {
    id: 7,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 7",
  },
  {
    id: 8,
    imageSrc: "/images/carousel-placeholder.svg",
    altText: "Banner 8",
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
    <section className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 py-2">
      {/* Compact Rounded Carousel Container matching CARiNG reference */}
      <div className="relative w-full aspect-[2.4/1] sm:aspect-[2.7/1] lg:aspect-[2.85/1] max-h-[460px] rounded-[18px] sm:rounded-[24px] bg-black overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-100 group select-none">
        
        {/* Carousel Image Slides */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Full Carousel Image Banner */}
              <img
                src={slide.imageSrc}
                alt={slide.altText}
                className="w-full h-full object-cover bg-black"
              />
            </div>
          ))}
        </div>

        {/* Minimalist Left Chevron Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-all z-30 group/btn cursor-pointer drop-shadow-md hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.5] group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>

        {/* Minimalist Right Chevron Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-all z-30 group/btn cursor-pointer drop-shadow-md hover:scale-110"
        >
          <ChevronRight className="w-8 h-8 sm:w-11 sm:h-11 stroke-[1.5] group-hover/btn:translate-x-0.5 transition-transform" />
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
                  ? "w-2.5 h-2.5 bg-white shadow-md scale-110"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
