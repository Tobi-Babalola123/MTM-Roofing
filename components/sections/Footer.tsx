"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";

const navCols = [
  {
    title: "Company",
    links: [
      "About MTM",
      "Our Process",
      "Certifications",
      "Safety Policy",
      "Careers",
      "Blog",
    ],
  },
  {
    title: "Services",
    links: [
      "Commercial Flat Roofing",
      "Metal Roofing Systems",
      "Roof Repairs",
      "Preventative Maintenance",
      "Roof Replacement",
      "Emergency Roofing",
    ],
  },
  {
    title: "Industries",
    links: [
      "Warehouses",
      "Office Buildings",
      "Retail Centers",
      "Industrial Facilities",
      "Municipal Buildings",
      "Multi-Family Residential",
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a1630", borderTop: "3px solid #D4AF37" }}>
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 40px" }}
      >
        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand col */}
          <div className="footer-brand" style={{ minWidth: 0 }}>
            <div
              style={{
                marginBottom: 20,
              }}
            >
              <img
                src="/images/mtmroofing.webp"
                alt="MTM Roofing Services"
                style={{
                  height: 70,
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>

            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                marginBottom: 24,
                maxWidth: 260,
              }}
            >
              Edmonton's commercial roofing specialists. Licensed, insured, and
              dedicated to long-term performance.
            </p>

            {/* Contact */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 28,
              }}
            >
              <a
                href="tel:5879821556"
                style={{
                  fontSize: 13,
                  color: "#D4AF37",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                (587) 982-1556
              </a>

              <a
                href="mailto:info@mtmroofingservices.ca"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.5)",
                  textDecoration: "none",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                info@mtmroofingservices.ca
              </a>

              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.5,
                }}
              >
                #101, 17842 – 106A Ave
                <br />
                Edmonton, AB T5S 1V3
              </span>
            </div>

            {/* Social */}
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                gap: 12,
              }}
            >
              <a
                href="https://www.facebook.com/mtmroofingservices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s, border-color 0.2s",
                  borderRadius: "50%",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,175,55,0.2)";
                  e.currentTarget.style.borderColor = "#D4AF37";
                  e.currentTarget.style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#D4AF37",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {col.title}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} MTM Roofing Services. All rights
            reserved. Edmonton, Alberta.
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Site Map"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
                }
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
       .footer-grid{
  display:grid;
  grid-template-columns:1.4fr 1fr 1fr 1fr;
  gap:48px;
}

@media (max-width:900px){
  .footer-grid{
    grid-template-columns:1fr 1fr !important;
    gap:32px !important;
  }
}

@media (max-width:540px){
  .footer-grid{
    grid-template-columns:1fr !important;
    gap:32px !important;
  }
}
      `}</style>
    </footer>
  );
}
