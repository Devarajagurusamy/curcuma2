"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, X, ExternalLink, Award } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  subtitle?: string;
  codePrefix?: string;
  code: string;
  authority: string;
  description: string;
  badge: React.ReactNode;
}

const certificates: Certificate[] = [
  {
    id: "gmp",
    name: "GMP",
    code: "SCSB/GMP/1043",
    authority: "Good Manufacturing Practice Standards",
    description: "Certified pharmaceutical-grade manufacturing standard ensuring continuous quality and safety controls.",
    badge: (
      <div className="w-12 h-12 rounded-full border-2 border-[#b88c38] bg-[#fcf9f2] p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#d9a74a] transition-all">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#b88c38" strokeWidth="3" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="40" fill="#0d271c" stroke="#b88c38" strokeWidth="2" />
          <text x="50" y="44" fill="#e5b869" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="1">GMP</text>
          <text x="50" y="58" fill="#ffffff" fontSize="7" fontWeight="700" textAnchor="middle" letterSpacing="0.5">CERTIFIED</text>
          <path d="M35 70 Q50 78 65 70" fill="none" stroke="#e5b869" strokeWidth="2" />
        </svg>
      </div>
    ),
  },
  {
    id: "haccp",
    name: "HACCP",
    code: "SCSB/HACCP/1086",
    authority: "Hazard Analysis Critical Control Point",
    description: "Systematic preventive approach to food safety biological, chemical, and physical hazards in production processes.",
    badge: (
      <div className="w-12 h-12 rounded-full border-2 border-[#c59b3f] bg-[#fcf9f2] p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#e58e1b] transition-all">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#c59b3f" strokeWidth="3" />
          <circle cx="50" cy="50" r="40" fill="#14261d" />
          <text x="50" y="43" fill="#e5b869" fontSize="11" fontWeight="900" textAnchor="middle">HACCP</text>
          <text x="50" y="57" fill="#ffffff" fontSize="6.5" fontWeight="700" textAnchor="middle">CERTIFIED</text>
          <polygon points="50,20 52,26 58,26 53,30 55,36 50,32 45,36 47,30 42,26 48,26" fill="#e5b869" />
        </svg>
      </div>
    ),
  },
  {
    id: "fsms",
    name: "Food Safety",
    subtitle: "Management System",
    code: "SCSB/FSMS/1027",
    authority: "ISO 22000 Food Safety System",
    description: "International standard for food safety management across harvesting, extraction, and encapsulation.",
    badge: (
      <div className="w-12 h-12 rounded-full border-2 border-[#164e38] bg-[#fcf9f2] p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#007b78] transition-all">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#164e38" strokeWidth="3" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="40" fill="#0d271c" />
          <text x="50" y="38" fill="#86efac" fontSize="9" fontWeight="900" textAnchor="middle">FOOD SAFETY</text>
          <text x="50" y="52" fill="#ffffff" fontSize="7" fontWeight="700" textAnchor="middle">FSMS</text>
          <text x="50" y="66" fill="#e5b869" fontSize="6" fontWeight="600" textAnchor="middle">ISO 22000</text>
        </svg>
      </div>
    ),
  },
  {
    id: "mesti",
    name: "MeSTI",
    codePrefix: "Reg. No.",
    code: "78/D/000512-052025",
    authority: "Ministry of Health Malaysia (KKM)",
    description: "Ministry of Health Malaysia food safety assurance scheme compliance for commercial health supplements.",
    badge: (
      <div className="w-12 h-12 rounded-full border-2 border-[#1d4ed8] bg-[#f0f7ff] p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#2563eb] transition-all">
        <div className="w-9 h-6 rounded-full bg-[#1e40af] text-white flex items-center justify-center shadow-inner">
          <span className="font-serif italic font-extrabold text-[10px] tracking-tight text-white">
            MeSTI
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "mygap",
    name: "myGAP",
    codePrefix: "Farm ID",
    code: "MYGAP/JH/2024/0012",
    authority: "Department of Agriculture Malaysia",
    description: "Malaysian Good Agricultural Practices certification for eco-friendly, pesticide-free plantation heritage.",
    badge: (
      <div className="w-12 h-12 rounded-full border-2 border-[#15803d] bg-[#f0fdf4] p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#16a34a] transition-all">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[#15803d] text-[10px] font-extrabold tracking-tighter leading-none">
            my<span className="text-[#b45309]">GAP</span>
          </span>
          <span className="text-[#15803d] text-[5px] font-bold tracking-widest mt-0.5 uppercase">
            MALAYSIA
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "halal",
    name: "Halal",
    codePrefix: "Cert. No.",
    code: "JAKIM.700-2/3/1 014-01/2025",
    authority: "JAKIM Malaysia (Halal Hub Division)",
    description: "Official Halal certification by JAKIM confirming 100% plant-based formulation without alcohol or animal derivatives.",
    badge: (
      <div className="w-12 h-12 rounded-full border-2 border-[#1e293b] bg-white p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-[#0f172a] transition-all">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="50" y="44" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">حلال</text>
          <text x="50" y="58" fill="#0f172a" fontSize="8" fontWeight="900" textAnchor="middle">HALAL</text>
          <text x="50" y="70" fill="#64748b" fontSize="5" fontWeight="bold" textAnchor="middle">MALAYSIA</text>
        </svg>
      </div>
    ),
  },
];

export default function TrustBadges() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-5 my-2">
      
      {/* Main Certification Bar Container */}
      <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-4">
          
          {/* Left Callout: CERTIFIED. CHECKABLE. REAL. */}
          <div className="flex flex-col justify-center flex-shrink-0 lg:max-w-[210px] pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-gray-200/80 pb-4 lg:pb-0">
            <h3 className="font-serif text-sm sm:text-base font-extrabold text-[#11231a] tracking-wider uppercase leading-tight">
              CERTIFIED. CHECKABLE.<br />
              REAL.
            </h3>
            <p className="text-[11px] text-[#616e66] leading-relaxed mt-1.5 font-medium">
              Tap any certificate to view the original document.
            </p>
          </div>

          {/* 6 Certificate Badges Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-2 items-center justify-items-center">
            {certificates.map((cert, index) => (
              <button
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`w-full flex flex-col items-center text-center p-2 rounded-xl hover:bg-[#faf7f2] transition-colors cursor-pointer group relative ${
                  index !== certificates.length - 1 ? "lg:border-r lg:border-gray-100" : ""
                }`}
              >
                {/* Badge Seal */}
                <div className="mb-2.5">
                  {cert.badge}
                </div>

                {/* Certificate Name */}
                <span className="text-xs font-bold text-[#142319] leading-tight group-hover:text-[#c59b3f] transition-colors">
                  {cert.name}
                </span>

                {/* Optional Subtitle (e.g. Management System) */}
                {cert.subtitle && (
                  <span className="text-[9.5px] text-[#55635b] font-medium leading-none mt-0.5">
                    {cert.subtitle}
                  </span>
                )}

                {/* Prefix (Reg. No. / Farm ID / Cert. No.) */}
                {cert.codePrefix && (
                  <span className="text-[9px] text-[#717e76] font-medium leading-none mt-1">
                    {cert.codePrefix}
                  </span>
                )}

                {/* Registration / Cert Number */}
                <span className="text-[9.5px] font-mono text-[#525f57] font-semibold tracking-tight mt-0.5 max-w-[120px] truncate">
                  {cert.code}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Interactive Certificate Verification Modal */}
      {selectedCert && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
              <div className="scale-125">
                {selectedCert.badge}
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-3 h-3" /> Officially Verified &amp; Active
                </span>
                <h4 className="font-serif text-lg font-bold text-[#142319]">
                  {selectedCert.name} {selectedCert.subtitle || "Certification"}
                </h4>
                <p className="text-xs text-[#616e66]">
                  {selectedCert.authority}
                </p>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-2xl border border-[#ede2d2]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b7a63]">
                  Registration / Audit Code:
                </span>
                <div className="font-mono text-sm font-extrabold text-[#142319] select-all">
                  {selectedCert.code}
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b7a63]">
                  Scope &amp; Compliance:
                </span>
                <p className="text-xs text-[#525f57] leading-relaxed mt-0.5">
                  {selectedCert.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-black rounded-lg"
              >
                Dismiss
              </button>
              <a
                href="#verify"
                onClick={() => setSelectedCert(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#c59b3f] hover:bg-[#b08730] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all"
              >
                <span>View Full Audit Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
