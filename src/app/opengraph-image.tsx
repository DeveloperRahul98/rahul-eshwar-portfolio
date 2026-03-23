import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rahul Kumar Eshwar — Software Engineer II";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0f",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Cyan glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Border */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(0,229,255,0.2)",
            borderRadius: "24px",
            padding: "60px 80px",
            background: "rgba(17,17,24,0.8)",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#e4e4e7",
              marginBottom: "8px",
            }}
          >
            Rahul Kumar Eshwar
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: "24px",
              color: "#00e5ff",
              marginBottom: "24px",
            }}
          >
            Software Engineer II
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "18px",
              color: "#71717a",
              marginBottom: "32px",
            }}
          >
            Building delightful user experiences
          </div>

          {/* Skills pills */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Native"].map(
              (skill) => (
                <div
                  key={skill}
                  style={{
                    fontSize: "14px",
                    color: "rgba(0,229,255,0.8)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    borderRadius: "9999px",
                    padding: "6px 16px",
                    background: "rgba(0,229,255,0.05)",
                  }}
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
