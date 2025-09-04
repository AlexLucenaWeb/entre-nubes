import Hero from "@/components/layout/Hero";
import QuienSoy from "@/components/full/QuienSoy";
import Asesorias from "@/components/full/Asesorias";
import Resenas from "@/components/full/Resenas";
import Valoracion from "@/components/full/Valoracion";

export default function ValoracionGratuita() {
  return (
    <div className=" bg-blue-500 text-white font-bold pb-10">
      <h2>Servicios</h2>
      <Valoracion />
    </div>
  );
}
