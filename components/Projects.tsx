import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS_DATA } from "../constants";
import { Project } from "../types";
import ProjectModal from "./ProjectModal";

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: "beforeChildren" } }
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reduceMotion ? undefined : container}
    >
      <motion.h2
        className="text-6xl font-extrabold text-white mb-4"
        variants={reduceMotion ? undefined : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-slate-400 text-lg mb-12"
        variants={reduceMotion ? undefined : { hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        A few selected works that blend functionality, creativity, and technical precision.
      </motion.p>

      <motion.div className="grid md:grid-cols-2 gap-8" variants={reduceMotion ? undefined : {}}>
        {PROJECTS_DATA.map((project, idx) => (
          <motion.article
            key={project.title + idx}
            className="group relative bg-[#0D121F]/40 border border-white/5 rounded-3xl p-8 overflow-hidden"
            variants={reduceMotion ? undefined : card}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            style={{ willChange: "transform, box-shadow" }}
          >
            {/* Hover glow outline */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-3xl ring-1 ring-[#E59173]/20 blur-sm"></div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
              {project.isFlagship && (
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">FLAGSHIP</span>
              )}
            </div>

            <p className="text-slate-400 leading-relaxed text-base md:text-lg mb-6 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[#E59173]/10 text-[#E59173] rounded-full text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                onClick={() => setSelectedProject(project)}
                className="relative flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-[#E59173] transition-colors"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              >
                <motion.span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/6 text-slate-200"
                  initial={{ x: -6, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.28 }}
                  whileHover={reduceMotion ? undefined : { x: -2 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </motion.span>
                <span>View Project</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E59173] transition-all group-hover:w-full"></span>
              </motion.button>

              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-[#E59173] transition-colors"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E59173] transition-all group-hover:w-full"></span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </motion.section>
  );
};

export default Projects;