import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-3">
        <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
        Work Experience
      </h2>

      <div className="space-y-12 border-l border-slate-800 ml-3 md:ml-6 pl-8 relative">
        {RESUME_DATA.experience.map((job, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
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

            <div className="grid gap-4">
              {job.projects.map((project, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl hover:bg-slate-800/60 transition-colors group/card">
                  <div className="flex items-start gap-3 mb-2">
                    <ChevronRight className="w-5 h-5 text-primary-500 mt-1 shrink-0 group-hover/card:translate-x-1 transition-transform" />
                    <h5 className="text-lg font-semibold text-slate-200">{project.title}</h5>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base pl-8">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;