
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationAndAwards from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-primary-500/30 selection:text-primary-200 animate-in fade-in duration-1000">
      <Navigation />
      
      {/* Main Content Area */}
      <main className="lg:pl-72 w-full transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-8 lg:py-0">
          <Hero />
          <EducationAndAwards />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          
          <footer className="py-8 border-t border-slate-800 text-center text-slate-600 text-sm font-mono">
            <p>Designed & Engineered by Amit Kumar</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
