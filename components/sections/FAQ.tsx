"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of commercial roofing systems does MTM install?",
    a: "We install TPO, EPDM, modified bitumen, and built-up roofing (BUR) for flat and low-slope commercial applications, as well as standing seam metal and corrugated metal panel systems. We recommend the appropriate system based on your building's structure, budget, and long-term performance requirements.",
  },
  {
    q: "How long does a commercial roof replacement take?",
    a: "Duration depends on roof size and complexity. A standard 20,000–50,000 sq ft flat roof replacement typically takes 5–10 business days. Larger projects are carefully phased to minimize business disruption. We provide a firm timeline in your proposal and adhere to it.",
  },
  {
    q: "Does MTM offer manufacturer warranties?",
    a: "Yes. We are certified installers for major manufacturers including Carlisle, Firestone, and GAF. This allows us to offer full system warranties — not just labour warranties — covering materials and workmanship for 10, 15, or 20 years depending on the system selected.",
  },
  {
    q: "Can you work around our business operations during installation?",
    a: "Absolutely. We routinely work in phased sections, after business hours, or on weekends to accommodate operational requirements. Our project managers coordinate closely with your facility team throughout the project.",
  },
  {
    q: "What is included in your preventative maintenance programs?",
    a: "Our maintenance programs include bi-annual inspections (spring and fall), drain clearing, seam and flashing checks, minor repairs, and detailed inspection reports with photos. We track your roof's condition over time to catch issues before they become costly failures.",
  },
  {
    q: "How quickly can MTM respond to an emergency?",
    a: "We offer 24/7 emergency response for active leaks and storm damage. In most cases, we have a crew on-site within 4–6 hours. Emergency patching and temporary waterproofing are available immediately, with permanent repairs scheduled as soon as conditions allow.",
  },
  {
    q: "Are you licensed and insured for commercial work in Alberta?",
    a: "Yes. MTM Roofing holds full Alberta contractor licensing, WCB coverage, and carries $5M commercial general liability insurance. We provide certificates of insurance on request and can be added as additional insured on your policy for larger projects.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ background: "#ffffff", padding: "clamp(72px, 8vw, 120px) 0" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
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
              Common Questions
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
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: `1.5px solid ${open === i ? "#123B72" : "#E8EAEE"}`,
                overflow: "hidden",
                transition: "border-color 0.2s",

                borderRadius: 24,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px",
                  background: open === i ? "#F7F8FA" : "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                  transition: "background 0.2s",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: open === i ? "#123B72" : "#333",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: open === i ? "#123B72" : "#E8EAEE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.2s, transform 0.3s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2v8M2 6h8"
                      stroke={open === i ? "#D4AF37" : "#666"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
              <div
                style={{
                  maxHeight: open === i ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <div
                  style={{
                    padding: "0 24px 24px",
                    fontSize: 15,
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
