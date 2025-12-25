
import React, { useState } from 'react';
import { ShieldCheck, Lock, ChevronRight, Zap, Database, AlertCircle } from 'lucide-react';

interface PrivateGateProps {
  onAccessGranted: () => void;
}

const PrivateGate: React.FC<PrivateGateProps> = ({ onAccessGranted }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // YOU CAN CHANGE YOUR PASSCODE HERE
  const VALID_PASSCODE = "AMIT-AI-2025";

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setError(false);

    // Simulate a bit of "verification" lag for premium feel
    setTimeout(() => {
      if (passcode.toUpperCase() === VALID_PASSCODE) {
        onAccessGranted();
      } else {
        setError(true);
        setIsVerifying(false);
        setPasscode('');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background HUD Effects */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]"></div>

      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-700">
        <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-2xl text-center space-y-8 bg-slate-900/40">
          
          {/* Security Icon Container */}
          <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
            <div className={`absolute inset-0 rounded-3xl rotate-12 transition-all duration-500 ${error ? 'bg-rose-500/10' : 'bg-primary-500/10'}`}></div>
            <div className={`relative p-6 rounded-2xl border transition-all duration-500 ${error ? 'border-rose-500/30 text-rose-500' : 'border-primary-500/30 text-primary-400'}`}>
              {error ? <AlertCircle className="w-10 h-10 animate-shake" /> : <ShieldCheck className="w-10 h-10" />}
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase">Restricted Access</h1>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              This portfolio contains proprietary AI/ML architecture. Please enter your authorization code to proceed.
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Lock className={`w-4 h-4 transition-colors ${error ? 'text-rose-500' : 'text-slate-600 group-focus-within:text-primary-500'}`} />
              </div>
              <input
                type="password"
                placeholder="Auth Code"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className={`w-full bg-slate-950 border rounded-2xl pl-12 pr-4 py-5 text-sm font-mono tracking-widest text-center focus:ring-4 outline-none transition-all ${
                  error 
                    ? 'border-rose-500/50 ring-rose-500/10 text-rose-400' 
                    : 'border-white/5 focus:border-primary-500/50 ring-primary-500/5 text-primary-400'
                }`}
              />
            </div>

            <button
              disabled={!passcode || isVerifying}
              className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-50 ${
                error 
                  ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/20' 
                  : 'bg-primary-600 hover:bg-primary-500 shadow-primary-500/20'
              } text-white`}
            >
              {isVerifying ? (
                <>
                  <Zap className="w-4 h-4 animate-spin" /> Verifying Trace...
                </>
              ) : (
                <>
                  Establish Connection <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Bottom Branding */}
          <div className="pt-4 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 rounded-full border border-white/5">
              <Database className="w-3 h-3 text-slate-600" />
              <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Master Data Node v2.5</span>
            </div>
            <p className="text-[10px] text-slate-700 font-mono">© AMIT KUMAR // SECURE PIPELINE</p>
          </div>
        </div>

        {/* Floating Tooltip hint for you during development - remove this if you want it purely private */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-800 font-mono uppercase tracking-widest opacity-0 hover:opacity-100 transition-opacity">
            Hint: AMIT-AI-2025
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PrivateGate;
