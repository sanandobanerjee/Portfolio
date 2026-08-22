import { ImageResponse } from "next/og";

export const alt = "Sanando Banerjee — Full-Stack / AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "#0B0B12",
          color: "#F1EEF7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#9D00FF",
            marginBottom: 24,
          }}
        >
          Open to work · Kolkata, India
        </div>
        <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1 }}>
          Sanando Banerjee
        </div>
        <div style={{ fontSize: 34, color: "#B9B4C6", marginTop: 28 }}>
          Full-Stack / AI Engineer — building orbital intelligence &amp; Earth-facing defenses
        </div>
      </div>
    ),
    { ...size }
  );
}