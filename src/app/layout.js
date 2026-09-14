import { Geist, Geist_Mono } from "next/font/google";
import HeaderNav from "@/components/layout/HeaderNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";
import CloudSprite from "@/components/layout/CloudSprite";
import { site, siteUrl } from "@/lib/site";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: site.titulo,
    template: `%s | ${site.nombre}`,
  },
  description: site.descripcion,
  applicationName: site.nombre,
  authors: [{ name: site.asesora.nombre }],
  creator: site.asesora.nombre,
  publisher: site.nombre,
  keywords: [
    "asesora de sueño infantil",
    "sueño infantil respetuoso",
    "plan de sueño bebé",
    "despertares nocturnos bebé",
    "asesoría de sueño online",
    "consultora de sueño infantil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: site.nombre,
    title: site.titulo,
    description: site.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: site.titulo,
    description: site.descripcion,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative antialiased">
        <CloudSprite />
        <HeaderNav />
        <StickyHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
