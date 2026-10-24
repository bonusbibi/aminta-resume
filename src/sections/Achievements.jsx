import React from 'react';
import { 
  Trophy, 
  Briefcase, 
  Code, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Medal
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const expConfigs = [
    {
      tagStyle: "bg-gradient-to-r from-[#FFDD63] to-[#FFA242] text-[#181A20]",
      border: "border-[#FFDD63] hover:border-[#FFA242]",
      iconBg: "bg-gradient-to-br from-[#FF202B] to-[#FFA242] text-white",
      icon: <Trophy size={22} />
    },
    {
      tagStyle: "bg-[#87FEBC]/30 text-[#181A20] border border-[#87FEBC]",
      border: "border-[#87FEBC] hover:border-[#181A20]",
      iconBg: "bg-[#87FEBC] text-[#181A20]",
      icon: <Briefcase size={22} />
    },
    {
      tagStyle: "bg-[#A0E8E8]/40 text-[#181A20] border border-[#A0E8E8]",
      border: "border-[#A0E8E8] hover:border-[#FFA242]",
      iconBg: "bg-[#A0E8E8] text-[#181A20]",
      icon: <Code size={22} />
    }
  ];

  const yearColors = [
    { badge: "bg-[#FF202B]/10 text-[#FF202B] border-[#FF202B]/20", dot: "bg-[#FF202B]" },
    { badge: "bg-[#FFA242]/15 text-[#FFA242] border-[#FFA242]/30", dot: "bg-[#FFA242]" },
    { badge: "bg-[#A0E8E8]/30 text-[#181A20] border-[#A0E8E8]", dot: "bg-[#A0E8E8]" },
    { badge: "bg-[#87FEBC]/30 text-[#181A20] border-[#87FEBC]", dot: "bg-[#87FEBC]" },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC] overflow-visible">
      
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FFA242]/20 rounded-full filter blur-3xl pointer-events-none animate-float-slow -z-10"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF202B]/10 text-[#FF202B] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Medal size={13} />
            <span>{t.experience.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#181A20]">
            {t.experience.title}
          </h2>
        </div>
        <p className="text-sm text-[#5E6272] max-w-md font-medium">
          {t.experience.subtitle}
        </p>
      </div>

      {/* Main Experience Cards */}
      <div className="space-y-6 mb-20">
        {t.experience.experiences.map((item, index) => {
          const config = expConfigs[index] || expConfigs[0];

          return (
            <div 
              key={index}
              className={`bg-white rounded-3xl border-2 border-[#E8E6DC] ${config.border} p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-2xl ${config.iconBg} shadow-sm shrink-0`}>
                    {config.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full shadow-sm ${config.tagStyle}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#5E6272] flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-0.5 rounded-md border border-[#E8E6DC]">
                        <Calendar size={12} className="text-[#FFA242]" />
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#181A20]">
                      {item.title}
                    </h3>
                    <div className="text-sm font-bold text-[#FFA242] mt-0.5">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-[#5E6272] mb-4 bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E8E6DC] inline-block font-semibold">
                {t.experience.projectFocus} <span className="text-[#181A20] font-bold">{item.project}</span>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-[#E8E6DC]">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#181A20] leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#87FEBC] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Academic Timeline / Journey Progression */}
      <div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFA242]/10 text-[#FFA242] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>{t.experience.trajectoryTag}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#181A20]">
            {t.experience.trajectoryTitle}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.experience.years.map((phase, idx) => {
            const colors = yearColors[idx % yearColors.length];

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border-2 border-[#E8E6DC] hover:border-[#FFA242] p-5 shadow-sm hover:shadow-card transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                      {phase.year}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#5E6272]">PBRU CS</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#181A20] mb-3">
                    {phase.title}
                  </h4>

                  <ul className="space-y-2 text-xs text-[#5E6272] font-medium">
                    {phase.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${colors.dot} shrink-0`}></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Achievements;
