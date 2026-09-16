import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export function Navigation() {
  const [uptime, setUptime] = useState(0);

  // Simulated bot connectivity uptime counter
  useEffect(() => { 
    const i = setInterval(() => setUptime(u => u + 1), 1000); 
    return () => clearInterval(i); 
  }, []);

  const formatTime = (s: number) => {
     const hrs = Math.floor(s / 3600).toString().padStart(2, '0');
     const mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
     const secs = (s % 60).toString().padStart(2, '0');
     return `${hrs}:${mins}:${secs}`;
  };

  const navLinks = ['home', 'about', 'command', 'skills', 'projects', 'services'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-between items-start">
       {/* 3D Holographic Logo Frame */}
       <div className="pointer-events-auto glass-panel p-2 rounded-xl flex items-center gap-3 border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:rotate-2 transition-transform cursor-pointer">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#39ff14]/50">
             <img src="file_000000007da482089055a224910c6681.png" alt="AK Logo" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#00f3ff]/20 to-transparent mix-blend-overlay animate-pulse pointer-events-none" />
          </div>
          <div className="hidden sm:block font-bold text-white tracking-widest text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] pr-2">
            AK DEVELOP
          </div>
       </div>

       {/* Central Nav */}
       <nav className="pointer-events-auto hidden md:flex items-center gap-6 glass-panel px-6 py-3 rounded-full">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} className="text-xs font-mono text-[#00f3ff] hover:text-[#39ff14] hover:drop-shadow-[0_0_8px_#39ff14] uppercase transition-all">
              {link}
            </a>
          ))}
       </nav>

       {/* Live Bot Connectivity System Status Panel */}
       <div className="pointer-events-auto glass-panel p-3 rounded-xl border-[#39ff14] flex flex-col items-end shadow-[0_0_20px_rgba(57,255,20,0.15)]">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#39ff14] mb-1">
             <Activity size={12} className="animate-pulse" /> BOT_NET: SECURE
          </div>
          <div className="text-[10px] font-mono text-[#00f3ff]">
             UPTIME: {formatTime(uptime)}
          </div>
       </div>
    </header>
  );
}
