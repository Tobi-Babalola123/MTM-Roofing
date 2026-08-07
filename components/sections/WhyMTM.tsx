"use client";

import { useInView } from "./useInView";

const checks = [
  "Certified Crews with Manufacturer Training",
  "Safety-Focused — Zero Compromise on Site",
  "Commercial Specialists — Not Residential",
  "Full Manufacturer Warranties on All Systems",
  "On-Time Delivery — Guaranteed Schedules",
  "Detailed Site Inspections Before & After",
];

export default function WhyMTM() {
  const leftRef = useInView();
  const rightRef = useInView();

  return (
    <section id="about" style={{ background: "#F7F8FA", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 600,
        }}
      >
        {/* Image */}
        <div
          ref={leftRef}
          style={{
            position: "relative",
            minHeight: 520,
            background: "#0d2b55",
          }}
        >
          <img
            src="/images/about.webp"
            alt="MTM Roofing crew on a commercial project"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // display: "block",
              position: "absolute",
              inset: 0,
            }}
          />
          {/* Gold accent bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 5,
              height: "40%",
              background: "#D4AF37",
            }}
          />
          {/* Stats badge */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              right: -1,
              background: "#123B72",
              padding: "24px 32px",
              borderLeft: "4px solid #D4AF37",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#D4AF37",
                lineHeight: 1,
              }}
            >
              20+
            </div>
            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Years Serving
              <br />
              Alberta
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={rightRef}
          style={{
            padding: "clamp(48px, 6vw, 96px) clamp(32px, 5vw, 72px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="in-view" style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div style={{ width: 28, height: 2, background: "#D4AF37" }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                }}
              >
                Why MTM Roofing
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.0,
                textTransform: "uppercase",
                color: "#123B72",
                marginBottom: 20,
                letterSpacing: "-0.01em",
              }}
            >
              Commercial Roofing
              <br />
              You Can Depend On
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#555",
                maxWidth: 460,
                marginBottom: 36,
              }}
            >
              For over two decades, MTM Roofing has been the trusted partner for
              Edmonton's commercial property owners and facility managers. We
              specialize exclusively in commercial work — no residential
              shortcuts, no generalist crews.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {checks.map((item, i) => (
              <div
                key={i}
                className={`in-view in-view-delay-${Math.min(i + 1, 5)}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderRadius: 10,
                  padding: "12px 16px",
                  background: "#fff",
                  border: "1px solid #E8EAEE",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#D4AF37";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 12px rgba(18,59,114,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#E8EAEE";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    background: "#123B72",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#D4AF37"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#333",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; }
          #about .img-zoom { min-height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
