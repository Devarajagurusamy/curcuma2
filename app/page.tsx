"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import BotanicalHeritage from "./components/BotanicalHeritage";
import ScientificBenefits from "./components/ScientificBenefits";
import ScienceEvidence from "./components/ScienceEvidence";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import OrderModal from "./components/OrderModal";

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState("3-bottles");

  const handleOpenOrder = (packageId = "3-bottles") => {
    setSelectedPackageId(packageId);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#c59b3f]/25 selection:text-[#142319]">
      
      {/* Top Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrder("3-bottles")} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <div className="py-2 sm:py-4">
          <HeroSection />
        </div>

        {/* 2. Trust Badges */}
        <TrustBadges />

        {/* 3. Botanical Heritage (1930) */}
        <BotanicalHeritage />

        {/* 4. Top 9 Scientific Benefits */}
        <ScientificBenefits />

        {/* 5. Science That Speaks (Evidence Carousel) */}
        <ScienceEvidence />

        {/* 6. Real People Real Results (Testimonials) */}
        <Testimonials />

        {/* 7. Pricing Section (Choose Your Healing Routine) */}
        <PricingSection onSelectPackage={(pkgId) => handleOpenOrder(pkgId)} />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Curcuma Wellness Footer */}
      <Footer />

      {/* Express Order Popup Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialPackageId={selectedPackageId}
      />

    </div>
  );
}
