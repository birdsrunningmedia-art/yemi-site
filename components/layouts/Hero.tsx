'use client'
import React from "react";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
};

export default function Hero() {
  return (
    <section
      className="min-h-screen sm:min-h-[90vh] flex flex-col sm:pt-36 justify-center px-8 max-w-4xl mx-auto"
      id="hero"
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className=" flex flex-col justify-center"
      >
        {/* Profile Image - Circular & Elevated */}
        <motion.div variants={fadeInUp} className="mb-10 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl p-1.5 bg-gradient-to-tr from-primary/20 to-transparent border border-outline-variant/20 shadow-2xl">
            <img
              src="/images/yemi.webp"
              alt="Olayemi Adegoke"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-headline text-4xl sm:text-5xl md:text-6xl tracking-tight text-on-surface mb-6"
        >
          {"Hey, I'm Olayemi Adegoke."} <br />
          <span className="italic text-secondary">
            Technical Product Manager
          </span>
        </motion.h1>

        {/* Glass Specialties Pill Row */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
          {["Fintech", "SaaS", "IoT", "AI"].map((tag) => (
            <span
              key={tag}
              className="bg-white/60 dark:bg-[#9E7676]/20 shadow-[0_0_15px_rgba(255,192,203,0.3)] dark:shadow-none backdrop-blur-xl border border-[#FFB6C1]/50 dark:border-[#9E7676]/50 text-[#D81B60] dark:text-[#FFB6C1] px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
