"use client";
import React from "react";
import { motion } from "framer-motion";
import { expertise, Expertise, leadership, Leadership } from "@/lib/data";

export default function TechnicalExpertise() {
  return (
    <section
      className="bg-background py-32 px-8 relative overflow-hidden"
      id="strategy"
    >
      {/* Subtle Ambient Background Wash */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D4A5A5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-16 items-start">
          
          {/* Left Column: Technical Expertise */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline italic text-4xl md:text-5xl tracking-tighter mb-16 text-on-surface leading-[0.9]">
              Technical <br />
              <span className="text-[#D4A5A5]">Expertise</span>
            </h2>

            <div className="space-y-12">
              {expertise.map((item: Expertise) => (
                <div key={item.title} className="group">
                  <h3 className="font-label text-[9px] uppercase tracking-[0.4em] text-secondary mb-5 font-bold group-hover:text-[#D4A5A5] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {item.skills.map((skill: string, idx: number) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-1.5 rounded-full border border-outline-variant/20 text-[10px] font-label text-on-surface/80 uppercase tracking-widest bg-white/5 backdrop-blur-sm hover:border-[#D4A5A5]/50 transition-all cursor-default"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Leadership & Community */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface mb-12 font-bold border-b border-outline-variant/20 pb-4">
              Leadership & Community
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadership.map((item: Leadership, idx: number) => (
                <motion.div
                  key={item.title}
                  className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-[#D4A5A5]/20 transition-all duration-500 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h4 className="font-headline text-2xl italic text-on-surface mb-2">
                    {item.title}
                  </h4>
                  <p className="font-label text-[9px] uppercase tracking-widest text-[#D4A5A5] mb-6">
                    {item.category}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point: string) => (
                      <li
                        key={point}
                        className="font-body text-secondary text-xs leading-relaxed flex gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#D4A5A5]/40 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}