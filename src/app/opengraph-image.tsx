import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.displayName}, ${profile.title}`;
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
          padding: 72,
          background: "#faf9f7",
          color: "#1f2a24",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#5b6862",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#d4a373",
            }}
          />
          {profile.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            {profile.displayName}
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#2d6a4f",
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            {profile.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 12,
            width: 220,
            borderRadius: 999,
            background: "#2d6a4f",
          }}
        />
      </div>
    ),
    size,
  );
}
