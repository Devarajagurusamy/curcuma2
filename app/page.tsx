import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import ScientificBenefits from "./components/ScientificBenefits";
import ScienceEvidence from "./components/ScienceEvidence";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import BotanicalHeritage from "./components/BotanicalHeritage";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

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

        {/* Top 9 Scientific Benefits Section */}
        <ScientificBenefits />

        {/* Science That Speaks - Evidence Section with Endless Document Carousel */}
        <ScienceEvidence />

        {/* Real People Real Results - Testimonials Endless Slider */}
        <Testimonials />

        {/* Choose Your Healing Routine - Pricing Packages & Dosage Guide */}
        <PricingSection />

        {/* 1930 Botanical Heritage Component */}
        <BotanicalHeritage />

        {/* Frequently Asked Questions Accordion */}
        <FAQSection />
      </main>

      {/* Malaysian Royal Gold Footer */}
      <Footer />
    </div>
  );
}









