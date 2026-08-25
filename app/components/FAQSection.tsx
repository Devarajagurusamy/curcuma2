"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Sparkles,
  ShieldCheck
} from "lucide-react";

interface FAQItem {
  id: number;
  category: "all" | "science" | "usage" | "safety" | "shipping";
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    id: 1,
    category: "science",
    question: "Why is Black Turmeric so much better than normal yellow turmeric?",
    answer:
      "Black turmeric is a rare, powerful healing herb. Unlike ordinary cooking turmeric, authentic black turmeric contains twice the active healing strength (ar-Curcumene) and deep purple natural antioxidants. Your body absorbs it much faster and easier, so you feel soothing relief in your knees, digestion, and daily energy without having to take black pepper or chemical boosters.",
  },
  {
    id: 2,
    category: "usage",
    question: "How and when should I take my daily capsules?",
    answer:
      "Simply take 2 capsules once every day with a warm glass of water, ideally in the morning after your breakfast. Drinking plenty of water throughout the day helps your body gently absorb all the natural nutrients. Taking it every day for 3 to 4 weeks gives your body the deep, lasting relief it needs.",
  },
  {
    id: 3,
    category: "safety",
    question: "Is this product Halal, certified safe, and clean?",
    answer:
      "Yes, 100%. Our black turmeric is grown cleanly in Malaysia and prepared in certified facilities approved by the Ministry of Health (MeSTI) and certified Halal by JAKIM. The capsules are 100% vegetarian plant capsules with zero chemicals, zero heavy metals, and zero artificial fillers.",
  },
  {
    id: 4,
    category: "safety",
    question: "Can I take this if I have high blood pressure, diabetes, or take daily medication?",
    answer:
      "Yes! University studies show black turmeric is gentle on the body and helps support healthy blood sugar balance and smooth blood flow. If you are taking prescription medicine, we simply recommend leaving 1 to 2 hours between your regular medicine and your black turmeric, or checking with your family doctor.",
  },
  {
    id: 5,
    category: "usage",
    question: "How fast will I start feeling better?",
    answer:
      "Many customers tell us their stomach bloating, trapped gas, and tiredness begin feeling better within the first 3 to 7 days. For deeper comfort—like easier knee bending, lighter morning joints, and restful sleep—you will notice a wonderful difference after 2 to 3 weeks of daily routine.",
  },
  {
    id: 6,
    category: "shipping",
    question: "What is your 30-Day Money Back Guarantee?",
    answer:
      "We want you to feel completely comfortable and cared for. If you try our black turmeric and do not feel a positive difference in your daily wellness within 30 days, just reach out to our friendly support team on WhatsApp for a hassle-free exchange or full refund.",
  },
  {
    id: 7,
    category: "shipping",
    question: "How long does delivery take, and can I pay upon delivery (COD)?",
    answer:
      "We pack your order with care and ship within 24 hours. West Malaysia orders arrive at your doorstep in 1 to 3 working days with Free Shipping. Sabah & Sarawak orders arrive in 3 to 5 days. You can easily choose Cash on Delivery (COD) to pay the courier directly when your parcel arrives safely.",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    activeCategory === "all"
      ? faqList
      : faqList.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#ede3d5] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59b3f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14261d]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-8">
        
        {/* Header Title Section */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 text-[#c59b3f] font-serif text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase">
            <span>—</span>
            <span className="text-[10px]">❖</span>
            <span>CLEAR, HONEST ANSWERS</span>
            <span className="text-[10px]">❖</span>
            <span>—</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#142319] leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>

          {/* Subtitle */}
          <p className="text-[#59665f] text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto pt-1">
            Simple, honest answers to help you and your family make the best choice for your daily health.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center sm:justify-center gap-2 pt-5 overflow-x-auto scrollbar-none pb-2 sm:pb-0 px-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "science", label: "Why Black Turmeric" },
              { id: "usage", label: "How to Take" },
              { id: "safety", label: "Safety & Halal" },
              { id: "shipping", label: "Delivery & Guarantee" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  activeCategory === tab.id
                    ? "bg-[#142319] text-[#e5b869] shadow-md scale-105"
                    : "bg-white text-[#525f57] border border-[#e5d9c7] hover:bg-[#f4ece1] hover:text-[#142319]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion FAQ Cards */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm ${
                  isOpen
                    ? "border-[#c59b3f] shadow-[0_8px_25px_rgba(197,155,63,0.12)] ring-1 ring-[#c59b3f]/20"
                    : "border-[#ede1d3] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#dbc7af]"
                }`}
              >
                {/* Question Header Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Small Icon Badge */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#0d271c] text-[#e5b869]"
                          : "bg-[#f5ede2] text-[#8c7a65] group-hover:text-[#c59b3f]"
                      }`}
                    >
                      <HelpCircle className="w-4 h-4 stroke-[2]" />
                    </div>

                    <span className="font-serif text-[15px] sm:text-base font-bold text-[#142319] group-hover:text-[#c59b3f] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Accordion Chevron Icon */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#c59b3f] text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-gray-100 text-xs sm:text-[13.5px] text-[#55635b] leading-relaxed animate-in slide-in-from-top-1">
                    <p className="pl-11 pr-2">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? WhatsApp Help Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#e5d9c7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0d271c] text-[#e5b869] flex items-center justify-center flex-shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#142319]">
                Need a friendly word or have questions?
              </h4>
              <p className="text-xs text-[#637067] mt-0.5">
                Our caring team is here to listen and help you on WhatsApp anytime.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex-shrink-0 cursor-pointer"
          >
            <span>CHAT WITH US ON WHATSAPP</span>
          </a>
        </div>

      </div>

    </section>
  );
}
