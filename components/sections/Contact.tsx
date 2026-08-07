"use client";

import { useState } from "react";
import { useInView } from "./useInView";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1.5px solid #E8EAEE",
    background: "#F7F8FA",
    fontSize: 14,
    color: "#333",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
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
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4AF37",
              }}
            >
              Get In Touch
            </span>
            <div style={{ width: 28, height: 2, background: "#D4AF37" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "#123B72",
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            Request Your Free
            <br />
            Commercial Estimate
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div className="in-view">
            <div style={{ marginBottom: 40 }}>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#123B72",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 24,
                }}
              >
                Contact Information
              </h3>

              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 3h3l1.5 4L5.5 9a12 12 0 004.5 4.5l2-2 4 1.5V16a1 1 0 01-1 1A14 14 0 012 4a1 1 0 011-1z"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "(587) 982-1556",
                  href: "tel:5879821556",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="2"
                        y="4"
                        width="16"
                        height="12"
                        rx="1"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 6l8 6 8-6"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@mtmroofingservices.ca",
                  href: "mailto:info@mtmroofingservices.ca",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="10"
                        cy="8"
                        r="2"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                  label: "Head Office",
                  value: "#101, 17842 – 106A Ave\nEdmonton, AB T5S 1V3",
                  href: undefined,
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle
                        cx="10"
                        cy="10"
                        r="8"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 5v5l3 3"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                  label: "Business Hours",
                  value: "Mon–Fri: 7:00 AM – 5:30 PM\nEmergency: 24/7",
                  href: undefined,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 16, marginBottom: 24 }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "#123B72",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#999",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: 15,
                          color: "#333",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#123B72")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#333")
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: 14,
                          color: "#555",
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ background: "#123B72", padding: "24px 28px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#D4AF37",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Our Commitment
              </div>
              {[
                "Licensed & Insured in Alberta",
                "WCB Covered — All Projects",
                "1-Business-Day Response Guaranteed",
                "$5M Commercial Liability Coverage",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l3.5 3.5 6-6"
                      stroke="#D4AF37"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="in-view in-view-delay-2"
            style={{
              background: "#ffffff",
              padding: "40px 40px",
              border: "1px solid #E8EAEE",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    background: "#123B72",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M5 14l6 6 12-12"
                      stroke="#D4AF37"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#123B72",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Estimate Request Received
                </h3>
                <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7 }}>
                  Our team will contact you within one business day to schedule
                  your free site assessment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#123B72",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: 8,
                  }}
                >
                  Get a Free Estimate
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#888",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#123B72";
                        e.currentTarget.style.background = "#fff";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#E8EAEE";
                        e.currentTarget.style.background = "#F7F8FA";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#888",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#123B72";
                        e.currentTarget.style.background = "#fff";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#E8EAEE";
                        e.currentTarget.style.background = "#F7F8FA";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#888",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(780) 000-0000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#123B72";
                      e.currentTarget.style.background = "#fff";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E8EAEE";
                      e.currentTarget.style.background = "#F7F8FA";
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#888",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, service: e.target.value }))
                    }
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#123B72";
                      e.currentTarget.style.background = "#fff";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E8EAEE";
                      e.currentTarget.style.background = "#F7F8FA";
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option>Commercial Flat Roofing</option>
                    <option>Metal Roofing</option>
                    <option>Roof Repairs</option>
                    <option>Preventative Maintenance</option>
                    <option>Full Roof Replacement</option>
                    <option>Emergency Roofing</option>
                    <option>Not Sure — Need Assessment</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#888",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Building type, approximate size, timeline, and any specific concerns..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 100,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#123B72";
                      e.currentTarget.style.background = "#fff";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E8EAEE";
                      e.currentTarget.style.background = "#F7F8FA";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#D4AF37",
                    color: "#0d2b55",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "16px",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    transition: "background 0.2s, transform 0.2s",
                    marginTop: 4,
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
                  Submit Estimate Request
                </button>

                <p
                  style={{
                    fontSize: 12,
                    color: "#aaa",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact [style*="grid-template-columns: 1fr 1.4fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          #contact form [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #contact [style*="padding: '40px 40px'"] { padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}
