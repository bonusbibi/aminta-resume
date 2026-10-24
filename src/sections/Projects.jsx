import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { 
  ArrowUpRight, 
  Trophy, 
  FolderArchive, 
  X, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Flame,
  Image as ImageIcon
} from 'lucide-react';
import { GitHubIcon } from '../components/GitHubIcon';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const filterKeys = ['All', 'Featured', 'Web & System', 'Mobile & AI', 'Tools & Games'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.featured;
    if (activeFilter === 'Web & System') {
      return project.technologies.some(t => t.includes('Web') || t.includes('TypeScript') || t.includes('PHP'));
    }
    if (activeFilter === 'Mobile & AI') {
      return project.technologies.some(t => t.includes('Flutter') || t.includes('API') || t.includes('Roboflow') || project.title.includes('AI'));
    }
    if (activeFilter === 'Tools & Games') {
      return project.technologies.some(t => t.includes('Godot') || t.includes('Game') || project.title.includes('Haunted') || project.title.includes('Activity'));
    }
    return true;
  });

  const cardThemes = [
    { border: "hover:border-[#FF202B]", glow: "hover:shadow-glow-red", bar: "bg-[#FF202B]" },
    { border: "hover:border-[#FFA242]", glow: "hover:shadow-card-hover", bar: "bg-[#FFA242]" },
    { border: "hover:border-[#A0E8E8]", glow: "hover:shadow-glow-sky", bar: "bg-[#A0E8E8]" },
    { border: "hover:border-[#87FEBC]", glow: "hover:shadow-glow-mint", bar: "bg-[#87FEBC]" },
    { border: "hover:border-[#FFDD63]", glow: "hover:shadow-card-hover", bar: "bg-[#FFDD63]" },
  ];

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
  };

  return (
    <section id="projects" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC] overflow-visible">
      
      {/* Background Floating Color Accents */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#A0E8E8]/25 rounded-full filter blur-3xl pointer-events-none animate-float-slow -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FFB08E]/25 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow -z-10"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFA242]/10 text-[#FFA242] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>{t.projects.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#181A20]">
            {t.projects.title}
          </h2>
        </div>
        <p className="text-sm text-[#5E6272] max-w-md font-medium">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {filterKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
              activeFilter === key
                ? 'bg-gradient-to-r from-[#FF202B] to-[#FFA242] text-white shadow-glow-red scale-105'
                : 'bg-white text-[#5E6272] hover:text-[#181A20] hover:bg-[#FAF8F5] border-2 border-[#E8E6DC]'
            }`}
          >
            {t.projects.filters[key] || key}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const theme = cardThemes[index % cardThemes.length];

          return (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className={`group bg-white rounded-3xl border-2 border-[#E8E6DC] ${theme.border} ${theme.glow} shadow-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer relative overflow-hidden`}
            >
              {/* Vibrant Top Color Stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.bar}`}></div>

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3.5 pt-1">
                  {project.repoName ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#181A20] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#E8E6DC] font-semibold">
                      <FolderArchive size={12} className="text-[#FF202B]" />
                      <span className="truncate max-w-[170px]">{project.repoName}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-[#5E6272] font-semibold">Project #{project.id}</span>
                  )}

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-gradient-to-r from-[#FF202B] to-[#FFA242] px-2.5 py-0.5 rounded-full shadow-sm animate-pulse">
                      <Flame size={12} />
                      {t.projects.featuredBadge}
                    </span>
                  )}
                </div>

                {/* Big Card Image */}
                {project.coverImage ? (
                  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-4 border-2 border-[#E8E6DC] bg-[#FAF8F5] relative group/img shadow-sm">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none' }} className="w-full h-full flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#FAF8F5] to-white">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-[#E8E6DC] flex items-center justify-center mb-2 text-[#FF202B]">
                        <ImageIcon size={20} />
                      </div>
                      <span className="text-xs font-bold text-[#181A20]">{project.title}</span>
                      <span className="text-[10px] font-mono text-[#5E6272] mt-0.5">📂 public/projects/{project.folder}/cover.png</span>
                    </div>

                    {project.gallery && project.gallery.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-[#181A20]/80 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <ImageIcon size={11} />
                        +{project.gallery.length} {t.projects.photosCount}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full aspect-[16/9] rounded-2xl mb-4 border-2 border-[#E8E6DC] group-hover:border-[#FFA242] bg-gradient-to-br from-[#FAF8F5] via-white to-[#FAF8F5] p-4 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group/placeholder shadow-sm">
                    <div className="absolute -right-4 -bottom-4 text-[#E8E6DC]/40 group-hover:text-[#FFA242]/20 transition-colors pointer-events-none">
                      <ImageIcon size={96} />
                    </div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-[#E8E6DC] flex items-center justify-center text-[#FF202B] group-hover:scale-105 transition-transform">
                        <ImageIcon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#5E6272] bg-white px-2.5 py-1 rounded-md border border-[#E8E6DC] shadow-sm">
                        Waiting for Cover
                      </span>
                    </div>

                    <div className="relative z-10 pt-2">
                      <div className="text-xs font-bold text-[#181A20] truncate mb-0.5">
                        {project.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#5E6272] bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#E8E6DC]/80 inline-block">
                        📁 public/projects/{project.folder}/cover.png
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Title & Subtitle */}
                <h3 className="text-xl font-display font-bold text-[#181A20] group-hover:text-[#FF202B] transition-colors mb-1.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] group-hover:bg-[#FF202B] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 border border-[#E8E6DC]">
                    <ArrowUpRight size={15} />
                  </div>
                </h3>
                
                {project.subtitle && (
                  <p className="text-xs font-bold text-[#FFA242] mb-3">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-xs text-[#5E6272] leading-relaxed line-clamp-2 mb-4 font-normal">
                  {project.description}
                </p>

                {/* Achievement Badge if any */}
                {project.achievement && (
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[#FFF8B9] to-[#FFDD63]/30 border-2 border-[#FFDD63] text-[#181A20] flex items-center gap-2.5 shadow-sm">
                    <Trophy size={16} className="text-[#FF202B] shrink-0" />
                    <span className="text-xs font-bold leading-tight">
                      {project.achievement}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Technologies & Actions */}
              <div className="pt-4 border-t border-[#E8E6DC] mt-2">
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono font-medium bg-[#FAF8F5] text-[#181A20] px-2.5 py-0.5 rounded-md border border-[#E8E6DC]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[11px] font-mono text-[#5E6272] font-semibold px-1.5 py-0.5">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-[#181A20] font-bold group-hover:text-[#FF202B] transition-colors">
                  <span>{t.projects.viewDetails}</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal Window with Interactive Gallery */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181A20]/65 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-[32px] border-2 border-[#E8E6DC] max-w-3xl w-full p-6 sm:p-8 shadow-card-hover max-h-[92vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top color bar in modal */}
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#FF202B] via-[#FFA242] to-[#87FEBC] rounded-t-[32px]"></div>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-[#E8E6DC] pt-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#FF202B] bg-[#FF202B]/10 px-2.5 py-1 rounded-lg border border-[#FF202B]/20">
                    {selectedProject.repoName || "Project Architecture"}
                  </span>
                  {selectedProject.featured && (
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FF202B] to-[#FFA242] px-2.5 py-1 rounded-full shadow-sm">
                      {t.projects.featuredBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#181A20]">
                  {selectedProject.title}
                </h3>
                {selectedProject.subtitle && (
                  <p className="text-sm font-bold text-[#FFA242] mt-1">
                    {selectedProject.subtitle}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-full text-[#5E6272] hover:text-[#181A20] hover:bg-[#FAF8F5] border border-[#E8E6DC] transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">

              {/* Interactive Image Gallery: Main Preview + Thumbnails */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF202B] font-bold flex items-center gap-1.5">
                      <ImageIcon size={14} />
                      <span>{t.projects.modal.galleryTitle}</span>
                    </h4>
                    <span className="text-xs font-mono text-[#5E6272]">
                      {t.projects.modal.photoCount
                        .replace('{current}', activeGalleryIndex + 1)
                        .replace('{total}', selectedProject.gallery.length)}
                    </span>
                  </div>

                  {/* Main Large Active Image */}
                  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#E8E6DC] bg-[#FAF8F5] relative shadow-sm">
                    <img
                      src={selectedProject.gallery[activeGalleryIndex]}
                      alt={`${selectedProject.title} screenshot ${activeGalleryIndex + 1}`}
                      className="w-full h-full object-contain bg-slate-900"
                    />
                  </div>

                  {/* Thumbnails Row */}
                  <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                    {selectedProject.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                          activeGalleryIndex === idx
                            ? 'border-[#FF202B] ring-2 ring-[#FF202B]/30 scale-105'
                            : 'border-[#E8E6DC] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={imgUrl} 
                          alt="thumbnail" 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF202B] font-bold mb-2">
                  {t.projects.modal.overview}
                </h4>
                <p className="text-sm text-[#181A20] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Award / Milestone if present */}
              {selectedProject.achievement && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFF8B9] to-[#FFDD63]/30 border-2 border-[#FFDD63] text-[#181A20] flex items-center gap-3.5 shadow-sm">
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <Trophy size={20} className="text-[#FF202B] shrink-0" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold">{selectedProject.achievement}</div>
                    <div className="text-xs text-[#5E6272]">National software innovation recognition by expert judges</div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF202B] font-bold mb-2">
                  {t.projects.modal.techStack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-mono font-semibold bg-[#FAF8F5] text-[#181A20] px-3 py-1.5 rounded-lg border border-[#E8E6DC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Implementations / What I Learned */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF202B] font-bold mb-3">
                  {t.projects.modal.contributions}
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.learned.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#181A20] leading-relaxed p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E6DC]">
                      <CheckCircle2 size={16} className="text-[#87FEBC] mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-[#E8E6DC] flex items-center justify-between">
              <a
                href={selectedProject.github || "https://github.com/amintarungruang"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#181A20] hover:text-[#FF202B] transition-colors"
              >
                <GitHubIcon size={16} />
                <span>github.com/amintarungruang</span>
                <ArrowUpRight size={13} />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-[#181A20] hover:bg-[#FF202B] text-white text-xs font-bold transition-all shadow-sm"
              >
                {t.projects.modal.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
