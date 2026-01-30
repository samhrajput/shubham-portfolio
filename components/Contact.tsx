
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Mock API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-6xl font-extrabold text-white mb-4">Contact</h2>
      <p className="text-slate-400 text-lg mb-16">
        Let's connect and discuss how we can work together.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white mb-10">Get in Touch</h3>
          
          <div className="space-y-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#E59173] group-hover:bg-[#E59173]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-medium group-hover:text-[#E59173] transition-colors">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#E59173] group-hover:bg-[#E59173]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                <p className="text-white font-medium group-hover:text-[#E59173] transition-colors">{PERSONAL_INFO.phone}</p>
              </div>
            </a>

            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#E59173] group-hover:bg-[#E59173]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-[#E59173] transition-colors">Connect with me</p>
              </div>
            </a>

            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#E59173] group-hover:bg-[#E59173]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">GitHub</p>
                <p className="text-white font-medium group-hover:text-[#E59173] transition-colors">View my code</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-[#0D121F]/60 border border-white/5 p-10 rounded-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-slate-400 text-sm mb-3">Name</label>
              <input 
                required
                type="text" 
                placeholder="Your name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E59173] transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-3">Email</label>
              <input 
                required
                type="email" 
                placeholder="your.email@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E59173] transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-3">Message</label>
              <textarea 
                required
                rows={5} 
                placeholder="Your message..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E59173] transition-all resize-none"
              ></textarea>
            </div>
            <button 
              disabled={formState !== 'idle'}
              className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                formState === 'success' ? 'bg-emerald-500 text-white' : 'bg-[#E59173] text-white hover:bg-[#d47b5d]'
              } disabled:opacity-70`}
            >
              {formState === 'idle' && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
              {formState === 'sending' && "Sending..."}
              {formState === 'success' && "Message Sent!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
