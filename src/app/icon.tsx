import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080B12",
          color: "#45D6FF",
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        AV
      </div>
    ),
    size,
  );
}
