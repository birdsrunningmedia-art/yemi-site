'use client'
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative overflow-hidden py-32" id="about">
      {/* Ambient Background Element - Soft wash of pinkish warmth */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#D4A5A5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12"
        >
          {/* Left Column: Headline - Using col-span-5 to leave room for the narrative */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-8 block font-bold">
              Background
            </span>
            <h2 className="font-headline italic text-4xl md:text-5xl  tracking-tighter text-on-surface leading-[0.85]">
              About <br />
              <span className="text-secondary opacity-60">Yemi.</span>
            </h2>
          </div>

          {/* Right Column: Narrative - col-span-7 */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            <p className="font-body text-xl md:text-2xl lg:text-3xl text-on-surface leading-tight tracking-tight">
              I am a{" "}
              <span className="italic font-headline text-[#D4A5A5]">
                Technical Product Manager
              </span>{" "}
              specialized in scaling complex fintech and AI systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 font-body text-secondary text-base md:text-lg leading-relaxed">
              <div className="space-y-6">
                <p>
                  My degree in{" "}
                  <span className="text-on-surface font-medium underline decoration-[#D4A5A5]/40 underline-offset-4">
                    International Relations
                  </span>{" "}
                  allows me to navigate global market dynamics with a systemic
                  mindset.
                </p>
                <p>
                  I bridge the gap between high-level vision and granular
                  execution, leading teams from hardware to
                  cloud infrastructure.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Having scaled platforms processing over{" "}
                  <span className="text-on-surface font-bold">₦100M+</span>, I
                  focus on building resilient systems that maximize user impact.
                </p>
                <p>
                  Outside of PM work, I advocate for{" "}
                  <span className="text-on-surface italic">
                    educational access
                  </span>
                  , building tech that serves real-world human needs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}