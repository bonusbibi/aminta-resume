import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles,
  Terminal
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FCFBF7]/90 backdrop-blur-md border-b border-[#E8E6DC] py-3.5 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FF202B] text-white flex items-center justify-center font-display font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            AR
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-[#181A20] group-hover:text-[#FF202B] transition-colors">
              Aminta Rungruang
            </span>
            <span className="text-[11px] font-mono font-medium text-[#5E6272] -mt-1">
              CS Undergraduate
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-[#E8E6DC] px-2 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#5E6272] hover:text-[#181A20] hover:bg-[#F6F5EE] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume/Aminta_Rungruang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#181A20] hover:bg-[#FF202B] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow"
          >
            <FileText size={14} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          className="md:hidden p-2 text-[#181A20] hover:bg-[#F6F5EE] rounded-lg transition-colors border border-[#E8E6DC]"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FCFBF7] border-b border-[#E8E6DC] px-6 py-5 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[#5E6272] hover:text-[#181A20] hover:bg-white transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E8E6DC]">
              <a
                href="/resume/Aminta_Rungruang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF202B] text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm"
              >
                <FileText size={15} />
                <span>View Full Resume</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
