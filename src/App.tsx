import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { CommandCenter } from './components/CommandCenter';
import { Contact } from './components/Contact';
import { Terminal } from 'lucide-react';

export default function App() {
  const [buildMode, setBuildMode] = useState(false);

  useEffect(() => {
    if (buildMode) {
      document.body.classList.add('build-mode-active');
    } else {
      document.body.classList.remove('build-mode-active');
    }
  }, [buildMode]);

  return (
    <div className="bg-void min-h-screen text-slate-200 selection:bg-[#39ff14] selection:text-black font-sans">
      <div className="cosmic-bg"><div className="stars" /></div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <CommandCenter />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      {/* Build Mode Visual Toggle */}
      <button 
        onClick={() => setBuildMode(!buildMode)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full glass-panel text-[#00f3ff] hover:text-[#39ff14] hover:border-[#39ff14] transition-all group shadow-[0_0_20px_rgba(0,243,255,0.2)]"
        title="Toggle Build Mode"
      >
        <Terminal size={24} className={buildMode ? "animate-pulse text-[#39ff14]" : ""} />
        <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-black border border-[#39ff14] text-[#39ff14] text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {buildMode ? 'DISABLE BUILD MODE' : 'INIT BUILD MODE'}
        </span>
      </button>
    </div>
  );
}
