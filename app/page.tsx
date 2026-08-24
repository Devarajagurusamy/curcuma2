import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#007b78]/20 selection:text-[#007b78]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-4 sm:py-6">
        {/* Main Hero Container */}
        <HeroSection />

        {/* Bottom Trust & Verification Badges */}
        <TrustBadges />
      </main>

      {/* Subdued Footer Note */}
      <footer className="w-full text-center py-4 text-[11px] text-gray-500 font-medium border-t border-gray-100">
        © {new Date().getFullYear()} CARiNG Pharmacy &amp; CurcumaCaesia®. All rights reserved.
      </footer>
    </div>
  );
}


