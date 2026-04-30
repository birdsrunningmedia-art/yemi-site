'use client'
import React from "react";
import { motion } from "framer-motion";
import {
  education,
  experiences,
  Experience,
  Education,
  expertise,
} from "@/lib/data";

export default function Career() {
  return (
    <section
      className="py-32 px-8 bg-background relative overflow-hidden"
      id="career"
    >
      {/* Ambient background wash */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4A5A5]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline italic text-5xl  tracking-tighter text-on-surface mb-6">
            Career <span className="text-secondary opacity-40">&</span> Impact
          </h2>
          <p className="font-body text-secondary text-xl max-w-2xl leading-relaxed">
            A documented history of high-impact deployments, scaling technical
            infrastructure, and cross-functional leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-7 space-y-24">
            {experiences.map((exp: Experience, idx: number) => (
              <motion.div
                key={exp.company}
                className="relative pl-10 border-l border-outline-variant/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
              >
                {/* The Glowing Timeline Node */}
                <div className="absolute -left-[6px] top-0 w-3 h-3 bg-[#D4A5A5] rounded-full shadow-[0_0_12px_#D4A5A5]" />

                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div>
                    <h3 className="font-headline text-4xl italic text-on-surface mb-2">
                      {exp.company}
                    </h3>
                    <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#D4A5A5] font-bold">
                      {exp.role}{" "}
                      <span className="mx-2 text-secondary/30">•</span>{" "}
                      {exp.period}
                    </p>
                  </div>

                  {exp.metrics && (
                    <div className="flex gap-8 bg-surface-container-low/50 p-4 rounded-2xl backdrop-blur-sm border border-outline-variant/10">
                      {exp.metrics.map((metric) => (
                        <div key={metric.label} className="text-right">
                          <div className="font-headline italic text-3xl text-on-surface leading-none mb-1">
                            {metric.value}
                          </div>
                          <div className="font-label text-[8px] uppercase tracking-widest text-secondary opacity-70">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <ul className="space-y-5">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="font-body text-secondary text-lg leading-relaxed flex gap-4 group"
                    >
                      <span className="text-[#D4A5A5] mt-2.5 w-1 h-1 rounded-full bg-[#D4A5A5] shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-5 space-y-24">
            {/* Education Section */}
            <div>
              <h3 className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface mb-10 font-bold border-b border-outline-variant/20 pb-4">
                Academic Foundation
              </h3>
              <div className="space-y-12">
                {education.map((edu: Education) => (
                  <div key={edu.school} className="relative">
                    <h4 className="font-headline text-3xl italic text-on-surface mb-2">
                      {edu.school}
                    </h4>
                    <p className="font-body text-on-surface/80 text-lg mb-2">
                      {edu.degree}
                    </p>
                    <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-4">
                      {edu.period}
                    </p>
                    {edu.honors && (
                      <span className="inline-block px-3 py-1 rounded-full bg-[#D4A5A5]/10 border border-[#D4A5A5]/30 text-[#D81B60] dark:text-[#FFB6C1] text-[9px] uppercase tracking-widest font-bold">
                        {edu.honors}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Matrix */}
            <div>
              <h3 className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface mb-10 font-bold border-b border-outline-variant/20 pb-4">
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                {expertise.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-label text-[9px] uppercase tracking-[0.2em] text-[#D4A5A5] mb-4 font-bold">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.skills.slice(0, 5).map((skill) => (
                        <li
                          key={skill}
                          className="font-body text-secondary text-sm hover:text-on-surface transition-colors cursor-default"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus: Bright Pink Glass Block */}
        <motion.div
          className="mt-40 p-1 md:p-1 rounded-[3rem] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 dark:bg-[#9E7676]/10 backdrop-blur-3xl border border-[#FFB6C1]/30 dark:border-[#9E7676]/30 p-12 md:p-20 relative overflow-hidden rounded-[2.8rem]">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none select-none">
              <span className="font-headline italic text-[12rem] leading-none">
                Growth
              </span>
            </div>

            <div className="max-w-3xl relative z-10">
              <span className="inline-block px-4 py-1 mb-8 rounded-full bg-white/80 dark:bg-[#9E7676]/20 backdrop-blur-xl border border-[#FFB6C1]/50 text-[#D81B60] dark:text-[#FFB6C1] font-label text-[10px] uppercase tracking-[0.3em] font-bold shadow-[0_0_15px_rgba(255,192,203,0.3)]">
                Continuous Evolution
              </span>
              <h3 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-8 leading-tight">
                Current Focus
              </h3>
              <p className="font-body text-xl md:text-2xl text-secondary leading-tight">
                Currently deepening expertise in{" "}
                <span className="text-on-surface font-semibold italic border-b-2 border-[#D4A5A5]/30">
                  Data Analytics and SQL
                </span>{" "}
                to drive precision-based product strategy and optimize complex
                user lifecycle flows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
