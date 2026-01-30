
import React, { useState } from 'react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../constants';

const Education: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    
    // Create resume content from the data
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.role}
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
${EDUCATION_DATA.map(edu => `${edu.degree}\n${edu.institution} | ${edu.score} | ${edu.period}`).join('\n\n')}

ACHIEVEMENTS
${PERSONAL_INFO.achievements.join('\n')}

EXTRAS
Hobbies: ${PERSONAL_INFO.extras.hobbies.join(', ')}
Languages: ${PERSONAL_INFO.extras.languages.join(', ')}
    `.trim();

    // Trigger download
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shubham_Kumar_Resume.pdf`;
    
    setTimeout(() => {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloading(false);
    }, 800);
  };

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-100 mb-12">Education</h2>
      
      <div className="relative border-l-2 border-slate-800 ml-4 space-y-12 pb-12">
        {EDUCATION_DATA.map((item, idx) => (
          <div key={idx} className="relative pl-12">
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-900 transition-colors ${idx === 0 ? 'bg-[#E59173]' : 'bg-slate-700'}`} />
            
            <div className="bg-[#0D121F]/40 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all">
              <span className="text-xs font-bold text-[#E59173] uppercase tracking-widest block mb-2">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
              <p className="text-slate-400 text-sm mb-4">{item.institution}</p>
              {item.score && (
                <p className="text-slate-500 text-sm font-medium">{item.score}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-8 py-3 bg-[#E59173] text-white font-bold rounded-2xl shadow-lg shadow-[#E59173]/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          disabled={downloading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {downloading ? "Downloading..." : "Download Resume"}
        </button>
      </div>
    </section>
  );
};

export default Education;
