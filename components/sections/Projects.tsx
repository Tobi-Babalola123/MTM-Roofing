"use client";

import { useInView } from "./useInView";

const projects = [
  {
    title: "Commercial Office Buildings",
    desc: "Professional roofing solutions for office complexes, business parks, and corporate facilities across Alberta.",
    img: "/images/commercial.webp",
  },
  {
    title: "Industrial Warehouses",
    desc: "High-performance flat roofing systems designed for warehouses, logistics centres, and manufacturing facilities.",
    img: "/images/warehouse.webp",
  },
  {
    title: "Retail & Shopping Centres",
    desc: "Durable roofing systems that minimize disruption while protecting retail operations year-round.",
    img: "/images/retail.webp",
  },
  {
    title: "Municipal Buildings",
    desc: "Trusted roofing contractor for schools, recreation centres, government buildings, and public facilities.",
    img: "/images/municipal.jpg",
  },
  {
    title: "Multi-Family Developments",
    desc: "Reliable roofing for apartment buildings, condominiums, and mixed-use developments.",
    img: "/images/family.jpg",
  },
  {
    title: "Commercial Roof Replacements",
    desc: "Complete roof replacement projects delivered safely, on schedule, and backed by manufacturer warranties.",
    img: "/images/replacement.jpg",
  },
];

export default function Projects() {
  const ref = useInView(0.05);

  return (
    <section
      id="projects"
      style={{
        background: "#F7F8FA",
        padding: "clamp(80px,8vw,120px) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Header */}

        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 56px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 28,
                height: 2,
                background: "#D4AF37",
              }}
            />

            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#D4AF37",
                textTransform: "uppercase",
              }}
            >
              Industries We Serve
            </span>

            <div
              style={{
                width: 28,
                height: 2,
                background: "#D4AF37",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "clamp(36px,4vw,60px)",
              fontWeight: 800,
              color: "#123B72",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            Roofing Solutions Across Alberta
          </h2>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "#666",
            }}
          >
            From warehouses and office complexes to municipal facilities and
            retail developments, MTM Roofing delivers dependable commercial
            roofing systems built to withstand Alberta's toughest conditions.
          </p>
        </div>

        {/* Cards */}

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >
          {projects.map((item, i) => (
            <div
              key={item.title}
              className={`in-view in-view-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: "#fff",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 12px 35px rgba(0,0,0,.08)",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  height: 250,
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: ".5s",
                  }}
                />
              </div>

              <div
                style={{
                  padding: 28,
                }}
              >
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#123B72",
                    marginBottom: 16,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.8,
                    fontSize: 15,
                    marginBottom: 22,
                  }}
                >
                  {item.desc}
                </p>

                <a
                  href="#contact"
                  style={{
                    color: "#1B5E20",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Discuss Your Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1000px){
          #projects [style*="repeat(3,1fr)"]{
            grid-template-columns:repeat(2,1fr)!important;
          }
        }

        @media(max-width:640px){
          #projects{
            padding:72px 0!important;
          }

          #projects [style*="repeat(3,1fr)"]{
            grid-template-columns:1fr!important;
          }

          #projects div[style*="padding: 28"]{
            padding:22px!important;
          }
        }
      `}</style>
    </section>
  );
}
