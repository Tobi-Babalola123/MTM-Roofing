"use client";

import { useInView } from "./useInView";

const steps = [
  {
    num: "01",
    title: "Site Inspection",
    desc: "Our certified team conducts a thorough on-site assessment — documenting conditions, measurements, and any existing damage.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M18 18l5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 12h6M12 9v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Assessment Report",
    desc: "You receive a detailed written assessment with photos, findings, and a clear diagnosis — no vague estimates.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect
          x="5"
          y="3"
          width="18"
          height="22"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 9h10M9 13h10M9 17h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Custom Proposal",
    desc: "We present a fixed-price proposal with scope, materials, timeline, and warranty terms. No surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 14h5l3-9 4 18 3-9h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Professional Installation",
    desc: "Certified crews execute the work on schedule, with daily site updates and full safety protocols maintained throughout.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M6 22l4-8 4 4 4-10 4 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 26h20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Final Inspection",
    desc: "A thorough post-installation quality check ensures every detail meets manufacturer specs before we hand over your warranty.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 14l3.5 3.5 6-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useInView(0.1);

  return (
    <section
      id="process"
      style={{
        background: "#F7F8FA",
        padding: "clamp(72px, 8vw, 120px) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 16,
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
              How We Work
            </span>
            <div style={{ width: 28, height: 2, background: "#D4AF37" }} />
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "#123B72",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={ref}
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 0,
            position: "relative",
          }}
        >
          {/* Desktop connector */}
          <div
            className="steps-line"
            style={{
              position: "absolute",
              top: 44,
              left: "10%",
              right: "10%",
              height: 1,
              background:
                "linear-gradient(90deg, transparent, #D4AF37 15%, #D4AF37 85%, transparent)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-card in-view in-view-delay-${i + 1}`}
              style={{
                padding: "0 16px",
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Circle */}
              <div
                className="step-circle"
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "#123B72" : "#ffffff",
                  border: `2px solid ${i % 2 === 0 ? "#123B72" : "#D4AF37"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: i % 2 === 0 ? "#D4AF37" : "#123B72",
                  marginBottom: 24,
                  boxShadow: "0 4px 20px rgba(18,59,114,0.15)",
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="step-content">
                <div
                  className="step-number"
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#D4AF37",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {step.num}
                </div>

                <h3
                  className="step-title"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#123B72",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
/* ===== MOBILE TIMELINE ===== */

@media (max-width:768px){

  .steps-grid{
    display:flex !important;
    flex-direction:column;
    gap:40px !important;
  }

  .steps-line{
    display:none !important;
  }

  .step-card{
    display:grid !important;
    grid-template-columns:72px 1fr;
    column-gap:20px;
    align-items:flex-start !important;
    text-align:left !important;
    padding:0 !important;
  }

  .step-circle{
    width:64px !important;
    height:64px !important;
    margin:0 !important;
    position:relative;
  }

  .step-card:not(:last-child) .step-circle::after{
    content:"";
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:64px;
    width:2px;
    height:42px;
    background:#D4AF37;
  }

  .step-content{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    padding-top:2px;
  }

  .step-number{
    margin-bottom:6px !important;
  }

  .step-title{
    margin-bottom:8px !important;
    font-size:17px !important;
  }

}
`}</style>
    </section>
  );
}
