import { ImageResponse } from "next/og";
import { siteConfig, tratamientos } from "@/lib/config";

// Imagen que aparece cuando se comparte el link por WhatsApp, Facebook o LinkedIn.
export const alt = `${siteConfig.name}, dentistas en ${siteConfig.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#F6F7F5",
          color: "#1B2430",
          padding: "70px 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#52667A" }}>
          Dentistas en {siteConfig.city}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 24,
          }}
        >
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div
            style={{
              display: "flex",
              height: 16,
              borderRadius: 8,
              background: "#52667A",
            }}
          />
          <div style={{ display: "flex", gap: 14 }}>
            {tratamientos.map((t) => (
              <div
                key={t.id}
                style={{
                  display: "flex",
                  flex: 1,
                  height: 130,
                  background: t.tono,
                  border: "1px solid #D8DDDA",
                  borderRadius: "6px 6px 44px 44px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
