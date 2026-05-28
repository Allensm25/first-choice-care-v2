import { ImageResponse } from "next/og"
import fs from "fs"
import path from "path"

export const runtime = "nodejs"
export const alt = "First Choice Care — Atlanta Home Health"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  const logoData = fs.readFileSync(path.join(process.cwd(), "public", "fcc-logo.png"))
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F8F3E8",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "900px",
            height: "900px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(134,176,96,0.14) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* Top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "linear-gradient(to right, #4E7A28, #9A7828)", display: "flex" }} />
        {/* Bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "6px", background: "linear-gradient(to right, #4E7A28, #9A7828)", display: "flex" }} />

        {/* Left — logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "100%",
            flexShrink: 0,
          }}
        >
          <img
            src={logoSrc}
            width={280}
            height={280}
            style={{ objectFit: "contain", mixBlendMode: "multiply" }}
          />
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "340px", background: "rgba(134,176,96,0.35)", flexShrink: 0, display: "flex" }} />

        {/* Right — text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px",
            flex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(134,176,96,0.16)",
              border: "1px solid rgba(134,176,96,0.40)",
              borderRadius: "100px",
              padding: "7px 18px",
              marginBottom: "24px",
              alignSelf: "flex-start",
            }}
          >
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4E7A28", display: "flex" }} />
            <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4E7A28" }}>
              Atlanta Home Health Care
            </span>
          </div>

          {/* Name — two spans in a flex row to avoid mixed children issue */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "18px", marginBottom: "16px" }}>
            <span style={{ fontSize: "66px", fontWeight: 800, color: "#1B2E09", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              First Choice
            </span>
            <span style={{ fontSize: "66px", fontWeight: 800, color: "#4E7A28", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Care
            </span>
          </div>

          {/* Tagline */}
          <div style={{ display: "flex", fontSize: "19px", color: "rgba(27,46,9,0.62)", lineHeight: 1.5, marginBottom: "36px" }}>
            <span>Compassionate home health — GAPP pediatric care &amp; private pay for Atlanta families.</span>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { value: "500+", label: "Families Served" },
              { value: "10+",  label: "Years in Atlanta" },
              { value: "24/7", label: "Always Available" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "30px", fontWeight: 800, color: "#3A5C1A" }}>{s.value}</span>
                <span style={{ fontSize: "12px", color: "rgba(27,46,9,0.50)", letterSpacing: "0.06em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
