import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  ArrowUpRight, 
  Send
} from 'lucide-react';
import { GitHubIcon } from '../components/GitHubIcon';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC]">
      
      {/* Background Banner Container */}
      <div className="bg-gradient-to-br from-[#181A20] via-[#242834] to-[#181A20] text-white rounded-3xl p-8 sm:p-12 shadow-card-hover relative overflow-hidden">
        
        {/* Subtle Decorative Ambient Gradients using User Palette */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF202B]/20 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A0E8E8]/15 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#87FEBC] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#87FEBC] animate-pulse"></span>
              {t.contact.internshipTag}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
              {t.contact.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl font-normal">
              {t.contact.desc}
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:aminta.rungruang@gmail.com"
                className="inline-flex items-center gap-2 bg-[#FF202B] hover:bg-white hover:text-[#181A20] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-sm"
              >
                <Mail size={16} />
                <span>aminta.rungruang@gmail.com</span>
                <Send size={14} className="opacity-80" />
              </a>

              <a
                href="/resume/Aminta_Rungruang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200"
              >
                <FileText size={16} />
                <span>{t.contact.viewPdfBtn}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            
            <a
              href="mailto:aminta.rungruang@gmail.com"
              className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#FF202B]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">{t.contact.emailLabel}</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#A0E8E8] transition-colors truncate max-w-[200px] sm:max-w-none">
                      aminta.rungruang@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="tel:0656526330"
              className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#87FEBC]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">{t.contact.phoneLabel}</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#87FEBC] transition-colors">
                      065-652-6330
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </a>

            <a
              href="https://github.com/amintarungruang"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#FFDD63]">
                    <GitHubIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">{t.contact.githubLabel}</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#FFDD63] transition-colors">
                      github.com/amintarungruang
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 text-[#FFA242]">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-gray-400">{t.contact.locationLabel}</div>
                <div className="text-sm font-bold text-white">
                  {t.contact.locationVal}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
