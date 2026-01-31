import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 min-h-[95vh] flex items-center justify-center text-center overflow-hidden px-6">

      {/* ===== Background Glow Orbs ===== */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#E59173]/20 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full -z-10" />

      {/* ===== Glass Depth Layer ===== */}
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px] -z-10" />

      {/* ===== Content ===== */}
      <div
        className={`flex flex-col items-center transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* INTRO */}
        <span className="text-slate-400 uppercase tracking-[0.35em] text-[10px] font-semibold mb-6">
          HELLO, I&apos;M
        </span>

        {/* NAME */}
        <h1 className="text-6xl md:text-8xl font-extrabold uppercase mb-6 tracking-tight
          bg-gradient-to-r from-white via-[#ffd3c4] to-[#E59173]
          text-transparent bg-clip-text
          drop-shadow-[0_20px_50px_rgba(229,145,115,0.25)]
        ">
          {PERSONAL_INFO.name}
        </h1>

        {/* ROLE */}
        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-14 max-w-2xl">
          {PERSONAL_INFO.role}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="
              px-10 py-4 rounded-full font-bold text-white
              bg-gradient-to-br from-[#E59173] to-[#ffb599]
              shadow-xl shadow-[#E59173]/30
              hover:scale-105 hover:shadow-2xl
              active:scale-95 transition-all
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="
              px-10 py-4 rounded-full font-bold text-white
              bg-white/5 border border-white/10
              backdrop-blur-md
              hover:bg-white/10 hover:scale-105
              active:scale-95 transition-all
            "
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce text-slate-500">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
