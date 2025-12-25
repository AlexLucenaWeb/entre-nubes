import Hero from "@/components/layout/Hero";
import QuienSoy from "@/components/full/QuienSoy";
import PlanDeSueno from "@/components/full/PlanDeSueno";
import Resenas from "@/components/full/Resenas";
import Valoracion from "@/components/full/Planes";
import CloudDivider from "@/components/layout/CloudDivider";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <QuienSoy />
      <PlanDeSueno />
      <Resenas />
      {/* <Valoracion /> */}
    </main>
  );
}
