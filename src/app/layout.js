import { Geist, Geist_Mono } from "next/font/google";
import HeaderNav from "@/components/layout/HeaderNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Entre Nubes Descanso",
  description: "Entre Nubes Descanso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative antialiased">
        <HeaderNav />
        <StickyHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
