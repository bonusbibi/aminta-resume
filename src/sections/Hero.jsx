import React, { useState, useEffect } from 'react';
import { 
  ArrowDownRight, 
  MapPin, 
  Calendar, 
  FileText, 
  Sparkles, 
  Mail,
  GraduationCap,
  Code2,
  RefreshCw,
  Sparkle
} from 'lucide-react';
import { GitHubIcon } from '../components/GitHubIcon';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  // 3 Photos: Real Photo, Avatar Half, Avatar Full
  const avatars = [
    {
      id: 'real',
      src: '/aminta_pic.jpg',
      label: t.hero.photoLabels.real,
      tag: 'Real'
    },
    {
      id: 'half',
      src: '/avatar_half.jpg',
      label: t.hero.photoLabels.half,
      tag: 'Avatar Half'
    },
    {
      id: 'full',
      src: '/avatar_full.jpg',
      label: t.hero.photoLabels.full,
      tag: 'Avatar Full'
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-switch avatar every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % avatars.length);
        setIsAnimating(false);
      }, 300);
    }, 4500);

    return () => clearInterval(timer);
  }, [avatars.length]);

  const handleManualSwitch = (index) => {
    if (index === currentIdx) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIdx(index);
      setIsAnimating(false);
    }, 250);
  };

  return (
    <section id="home" className="relative pt-32 pb-24 px-6 max-w-6xl mx-auto overflow-visible">
      
      {/* Dynamic Background Ambient Blobs - Floating Animations */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#FFA242]/25 to-[#FF202B]/20 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow -z-10"></div>
      <div className="absolute top-28 right-4 w-96 h-96 bg-gradient-to-br from-[#A0E8E8]/35 via-[#87FEBC]/25 to-[#FFDD63]/25 rounded-full filter blur-3xl pointer-events-none animate-float-slow -z-10"></div>

      {/* Floating Interactive Micro-Badges */}
      <div className="hidden lg:flex items-center gap-2 absolute top-24 right-10 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#E8E6DC] shadow-card animate-float-slow">
        <div className="w-6 h-6 rounded-lg bg-[#FF202B] text-white flex items-center justify-center">
          <Code2 size={13} />
        </div>
        <div className="text-[11px] font-mono font-semibold text-[#181A20]">
          TypeScript • Flutter • Python
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 absolute bottom-12 left-2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#E8E6DC] shadow-card animate-float-reverse">
        <div className="w-6 h-6 rounded-lg bg-[#87FEBC] text-[#181A20] flex items-center justify-center font-bold text-xs">
          ★
        </div>
        <div className="text-[11px] font-mono font-semibold text-[#181A20]">
          NSC 2026 Finalist Award
        </div>
      </div>

      {/* Top Status & Location Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white via-white to-[#87FEBC]/20 border border-[#87FEBC]/60 text-xs font-bold text-[#181A20] shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#87FEBC] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#87FEBC]"></span>
          </span>
          <span className="font-mono text-[#5E6272] uppercase tracking-wider text-[11px]">{t.hero.statusLabel}</span>
          <span>{t.hero.statusText}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E6DC] text-xs font-semibold text-[#181A20] shadow-sm">
          <MapPin size={13} className="text-[#FF202B]" />
          <span>{t.hero.location}</span>
        </div>
      </div>

      {/* Main Grid: Left Intro + Right Portrait & Quick Highlights */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-[#FF202B]/15 via-[#FFA242]/15 to-[#FFDD63]/15 border border-[#FF202B]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#FF202B]">
              <Sparkles size={13} />
              <span>{t.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#181A20] leading-[1.12]">
              {t.hero.headlinePrefix} <span className="gradient-text-cool">{t.hero.headlineHighlight}</span> {t.hero.headlineSuffix}
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#5E6272] leading-relaxed max-w-2xl font-normal">
            {t.hero.bio}
          </p>

          {/* Metrics / Key Stats Highlight */}
          <div className="grid grid-cols-3 gap-3.5 pt-2">
            <div className="bg-gradient-to-br from-white to-[#FF202B]/5 p-4 rounded-2xl border-2 border-[#FF202B]/20 shadow-sm hover:border-[#FF202B] hover:shadow-card transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#FF202B]">8+</div>
              <div className="text-xs font-semibold text-[#181A20] mt-0.5">{t.hero.stats.projects}</div>
              <div className="text-[10px] font-mono text-[#5E6272]">{t.hero.stats.projectsSub}</div>
            </div>

            <div className="bg-gradient-to-br from-white to-[#FFA242]/5 p-4 rounded-2xl border-2 border-[#FFA242]/20 shadow-sm hover:border-[#FFA242] hover:shadow-card transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#FFA242]">NSC</div>
              <div className="text-xs font-semibold text-[#181A20] mt-0.5">{t.hero.stats.nsc}</div>
              <div className="text-[10px] font-mono text-[#5E6272]">{t.hero.stats.nscSub}</div>
            </div>

            <div className="bg-gradient-to-br from-white to-[#87FEBC]/10 p-4 rounded-2xl border-2 border-[#87FEBC]/30 shadow-sm hover:border-[#87FEBC] hover:shadow-card transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#181A20]">2027</div>
              <div className="text-xs font-semibold text-[#181A20] mt-0.5">{t.hero.stats.grad}</div>
              <div className="text-[10px] font-mono text-[#5E6272]">{t.hero.stats.gradSub}</div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#FF202B] to-[#FFA242] hover:from-[#181A20] hover:to-[#181A20] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-glow-red hover:shadow-card"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowDownRight size={17} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/resume/Aminta_Rungruang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF8F5] border-2 border-[#E8E6DC] hover:border-[#FFA242] text-[#181A20] text-sm font-bold px-5 py-3.5 rounded-xl transition-all duration-200 shadow-sm"
            >
              <FileText size={16} className="text-[#FFA242]" />
              <span>{t.hero.cvBtn}</span>
            </a>

            <a
              href="https://github.com/amintarungruang"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white hover:bg-[#FAF8F5] border-2 border-[#E8E6DC] hover:border-[#181A20] text-[#181A20] rounded-xl transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>

            <a
              href="mailto:aminta.rungruang@gmail.com"
              className="p-3.5 bg-white hover:bg-[#FAF8F5] border-2 border-[#E8E6DC] hover:border-[#FF202B] text-[#FF202B] rounded-xl transition-all shadow-sm"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column (5 cols) - Portrait with Animated Multi-Avatar Switching */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Subtle floating badge behind portrait */}
          <div className="absolute -top-5 -left-5 bg-gradient-to-r from-[#FFDD63] to-[#FFA242] text-[#181A20] text-xs font-mono font-bold px-3 py-1.5 rounded-xl shadow-md z-20 flex items-center gap-1.5 animate-float-slow">
            <Sparkles size={13} />
            <span>{t.hero.passionateBadge}</span>
          </div>

          <div className="relative w-full max-w-sm">
            
            {/* Colorful Multi-tone Gradient Frame Behind */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF202B] via-[#FFA242] to-[#87FEBC] rounded-[32px] opacity-75 blur-sm animate-pulse-glow"></div>

            {/* Main Interactive Card */}
            <div className="relative bg-white rounded-[28px] border-2 border-white p-4 shadow-card-hover hover:scale-[1.01] transition-all duration-300">
              
              {/* Photo Container with Fade / Scale Transitions */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E6DC] relative group">
                <img
                  key={avatars[currentIdx].src}
                  src={avatars[currentIdx].src}
                  alt={avatars[currentIdx].label}
                  className={`w-full h-full object-cover object-top transition-all duration-500 ${
                    isAnimating ? 'opacity-20 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
                  }`}
                />

                {/* Avatar Switcher Indicators at Top-Right */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#E8E6DC] shadow-sm z-10">
                  {avatars.map((av, idx) => (
                    <button
                      key={av.id}
                      onClick={() => handleManualSwitch(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        currentIdx === idx
                          ? 'w-5 h-2 bg-[#FF202B]'
                          : 'w-2 h-2 bg-[#E8E6DC] hover:bg-[#FFA242]'
                      }`}
                      title={av.label}
                      aria-label={av.label}
                    />
                  ))}
                </div>
                
                {/* Floating Glassmorphism Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-[#E8E6DC] p-3 rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs font-bold text-[#181A20] flex items-center gap-1.5">
                      <span>Aminta Rungruang</span>
                      <span className="text-[10px] font-mono font-bold text-[#FF202B] bg-[#FF202B]/10 px-1.5 py-0.5 rounded">
                        {avatars[currentIdx].label}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-[#5E6272] mt-0.5">
                      {t.hero.photoSubtitle}
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#87FEBC] ring-4 ring-[#87FEBC]/30"></span>
                </div>
              </div>

              {/* Card Bottom Meta with Color accents */}
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#181A20]">
                  <GraduationCap size={16} className="text-[#FFA242]" />
                  {t.hero.studentTag}
                </span>
                <span className="font-mono text-[11px] font-bold text-white bg-gradient-to-r from-[#FF202B] to-[#FFA242] px-2.5 py-0.5 rounded-full shadow-sm">
                  {t.hero.graduatingTag}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
