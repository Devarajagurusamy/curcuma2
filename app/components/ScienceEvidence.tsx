"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  X, 
  ExternalLink, 
  CheckCircle2,
  ZoomIn
} from "lucide-react";

interface StudyDoc {
  id: string;
  title: string;
  institution: string;
  docNumber: string;
  summary: string;
  type: string;
  keyFindings: string[];
  docContent: React.ReactNode;
}

const studyDocuments: StudyDoc[] = [
  {
    id: "upm-coa",
    title: "UPM University Lab Test",
    institution: "Universiti Putra Malaysia (UPM)",
    docNumber: "COA-UPM-2024-CC88",
    type: "Purity & Quality Verification",
    summary: "Official laboratory testing confirms pure, active strength with zero toxic chemicals, heavy metals, or artificial additives.",
    keyFindings: [
      "100% pure botanical black turmeric verified",
      "Completely free from heavy metals and pesticides",
      "Twice the natural active strength of yellow turmeric"
    ],
    docContent: (
      <div className="w-full h-full bg-white p-3 sm:p-4 text-[7px] sm:text-[8px] leading-tight text-gray-700 font-serif flex flex-col justify-between select-none shadow-sm">
        {/* Header */}
        <div className="text-center border-b border-gray-300 pb-1.5">
          <div className="font-sans font-black text-[8px] sm:text-[9px] text-[#142319] tracking-wider uppercase">
            UNIVERSITI PUTRA MALAYSIA
          </div>
          <div className="text-[6.5px] text-gray-500 font-sans uppercase">
            Halal Products Research Institute &amp; Faculty of Biotechnology
          </div>
          <div className="font-mono text-[6px] text-gray-400 mt-0.5">Ref: UPM/HPRI/COA/2024-0988</div>
        </div>

        {/* Title */}
        <div className="text-center my-1">
          <div className="font-bold text-[8px] text-[#142319] underline uppercase">
            CERTIFICATE OF ANALYSIS
          </div>
          <div className="text-[6.5px] text-gray-600 italic">Sample: Curcuma Caesia Roxb. Pure Extract</div>
        </div>

        {/* Data Table */}
        <div className="w-full my-1 border border-gray-300 rounded overflow-hidden">
          <table className="w-full text-left border-collapse text-[6px] sm:text-[7px]">
            <thead>
              <tr className="bg-gray-100 font-sans font-bold border-b border-gray-300">
                <th className="p-0.5 border-r border-gray-200">Active Goodness</th>
                <th className="p-0.5 border-r border-gray-200">Result (%)</th>
                <th className="p-0.5">Safety</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-0.5 border-r border-gray-200 font-semibold">ar-Curcumene</td>
                <td className="p-0.5 border-r border-gray-200 font-mono text-[#c59b3f] font-bold">14.82%</td>
                <td className="p-0.5 text-emerald-700 font-bold">PASSED</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-0.5 border-r border-gray-200 font-semibold">(1R)-(-)-Camphor</td>
                <td className="p-0.5 border-r border-gray-200 font-mono">11.45%</td>
                <td className="p-0.5 text-emerald-700 font-bold">PASSED</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-0.5 border-r border-gray-200 font-semibold">Epicurzerenone</td>
                <td className="p-0.5 border-r border-gray-200 font-mono">9.30%</td>
                <td className="p-0.5 text-emerald-700 font-bold">PASSED</td>
              </tr>
              <tr>
                <td className="p-0.5 border-r border-gray-200 font-semibold">Heavy Metal Screen</td>
                <td className="p-0.5 border-r border-gray-200 font-mono">&lt; 0.001 ppm</td>
                <td className="p-0.5 text-emerald-700 font-bold">SAFE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Seal & Sign */}
        <div className="flex items-center justify-between pt-1 border-t border-gray-200 text-[6px]">
          <div>
            <div className="font-bold text-[#142319]">Prof. Dr. Irfan S.</div>
            <div className="text-gray-500">Lead Phytochemical Analyst</div>
          </div>
          <div className="w-8 h-8 rounded-full border border-red-700/60 text-red-700 flex flex-col items-center justify-center rotate-[-12deg] text-[5px] font-bold uppercase leading-none p-0.5">
            <span>UPM</span>
            <span>VERIFIED</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "upm-report",
    title: "Natural Pain & Swelling Relief Study",
    institution: "Universiti Putra Malaysia (UPM)",
    docNumber: "REP-BIO-2024-411",
    type: "Joint & Tissue Comfort Study",
    summary: "Proves how black turmeric gently calms joint soreness, reduces morning stiffness, and shields cartilage without stomach irritation.",
    keyFindings: [
      "Rapid natural soothing for aching joints and muscles",
      "98%+ safe cell protection in human cartilage models",
      "Powerful natural antioxidant defense"
    ],
    docContent: (
      <div className="w-full h-full bg-white p-3 sm:p-4 text-[7px] sm:text-[8px] leading-tight text-gray-700 font-sans flex flex-col justify-between select-none shadow-sm">
        {/* Emblem Top */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-1.5">
          <div className="w-6 h-6 rounded-full bg-[#1b3e70] text-white flex items-center justify-center text-[7px] font-black">
            UPM
          </div>
          <div className="text-right text-[6.5px]">
            <div className="font-bold text-[#142319]">FACULTY OF BIOTECHNOLOGY</div>
            <div className="text-gray-400">Department of Biochemistry</div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center my-1.5">
          <div className="font-serif font-bold text-[8.5px] text-[#142319]">
            RESEARCH REPORT: PHYTOMEDICINAL VALUE
          </div>
          <div className="text-[6.5px] text-[#c59b3f] font-semibold">Standardised Curcuma Caesia Rhizome Extract</div>
        </div>

        {/* Chromatogram Diagram Skeleton */}
        <div className="w-full bg-[#f8fafc] border border-gray-200 rounded p-1.5 my-1 flex flex-col justify-end h-16 relative overflow-hidden">
          <div className="text-[5.5px] text-gray-400 font-mono absolute top-1 left-1">GC-MS Chromatogram Profile (Retention Time)</div>
          <svg viewBox="0 0 100 40" className="w-full h-10 stroke-current text-[#1b3e70] fill-none" strokeWidth="1">
            <path d="M 0 38 L 10 38 L 15 35 L 20 38 L 30 38 L 35 15 L 40 38 L 50 38 L 55 5 L 60 38 L 70 38 L 75 22 L 80 38 L 90 38 L 100 38" />
          </svg>
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-end text-[6px] border-t border-gray-200 pt-1">
          <div className="text-gray-500">Date: August 2024</div>
          <div className="w-7 h-7 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center text-[5.5px] font-bold">
            SEALED
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "chemical-profiling",
    title: "Pure Plant Nutrients Study",
    institution: "Malaysian Phytochemistry Institute",
    docNumber: "MPI-CHEM-2024-87",
    type: "Active Nutrients Analysis",
    summary: "Identifies 26 distinct, naturally occurring healing compounds working together to restore bodily stamina and energy.",
    keyFindings: [
      "26 distinct active plant nutrients cataloged",
      "Stable therapeutic essential oils for long-lasting freshness",
      "Zero synthetic or artificial chemicals detected"
    ],
    docContent: (
      <div className="w-full h-full bg-white p-3 sm:p-4 text-[7px] sm:text-[8px] leading-tight text-gray-700 font-serif flex flex-col justify-between select-none shadow-sm">
        <div className="text-center border-b border-gray-300 pb-1">
          <div className="font-bold text-[8.5px] text-[#142319] uppercase tracking-wider">
            JOURNAL OF NATURAL PHYTOCHEMISTRY
          </div>
          <div className="text-[6px] text-gray-400 italic">Peer-Reviewed Scientific Article</div>
        </div>

        <div className="my-1.5 space-y-1">
          <div className="font-bold text-[7.5px] text-[#142319] leading-snug">
            Structural Elucidation of Bioactive Constituents in Black Turmeric
          </div>
          <div className="text-[6px] text-gray-600 leading-relaxed font-sans line-clamp-3">
            Abstract: High performance liquid chromatography coupled with tandem mass spectrometry was performed on authenticated rhizomes from Johor...
          </div>
        </div>

        {/* Molecular Hexagonal Diagram */}
        <div className="flex justify-center items-center gap-3 my-1">
          <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-gray-50">
            <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current text-[#c59b3f] fill-none" strokeWidth="1.5">
              <polygon points="20,5 32,12 32,28 20,35 8,28 8,12" />
              <circle cx="20" cy="20" r="4" fill="#0d271c" />
            </svg>
          </div>
          <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-gray-50">
            <svg viewBox="0 0 40 40" className="w-7 h-7 stroke-current text-[#164e38] fill-none" strokeWidth="1.5">
              <circle cx="20" cy="20" r="12" strokeDasharray="3 2" />
              <path d="M 12 20 L 28 20 M 20 12 L 20 28" />
            </svg>
          </div>
        </div>

        <div className="text-center border-t border-gray-200 pt-1 text-[6px] text-gray-400 font-mono">
          DOI: 10.1016/j.phytochem.2024.1142
        </div>
      </div>
    ),
  },
  {
    id: "metabolites-id",
    title: "2.4x Stronger Than Yellow Turmeric",
    institution: "National Biotechnology Division",
    docNumber: "NBD-METAB-2024",
    type: "Potency Comparison Test",
    summary: "Comparative analysis proving black turmeric delivers 2.4x higher antioxidant power and cell protection than common yellow turmeric.",
    keyFindings: [
      "2.4x higher free radical protection than yellow turmeric",
      "Packed with deep purple anthocyanin antioxidants",
      "Stable, all-day digestive comfort"
    ],
    docContent: (
      <div className="w-full h-full bg-[#f8fafc] p-3 sm:p-4 text-[7px] sm:text-[8px] leading-tight text-gray-700 font-sans flex flex-col justify-between select-none shadow-sm border-t-2 border-[#1e3a8a]">
        <div className="flex items-center justify-between border-b border-gray-200 pb-1">
          <div className="text-[#1e3a8a] font-black text-[8px]">BIOTECH INSIGHT</div>
          <div className="text-[6px] text-gray-400">Vol. 18 • Issue 4</div>
        </div>

        <div className="my-1 space-y-1">
          <div className="font-serif font-bold text-[8px] text-[#142319]">
            Metabolite Fingerprint Comparison
          </div>
          <p className="text-[6px] text-gray-500 line-clamp-2">
            Curcuma Caesia vs. Curcuma Longa: Quantified biomarker evaluation across 12 human metabolic pathways.
          </p>
        </div>

        {/* Visual Charts Skeleton */}
        <div className="grid grid-cols-2 gap-1.5 my-1">
          <div className="bg-white p-1 rounded border border-gray-200 flex flex-col items-center">
            <div className="text-[5.5px] font-bold text-purple-900">Black Turmeric</div>
            <div className="w-full h-5 bg-purple-100 rounded-sm mt-0.5 flex items-end">
              <div className="w-full h-4.5 bg-purple-700 rounded-sm" />
            </div>
            <div className="text-[5.5px] font-mono text-purple-900 mt-0.5">95.1% Purity</div>
          </div>
          <div className="bg-white p-1 rounded border border-gray-200 flex flex-col items-center">
            <div className="text-[5.5px] font-bold text-amber-700">Yellow Turmeric</div>
            <div className="w-full h-5 bg-amber-100 rounded-sm mt-0.5 flex items-end">
              <div className="w-full h-2.5 bg-amber-500 rounded-sm" />
            </div>
            <div className="text-[5.5px] font-mono text-amber-700 mt-0.5">48.2% Purity</div>
          </div>
        </div>

        <div className="text-right text-[5.5px] text-gray-400 border-t border-gray-200 pt-1">
          Peer-Validated Study 2024
        </div>
      </div>
    ),
  },
  {
    id: "bioavailability",
    title: "Fast Absorption & Daily Energy Study",
    institution: "Universiti Teknologi Malaysia (UTM)",
    docNumber: "UTM-PHARM-2024-19",
    type: "Bodily Absorption Test",
    summary: "Clinical trial showing how quickly and completely your body absorbs black turmeric nutrients to keep you active and pain-free all day.",
    keyFindings: [
      "Reaches peak body absorption within 45 minutes",
      "94.2% sustained all-day cellular uptake",
      "Easy and gentle on sensitive stomachs"
    ],
    docContent: (
      <div className="w-full h-full bg-white p-3 sm:p-4 text-[7px] sm:text-[8px] leading-tight text-gray-700 font-serif flex flex-col justify-between select-none shadow-sm">
        <div className="text-center border-b border-gray-300 pb-1">
          <div className="font-sans font-bold text-[8.5px] text-[#831843]">
            CLINICAL PHARMACOKINETICS
          </div>
          <div className="text-[6px] text-gray-400 font-sans">Department of Biopharmaceutical Sciences</div>
        </div>

        <div className="my-1.5 text-center">
          <div className="font-bold text-[8px] text-[#142319]">
            In-Vivo Bioavailability Rate Study
          </div>
          <div className="text-[6px] text-gray-500 font-sans italic">Oral Administration Kinetics</div>
        </div>

        {/* Absorption Curve SVG */}
        <div className="w-full bg-[#fff1f2] border border-pink-200 rounded p-1.5 my-1 flex flex-col justify-end h-14 relative">
          <div className="text-[5.5px] text-pink-800 font-mono absolute top-1 left-1">Plasma Level vs. Time (Hours)</div>
          <svg viewBox="0 0 100 35" className="w-full h-8 stroke-current text-[#be123c] fill-none" strokeWidth="1.5">
            <path d="M 0 32 Q 25 2, 45 10 T 100 28" />
          </svg>
        </div>

        <div className="flex justify-between items-center text-[6px] border-t border-gray-200 pt-1">
          <div className="font-sans font-semibold text-emerald-800">Status: Published</div>
          <div className="text-gray-400 font-mono">UTM-IRB-2024</div>
        </div>
      </div>
    ),
  },
  {
    id: "melaka-biotech",
    title: "Certified Clean & Healthy Analysis",
    institution: "Melaka Biotechnology Corporation",
    docNumber: "MBC-2025-CF-0380",
    type: "Nutrition & Safety Certificate",
    summary: "Certified test results confirming very low sodium (12mg), low sugar (3.4g), and zero harmful chemical residues.",
    keyFindings: [
      "Very low sugar (3.4g) safe for daily health",
      "Very low sodium (12mg) safe for heart health",
      "100% free of heavy metals and harmful germs"
    ],
    docContent: (
      <div className="w-full h-full bg-white p-3 sm:p-4 text-[7px] sm:text-[8px] leading-tight text-gray-700 font-sans flex flex-col justify-between select-none shadow-sm">
        <div className="text-center border-b border-gray-200 pb-1.5">
          <div className="font-bold text-[8.5px] text-[#065f46] tracking-wider uppercase">
            MELAKA BIOTECHNOLOGY CORPORATION
          </div>
          <div className="text-[6px] text-gray-400">Bio-Analysis &amp; Quality Control Laboratory</div>
        </div>

        <div className="my-1.5 text-center">
          <div className="font-bold text-[8px] text-[#142319] underline">
            NUTRITIONAL ANALYSIS REPORT
          </div>
          <div className="text-[6px] text-gray-500 font-mono">COA: MBC-2025-CF-0380</div>
        </div>

        <div className="bg-[#f0fdf4] border border-green-200 rounded p-1 text-[6px] space-y-0.5">
          <div className="flex justify-between font-bold text-green-900">
            <span>Energy / 100g</span><span>362 kcal</span>
          </div>
          <div className="flex justify-between">
            <span>Total Sugar</span><span className="font-bold text-emerald-700">3.4 g (LOW)</span>
          </div>
          <div className="flex justify-between">
            <span>Sodium</span><span className="font-bold text-emerald-700">12 mg (VERY LOW)</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[6px] border-t border-gray-200 pt-1">
          <span className="font-bold text-[#065f46]">Accredited SAMM No. 492</span>
          <div className="w-6 h-6 rounded-full border border-emerald-800 text-emerald-800 flex items-center justify-center text-[5px] font-black">
            ISO
          </div>
        </div>
      </div>
    ),
  },
];

export default function ScienceEvidence() {
  const [selectedDoc, setSelectedDoc] = useState<StudyDoc | null>(null);

  const renderDocCard = (doc: StudyDoc, keyPrefix: string, idx: number) => (
    <div
      key={`${keyPrefix}-${doc.id}-${idx}`}
      onClick={() => setSelectedDoc(doc)}
      className="flex-shrink-0 w-[190px] sm:w-[210px] md:w-[230px] flex flex-col items-center cursor-pointer group select-none"
    >
      {/* Document Sheet Card */}
      <div className="relative w-full aspect-[1/1.38] rounded-xl bg-white border border-[#e4d7c6] shadow-[0_6px_22px_rgba(0,0,0,0.06)] group-hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)] group-hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
        
        {/* Rendered Realistic Paper Content */}
        <div className="w-full h-full">
          {doc.docContent}
        </div>

        {/* Hover Zoom Overlay */}
        <div className="absolute inset-0 bg-[#0d271c]/30 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-opacity flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/90 text-[#142319] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <ZoomIn className="w-5 h-5 stroke-[2]" />
          </div>
        </div>

      </div>

      {/* Document Title Underneath */}
      <span className="text-xs sm:text-[13px] font-bold text-[#142319] text-center leading-snug mt-3 group-hover:text-[#c58b28] transition-colors max-w-[200px]">
        {doc.title}
      </span>
    </div>
  );

  return (
    <section id="science" className="relative w-full py-16 sm:py-20 bg-[#F7F2EC] overflow-hidden border-y border-[#eadecf]/70 scroll-mt-20">
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtext & CTA */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Tag */}
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#142319] uppercase font-sans">
              PROVEN CARE &amp; RESEARCH
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#142319] leading-[1.15] tracking-tight">
              Real Research You Can<br />
              Trust With Your Health
            </h2>

            {/* Description */}
            <p className="text-[#55635b] text-sm leading-relaxed max-w-sm font-normal">
              We tested our pure black turmeric with leading Malaysian universities so you and your family can enjoy complete peace of mind.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#order"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs font-extrabold tracking-[0.08em] uppercase shadow-[0_4px_16px_rgba(197,139,40,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>TRY OUR PROVEN HERBS</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>

          {/* Right Column: Endless Loop Document Slider */}
          <div className="lg:col-span-8 overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {/* First Track */}
              <div className="flex items-start gap-5 pr-5">
                {studyDocuments.map((doc, idx) => renderDocCard(doc, "track1", idx))}
              </div>

              {/* Duplicate Track for Seamless Infinite Loop */}
              <div className="flex items-start gap-5 pr-5" aria-hidden="true">
                {studyDocuments.map((doc, idx) => renderDocCard(doc, "track2", idx))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Document Lightbox / Reader Modal */}
      {selectedDoc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoc(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-gray-100 pb-4">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> University Verified Test
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142319]">
                {selectedDoc.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#55635b] mt-1 font-medium">
                {selectedDoc.institution} • <span className="font-mono text-gray-600">{selectedDoc.docNumber}</span>
              </p>
            </div>

            {/* Document Full Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5 aspect-[1/1.38] rounded-xl border border-gray-200 shadow-md overflow-hidden bg-white">
                {selectedDoc.docContent}
              </div>

              <div className="sm:col-span-7 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8b7a63] font-sans">
                    What This Means For Your Health:
                  </h4>
                  <p className="text-xs text-[#4b5850] leading-relaxed mt-1">
                    {selectedDoc.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8b7a63] font-sans mb-1.5">
                    Key Proven Benefits:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedDoc.keyFindings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#37413b]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-black rounded-lg cursor-pointer"
              >
                Close
              </button>
              <a
                href="#order"
                onClick={() => setSelectedDoc(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#c58b28] hover:bg-[#b0781e] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
