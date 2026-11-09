import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  let background: string | null = null;
  try {
    const bytes = await readFile(join(process.cwd(), "public/images/hero/field.jpg"));
    background = `data:image/jpeg;base64,${bytes.toString("base64")}`;
  } catch {
    background = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0f18",
          color: "#f4f4f5",
          padding: 72,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {background ? (
          <img
            src={background}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.55,
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(7,11,18,0.35) 0%, rgba(7,11,18,0.82) 70%, rgba(7,11,18,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 4,
            color: "#93c5fd",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
              color: "white",
            }}
          >
            A
          </div>
          ISJUSTABHI · 2026 PORTFOLIO
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 0.9, fontWeight: 700, letterSpacing: -4 }}>
            Abhi.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#d4d4d8", maxWidth: 900 }}>
            Data, AI, and bioinformatics for research that has to hold up.
          </div>
        </div>
        <div style={{ position: "relative", fontSize: 20, color: "#a1a1aa" }}>
          AI · research · writing · badminton
        </div>
      </div>
    ),
    size,
  );
}
