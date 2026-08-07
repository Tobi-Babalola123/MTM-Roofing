"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Frog lake",
    "Lakeside Center",
    "Maklin Co-op ",
    "Lloyd Museum",
    "Old cheesery",
  ];

  const projects = [
    {
      cat: "Frog lake",
      img: "/images/froglake1.webp",
    },
    {
      cat: "Lakeside Center",
      img: "/images/lakeside1.webp",
    },
    {
      cat: "Lloyd Museum",
      img: "/images/rhinomuseum.webp",
    },
    {
      cat: "Maklin Co-op ",
      img: "/images/Maklin.webp",
    },
    {
      cat: "Old cheesery",
      img: "/images/oldcheesery.webp",
    },
    {
      cat: "Frog lake",
      img: "/images/froglake3.webp",
    },
  ];

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

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <span className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase">
            Our Work
          </span>
          <h2
            className="font-display text-[#1C1C1E] mt-3"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            RECENT PROJECTS
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Real projects, real results. Browse our portfolio of completed
            roofing work across Alberta and Saskatchewan.
          </p>
        </FadeUp>

        {/* Filters */}
        <FadeUp
          delay={0.1}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeFilter === f
                  ? "bg-[#1B5E20] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                    {project.cat}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <FadeUp delay={0.2} className="text-center mt-12">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#1B5E20] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#2e7d32] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
