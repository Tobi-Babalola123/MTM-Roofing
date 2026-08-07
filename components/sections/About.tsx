"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, BoltIcon, ShieldIcon } from "lucide-react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function BadgeCheckIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

export default function About() {
  const highlights = [
    { icon: <CalendarIcon />, text: "10+ Years Experience" },
    { icon: <BadgeCheckIcon />, text: "Licensed Professionals" },
    { icon: <ShieldIcon />, text: "Certified Materials" },
    { icon: <BoltIcon />, text: "Emergency Services" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/built.webp"
                  alt="Rhino Roofing crew installing a roof"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-2  bg-[#1B5E20] text-white rounded-2xl p-6 shadow-xl">
                <div className="font-display text-4xl font-bold text-[#D4AF37]">
                  10+
                </div>
                <div className="text-sm mt-1 text-white/80">
                  Years Serving
                  <br />
                  Alberta & Saskatchewan
                </div>
              </div>
              {/* Gold accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#D4AF37] -z-10" />
            </div>
          </FadeUp>

          {/* Content */}
          <div>
            <FadeUp delay={0.1}>
              <span className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase">
                About Rhino Roofing
              </span>
              <h2
                className="font-display text-[#1C1C1E] mt-3 mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                BUILT ON TRUST.
                <br />
                BACKED BY EXPERTISE.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Rhino Roofing Ltd. has been protecting Alberta and Saskatchewan
                homes and businesses for over a decade. We specialize in flat
                roofing, metal roofing, and solar installations delivering
                premium craftsmanship with every project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                Our certified team uses only the highest-quality materials from
                trusted manufacturers, ensuring your roof withstands the
                harshest prairie winters and hottest summers. From residential
                repairs to large-scale commercial builds, we do it all with
                precision and care.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {highlights.map((h) => (
                  <div
                    key={h.text}
                    className="flex items-center gap-3 bg-[#F5F5F5] rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1B5E20] flex items-center justify-center text-white flex-shrink-0">
                      {h.icon}
                    </div>
                    <span className="text-sm font-semibold text-[#1C1C1E]">
                      {h.text}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#1B5E20] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#2e7d32] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Get Your Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
