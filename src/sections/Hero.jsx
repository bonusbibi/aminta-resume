import React from 'react';
import { 
  ArrowDownRight, 
  MapPin, 
  Calendar, 
  FileText, 
  Sparkles, 
  Mail,
  GraduationCap,
  Briefcase,
  Code2,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GitHubIcon } from '../components/GitHubIcon';
import FloatingOrbs from '../components/FloatingOrbs';

const Hero = () => {
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
          <span className="font-mono text-[#5E6272] uppercase tracking-wider text-[11px]">Availability:</span>
          <span>Open for Internship (Nov 2026 – Mar 2027)</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E6DC] text-xs font-semibold text-[#181A20] shadow-sm">
          <MapPin size={13} className="text-[#FF202B]" />
          <span>Phetchaburi, Thailand</span>
        </div>
      </div>

      {/* Main Grid: Left Intro + Right Portrait & Quick Highlights */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-[#FF202B]/15 via-[#FFA242]/15 to-[#FFDD63]/15 border border-[#FF202B]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#FF202B]">
              <Sparkles size={13} />
              <span>Computer Science Undergraduate</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#181A20] leading-[1.12]">
              Building <span className="gradient-text-cool">web & mobile</span> solutions with curiosity.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#5E6272] leading-relaxed max-w-2xl font-normal">
            I'm <strong className="text-[#181A20] font-bold">Aminta Rungruang</strong>, an enthusiastic CS student at Phetchaburi Rajabhat University. I specialize in developing intuitive web interfaces, reliable backend architectures, and AI-assisted mobile tools.
          </p>

          {/* Metrics / Key Stats Highlight with Vivid Borders & Shadows */}
          <div className="grid grid-cols-3 gap-3.5 pt-2">
            <div className="bg-gradient-to-br from-white to-[#FF202B]/5 p-4 rounded-2xl border-2 border-[#FF202B]/20 shadow-sm hover:border-[#FF202B] hover:shadow-card transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#FF202B]">8+</div>
              <div className="text-xs font-semibold text-[#181A20] mt-0.5">Projects Built</div>
              <div className="text-[10px] font-mono text-[#5E6272]">Web, Mobile & AI</div>
            </div>

            <div className="bg-gradient-to-br from-white to-[#FFA242]/5 p-4 rounded-2xl border-2 border-[#FFA242]/20 shadow-sm hover:border-[#FFA242] hover:shadow-card transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#FFA242]">NSC</div>
              <div className="text-xs font-semibold text-[#181A20] mt-0.5">Finalist Award</div>
              <div className="text-[10px] font-mono text-[#5E6272]">National 2026</div>
            </div>

            <div className="bg-gradient-to-br from-white to-[#87FEBC]/10 p-4 rounded-2xl border-2 border-[#87FEBC]/30 shadow-sm hover:border-[#87FEBC] hover:shadow-card transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-display font-black text-[#181A20]">2027</div>
              <div className="text-xs font-semibold text-[#181A20] mt-0.5">Expected Grad</div>
              <div className="text-[10px] font-mono text-[#5E6272]">B.Sc. CS @ PBRU</div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#FF202B] to-[#FFA242] hover:from-[#181A20] hover:to-[#181A20] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-glow-red hover:shadow-card"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight size={17} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/resume/Aminta_Rungruang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF8F5] border-2 border-[#E8E6DC] hover:border-[#FFA242] text-[#181A20] text-sm font-bold px-5 py-3.5 rounded-xl transition-all duration-200 shadow-sm"
            >
              <FileText size={16} className="text-[#FFA242]" />
              <span>Download CV</span>
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

        {/* Right Column (5 cols) - Portrait with Vibrant Floating Gradient Accents */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Subtle floating badge behind portrait */}
          <div className="absolute -top-5 -left-5 bg-gradient-to-r from-[#FFDD63] to-[#FFA242] text-[#181A20] text-xs font-mono font-bold px-3 py-1.5 rounded-xl shadow-md z-20 flex items-center gap-1.5 animate-float-slow">
            <Sparkles size={13} />
            <span>Passionate Builder</span>
          </div>

          <div className="relative w-full max-w-sm">
            
            {/* Colorful Multi-tone Gradient Frame Behind */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FF202B] via-[#FFA242] to-[#87FEBC] rounded-[32px] opacity-75 blur-sm animate-pulse-glow"></div>

            {/* Main Interactive Card */}
            <div className="relative bg-white rounded-[28px] border-2 border-white p-4 shadow-card-hover hover:scale-[1.01] transition-all duration-300">
              
              {/* Photo Container */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E6DC] relative group">
                <img
                  src="/aminta_pic.jpg"
                  alt="Aminta Rungruang"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Glassmorphism Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-[#E8E6DC] p-3 rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs font-bold text-[#181A20]">Aminta Rungruang</div>
                    <div className="text-[11px] font-medium text-[#FF202B]">B.Sc. Computer Science Candidate</div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#87FEBC] ring-4 ring-[#87FEBC]/30"></span>
                </div>
              </div>

              {/* Card Bottom Meta with Color accents */}
              <div className="mt-3.5 px-2 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#181A20]">
                  <GraduationCap size={16} className="text-[#FFA242]" />
                  PBRU Student
                </span>
                <span className="font-mono text-[11px] font-bold text-white bg-gradient-to-r from-[#FF202B] to-[#FFA242] px-2.5 py-0.5 rounded-full shadow-sm">
                  Graduating 2027
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
