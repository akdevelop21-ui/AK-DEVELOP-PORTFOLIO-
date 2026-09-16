import React from 'react';
import { motion } from 'motion/react';
import { RealisticSunMoon } from './SunMoon';
import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      
      {/* Realistic Sun/Moon positioned in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full max-w-5xl opacity-80 mix-blend-screen pointer-events-auto">
        <RealisticSunMoon />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center pointer-events-none">
        
        {/* Animated System Status Panel (Hero) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 glass-panel p-4 rounded-xl border-[#39ff14] inline-block text-left shadow-[0_0_20px_rgba(57,255,20,0.15)] bg-black/80"
        >
          <div className="text-[#39ff14] font-mono text-xs sm:text-sm leading-relaxed">
            <div>&gt; SYSTEM: <span className="text-white">AK DEVELOP ™</span></div>
            <div>&gt; LOCATION: <span className="text-[#00f3ff]">ETHIOPIA</span></div>
            <div className="flex items-center gap-2 mt-1">&gt; STATUS: <span className="text-black font-bold tracking-widest bg-[#39ff14] px-2 py-0.5 rounded animate-pulse shadow-[0_0_10px_#39ff14]">READY TO BUILD</span></div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight mb-6"
        >
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">AK DEVELOP</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12 pointer-events-auto"
        >
          <a href="#command" className="group relative px-8 py-4 rounded-full bg-[#39ff14] text-black font-bold tracking-widest uppercase overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)]">
            <span className="relative flex items-center gap-3 z-10">
              <Terminal className="w-5 h-5" /> INIT COMMAND CENTER
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
