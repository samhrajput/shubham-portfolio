
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const CATEGORIES = ["All", "Full-Stack", "React", "Spring Boot", "Java", "PostgreSQL", "TailwindCSS", "REST APIs", "Frontend", "JavaScript", "MySQL", "PHP"];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter(p => 
    activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-6xl font-extrabold text-white mb-4">Projects</h2>
      <p className="text-slate-400 text-lg mb-12">
        A few selected works that blend functionality, creativity, and technical precision.
      </p>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-16">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all border ${
              activeFilter === cat 
                ? 'bg-[#E59173] text-white border-[#E59173]' 
                : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="group relative bg-[#0D121F]/40 border border-white/5 rounded-3xl p-10 hover:border-white/20 transition-all">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
              {project.isFlagship && (
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">FLAGSHIP</span>
              )}
            </div>
            
            <p className="text-slate-400 leading-relaxed text-lg mb-10 max-w-3xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-[#E59173]/10 text-[#E59173] rounded-full text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-[#E59173] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                View Project Detail
              </button>
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-[#E59173] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
