
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <h2 className="text-5xl font-bold text-white mb-12">Professional Summary</h2>
        <div className="space-y-8">
          <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-[#E59173] pl-8 py-2">
            "{PERSONAL_INFO.summary}"
          </p>
          
          <div className="flex flex-wrap gap-8 pt-6">
            <div className="flex items-center gap-4 text-slate-400 bg-white/5 px-4 py-2 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E59173]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-sm font-medium">{PERSONAL_INFO.location}</span>
            </div>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-slate-400 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E59173]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="text-sm font-medium">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
