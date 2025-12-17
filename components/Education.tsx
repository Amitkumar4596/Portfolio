
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award, Star, Trophy, BookOpen, ScrollText } from 'lucide-react';

const EducationAndAwards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
      {/* Education & Coursework */}
      <section id="education" className="scroll-mt-10 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary-500" />
            Education
          </h2>
          <div className="space-y-6">
            {RESUME_DATA.education.map((edu, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
                <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                <p className="text-primary-400 font-medium mt-2">{edu.degree}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-6 text-sm text-slate-400 font-mono border-t border-slate-700 pt-4 gap-2">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    {edu.duration}
                  </span>
                  <span className="font-semibold text-secondary-400">{edu.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div>
          <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
             <BookOpen className="w-5 h-5 text-secondary-500" />
             Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.coursework.map((course, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Publications */}
      <section id="achievements" className="scroll-mt-10 space-y-12">
        
        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-secondary-500" />
            Achievements
          </h2>
          <div className="space-y-6">
            {RESUME_DATA.achievements.map((ach, index) => (
              <div key={index} className="group flex gap-5 p-5 rounded-2xl bg-slate-800/20 hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all">
                <div className="mt-1 shrink-0">
                  <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg group-hover:from-secondary-500/20 group-hover:to-primary-500/20 group-hover:text-white transition-all text-slate-500">
                    <Star className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-primary-400 transition-colors">{ach.title}</h3>
                  <span className="text-xs text-slate-500 mb-2 block font-mono mt-1">{ach.date}</span>
                  {ach.description && (
                    <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{ach.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        {RESUME_DATA.publications.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ScrollText className="w-6 h-6 text-primary-400" />
              Publications
            </h3>
            <div className="space-y-4">
              {RESUME_DATA.publications.map((pub, index) => (
                <a 
                  key={index} 
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block glass-card p-6 rounded-xl hover:bg-slate-800/80 transition-all border border-slate-700/50 group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-lg font-semibold text-slate-200 group-hover:text-primary-400 transition-colors leading-tight">
                      {pub.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 shrink-0 border border-slate-700 px-2 py-1 rounded">
                      {pub.date}
                    </span>
                  </div>
                  <p className="text-sm text-secondary-400 mt-2 font-medium">{pub.publishedIn}</p>
                  <p className="text-sm text-slate-500 mt-1 italic">{pub.authors}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default EducationAndAwards;
