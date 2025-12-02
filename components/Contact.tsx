import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 scroll-mt-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-400 text-lg mb-10">
            I'm currently available for freelance work and full-time opportunities. 
            If you have a project that needs some AI magic, I'd love to hear about it.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Email</p>
                <p className="font-medium hover:text-primary-400 transition-colors">
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>{RESUME_DATA.contact.email}</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-secondary-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Phone</p>
                <p className="font-medium hover:text-secondary-400 transition-colors">
                  <a href={`tel:${RESUME_DATA.contact.phone}`}>{RESUME_DATA.contact.phone}</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-[#0a66c2]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">LinkedIn</p>
                <p className="font-medium hover:text-[#0a66c2] transition-colors">
                  <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">GitHub</p>
                <p className="font-medium hover:text-slate-200 transition-colors">
                  <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer">View Profile</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Location</p>
                <p className="font-medium">India (Remote/Hybrid)</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-slate-700/50">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                isSent 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 shadow-lg shadow-primary-500/25'
              }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : isSent ? (
                <span>Message Sent!</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;