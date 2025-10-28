import Hero from "@/components/layout/Hero";
import QuienSoy from "@/components/full/QuienSoy";
import Asesorias from "@/components/full/Asesorias";
import Resenas from "@/components/full/Resenas";
import Valoracion from "@/components/full/Planes";

export default function Home() {
  return (
    <div className=" bg-blue-500 text-white font-bold pb-10">
      <Hero />
      <QuienSoy />
      <Asesorias />
      <Resenas />
      <Valoracion />
    </div>
  );
}
