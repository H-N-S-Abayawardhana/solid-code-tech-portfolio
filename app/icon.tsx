import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1917",
          color: "#ccfbf1",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        SC
      </div>
    ),
    { ...size },
  );
}
