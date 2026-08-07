"use client";

import { useEffect, useRef } from "react";

const trustItems = [
  { stat: "20+", label: "Years Experience" },
  { stat: "1,000+", label: "Commercial Projects" },
  { stat: "Licensed", label: "& Insured" },
  { stat: "24/7", label: "Emergency Service" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          ref={ref}
          style={{
            position: "absolute",
            inset: "-10%",
            willChange: "transform",
          }}
        >
          <img
            src="/images/hero.webp"
            alt="Aerial view of commercial roofing in winter conditions"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Layered overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, rgba(10,24,48,0.85) 0%, rgba(18,59,114,0.6) 60%, rgba(10,24,48,0.75) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.28)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingTop: 120,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "10px 32px 60px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 780 }}>
            {/* Eyebrow */}
            <div
              className="animate-fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              <div style={{ width: 32, height: 2, background: "#D4AF37" }} />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                }}
              >
                Edmonton, Alberta — Commercial Roofing
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up animate-fade-up-delay-1"
              style={{
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: "#ffffff",
                marginBottom: 28,
                textTransform: "uppercase",
              }}
            >
              Commercial Roofing
              <br />
              <span style={{ color: "#D4AF37" }}>Built for</span>
              <br />
              Alberta Businesses
            </h1>

            {/* Subhead */}
            <p
              className="animate-fade-up animate-fade-up-delay-2"
              style={{
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.8)",
                maxWidth: 560,
                marginBottom: 44,
                letterSpacing: "0.01em",
              }}
            >
              Protecting warehouses, offices, industrial facilities, and
              commercial properties with premium roofing systems engineered for
              Alberta's extreme climate.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up animate-fade-up-delay-3"
              style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
            >
              <a
                href="#contact"
                style={{
                  background: "#D4AF37",
                  color: "#0d2b55",
                  fontSize: 15,
                  borderRadius: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "16px 36px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c9a42e";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#D4AF37";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Request Free Estimate
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: 15,
                  borderRadius: 10,

                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "15px 36px",
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(8, 20, 42, 0.82)",
          borderTop: "1px solid rgba(212,175,55,0.25)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {trustItems.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  borderRight: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 800,
                    color: "#D4AF37",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          [data-trust-grid] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
