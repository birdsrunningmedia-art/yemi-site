"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "adegokeolayemi661@gmail.com",
      href: "mailto:adegokeolayemi661@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "olayemi-adegoke",
      href: "https://www.linkedin.com/in/olayemi-adegoke-b6a6081b9",
    },
    { label: "Phone", value: "+234 802 595 7578", href: "tel:+2348025957578" },
  ];

  return (
    <div className="bg-background">
      {/* 1. Cinematic Banner */}
      <div className="relative h-[60vh] md:h-[50vh] w-full max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] group mt-24">
        <div className="absolute inset-0 bg-[url('/images/background.webp')] bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-on-surface" />
        <div className="absolute inset-0 bg-[#D4A5A5]/10 mix-blend-overlay" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-headline italic text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.85]"
          >
            {"Let's build"} <br />
            <span className="text-[#D4A5A5]">the future.</span>
          </motion.h2>
        </div>
      </div>

      {/* 2. Directory Section */}
      <motion.section
        className="py-24 px-8 max-w-4xl mx-auto"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-24">
          <span className="inline-block px-5 py-1.5 mb-10 rounded-full bg-[#D4A5A5]/10 border border-[#D4A5A5]/20 text-[#FFB6C1] font-label text-[10px] uppercase tracking-[0.4em] font-bold">
            Connect & Build
          </span>

          <p className="font-body text-2xl md:text-3xl text-on-surface/80 leading-tight tracking-tight max-w-2xl mx-auto">
            I’m always open to discussing new opportunities, collaborations, and
            <span className="text-[#D4A5A5] italic font-headline">
              {" "}
              innovative ideas{" "}
            </span>
            across product and technology.
          </p>
        </div>

        {/* Contact Links Grid - Overflow Protected High-Pop Version */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label.includes("LinkedIn") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col p-4 md:p-6 rounded-[2.5rem]bg-white/60 backdrop-blur-xl border border-[#D4A5A5]/30 shadow-[0_20px_40px_-15px_rgba(212,165,165,0.2)] hover:-translate-y-2 hover:bg-white/95 hover:border-[#D4A5A5] hover:shadow-[0_30px_60px_-12px_rgba(212,165,165,0.4)] transition-all duration-500 ease-[0.16, 1, 0.3, 1] overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-full">
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D81B60] block mb-4 font-black">
                  {link.label}
                </span>

                {/* break-all ensures long emails don't spill; leading-tight keeps it elegant */}
                <h3 className="font-headline italic text-xl text-on-surface mb-2 leading-tight break-all group-hover:text-[#D81B60] transition-colors duration-300">
                  {link.value}
                </h3>

                <p className="font-label text-[8px] uppercase tracking-widest text-[#D4A5A5] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 font-bold">
                  Click to connect
                </p>
              </div>

              {/* Action Indicator */}
              <div className="mt-4 flex justify-end relative z-10">
                <div className="w-12 h-12 rounded-full border border-[#D4A5A5]/20 flex items-center justify-center group-hover:bg-[#D4A5A5] group-hover:border-[#D4A5A5] shadow-sm transition-all duration-500">
                  <span className="text-[#D4A5A5] group-hover:text-white transition-transform group-hover:translate-x-1 font-bold">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
