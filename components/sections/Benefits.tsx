"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

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

export default function Benefits() {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "500+", label: "Completed Projects" },
    { number: "25-Year", label: "Warranty" },
    { number: "24/7", label: "Emergency Service" },
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp>
              <span className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase">
                Proven Results
              </span>
              <h2
                className="font-display text-[#1C1C1E] mt-3 mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                ROOFING THAT PAYS
                <br />
                FOR ITSELF
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                A quality roof from Rhino adds property value, lowers energy
                costs, and protects your family or business for decades. It's
                not a cost — it's an investment.
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <FadeUp key={stat.label} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div
                      className="font-display text-[#1B5E20] font-bold"
                      style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-sm mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200">
              <img
                src="/images/oldcheesery.webp"
                alt="Rhino Roofing team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-white">
                <div className="font-display font-bold text-xl">
                  Alberta & Saskatchewan's
                </div>
                <div className="text-white/80 text-sm">
                  Most Trusted Roofing Contractor
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
