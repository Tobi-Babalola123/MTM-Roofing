"use client";

export default function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 10vw, 140px) 0",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1640476750068-72c645e653cd?w=1920&h=800&fit=crop&auto=format&crop=center"
          alt="Commercial roofing background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8, 22, 48, 0.88)",
          }}
        />
        {/* Gold accent lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "#D4AF37",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "#D4AF37",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1.5,
              background: "#D4AF37",
              opacity: 0.6,
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            Ready to Get Started?
          </span>
          <div
            style={{
              width: 40,
              height: 1.5,
              background: "#D4AF37",
              opacity: 0.6,
            }}
          />
        </div>

        <h2
          style={{
            fontSize: "clamp(44px, 6vw, 84px)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            marginBottom: 24,
          }}
        >
          Protect Your
          <br />
          <span style={{ color: "#D4AF37" }}>Commercial Property</span>
          <br />
          Today
        </h2>

        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75,
            maxWidth: 540,
            margin: "0 auto 48px",
            fontWeight: 300,
          }}
        >
          Get a no-obligation assessment from Edmonton's most trusted commercial
          roofing team. We respond within one business day.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#D4AF37",
              color: "#0d2b55",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "18px 44px",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c9a42e";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#D4AF37";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Request Free Estimate
          </a>
          <a
            href="tel:5879821556"
            style={{
              background: "transparent",
              color: "#ffffff",
              fontSize: 15,
              borderRadius: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "17px 44px",
              border: "1.5px solid rgba(255,255,255,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#D4AF37";
              e.currentTarget.style.color = "#D4AF37";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 2h3l1.5 3.5-2 1.5a9 9 0 003.5 3.5l1.5-2L14 10v3a1 1 0 01-1 1A11 11 0 012 3a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            Call (587) 982-1556
          </a>
        </div>
      </div>
    </section>
  );
}
