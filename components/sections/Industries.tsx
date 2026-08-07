"use client";

import { useInView } from "./useInView";

const industries = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="12"
          width="24"
          height="16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 12L16 4l12 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="12"
          y="20"
          width="8"
          height="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    name: "Warehouses",
    desc: "Large-span flat and metal roofing for distribution centres, logistics hubs, and storage facilities.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="6"
          y="8"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M6 8h20" stroke="currentColor" strokeWidth="1.5" />
        <rect
          x="10"
          y="14"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="18"
          y="14"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="10"
          y="22"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="18"
          y="22"
          width="4"
          height="4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M6 4h20v4H6z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    name: "Office Buildings",
    desc: "Watertight, energy-efficient systems for Class A and B office properties in Edmonton's commercial zones.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 28V12l12-8 12 8v16H4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M10 28v-8h12v8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    name: "Retail Centers",
    desc: "Strip malls, plazas, and big-box retail — high foot-traffic facilities demanding durable, low-maintenance roofing.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="3"
          y="8"
          width="26"
          height="18"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 8h26M3 14h26M3 20h26"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        <rect
          x="8"
          y="14"
          width="4"
          height="6"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="24" cy="17" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M3 4h26v4H3z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    name: "Industrial Facilities",
    desc: "Heavy-duty roofing for manufacturing plants, processing facilities, and chemical-exposure environments.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 3L3 12h4v16h18V12h4L16 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="12"
          y="20"
          width="8"
          height="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 16h3M19 16h3M14 12h4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "Municipal Buildings",
    desc: "Schools, recreation centres, fire halls, and public infrastructure — meeting institutional codes and standards.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="10"
          width="10"
          height="18"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="18"
          y="6"
          width="10"
          height="22"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 10L9 6h5v4M18 6l5-4 5 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="6"
          y="16"
          width="2"
          height="3"
          stroke="currentColor"
          strokeWidth="1"
        />
        <rect
          x="20"
          y="12"
          width="2"
          height="3"
          stroke="currentColor"
          strokeWidth="1"
        />
        <rect
          x="24"
          y="12"
          width="2"
          height="3"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    ),
    name: "Multi-Family Residential",
    desc: "Apartment complexes, condominiums, and mixed-use developments requiring commercial-grade performance.",
  },
];

export default function Industries() {
  const ref = useInView(0.1);

  return (
    <section
      id="industries"
      style={{ background: "#123B72", padding: "clamp(72px, 8vw, 120px) 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 60,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
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
                Who We Serve
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#ffffff",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
              }}
            >
              Industries
              <br />
              We Serve
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              maxWidth: 380,
            }}
          >
            From single-tenant warehouses to multi-building campuses, our crews
            have the experience and equipment to handle any scale.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`in-view in-view-delay-${Math.min(i + 1, 5)}`}
              style={{
                padding: "36px 32px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "default",
                transition:
                  "background 0.3s, border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(212,175,55,0.1)";
                el.style.borderColor = "rgba(212,175,55,0.4)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ color: "#D4AF37", marginBottom: 20 }}>
                {ind.icon}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  marginBottom: 10,
                }}
              >
                {ind.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #industries [style*="repeat(3, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #industries [style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
