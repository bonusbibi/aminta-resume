import React from 'react';
import { skillsData, exploringData } from '../data/skills';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Wrench, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Skills = () => {
  const getCategoryConfig = (category) => {
    switch (category) {
      case "Programming Languages":
        return {
          icon: <Code2 size={20} className="text-[#FF202B]" />,
          border: "hover:border-[#FF202B]",
          badgeBg: "bg-[#FF202B]/10 text-[#FF202B]"
        };
      case "Web & Backend":
        return {
          icon: <Globe size={20} className="text-[#A0E8E8]" />,
          border: "hover:border-[#A0E8E8]",
          badgeBg: "bg-[#A0E8E8]/20 text-[#181A20]"
        };
      case "Mobile":
        return {
          icon: <Smartphone size={20} className="text-[#FFA242]" />,
          border: "hover:border-[#FFA242]",
          badgeBg: "bg-[#FFA242]/10 text-[#FFA242]"
        };
      case "Databases":
        return {
          icon: <Database size={20} className="text-[#87FEBC]" />,
          border: "hover:border-[#87FEBC]",
          badgeBg: "bg-[#87FEBC]/20 text-[#181A20]"
        };
      case "Tools & Platforms":
        return {
          icon: <Wrench size={20} className="text-[#FFDD63]" />,
          border: "hover:border-[#FFDD63]",
          badgeBg: "bg-[#FFF8B9] text-[#181A20]"
        };
      default:
        return {
          icon: <Users size={20} className="text-[#FFB08E]" />,
          border: "hover:border-[#FFB08E]",
          badgeBg: "bg-[#FFB08E]/20 text-[#181A20]"
        };
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC] overflow-visible">
      
      {/* Decorative Blob */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#87FEBC]/20 rounded-full filter blur-3xl pointer-events-none animate-float-slow -z-10"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#87FEBC]/20 text-[#181A20] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} className="text-[#FF202B]" />
            <span>Capabilities & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#181A20]">
            Technical Skills
          </h2>
        </div>
        <p className="text-sm text-[#5E6272] max-w-md font-medium">
          Structured competencies across modern programming languages, cloud stacks, and development workflows.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group, idx) => {
          const config = getCategoryConfig(group.category);

          return (
            <div 
              key={idx}
              className={`bg-white rounded-3xl border-2 border-[#E8E6DC] ${config.border} p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-[#E8E6DC]">
                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E6DC] shadow-sm">
                    {config.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#181A20]">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-[#5E6272] font-semibold">
                      {group.items.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-[#181A20] bg-[#FAF8F5] hover:bg-gradient-to-r hover:from-[#FF202B] hover:to-[#FFA242] hover:text-white hover:border-transparent px-3 py-1.5 rounded-xl border border-[#E8E6DC] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Exploring Banner with Vibrant Gradient Accent */}
      <div className="mt-10 bg-gradient-to-r from-[#FFF8B9]/60 via-[#FFB08E]/30 to-[#A0E8E8]/40 rounded-3xl border-2 border-[#E8E6DC] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF202B]">
            <Sparkles size={14} />
            <span>Active Exploration</span>
          </div>
          <h3 className="text-xl font-display font-extrabold text-[#181A20]">
            Continuous Growth & Emerging Tech
          </h3>
          <p className="text-xs sm:text-sm text-[#5E6272] max-w-xl font-medium">
            Actively expanding into backend distributed architecture, complex data flows, and automated machine learning inferencing.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {exploringData.map((item, i) => (
            <span
              key={i}
              className="text-xs font-bold text-[#181A20] bg-white px-4 py-2 rounded-xl border-2 border-[#E8E6DC] hover:border-[#FFA242] shadow-sm transition-all"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
