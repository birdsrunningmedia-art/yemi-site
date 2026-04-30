'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, Project } from "@/lib/data";

export default function Projects() {
  return (
    <section className="px-8 max-w-4xl mx-auto py-32" id="projects">
      <motion.div
        className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="font-headline italic text-4xl md:text-5xl tracking-tighter text-on-surface mb-2">
            Selected <span className="text-[#D4A5A5]">Projects</span>
          </h2>
          <p className="font-body text-secondary text-lg">
            A curation of technical product leadership.
          </p>
        </div>
        <Link
          href="/projects"
          className="group flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.3em] text-on-surface font-bold transition-all"
        >
          <span className="border-b border-[#D4A5A5]/40 pb-1 group-hover:border-[#D4A5A5] transition-colors">
            View All Work
          </span>
          <span className="text-[#D4A5A5] transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>

      {/* Grid: Reduced gap to lg:gap-16 to fit max-w-4xl comfortably */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-12 lg:gap-x-16">
        {projects.slice(0, 5).map((project: Project, index: number) => {
          // Adjusting column spans for a tighter 4xl container
          const isLarge = index === 0 || index === 4;
          const gridSpan = isLarge
            ? "md:col-span-12 lg:col-span-7"
            : "md:col-span-6 lg:col-span-5";

          // Responsive margins: mt-0 on mobile, mt-32 on desktop
          const marginTop =
            index === 1 ? "lg:mt-32" : index === 3 ? "lg:mt-24" : "";
          const aspectClass =
            project.aspectRatio === "video" ? "aspect-video" : "aspect-square";

          // The Final Featured Project (Full Width)
          if (index === 4) {
            return (
              <motion.div
                key={project.id}
                className="md:col-span-12 flex flex-col lg:flex-row gap-10 items-center mt-20 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/case-studies/${project.id}`}
                  className="w-full lg:w-3/5"
                >
                  <div className="relative p-3 rounded-[2rem] overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-[#D4A5A5]/20 dark:border-[#9E7676]/20 transition-all duration-700 group-hover:border-[#D4A5A5]/50 group-hover:shadow-[0_0_40px_rgba(212,165,165,0.1)]">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover rounded-[1.5rem]"
                    />
                  </div>
                </Link>
                <div className="w-full lg:w-2/5 px-2">
                  <p className="font-label text-[9px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-4 font-bold">
                    {project.category}
                  </p>
                  <h4 className="font-headline text-2xl italic mb-4 text-on-surface">
                    {project.title}
                  </h4>
                  <p className="font-body text-secondary text-base leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href={`/case-studies/${project.id}`}
                    className="font-label text-[10px] uppercase tracking-widest border-b border-on-surface/10 pb-1 hover:border-[#D4A5A5] transition-colors"
                  >
                    Explore Study
                  </Link>
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={project.id}
              className={`${gridSpan} flex flex-col ${marginTop} group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${project.id}`}>
                <div className="relative p-2.5 rounded-[1.8rem] overflow-hidden bg-white/5 dark:bg-white/5 border border-[#D4A5A5]/10 dark:border-white/5 transition-all duration-700 group-hover:border-[#D4A5A5]/40">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${aspectClass} object-cover rounded-[1.4rem]`}
                  />
                </div>
              </Link>
              <div className="mt-8 px-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline text-2xl italic text-on-surface">
                    {project.title}
                  </h4>
                </div>
                <span className="font-label text-[9px] uppercase tracking-[0.3em] text-[#D4A5A5] font-bold">
                  {project.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
