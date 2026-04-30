import React from "react";
import {
  FaRegFilePdf,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 flex items-center 
            /* Mobile: Tight gaps | Desktop: Wide gaps */
            gap-1 md:gap-4 
            /* Mobile: smaller padding | Desktop: p-3 */
            p-2 md:p-3 
            mt-4 md:mt-8 z-50
            bg-white/70 dark:bg-[#9E7676]/15 
            backdrop-blur-2xl 
            border border-[#FFB6C1]/40 dark:border-[#9E7676]/40 
            rounded-full w-[92%] md:w-fit max-w-fit
            shadow-[0_12px_40px_rgba(255,182,193,0.2)] dark:shadow-none"
    >
      {/* Home Icon */}
      <Link href="/">
        <div className="group p-2 md:p-3.5 rounded-full hover:bg-[#D4A5A5]/15 transition-all duration-500 cursor-pointer shrink-0">
          <FaHome className="text-secondary h-5 w-5 md:h-7 md:w-7 group-hover:text-[#D81B60] dark:group-hover:text-[#FFB6C1] transition-colors" />
        </div>
      </Link>

      <span className="text-outline-variant/30 md:text-outline-variant/40 px-0.5 select-none text-sm md:text-xl font-light">
        |
      </span>

      {/* Social Icons Stack */}
      <div className="flex items-center gap-0.5 md:gap-2">
        <Link
          href="https://x.com/yekinAbdulwahab" // to be replaced with linkedIn
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group p-2 md:p-3.5 rounded-full hover:bg-[#D4A5A5]/15 transition-all duration-500 cursor-pointer shrink-0">
            <FaLinkedin className="text-secondary h-5 w-5 md:h-7 md:w-7 group-hover:text-[#D81B60] dark:group-hover:text-[#FFB6C1] transition-colors" />
          </div>
        </Link>

        {/* <div className="group p-2 md:p-3.5 rounded-full hover:bg-[#D4A5A5]/15 transition-all duration-500 cursor-pointer shrink-0">
          <FaGithub className="text-secondary h-5 w-5 md:h-7 md:w-7 group-hover:text-[#D81B60] dark:group-hover:text-[#FFB6C1] transition-colors" />
        </div> */}

        <div className="group p-2 md:p-3.5 rounded-full hover:bg-[#D4A5A5]/15 transition-all duration-500 cursor-pointer shrink-0">
          <FaRegFilePdf className="text-secondary h-5 w-5 md:h-7 md:w-7 group-hover:text-[#D81B60] dark:group-hover:text-[#FFB6C1] transition-colors" />
        </div>
      </div>

      <span className="text-outline-variant/30 md:text-outline-variant/40 px-0.5 select-none text-sm md:text-xl font-light">
        |
      </span>

      {/* Contact Button */}
      <Link href="/#contact" className="shrink-0">
        <button
          className="
                    ml-1 md:ml-3 
                    px-4 md:px-8 
                    py-2 md:py-3 
                    rounded-full 
                    bg-white/90 dark:bg-[#9E7676]/25 
                    border border-[#FFB6C1]/60 dark:border-[#9E7676]/60 
                    text-[#D81B60] dark:text-[#FFB6C1] 
                    font-label text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.25em] font-black 
                    shadow-[0_0_15px_rgba(255,192,203,0.3)]
                    hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Contact
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
