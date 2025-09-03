import Hero from "@/components/layout/Hero";
import QuienSoy from "@/components/full/QuienSoy";
import Asesorias from "@/components/full/Asesorias";
import Resenas from "@/components/full/Resenas";

export default function Home() {
  return (
    <div className=" bg-blue-500 text-white font-bold">
      <Hero />
      <QuienSoy />
      <Asesorias />
      <Resenas />
    </div>
  );
}
