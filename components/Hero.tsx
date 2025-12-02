import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Linkedin, Github, Terminal, Sparkles, UserCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const { name, title, summary, contact, avatarUrl } = RESUME_DATA;

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-20 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="md:col-span-7 space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500">
                {name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium flex items-center gap-3">
              <Terminal className="w-8 h-8 text-secondary-500" />
              {title}
            </h2>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-slate-700 pl-6">
            {summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href={`mailto:${contact.email}`} 
              className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-all border border-slate-700 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5 text-[#0a66c2]" />
              LinkedIn
            </a>
            <a 
              href={contact.github} 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-all border border-slate-700 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            {/* Glowing blur behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Rotating border ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900">
               {avatarUrl ? (
                 <img 
                   src={avatarUrl} 
                   alt={name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500">
                   <UserCircle2 className="w-32 h-32 mb-4" />
                   <span className="text-sm font-mono">Add Photo in constants.ts</span>
                 </div>
               )}
               
               {/* Tech Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
               
               {/* Decorative corner accents */}
               <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500/50 rounded-tl-lg"></div>
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary-500/50 rounded-br-lg"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card px-5 py-3 rounded-xl border border-slate-700/50 shadow-xl hidden md:block backdrop-blur-md bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="text-sm">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-wider font-mono">Status</span>
                  <span className="font-semibold text-slate-200">Building GenAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;