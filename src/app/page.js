import Hero from "@/components/layout/Hero";
import QuienSoy from "@/components/full/QuienSoy";
import PlanDeSueno from "@/components/full/PlanDeSueno";
import Resenas from "@/components/full/Resenas";
import Valoracion from "@/components/full/Planes";
import CloudDivider from "@/components/layout/CloudDivider";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main id="contenido" tabIndex={-1} className="">
      <JsonLd />
      <div id="modal-root" />
      <Hero />
      <QuienSoy />
      <PlanDeSueno />
      <Resenas />
    </main>
  );
}
