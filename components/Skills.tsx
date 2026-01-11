
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Cpu, Code2, Database, Cloud, Brain, Layers, Box } from 'lucide-react';

const Skills: React.FC = () => {
  // Helper to get icon based on category name
  const getIcon = (category: string) => {
    if (category.includes('GenAI')) return <Brain className="w-6 h-6 text-primary-400" />;
    if (category.includes('Model')) return <Cpu className="w-6 h-6 text-secondary-400" />;
    if (category.includes('Backend')) return <Code2 className="w-6 h-6 text-emerald-400" />;
    if (category.includes('Cloud')) return <Cloud className="w-6 h-6 text-sky-400" />;
    if (category.includes('Data')) return <Database className="w-6 h-6 text-amber-400" />;
    if (category.includes('Framework')) return <Layers className="w-6 h-6 text-rose-400" />;
    return <Box className="w-6 h-6 text-slate-400" />;
  };

  return (
    <section id="skills" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        <span className="w-12 h-1 bg-secondary-500 rounded-full"></span>
        Technical Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESUME_DATA.skills.map((skillGroup, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl hover:border-primary-500/30 transition-all duration-300 group">
            <h3 className="text-lg font-semibold text-slate-200 mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-4">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform">
                {getIcon(skillGroup.category)}
              </div>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 bg-slate-900/80 text-slate-300 text-xs md:text-sm font-mono rounded-md border border-slate-800 hover:text-primary-400 hover:border-primary-500/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
