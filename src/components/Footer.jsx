import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { GitHubIcon } from './GitHubIcon';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-[#E8E6DC] bg-white text-[#5E6272]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-lg bg-[#181A20] text-white flex items-center justify-center font-display font-bold text-xs">
            AR
          </div>
          <div>
            <div className="text-xs font-semibold text-[#181A20]">
              Aminta Rungruang © 2026
            </div>
            <div className="text-[11px] text-[#5E6272]">
              Computer Science Undergraduate • Phetchaburi Rajabhat University
            </div>
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <a
            href="https://github.com/amintarungruang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#181A20] transition-colors"
          >
            <GitHubIcon size={14} />
            <span>GitHub</span>
          </a>
          <span className="text-[#E8E6DC]">•</span>
          <a
            href="mailto:aminta.rungruang@gmail.com"
            className="hover:text-[#181A20] transition-colors"
          >
            Email
          </a>
          <span className="text-[#E8E6DC]">•</span>
          <a
            href="/resume/Aminta_Rungruang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#181A20] transition-colors"
          >
            Resume PDF
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-[#F6F5EE] hover:bg-[#181A20] hover:text-white transition-colors ml-2"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
