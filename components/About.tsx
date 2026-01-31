import React from "react";
import { PERSONAL_INFO } from "../constants";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* SAME background glow as Hero */}
      <div className="absolute inset-0 bg-[#05060a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] bg-[#E59173]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12">
          Professional Summary
        </h2>

        <div className="space-y-10">
          <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-[#E59173] pl-8 max-w-4xl">
            "{PERSONAL_INFO.summary}"
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            {/* Location */}
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#E59173]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl text-slate-400 hover:bg-white/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#E59173]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
