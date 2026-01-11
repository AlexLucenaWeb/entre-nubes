import HeaderNav from "@/components/layout/HeaderNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";

export const metadata = {
  title: "Entre Nubes Descanso",
  description: "Entre Nubes Descanso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="relative">
        <HeaderNav />
        <StickyHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
