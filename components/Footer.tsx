import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/olayemi-adegoke-b6a6081b9" },
    { label: "Email", href: "mailto:adegokeolayemi661@gmail.com" },
    { label: "Archive", href: "/projects" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <footer className="w-full pt-40 pb-20 px-8 relative overflow-hidden bg-background border-t border-[#D4A5A5]/10">
      {/* Signature Ambient Glow - Positioned to create depth behind the links */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#D4A5A5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col space-y-32">
          
          {/* Main Footer Row: Giant Name + High-End Link List */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div className="max-w-md">
              <h2 className="font-headline italic text-7xl md:text-8xl tracking-tighter text-on-surface leading-[0.8] mb-8">
                Olayemi <br /> 
                <span className="text-[#D4A5A5]">Adegoke.</span>
              </h2>
              <p className="font-body text-lg text-secondary leading-tight tracking-tight max-w-[280px]">
                Technical Product Manager synthesizing technical precision with strategic depth.
              </p>
            </div>

            {/* Links styled as a refined vertical directory */}
            <nav className="flex flex-col space-y-4 text-left md:text-right w-full md:w-auto">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#D4A5A5] font-bold mb-2">Navigation</span>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group font-headline italic text-3xl text-on-surface hover:text-[#D4A5A5] transition-all duration-500 flex items-center md:justify-end gap-4"
                >
                  <span className="opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 text-sm italic font-body tracking-widest text-[#D4A5A5]">
                    Explore
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Technical Metadata Bar: The "Credits" */}
          <div className="pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8">
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