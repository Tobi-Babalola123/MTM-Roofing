"use client";
import Image from "next/image";

const services = [
  {
    title: "Commercial Flat Roofing",
    desc: "TPO, EPDM, and modified bitumen systems engineered for Alberta's freeze-thaw cycles and extreme temperature swings.",
    img: "/images/commercial.webp",
    alt: "Commercial flat roof with HVAC units",
  },
  {
    title: "Metal Roofing Systems",
    desc: "Standing seam and corrugated metal roofing delivering 40+ year service life for warehouses and industrial facilities.",
    img: "/images/flatroof.webp",
    alt: "Metal roofing installation on commercial building",
  },
  {
    title: "Roof Repairs",
    desc: "Fast, reliable leak detection and repair services minimizing business disruption. Certified crews dispatched quickly.",
    img: "/images/roof.jpg",
    alt: "Roofing repair crew at work",
  },
  {
    title: "Preventative Maintenance",
    desc: "Scheduled inspection and maintenance programs that extend roof life and prevent costly emergency repairs.",
    img: "/images/maintenance.webp",
    alt: "Roofing maintenance inspection",
  },
  {
    title: "Full Roof Replacement",
    desc: "Complete tear-off and re-roofing of aging systems with minimal operational impact. Full project management included.",
    img: "/images/replacement.webp",
    alt: "Large warehouse facility interior",
  },
  {
    title: "Emergency Roofing",
    desc: "24/7 emergency response for storm damage, active leaks, and urgent structural concerns. Available year-round.",
    img: "/images/emergency.webp",
    alt: "Aerial view of commercial rooftops",
  },
];

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E8EAEE",
        overflow: "hidden",
        borderRadius: 24,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(18,59,114,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: 220,
          overflow: "hidden",
          background: "#0d2b55",
          position: "relative",
        }}
      >
        <Image
          src={s.img}
          alt={s.alt}
          fill
          loading="lazy"
          decoding="async"
          style={{
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(18,59,114,0.3) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 28px" }}>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#123B72",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            marginBottom: 10,
          }}
        >
          {s.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#666",
            lineHeight: 1.7,
            marginBottom: 20,
          }}
        >
          {s.desc}
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#123B72",
            textDecoration: "none",
            borderBottom: "1.5px solid #D4AF37",
            paddingBottom: 2,
          }}
        >
          Learn More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#ffffff", padding: "clamp(72px, 8vw, 120px) 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <div style={{ marginBottom: 64, maxWidth: 640 }}>
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
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "#123B72",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              marginBottom: 16,
            }}
          >
            Our Commercial
            <br />
            Roofing Services
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#666",
              lineHeight: 1.75,
              maxWidth: 480,
            }}
          >
            Every system we install or repair is backed by manufacturer
            warranties, performed by certified crews, and engineered for
            long-term performance.
          </p>
        </div>

        {/* Grid */}
        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} />
          ))}
        </div>
      </div>

      <style>{`
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 900px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  @media (max-width: 600px) {
    .services-grid {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
    </section>
  );
}
