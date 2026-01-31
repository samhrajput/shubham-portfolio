
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <h2 className="text-4xl font-bold text-white mb-2">Certifications & Achievements</h2>
          <div className="space-y-6">
            {PERSONAL_INFO.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-6 p-6 bg-[#0D121F]/40 border border-white/5 rounded-2xl group hover:border-[#E59173]/30 transition-all">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#E59173]/10 flex items-center justify-center text-[#E59173]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <p className="text-slate-200 font-medium leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-4xl font-bold text-white mb-2">Extras</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-[#0D121F]/60 border border-white/5 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">Hobbies</h3>
              </div>
              <ul className="space-y-3">
                {PERSONAL_INFO.extras.hobbies.map((hobby, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-[#0D121F]/60 border border-white/5 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-white">Languages</h3>
              </div>
              <ul className="space-y-3">
                {PERSONAL_INFO.extras.languages.map((lang, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Achievements;
