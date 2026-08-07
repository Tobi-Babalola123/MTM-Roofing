"use client";

import { useState, useEffect } from "react";

const links = [
  "Home",
  "Services",
  "Industries",
  "Projects",
  "About",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(12, 30, 56, 0.92)"
          : "rgba(18, 59, 114, 1)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212,175,55,0.2)"
          : "1px solid transparent",
        transition:
          "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(16px, 3vw, 32px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "clamp(64px, 8vw, 72px)",
            gap: 40,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/mtmroofing.webp"
              alt="MTM Roofing Services"
              style={{
                height: "clamp(42px, 7vw, 60px)",
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}
            className="hidden-mobile"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "6px clamp(6px,1vw,12px)",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.78)")
                }
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28, // larger gap between phone and button
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            {/* Phone (desktop only) */}
            <a
              href="tel:5879821556"
              className="hidden-mobile"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              (587) 982-1556
            </a>

            {/* CTA Desktop */}
            <a
              href="#contact"
              className="desktop-estimate"
              style={{
                background: "#D4AF37",
                color: "#123B72",
                padding: "11px 22px",
                borderRadius: 10,
                fontWeight: 700,
                letterSpacing: ".08em",
                textDecoration: "none",
                textTransform: "uppercase",
                fontSize: 12,
                whiteSpace: "nowrap",
              }}
            >
              Free Estimate
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="show-mobile"
              aria-label="Toggle Menu"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "none",
                padding: 15,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 20,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: menuOpen ? 9 : 0,
                    width: "100%",
                    height: 2,
                    background: "#fff",
                    transform: menuOpen ? "rotate(45deg)" : "none",
                    transition: ".3s",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    top: 9,
                    width: "100%",
                    height: 2,
                    background: "#fff",
                    opacity: menuOpen ? 0 : 1,
                    transition: ".3s",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    bottom: menuOpen ? 9 : 0,
                    width: "100%",
                    height: 2,
                    background: "#fff",
                    transform: menuOpen ? "rotate(-45deg)" : "none",
                    transition: ".3s",
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.45)",
              opacity: menuOpen ? 1 : 0,
              visibility: menuOpen ? "visible" : "hidden",
              transition: "0.35s ease",
              zIndex: 99,
            }}
          />

          {/* Drawer */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "min(320px,85vw)",
              height: "100vh",
              background: "#123B72",
              padding: "90px 28px 32px",
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform .35s ease",
              zIndex: 100,
              overflowY: "auto",
              boxShadow: "-10px 0 30px rgba(0,0,0,.35)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 22,
                right: 22,
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 28,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="tel:5879821556"
              style={{
                display: "block",
                color: "#D4AF37",
                marginTop: 24,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              (587) 982-1556
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                marginTop: 24,
                background: "#D4AF37",
                color: "#123B72",
                textAlign: "center",
                textDecoration: "none",
                padding: "15px",
                borderRadius: 12,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Free Estimate
            </a>
          </div>
        </>
      </div>

      <style>{`
     @media (max-width:1024px){

.hidden-mobile{
display:none!important;
}

.desktop-estimate{
display:none!important;
}

.show-mobile{
display:block!important;
}

}

@media (min-width:1025px){

.show-mobile{
display:none!important;
}

}
      `}</style>
    </header>
  );
}
