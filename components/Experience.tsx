import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Calendar, ChevronRight, PlayCircle, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';
import AIDemoModal from './AIDemoModal';

interface ProjectProps {
  project: {
    title: string;
    points: string[];
  };
  onDemoClick: (title: string, desc: string) => void;
}

const ProjectAccordion: React.FC<ProjectProps> = ({ project, onDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Strictly only show demo for AutoEnrich AI
  const hasDemo = project.title.includes('AutoEnrich AI');

  return (
    <div 
      className={`glass-card rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'bg-slate-800/60 ring-1 ring-primary-500/30' : 'hover:bg-slate-800/40'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 flex items-start gap-3 p-5 text-left group cursor-pointer"
        >
          <ChevronRight 
            className={`w-5 h-5 text-primary-500 mt-1 shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : 'group-hover:translate-x-1'
            }`} 
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h5 className={`text-lg font-semibold transition-colors ${
                isOpen ? 'text-primary-400' : 'text-slate-200 group-hover:text-primary-400'
              }`}>
                {project.title}
              </h5>
              {hasDemo && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-[10px] text-primary-400 font-bold uppercase tracking-wider animate-pulse">
                  <Cpu className="w-3 h-3" />
                  AI Demo Available
                </span>
              )}
            </div>
            {!isOpen && (
               <p className="text-slate-500 text-sm mt-1 line-clamp-1">
                 Click to view architecture details...
               </p>
            )}
          </div>
        </button>

        {hasDemo && isOpen && (
          <div className="px-5 pb-5 md:pb-0 md:pr-6 flex justify-end animate-in fade-in zoom-in-95 duration-500">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDemoClick(project.title, project.points.join(' '));
              }}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-400 text-slate-950 rounded-lg text-sm font-black uppercase tracking-tighter transition-all group/btn shadow-lg shadow-primary-500/20 active:scale-95"
            >
              <PlayCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Try AI Demo
              <Sparkles className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-slate-400 leading-relaxed text-sm md:text-base border-t border-slate-700/30 px-6 pb-6 pt-4 mt-1 mx-4">
            <ul className="space-y-3">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary-500/70 shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [demoModal, setDemoModal] = useState<{ isOpen: boolean; title: string; desc: string }>({
    isOpen: false,
    title: '',
    desc: ''
  });

  const openDemo = (title: string, desc: string) => {
    setDemoModal({ isOpen: true, title, desc });
  };

  return (
    <section id="experience" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-3">
        <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
        Work Experience
      </h2>

      <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-6 pl-8 relative">
        {RESUME_DATA.experience.map((job, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-[43px] top-1.5 h-7 w-7 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-primary-500 transition-colors flex items-center justify-center shadow-xl">
               <div className="w-2 h-2 rounded-full bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{job.role}</h3>
                <h4 className="text-xl text-slate-400">{job.company}</h4>
              </div>
              <div className="flex items-center gap-2 text-primary-400 mt-2 md:mt-0 font-mono text-sm bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>{job.duration}</span>
              </div>
            </div>

            <div className="grid gap-3">
              {job.projects.map((project, idx) => (
                <ProjectAccordion key={idx} project={project} onDemoClick={openDemo} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <AIDemoModal 
        isOpen={demoModal.isOpen} 
        onClose={() => setDemoModal({ ...demoModal, isOpen: false })}
        projectTitle={demoModal.title}
        projectDescription={demoModal.desc}
      />
    </section>
  );
};

export default Experience;