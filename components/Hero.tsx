
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-6 min-h-[90vh]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E59173]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <span className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-6">
        HELLO, I'M
      </span>
      
      <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight uppercase">
        {PERSONAL_INFO.name}
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 max-w-2xl">
        {PERSONAL_INFO.role}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <a 
          href="#projects" 
          onClick={(e) => handleScroll(e, '#projects')}
          className="px-10 py-4 bg-[#E59173] text-white font-bold rounded-full hover:bg-[#d47b5d] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#E59173]/20"
        >
          View My Work
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, '#contact')}
          className="px-10 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95 shadow-sm"
        >
          Let's Talk
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
};

export default Hero;
