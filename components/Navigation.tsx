import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col w-72 h-screen fixed top-0 left-0 bg-slate-950/50 backdrop-blur-xl border-r border-slate-800 z-50 p-8">
        <div className="mb-12 flex items-center gap-3 text-slate-100">
           <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg shadow-lg shadow-primary-500/20">
             <Cpu className="w-6 h-6 text-white" />
           </div>
           <div>
             <span className="font-bold text-lg tracking-tight block leading-none">Amit Kumar</span>
             <span className="text-xs text-primary-400 font-mono">AI Engineer</span>
           </div>
        </div>

        <ul className="space-y-2 flex-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide ${
                  activeSection === item.id
                    ? 'bg-slate-800 text-white border-l-2 border-primary-500 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-slate-800 text-[10px] text-slate-600 uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Portfolio
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 text-slate-100">
           <div className="p-1.5 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-md">
             <Cpu className="w-5 h-5 text-white" />
           </div>
           <span className="font-bold text-lg">Amit Kumar</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white p-2">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 pt-24 px-6 backdrop-blur-xl">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl font-medium ${
                    activeSection === item.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;