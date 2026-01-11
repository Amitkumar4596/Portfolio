
import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Database, Globe, Zap, Loader2, ShieldCheck, ExternalLink, Code2, Table as TableIcon, Building2, Cpu, AlertTriangle, RefreshCcw, ClipboardCheck, Search, Radio, Terminal } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

interface EnrichmentAttribute {
  name: string;
  value: string;
}

interface EnrichmentResponse {
  entityName: string;
  type: 'Product' | 'Company';
  confidence: number;
  attributes: EnrichmentAttribute[];
  sources: string[];
  logicNote: string;
}

interface AIDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectDescription: string;
}

const AIDemoModal: React.FC<AIDemoModalProps> = ({ isOpen, onClose, projectTitle, projectDescription }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ title: string; message: string; code?: string } | null>(null);
  const [logs, setLogs] = useState<{ msg: string; type: 'info' | 'success' | 'error' | 'system' | 'ws' }[]>([]);
  const [result, setResult] = useState<EnrichmentResponse | null>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Scroll to results when they appear on mobile
  useEffect(() => {
    if (result && resultsRef.current && window.innerWidth < 1024) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  if (!isOpen) return null;

  const addLog = (msg: string, type: 'info' | 'success' | 'error' | 'system' | 'ws' = 'info') => {
    setLogs(prev => [...prev, { msg, type }]);
  };

  const handleQuickTrigger = (val: string) => {
    setInput(val);
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
      runSimulation(fakeEvent, val);
    }, 100);
  };

  const runSimulation = async (e: React.FormEvent, overrideInput?: string) => {
    e.preventDefault();
    const currentInput = overrideInput || input;
    if (!currentInput.trim() || isLoading) return;

    setIsLoading(true);
    setResult(null);
    setError(null);
    setLogs([]);
    
    addLog("AutoEnrich AI: Initializing pipeline...", 'system');
    
    if (!process.env.API_KEY || process.env.API_KEY === "undefined") {
      addLog("CRITICAL: API_KEY is missing from build environment.", "error");
      setError({
        title: "Configuration Error",
        message: "The application is missing a valid API_KEY. Please ensure you have added it to Vercel Environment Variables AND redeployed the project.",
        code: "MISSING_ENV_VAR"
      });
      setIsLoading(false);
      return;
    }

    const steps = [
      { msg: "Establishing secure proxy to Bright Data...", type: 'ws' },
      { msg: "Extracting DOM via FastAPI microservice...", type: 'info' },
      { msg: "Routing context to Gemini Engine...", type: 'ws' },
    ] as const;

    for (const step of steps) {
      addLog(step.msg, step.type);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Enrich this item: "${currentInput}". Context: ${projectDescription}. Output JSON with properties: entityName, type (Product/Company), confidence (0-1), attributes (array of {name, value}), sources (array of strings), logicNote (string explanation).`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              entityName: { type: Type.STRING },
              type: { type: Type.STRING, enum: ['Product', 'Company'] },
              confidence: { type: Type.NUMBER },
              attributes: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    value: { type: Type.STRING }
                  },
                  required: ["name", "value"]
                }
              },
              sources: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              logicNote: { type: Type.STRING }
            },
            required: ["entityName", "type", "confidence", "attributes", "sources", "logicNote"]
          }
        }
      });

      if (!response.text) throw new Error("Empty response from AI engine");

      const data = JSON.parse(response.text) as EnrichmentResponse;
      setResult(data);
      addLog("Process complete. Data synthesized successfully.", "success");
    } catch (err: any) {
      const errorMessage = err?.message || 'Network error during execution';
      addLog(`PIPELINE FAIL: ${errorMessage}`, "error");
      setError({
        title: "Pipeline Execution Error",
        message: errorMessage.includes("API key") ? "Invalid API Key." : "The engine failed to synthesize data.",
        code: "AGENT_RUNTIME_EXC"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-6xl h-[95vh] lg:h-[90vh] glass-card rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col">
        
        {/* Header - Fixed */}
        <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-white/5 flex justify-between items-center bg-slate-900/80 shrink-0">
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="relative p-2 sm:p-2.5 bg-slate-950 rounded-xl border border-white/10 shrink-0">
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-xl font-black text-white tracking-tighter uppercase truncate">Auto-EnrichAI</h3>
              <div className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[8px] sm:text-[9px] text-slate-500 font-mono tracking-widest uppercase truncate">Node v2.5.4 Active</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400 transition-all">
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Main Body - Scrollable on mobile, Split scroll on desktop */}
        <div className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row">
          
          {/* Sidebar / Input Panel */}
          <div className="w-full lg:w-[360px] lg:border-r border-white/5 p-5 sm:p-8 space-y-8 bg-slate-900/40 lg:overflow-y-auto">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Input Entity</label>
              <form onSubmit={runSimulation} className="space-y-3">
                <div className="relative">
                  <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                  <input
                    type="text"
                    placeholder="e.g. Siemens 3RT2026"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-slate-950 border border-white/5 rounded-2xl pl-11 pr-4 py-4 text-sm text-white focus:border-primary-500/50 outline-none transition-colors"
                  />
                </div>
                <button
                  disabled={!input.trim() || isLoading}
                  className="w-full py-4 bg-primary-600 hover:bg-primary-500 disabled:opacity-50 text-white rounded-2xl text-[11px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
                  Execute Pipeline
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Presets</label>
              <div className="grid grid-cols-1 gap-3">
                <button onClick={() => handleQuickTrigger('Siemens 3RT2026')} disabled={isLoading} className="flex items-center gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl text-left hover:border-primary-500/40 group transition-all">
                  <Cpu className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-black text-white uppercase">Technical MFR-MPN</span>
                </button>
                <button onClick={() => handleQuickTrigger('Verdantis')} disabled={isLoading} className="flex items-center gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl text-left hover:border-secondary-500/40 group transition-all">
                  <Building2 className="w-5 h-5 text-secondary-500 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-black text-white uppercase">Vendor Intelligence</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Technical Logs</label>
              <div ref={logContainerRef} className="h-40 lg:h-56 bg-slate-950 rounded-2xl p-4 font-mono text-[10px] overflow-y-auto space-y-2 border border-white/5">
                {logs.length === 0 && <span className="text-slate-800 italic">Listening for trigger...</span>}
                {logs.map((log, i) => (
                  <div key={i} className={`flex gap-3 animate-in slide-in-from-left-2 ${log.type === 'error' ? 'text-rose-400' : log.type === 'success' ? 'text-emerald-400' : log.type === 'ws' ? 'text-cyan-400' : 'text-slate-500'}`}>
                    <span className="opacity-20 shrink-0 font-bold">{i.toString().padStart(2, '0')}</span>
                    <span className="leading-tight">{log.msg}</span>
                  </div>
                ))}
                {isLoading && <span className="text-primary-500 animate-pulse">▋</span>}
              </div>
            </div>
          </div>

          {/* Main Results Display */}
          <div className="flex-1 lg:overflow-y-auto bg-[#020617]/40 p-5 sm:p-8 lg:p-10 relative min-h-[400px]">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div ref={resultsRef} className="relative h-full">
              {!result && !isLoading && !error ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 lg:py-0">
                  <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-slate-800 mb-6 animate-[spin_20s_linear_infinite]" />
                  <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tighter mb-2">Pipeline Status: Standby</h4>
                  <p className="text-slate-500 text-sm max-w-xs">Initialize the Auto-EnrichAI agent to begin multi-source extraction.</p>
                </div>
              ) : error ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto py-10">
                  <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500" />
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">{error.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{error.message}</p>
                  <button onClick={() => runSimulation({ preventDefault: () => {} } as any)} className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition-colors border border-white/5">
                    <RefreshCcw className="w-4 h-4" /> RESTART EXTRACTION
                  </button>
                </div>
              ) : isLoading ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 py-20 lg:py-0">
                  <div className="relative">
                    <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
                    <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-[10px] font-black text-primary-400 tracking-[0.5em] uppercase animate-pulse">Applying Scraper Logic...</p>
                </div>
              ) : result ? (
                <div className="space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-500 pb-10">
                  <div className="glass-card p-6 sm:p-8 rounded-3xl border-primary-500/20 bg-primary-500/5">
                    <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-primary-500/30 flex items-center justify-center shrink-0 bg-slate-900 shadow-xl">
                        <span className="text-xl sm:text-2xl font-black text-white">{Math.round(result.confidence * 100)}%</span>
                        <div className="absolute -inset-2 border border-primary-500/10 rounded-full animate-ping opacity-20"></div>
                      </div>
                      <div className="min-w-0">
                        <span className="px-2.5 py-1 rounded bg-primary-500/10 text-primary-400 text-[9px] font-black uppercase mb-2 inline-block border border-primary-500/20 tracking-widest">
                          {result.type} Intelligence
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tighter uppercase break-words leading-tight">{result.entityName}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                    {result.attributes.map((attr, i) => (
                      <div key={i} className="bg-slate-900/60 border border-white/5 p-5 sm:p-6 rounded-3xl group hover:border-primary-500/30 transition-all hover:bg-slate-900/80">
                        <div className="text-[10px] text-slate-600 font-black uppercase mb-1 tracking-widest group-hover:text-primary-400 transition-colors">{attr.name}</div>
                        <div className="text-sm sm:text-base text-slate-100 font-bold">{attr.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="glass-card p-6 rounded-3xl border-white/5 flex gap-4 items-start bg-slate-900/40">
                    <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                    <div className="space-y-1">
                      <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Logic Traceability</span>
                      <p className="text-sm text-slate-400 leading-relaxed italic">"{result.logicNote}"</p>
                    </div>
                  </div>

                  {result.sources && result.sources.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-3 h-3 text-slate-500" />
                        <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Extracted Sources</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.sources.map((src, i) => (
                          <div key={i} className="px-3 py-1.5 bg-slate-950 border border-white/5 rounded-full text-[10px] text-slate-500 font-mono">
                            {src}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemoModal;
