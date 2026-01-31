
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#050811]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleScroll(e, '#root')}
          className="text-xl font-bold text-white tracking-tighter"
        >
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-[#E59173]">.</span>
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['About', 'Education', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
              className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#E59173] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
