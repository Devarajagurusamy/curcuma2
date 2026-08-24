import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import BotanicalHeritage from "./components/BotanicalHeritage";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#c59b3f]/25 selection:text-[#142319]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Main Hero Container */}
        <div className="py-2 sm:py-4">
          <HeroSection />
        </div>

        {/* Bottom Trust & Verification Badges */}
        <TrustBadges />

        {/* 1930 Botanical Heritage Component */}
        <BotanicalHeritage />
      </main>

      {/* Subdued Footer Note */}
      <footer className="w-full text-center py-5 text-[11px] text-gray-500 font-medium border-t border-gray-100 bg-white">
        © {new Date().getFullYear()} CurcumaCaesia® &amp; CARiNG Pharmacy. All rights reserved.
      </footer>
    </div>
  );
}



