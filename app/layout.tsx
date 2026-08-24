import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CurcumaCaesia | Malaysia's University-Verified Black Turmeric",
  description:
    "Standardised Curcuma Caesia Roxb., verified by four Malaysian universities. The Gold of Wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-white text-[#1a261f]">
        {children}
      </body>
    </html>
  );
}


