import React from 'react';
import { RESUME_DATA } from '../constants';
import { FolderGit2, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
        Academic Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((project, index) => (
          <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div>
                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                 <span className="text-xs font-mono text-primary-400/80 bg-primary-400/10 px-2 py-1 rounded">{project.date}</span>
              </div>
              <div className="p-2 bg-slate-800 rounded-full text-slate-400 group-hover:text-white group-hover:bg-primary-600 transition-colors">
                <FolderGit2 className="w-5 h-5" />
              </div>
            </div>
            
            <ul className="space-y-4">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;