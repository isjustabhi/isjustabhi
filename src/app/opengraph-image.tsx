import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080B12",
          color: "#F4F7FB",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#45D6FF" }}>
          AI ENGINEER · DATA SCIENTIST
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 600 }}>ABHIRAM VARMA</div>
          <div style={{ marginTop: 18, fontSize: 28, color: "#9AA8BC", maxWidth: 860 }}>
            Intelligent systems for research, healthcare, and real-world data.
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#9AA8BC" }}>
          University of Arizona · LLM-HyPZ · LSCH
        </div>
      </div>
    ),
    size,
  );
}
