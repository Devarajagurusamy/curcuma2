"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Check, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  ShoppingBag, 
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
}

interface PackageOption {
  id: string;
  name: string;
  capsules: string;
  price: number;
  originalPrice: number;
  savings: number;
  image: string;
  popular?: boolean;
}

const packages: PackageOption[] = [
  {
    id: "3-bottles",
    name: "3 BOTTLES",
    capsules: "180 Capsules (3-Month Supply)",
    price: 399.9,
    originalPrice: 539.7,
    savings: 139.8,
    image: "/images/pricing-3-bottles.jpg",
    popular: true,
  },
  {
    id: "2-bottles",
    name: "2 BOTTLES",
    capsules: "120 Capsules (2-Month Supply)",
    price: 299.9,
    originalPrice: 359.8,
    savings: 59.9,
    image: "/images/pricing-2-bottles.jpg",
  },
  {
    id: "1-bottle",
    name: "1 BOTTLE",
    capsules: "60 Capsules (1-Month Supply)",
    price: 159.9,
    originalPrice: 179.9,
    savings: 20.0,
    image: "/images/pricing-1-bottle.jpg",
  },
];

const malaysianStates = [
  "Johor",
  "Selangor",
  "Kuala Lumpur",
  "Penang",
  "Perak",
  "Kedah",
  "Pahang",
  "Negeri Sembilan",
  "Melaka",
  "Kelantan",
  "Terengganu",
  "Perlis",
  "Sabah",
  "Sarawak",
  "Putrajaya",
  "Labuan",
];

export default function OrderModal({
  isOpen,
  onClose,
  initialPackageId = "3-bottles",
}: OrderModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(initialPackageId);
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "fpx" | "tng">("cod");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    postcode: "",
    city: "",
    state: "Johor",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPkgId(initialPackageId);
    }
  }, [initialPackageId]);

  if (!isOpen) return null;

  const currentPkg = packages.find((p) => p.id === selectedPkgId) || packages[0];
  const totalPrice = currentPkg.price * quantity;
  const totalSavings = currentPkg.savings * quantity;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `MRG-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="bg-[#0e2419] text-white px-6 py-4 flex items-center justify-between border-b border-[#1b3d2b] flex-shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                Secure Express Order
              </h3>
              <div className="flex items-center gap-1.5 text-[11px] text-[#e5b869] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>In Stock • Ready for Delivery</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body Container */}
        <div className="overflow-y-auto p-5 sm:p-7 flex-1 space-y-6">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Step 1: Select Package */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#142319] flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#c58b28] text-white text-[11px] flex items-center justify-center font-bold">1</span>
                    Select Your Routine
                  </span>
                  <span className="text-[11px] text-[#c58b28] font-bold">
                    Free Nationwide Delivery (WM)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {packages.map((pkg) => {
                    const isSelected = selectedPkgId === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPkgId(pkg.id)}
                        className={`relative rounded-2xl p-3.5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "border-[#c58b28] bg-[#FAF6EE] shadow-md ring-1 ring-[#c58b28]/30"
                            : "border-gray-200 bg-white hover:border-[#c58b28]/50"
                        }`}
                      >
                        {pkg.popular && (
                          <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#c58b28] text-white text-[9px] font-extrabold uppercase tracking-wider shadow-sm">
                            MOST POPULAR
                          </span>
                        )}

                        <div className="flex items-center gap-2.5">
                          <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 p-0.5 flex-shrink-0 flex items-center justify-center mix-blend-multiply">
                            <img
                              src={pkg.image}
                              alt={pkg.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-serif text-xs font-extrabold text-[#142319]">
                              {pkg.name}
                            </div>
                            <div className="text-[10px] text-[#616e66] font-medium leading-tight">
                              {pkg.capsules.split(" ")[0]} Caps
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#ede1d3] flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-[#142319]">RM </span>
                            <span className="font-serif text-base font-black text-[#142319]">
                              {pkg.price.toFixed(2)}
                            </span>
                          </div>
                          <span className="text-[9px] text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded">
                            Save RM{pkg.savings.toFixed(0)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Customer Delivery Details */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142319] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#c58b28] text-white text-[11px] flex items-center justify-center font-bold">2</span>
                  Delivery Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#35433a] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Ahmad bin Abdullah"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-[#142319] focus:outline-none focus:border-[#c58b28] focus:ring-1 focus:ring-[#c58b28]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#35433a] mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 012-345 6789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-[#142319] focus:outline-none focus:border-[#c58b28] focus:ring-1 focus:ring-[#c58b28]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-[#35433a] mb-1">
                      Street Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="No. Unit, Street, Taman / Condominium"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-[#142319] focus:outline-none focus:border-[#c58b28] focus:ring-1 focus:ring-[#c58b28]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#35433a] mb-1">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      required
                      placeholder="e.g. 81900"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-[#142319] focus:outline-none focus:border-[#c58b28] focus:ring-1 focus:ring-[#c58b28]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#35433a] mb-1">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-[#142319] focus:outline-none focus:border-[#c58b28] focus:ring-1 focus:ring-[#c58b28] bg-white"
                    >
                      {malaysianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Method */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#142319] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#c58b28] text-white text-[11px] flex items-center justify-center font-bold">3</span>
                  Payment Method
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* COD */}
                  <label
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-[#c58b28] bg-[#FAF6EE] text-[#142319] font-bold shadow-sm"
                        : "border-gray-200 text-[#55635b] hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-[#c58b28]"
                    />
                    <div className="flex items-center gap-1.5 text-xs">
                      <Truck className="w-3.5 h-3.5 text-[#c58b28]" />
                      <span>Cash on Delivery (COD)</span>
                    </div>
                  </label>

                  {/* FPX */}
                  <label
                    onClick={() => setPaymentMethod("fpx")}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "fpx"
                        ? "border-[#c58b28] bg-[#FAF6EE] text-[#142319] font-bold shadow-sm"
                        : "border-gray-200 text-[#55635b] hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "fpx"}
                      onChange={() => setPaymentMethod("fpx")}
                      className="accent-[#c58b28]"
                    />
                    <div className="flex items-center gap-1.5 text-xs">
                      <CreditCard className="w-3.5 h-3.5 text-[#c58b28]" />
                      <span>Online Banking / FPX</span>
                    </div>
                  </label>

                  {/* TnG eWallet */}
                  <label
                    onClick={() => setPaymentMethod("tng")}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                      paymentMethod === "tng"
                        ? "border-[#c58b28] bg-[#FAF6EE] text-[#142319] font-bold shadow-sm"
                        : "border-gray-200 text-[#55635b] hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "tng"}
                      onChange={() => setPaymentMethod("tng")}
                      className="accent-[#c58b28]"
                    />
                    <div className="flex items-center gap-1.5 text-xs">
                      <span>📱</span>
                      <span>TnG eWallet / QR</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#ede1d3] space-y-2 text-xs">
                <div className="flex justify-between text-[#55635b]">
                  <span>Selected: {currentPkg.name} ({currentPkg.capsules.split(" ")[0]} Caps)</span>
                  <span className="font-semibold text-[#142319]">RM {currentPkg.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#55635b]">
                  <span>Shipping &amp; Handling</span>
                  <span className="font-bold text-emerald-700 uppercase">FREE (WM)</span>
                </div>
                <div className="flex justify-between text-emerald-800 font-medium">
                  <span>Total Discount Saved</span>
                  <span>- RM {totalSavings.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-[#e2d5c2] flex justify-between items-baseline text-sm font-extrabold text-[#142319]">
                  <span>Total Payable Amount:</span>
                  <span className="font-serif text-xl text-[#c58b28]">
                    RM {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#c58b28] hover:bg-[#b0781e] text-white text-sm font-extrabold tracking-wider uppercase shadow-[0_4px_18px_rgba(197,139,40,0.45)] hover:shadow-[0_6px_24px_rgba(197,139,40,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CONFIRM &amp; PLACE ORDER (RM {totalPrice.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Trust Badges under CTA */}
              <div className="flex items-center justify-center gap-4 text-[10.5px] text-[#616e66] font-medium pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> 30-Day Money Back Guarantee
                </span>
                <span>•</span>
                <span>🔒 256-Bit SSL Encrypted</span>
              </div>

            </form>
          ) : (
            /* Order Placed Success View */
            <div className="py-8 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                  Order Successfully Placed!
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#142319]">
                  Thank You, {formData.fullName || "Valued Customer"}!
                </h3>
                <p className="text-xs text-[#525f57] max-w-md mx-auto mt-1 leading-relaxed">
                  Your order has been recorded. Our team will prepare and dispatch your fresh authentic Curcuma Caesia harvest immediately.
                </p>
              </div>

              {/* Order Receipt Card */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#ede1d3] max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-[#e2d5c2] pb-2">
                  <span className="font-bold text-[#68756d]">Order Reference:</span>
                  <span className="font-mono font-extrabold text-[#142319]">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68756d]">Package:</span>
                  <span className="font-bold text-[#142319]">{currentPkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68756d]">Total Amount:</span>
                  <span className="font-serif font-black text-[#c58b28] text-sm">RM {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68756d]">Payment:</span>
                  <span className="font-semibold text-[#142319] uppercase">{paymentMethod.toUpperCase()}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#e2d5c2]">
                  <span className="text-[#68756d]">Delivery Destination:</span>
                  <span className="font-medium text-[#142319] text-right truncate max-w-[200px]">{formData.city || formData.state}, Malaysia</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#142319] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  Continue Browsing
                </button>
                <a
                  href={`https://wa.me/60123456789?text=Hi%2C%20I%20just%20placed%20order%20${orderId}%20for%20${encodeURIComponent(currentPkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Track Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
