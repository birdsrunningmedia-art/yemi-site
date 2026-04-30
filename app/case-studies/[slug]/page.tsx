'use client';

import { caseStudies, CaseStudy, projects, Project } from '../../../lib/data';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';
import Link from 'next/link';

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  
  const study = caseStudies.find((s: CaseStudy) => s.id === slug);
  const project = projects.find((p: Project) => p.id === slug);

  if (!study && !project) {
    notFound();
  }

  // Safely extract the link based on which data source was found
  const projectLink = project?.link || study?.link || null;

  const displayData = study || {
    title: project?.title || '',
    subtitle: project?.category || '',
    description: project?.description || '',
    image: project?.image || '',
    problem: 'Case study details are currently being finalized. This project involved deep technical leadership and strategic execution.',
    impact: 'Significant improvements in system performance and user engagement were observed.',
    categories: project?.tags || [],
  };

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.main 
      className="pt-40 pb-40 px-8 max-w-4xl mx-auto" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="mb-24">
        <motion.span 
          className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-6 block font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {displayData.subtitle}
        </motion.span>
        <motion.h1 
          className="font-headline italic text-6xl md:text-8xl tracking-tighter text-on-surface mb-10 leading-[0.85]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {displayData.title}
        </motion.h1>
        <motion.p 
          className="font-body text-xl md:text-2xl text-secondary max-w-2xl leading-tight tracking-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {displayData.description}
        </motion.p>

        {/* Optional View Live Project Button */}
        {projectLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href={projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-[#D4A5A5]/30 text-[#D4A5A5] font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4A5A5] hover:text-white transition-all duration-500 backdrop-blur-md group"
            >
              View Live Project
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </motion.div>
        )}
      </header>

      <motion.div 
        className="relative p-2.5 rounded-[2.5rem] bg-white/5 border border-[#D4A5A5]/20 backdrop-blur-3xl mb-32"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={displayData.image}
          alt={displayData.title}
          className="w-full h-auto object-cover rounded-[1.8rem] shadow-2xl"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-8 font-bold">The Problem</h3>
          <p className="font-body text-lg text-secondary leading-relaxed">
            {displayData.problem}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-8 font-bold">The Impact</h3>
          <p className="font-body text-lg text-secondary leading-relaxed">
            {displayData.impact}
          </p>
        </motion.div>
      </div>

      <section className="mb-64">
        <motion.h2 
          className="font-headline italic text-4xl mb-16 text-on-surface"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Core Implementation
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayData.categories.map((cat: string, idx: number) => (
            <motion.div 
              key={cat} 
              className="p-10 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:border-[#D4A5A5]/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-label text-[9px] uppercase tracking-[0.4em] text-[#D4A5A5] mb-4 font-bold">{cat}</h4>
              <p className="font-body text-on-surface/80 leading-relaxed">
                Strategic execution for {cat} systems within the {displayData.title} framework.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        className="border-t border-on-surface/10 pt-40 pb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="font-label text-[10px] uppercase tracking-[0.5em] text-[#D4A5A5] mb-12 block font-bold">
          Continue Exploration
        </span>
        <Link href={`/case-studies/${nextProject.id}`} className="group inline-block">
          <h2 className="font-headline italic text-5xl md:text-8xl tracking-tighter text-on-surface group-hover:text-[#D4A5A5] transition-all duration-700 mb-20 leading-[0.85]">
            {nextProject.title}
          </h2>
          <div className="max-w-2xl mx-auto p-2.5 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden group-hover:border-[#D4A5A5]/40 transition-all duration-700">
             <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
              src={nextProject.image} 
              alt={nextProject.title} 
              className="w-full aspect-video object-cover rounded-[1.8rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </Link>
      </motion.section>
    </motion.main>
  );
}