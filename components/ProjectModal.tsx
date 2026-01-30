
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#050811]/95 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl bg-[#0D121F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="grid md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto">
          {/* Visual Side */}
          <div className="bg-[#1a1f2e] p-10 flex flex-col justify-center items-center border-r border-white/5 bg-gradient-to-br from-[#1a1f2e] to-[#0D121F]">
            <h4 className="text-[#E59173] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">AI Integration Demo</h4>
            
            {/* Simulated Gmail UI Screenshot with higher fidelity */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-800 p-8 space-y-6 border border-slate-100 transform -rotate-1 group hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-4 border-b border-slate-50 pb-5">
                  <div className="w-10 h-10 bg-[#E59173] rounded-full flex items-center justify-center text-sm font-bold text-white">S</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">samhrajput@gmail.com</p>
                    <p className="text-xs text-slate-400">Contextual AI Generation active</p>
                  </div>
               </div>
               
               <div className="space-y-4 py-4 min-h-[120px]">
                  <p className="text-sm font-medium text-slate-700">Dear Samhrajput,</p>
                  <p className="text-sm text-slate-600 leading-relaxed italic">"It was a pleasure meeting you as well. Looking forward to discussing the next steps..."</p>
                  <p className="text-sm font-medium text-slate-700">Sincerely,</p>
                  <p className="text-xs text-slate-400 font-mono">[Automated AI Draft]</p>
               </div>

               <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                     <button className="bg-[#1a73e8] hover:bg-[#1557b0] text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-2 transition-colors">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        AI Reply
                     </button>
                     <button className="bg-[#f8f9fa] text-[#0b57d0] border border-slate-200 px-5 py-2.5 rounded-lg text-xs font-bold transition-all">
                        Send
                     </button>
                  </div>
                  <div className="flex gap-4 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 1h13A1.5 1.5 0 0 1 16 2.5v11a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 13.5v-11A1.5 1.5 0 0 1 1.5 1zM3 10.5V12h10v-1.5H3zM3 8V9.5h10V8H3zM3 5.5V7h10V5.5H3z"/></svg>
                  </div>
               </div>
            </div>
            
            <div className="mt-12 space-y-4 text-center">
              <p className="text-sm text-slate-300 font-medium">The Power of Gemini AI in your Inbox</p>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                The screenshot illustrates how the React-based extension injects a functional AI-driven button to draft replies instantly.
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="p-12 space-y-10 bg-[#0D121F]">
            <div>
              <span className="inline-block px-3 py-1 bg-[#E59173]/20 text-[#E59173] text-[10px] font-bold rounded-lg mb-4 tracking-widest uppercase">
                Featured Work
              </span>
              <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/5 text-slate-400 rounded-lg text-[10px] font-bold uppercase">{tag}</span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-slate-100 font-bold text-lg flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#E59173] rounded-full"></span>
                The Challenge & Solution
              </h5>
              <p className="text-slate-400 leading-relaxed text-sm">
                {project.explanation}
              </p>
              <div className="grid grid-cols-1 gap-4 mt-6">
                 <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E59173" strokeWidth="2" className="mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <p className="text-xs text-slate-300 leading-relaxed">Solved CORS and API security challenges for Manifest v3.</p>
                 </div>
                 <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E59173" strokeWidth="2" className="mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <p className="text-xs text-slate-300 leading-relaxed">Spring Boot backend ensures API keys are never exposed in the client.</p>
                 </div>
              </div>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                Github Source
              </a>
              <button 
                onClick={onClose}
                className="flex-1 py-4 bg-[#E59173] text-white font-bold rounded-2xl hover:bg-[#d47b5d] transition-all"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
