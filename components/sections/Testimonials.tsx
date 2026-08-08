"use client";

const testimonials = [
  {
    quote:
      "MTM Roofing replaced the entire TPO system on our 60,000 sq ft warehouse with zero disruption to our operations. On budget, on time, and the post-installation inspection was immaculate. We won't call anyone else.",
    name: "Derek Holowatiuk",
    title: "Facility Manager",
    company: "Apex Distribution Ltd.",
    rating: 5,
  },
  {
    quote:
      "We've been contracting MTM for preventative maintenance across our six Edmonton properties for three years. Their documentation, communication, and technical knowledge set them apart from every other roofing contractor we've worked with.",
    name: "Sandra Merkley",
    title: "Property Manager",
    company: "Meridian Commercial Properties",
    rating: 5,
  },
  {
    quote:
      "After a major hail event, MTM had a crew on our industrial facility within hours and had the emergency repairs completed before the next storm system moved in. Their 24/7 service is real — not just a marketing claim.",
    name: "Brent Kowalski",
    title: "Operations Director",
    company: "Prairie Steel Fabricators Inc.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: "#F7F8FA", padding: "clamp(72px, 8vw, 120px) 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              Client Feedback
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
            Trusted by Edmonton's
            <br />
            Commercial Sector
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: "36px 32px",
                border: "1px solid #E8EAEE",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px rgba(18,59,114,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#D4AF37"
                  >
                    <path d="M8 1l1.854 3.756 4.146.603-3 2.924.708 4.129L8 10.25l-3.708 1.962.708-4.129L2 5.359l4.146-.603L8 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div
                style={{
                  fontSize: 72,
                  lineHeight: 0.7,
                  color: "#D4AF37",
                  opacity: 0.3,
                  marginBottom: 12,
                }}
              >
                "
              </div>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#444",
                  flex: 1,
                  marginBottom: 28,
                }}
              >
                {t.quote}
              </p>

              <div style={{ borderTop: "1px solid #E8EAEE", paddingTop: 20 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#222",
                    marginBottom: 2,
                  }}
                >
                  {t.name}
                </div>
                <div style={{ fontSize: 13, color: "#888" }}>{t.title}</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#123B72",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; max-width: 560px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
