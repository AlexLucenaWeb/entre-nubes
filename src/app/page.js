import Hero from "@/components/layout/Hero";
import QuienSoy from "@/components/full/QuienSoy";
import Asesorias from "@/components/full/Asesorias";
import Resenas from "@/components/full/Resenas";
import Valoracion from "@/components/full/Planes";
import CloudDivider from "@/components/layout/CloudDivider";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <QuienSoy />
      <Asesorias />
      <Resenas />
      <Valoracion />
    </main>
  );
}
