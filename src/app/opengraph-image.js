import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.nombre} — ${site.asesora.puesto}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que se ve al compartir el enlace en WhatsApp, Instagram, etc.
// Se genera en build, así que no hay que mantener ningún PNG a mano.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#F0F4F2",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#5D8A9B",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {site.nombreCorto}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#202F4B",
          }}
        >
          Asesoría de sueño infantil respetuoso
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            color: "#5A5A5A",
          }}
        >
          {site.lema}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            height: 14,
            width: 220,
            borderRadius: 999,
            backgroundColor: "#EDE6CB",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
