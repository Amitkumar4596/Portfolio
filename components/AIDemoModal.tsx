
import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Database, Globe, Zap, Loader2, ShieldCheck, ExternalLink, Code2, Table as TableIcon, Building2, Cpu, AlertTriangle, RefreshCcw, ClipboardCheck, Search, Radio, Wifi, Layers, Terminal } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'table' | 'json'>('table');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

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
    
    const steps = [
      { msg: "AutoEnrich AI: Initializing AWS-hosted Web Intelligence pipeline...", type: 'system' },
      { msg: "WSS: Establishing encrypted tunnel to Bright Data gateway...", type: 'ws' },
      { msg: "Browser Scraping: Spawning Unlocker for CAPTCHA solving...", type: 'info' },
      { msg: "SerpAPI: Fetching manufacturer & corporate nodes...", type: 'info' },
      { msg: "Beautiful Soup: Extracting DOM blobs via FastAPI...", type: 'info' },
      { msg: "Asyncio: Routing parsed data to Fine-tuned GPT-4o context...", type: 'ws' },
      { msg: "Enriching attributes at 95%+ precision target...", type: 'system' },
      { msg: "Cost Optimization: Validating 60% reduction in token overhead...", type: 'success' },
    ] as const;

    for (const step of steps) {
      addLog(step.msg, step.type);
      await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200));
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Enrich: "${currentInput}". Context: ${projectDescription}. STRICT JSON. If Company: MUST include "Address", "Email", "Phone", "Website". If Product: Technical Specs.`,
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

      const data = JSON.parse(response.text || '{}') as EnrichmentResponse;
      setResult(data);
      addLog("Enrichment complete. manual effort reduced by 80%.", "success");
    } catch (err: any) {
      const errMsg = err?.message || '';
      let errorDetail = {
        title: "Pipeline Execution Error",
        message: "The data enrichment engine failed to synthesize the request.",
        code: "AGENT_RUNTIME_EXC"
      };

      if (errMsg.includes("429") || errMsg.toLowerCase().includes("quota") || errMsg.toLowerCase().includes("limit")) {
        errorDetail = {
          title: "API Quota Exceeded",
          message: "The system has exceeded the allowed Gemini API token quota. Please wait for the quota to reset.",
          code: "ERR_TOKEN_LIMIT_EXCEEDED"
        };
      }

      setError(errorDetail);
      addLog(`FATAL: ${errorDetail.code}`, "error");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] glass-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col">
        {/* Navigation Bar */}
        <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary-500/20 blur-md rounded-xl"></div>
              <div className="relative p-2.5 bg-slate-950 rounded-xl border border-white/10">
                <Database className="w-5 h-5 text-primary-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tighter uppercase leading-none mb-1">Auto-EnrichAI</h3>
              <div className="flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase opacity-70">Production Environment v2.5.4</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden lg:flex items-center gap-4 px-4 py-2 bg-slate-950 rounded-xl border border-white/5">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Sys Load</span>
                  <span className="text-xs text-primary-400 font-mono">14.2%</span>
                </div>
                <div className="w-px h-6 bg-white/5"></div>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">IO Speed</span>
                  <span className="text-xs text-secondary-400 font-mono">84 MB/s</span>
                </div>
             </div>
             <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-slate-400 transition-all">
               <X className="w-6 h-6" />
             </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {/* Left Panel: Sidebar */}
          <div className="w-full lg:w-[360px] border-r border-white/5 p-6 md:p-8 space-y-10 bg-slate-900/20 overflow-y-auto">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                <Search className="w-3 h-3 text-primary-500" /> System Input
              </label>
              <form onSubmit={(e) => runSimulation(e)} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Terminal className="w-4 h-4 text-slate-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter MFR-MPN or Vendor..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-slate-950 border border-white/5 rounded-2xl pl-11 pr-4 py-4 text-sm text-white focus:border-primary-500/50 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
                <button
                  disabled={!input.trim() || isLoading}
                  className="w-full py-4.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 text-white rounded-2xl text-[11px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary-500/10 active:scale-95"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
                  Execute Pipeline
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Presets</label>
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={() => handleQuickTrigger('Siemens 3RT20261AP00')}
                  disabled={isLoading}
                  className="flex items-center gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl text-left hover:border-primary-500/40 transition-all group"
                >
                  <div className="p-2.5 bg-primary-500/5 rounded-xl group-hover:bg-primary-500/10 transition-colors">
                    <Cpu className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-black text-white uppercase tracking-tight">Technical MFR-MPN</span>
                    <span className="text-[10px] text-slate-500 font-medium italic">Siemens Contactor</span>
                  </div>
                </button>
                <button 
                  onClick={() => handleQuickTrigger('Verdantis Mumbai')}
                  disabled={isLoading}
                  className="flex items-center gap-4 p-4 bg-slate-950/50 border border-white/5 rounded-2xl text-left hover:border-secondary-500/40 transition-all group"
                >
                  <div className="p-2.5 bg-secondary-500/5 rounded-xl group-hover:bg-secondary-500/10 transition-colors">
                    <Building2 className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-black text-white uppercase tracking-tight">Vendor Intel</span>
                    <span className="text-[10px] text-slate-500 font-medium italic">Corporate Intelligence</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">WSS Pipeline Logs</label>
              <div ref={scrollRef} className="h-56 bg-slate-950/90 rounded-2xl p-4 font-mono text-[10px] overflow-y-auto space-y-2.5 border border-white/5 shadow-inner">
                {logs.length === 0 && <span className="text-slate-800 italic">Listening for trigger...</span>}
                {logs.map((log, i) => (
                  <div key={i} className={`flex gap-3 animate-in fade-in slide-in-from-left-2 ${
                    log.type === 'error' ? 'text-rose-400' : 
                    log.type === 'success' ? 'text-emerald-400' : 
                    log.type === 'system' ? 'text-primary-400' : 
                    log.type === 'ws' ? 'text-amber-400' : 'text-slate-600'
                  }`}>
                    <span className="opacity-20 shrink-0 font-bold">{i.toString().padStart(2, '0')}</span>
                    <span className="leading-tight">
                      {log.type === 'ws' && <Radio className="w-2.5 h-2.5 inline mr-1.5 align-middle" />}
                      {log.msg}
                    </span>
                  </div>
                ))}
                {isLoading && <span className="text-primary-500 animate-pulse">▋</span>}
              </div>
            </div>
          </div>

          {/* Right Panel: Data Workspace */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto bg-[#020617]/40 p-6 md:p-10 relative">
            {/* HUD Grid Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {!result && !isLoading && !error ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full"></div>
                  <Globe className="w-20 h-20 text-slate-900 animate-[spin_20s_linear_infinite]" />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Pipeline Status: Standby</h4>
                <p className="text-slate-500 text-sm max-w-sm">
                  Initialize the Auto-EnrichAI agent to begin multi-source web intelligence extraction.
                </p>
              </div>
            ) : isLoading ? (
              <div className="h-full flex flex-col items-center justify-center space-y-8">
                 <div className="relative">
                    <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center">
                       <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
                    </div>
                    <div className="absolute -inset-4 rounded-full border border-dashed border-primary-500/10 animate-[spin_15s_linear_infinite]"></div>
                 </div>
                 <div className="text-center space-y-2">
                    <p className="text-[10px] font-black text-primary-400 tracking-[0.5em] uppercase animate-pulse">Applying Scraper Logic</p>
                    <p className="text-slate-500 text-[10px] font-mono opacity-50 uppercase tracking-widest">WSS Gateway: OK // BrightData Agent: ACTIVE</p>
                 </div>
              </div>
            ) : error ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 max-w-md mx-auto">
                <div className="p-8 bg-rose-500/5 rounded-full border border-rose-500/20 text-rose-500">
                  <AlertTriangle className="w-12 h-12" />
                </div>
                <div>
                   <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{error.title}</h3>
                   <p className="text-slate-400 text-sm mb-10">{error.message}</p>
                   <button 
                     onClick={() => runSimulation({ preventDefault: () => {} } as React.FormEvent)}
                     className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border border-white/5"
                   >
                     <RefreshCcw className="w-4 h-4" />
                     Restart Extraction
                   </button>
                </div>
              </div>
            ) : result ? (
              <div className="space-y-10 relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
                {/* Result Hero */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                  <div className="xl:col-span-3 glass-card p-8 rounded-3xl border-primary-500/20 bg-primary-500/5 flex flex-col md:flex-row items-center gap-10 group">
                     <div className="relative w-24 h-24 shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="48" cy="48" r="44" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                          <circle 
                            cx="48" cy="48" r="44" fill="transparent" stroke="currentColor" strokeWidth="4" 
                            strokeDasharray={276}
                            strokeDashoffset={276 * (1 - result.confidence)}
                            className="text-primary-500 transition-all duration-1000 ease-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-black text-white leading-none">{Math.round(result.confidence * 100)}%</span>
                          <span className="text-[8px] text-slate-500 font-bold mt-1 uppercase">Conf</span>
                        </div>
                     </div>
                     <div className="min-w-0 flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                           <span className={`px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-widest ${result.type === 'Product' ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'bg-secondary-500/10 text-secondary-400 border border-secondary-500/20'}`}>
                             {result.type} Intelligence
                           </span>
                           <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 font-black uppercase tracking-widest">
                             <ShieldCheck className="w-3 h-3" />
                             Verified
                           </div>
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tighter truncate uppercase">{result.entityName}</h2>
                     </div>
                  </div>
                  
                  <div className="glass-card p-8 rounded-3xl border-white/5 bg-slate-900/60 flex flex-col justify-center">
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest block mb-4">Verification Nodes</span>
                    <div className="space-y-2">
                       {result.sources.slice(0, 2).map((s, i) => (
                         <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-950 rounded-xl text-[9px] text-slate-500 border border-white/5 truncate">
                           <ExternalLink className="w-3 h-3 text-primary-500" />
                           {s}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Attribute Data Area */}
                <div className="space-y-6">
                   <div className="flex items-center justify-between border-b border-white/5 pb-6">
                      <div className="flex items-center gap-4">
                         <div className="w-1.5 h-6 bg-primary-500 rounded-full"></div>
                         <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Master Data attributes</h3>
                      </div>
                      <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-white/10 shrink-0">
                         <button onClick={() => setViewMode('table')} className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${viewMode === 'table' ? 'bg-primary-500 text-white' : 'text-slate-500'}`}>
                           <TableIcon className="w-4 h-4" /> GRID
                         </button>
                         <button onClick={() => setViewMode('json')} className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${viewMode === 'json' ? 'bg-primary-500 text-white' : 'text-slate-500'}`}>
                           <Code2 className="w-4 h-4" /> JSON
                         </button>
                      </div>
                   </div>

                   {viewMode === 'table' ? (
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {result.attributes.map((attr, i) => (
                          <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-[2rem] hover:border-primary-500/30 transition-all group relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                               <ClipboardCheck className="w-3 h-3 text-slate-600" />
                             </div>
                             <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] mb-2 group-hover:text-primary-400 transition-colors">{attr.name}</div>
                             <div className="text-sm text-slate-100 font-bold tracking-tight">{attr.value}</div>
                          </div>
                        ))}
                     </div>
                   ) : (
                     <pre className="bg-[#010409] border border-white/5 p-8 rounded-[2rem] font-mono text-xs text-primary-400/80 leading-relaxed overflow-x-auto">
                        {JSON.stringify(result, null, 2)}
                     </pre>
                   )}
                </div>

                {/* Technical Footnote */}
                <div className="glass-card p-8 rounded-[2rem] border-white/5 flex gap-6 items-start bg-slate-900/20">
                   <div className="p-3 bg-emerald-500/10 rounded-2xl shrink-0">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                   </div>
                   <div className="space-y-1">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Logic Traceability</span>
                      <p className="text-sm text-slate-400 leading-relaxed italic font-medium leading-snug">"{result.logicNote}"</p>
                   </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemoModal;
