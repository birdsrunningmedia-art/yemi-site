'use client';

import { projects, Project } from '../../lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ProjectsPage() {
  return (
    <motion.main 
      className="pt-40 pb-40 px-8 max-w-4xl mx-auto" // Locked to your 4xl identity
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* Header Section */}
      <motion.header className="mb-32" variants={fadeInUp}>
        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-6 block font-bold">
          Archive
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl tracking-tighter text-on-surface mb-8 leading-[0.85]">
          Selected <span className="text-[#D4A5A5]">Works</span>
        </h1>
        <p className="font-body text-xl md:text-2xl text-secondary max-w-xl leading-tight tracking-tight">
          A curated archive of products developed at the intersection of technical architecture and user-centric strategy.
        </p>
      </motion.header>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
        {projects.map((project: Project, index: number) => {
          // Responsive Grid Math for 4xl
          let gridSpan = 'md:col-span-7'; 
          let aspectClass = 'aspect-[4/5]'; // Taller aspects feel more editorial

          if (index % 4 === 1) {
            gridSpan = 'md:col-span-5 md:mt-48';
            aspectClass = 'aspect-square';
          } else if (index % 4 === 2) {
            gridSpan = 'md:col-span-5 md:col-start-2';
            aspectClass = 'aspect-[3/4]';
          } else if (index % 4 === 3) {
            gridSpan = 'md:col-span-12 mt-12';
            aspectClass = 'aspect-video';
          }

          return (
            <motion.article 
              key={project.id} 
              className={`${gridSpan} group`}
              variants={fadeInUp}
            >
              <Link href={`/case-studies/${project.id}`}>
                {/* Pink Glass Image Container */}
                <div className="relative p-2.5 rounded-[2rem] overflow-hidden bg-white/5 dark:bg-white/5 border border-[#D4A5A5]/20 dark:border-white/10 transition-all duration-700 group-hover:border-[#D4A5A5]/50 group-hover:shadow-[0_0_40px_rgba(212,165,165,0.1)] mb-8">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${aspectClass} object-cover rounded-[1.6rem] grayscale group-hover:grayscale-0 transition-all duration-1000`}
                  />
                </div>
              </Link>

              {/* Tags: Using the Pink Glass Pill style */}
              <div className="flex flex-wrap gap-2 mb-6 px-2">
                {project.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="font-label text-[9px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full bg-[#D4A5A5]/5 border border-[#D4A5A5]/20 text-[#D4A5A5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="px-2">
                <Link href={`/case-studies/${project.id}`}>
                  <h2 className="font-headline text-3xl italic mb-3 text-on-surface group-hover:text-[#D4A5A5] transition-colors duration-500">
                    {project.title}
                  </h2>
                </Link>
                <p className="font-body text-secondary text-base leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Footer CTA */}
      <motion.section 
        className="mt-64 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link className="inline-flex flex-col items-center gap-6 group" href="/#contact">
          <span className="font-label text-[10px] uppercase tracking-[0.5em] text-[#D4A5A5] font-bold">Start a Conversation</span>
          <span className="font-headline italic text-5xl md:text-7xl text-on-surface group-hover:opacity-40 transition-all duration-700">
            Let&apos;s discuss the process <span className="inline-block group-hover:translate-x-4 transition-transform duration-700">→</span>
          </span>
        </Link>
      </motion.section>
    </motion.main>
  );
}