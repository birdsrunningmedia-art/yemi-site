

export default function Footer() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/olayemi-adegoke-b6a6081b9" },
    { label: "Email", href: "mailto:adegokeolayemi661@gmail.com" },
    { label: "Archive", href: "/projects" },
    { label: "Resume", href: "/resume.pdf", download: true }, // Added flag for download logic
  ];

  return (
    <footer className="w-full pt-24 md:pt-40 pb-20 px-8 relative overflow-hidden bg-background border-t border-[#D4A5A5]/10">
      {/* Signature Ambient Glow */}
      <div className="absolute -bottom-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#D4A5A5]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col space-y-20 md:space-y-32">
          
          {/* Main Footer Row */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-16 text-center md:text-left">
            <div className="max-w-md flex flex-col items-center md:items-start">
              <h2 className="font-headline italic text-6xl md:text-8xl tracking-tighter text-on-surface leading-[0.8] mb-8">
                Olayemi <br /> 
                <span className="text-[#D4A5A5]">Adegoke.</span>
              </h2>
              <p className="font-body text-lg text-secondary leading-tight tracking-tight max-w-[280px]">
                Technical Product Manager synthesizing technical precision with strategic depth.
              </p>
            </div>

            {/* Links Styled for Mobile Centering */}
            <nav className="flex flex-col space-y-4 items-center md:items-end w-full md:w-auto">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] font-bold mb-2">Navigation</span>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  // Logic to download if it's the resume, otherwise open new tab
                  target={link.label === "Resume" ? "_self" : "_blank"}
                  download={link.label === "Resume" ? "Olayemi_Adegoke_Resume.pdf" : undefined}
                  className="group font-headline italic text-3xl text-on-surface hover:text-[#D4A5A5] transition-all duration-500 flex items-center gap-4"
                >
                  {/* Hide 'Explore' on mobile to keep things clean, show on md+ */}
                  <span className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 text-sm italic font-body tracking-widest text-[#D4A5A5]">
                    Explore
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Technical Metadata Bar */}
          <div className="pt-12 border-t border-on-surface/5 flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <p className="font-label text-[9px] uppercase tracking-[0.3em] text-secondary font-bold">
                Lagos, NG — Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}