import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowUpRight, 
  Languages
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.contact, href: '#contact' },
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
              {t.nav.role}
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

        {/* Right Action: Language Switcher & Resume */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E6DC] bg-white hover:bg-[#F6F5EE] text-xs font-bold text-[#181A20] transition-all shadow-sm hover:border-[#FFA242]"
            title={lang === 'th' ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
            aria-label="Toggle Language"
          >
            <Languages size={14} className="text-[#FF202B]" />
            <span className={lang === 'th' ? 'text-[#FF202B]' : 'text-[#5E6272]'}>TH</span>
            <span className="text-[#E8E6DC]">/</span>
            <span className={lang === 'en' ? 'text-[#FF202B]' : 'text-[#5E6272]'}>EN</span>
          </button>

          {/* CTA Resume Button */}
          <a
            href="/resume/Aminta_Rungruang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#181A20] hover:bg-[#FF202B] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow"
          >
            <FileText size={14} />
            <span>{t.nav.resume}</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </div>

        {/* Mobile View: Lang button + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-[#E8E6DC] bg-white text-xs font-bold text-[#181A20]"
            aria-label="Toggle Language"
          >
            {lang === 'th' ? '🇹🇭 TH' : '🇬🇧 EN'}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            className="p-2 text-[#181A20] hover:bg-[#F6F5EE] rounded-lg transition-colors border border-[#E8E6DC]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
            <div className="pt-3 mt-2 border-t border-[#E8E6DC] flex flex-col gap-2">
              <a
                href="/resume/Aminta_Rungruang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF202B] text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm"
              >
                <FileText size={15} />
                <span>{t.nav.resume}</span>
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
