import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause } from 'lucide-react';

export function RealisticSunMoon() {
  const [isDay, setIsDay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => setIsDay(d => !d), 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center select-none overflow-hidden rounded-[100px] border border-transparent hover:border-[#00f3ff]/20 transition-colors cursor-pointer" onClick={() => setIsDay(!isDay)}>
      {/* Controls */}
      <button 
        onClick={(e) => { e.stopPropagation(); setIsPaused(!isPaused); }} 
        className="absolute z-[100] bottom-4 right-4 p-3 glass-panel rounded-full text-[#00f3ff] hover:text-[#39ff14] hover:border-[#39ff14] transition-colors shadow-[0_0_15px_rgba(0,243,255,0.3)]"
      >
        {isPaused ? <Play size={18} fill="currentColor" /> : <Pause size={18} fill="currentColor" />}
      </button>
      
      {/* Atmosphere Glow */}
      <motion.div 
        animate={{ 
          background: isDay 
            ? 'radial-gradient(circle, rgba(255,100,0,0.3) 0%, rgba(0,0,0,0) 60%)' 
            : 'radial-gradient(circle, rgba(0,100,255,0.2) 0%, rgba(0,0,0,0) 60%)' 
        }}
        className="absolute inset-0 transition-colors duration-[2000ms]"
      />

      {/* Horizon Line / Ground reflection effect */}
      <motion.div 
        animate={{ opacity: isDay ? 0.3 : 0.1 }}
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#39ff14]/10 to-transparent pointer-events-none"
      />

      <AnimatePresence mode="popLayout">
        {isDay ? (
          <motion.svg
            key="sun"
            viewBox="-200 -200 400 400"
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] drop-shadow-[0_0_60px_rgba(255,200,0,0.6)]"
            initial={{ y: 200, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -200, opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, type: "spring", bounce: 0.2 }}
          >
            <defs>
              <radialGradient id="sunGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#ffe600" />
                <stop offset="80%" stopColor="#ff5500" />
                <stop offset="100%" stopColor="#cc0000" />
              </radialGradient>
            </defs>
            {/* Sun Body */}
            <circle r="120" fill="url(#sunGrad)" />
            {/* Solar Flares/Corona */}
            <motion.circle r="135" fill="none" stroke="#ff5500" strokeWidth="2" strokeDasharray="10 30" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
            <motion.circle r="150" fill="none" stroke="#ffe600" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 20" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            viewBox="-200 -200 400 400"
            className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] drop-shadow-[0_0_40px_rgba(0,243,255,0.4)]"
            initial={{ y: 200, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -200, opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, type: "spring", bounce: 0.2 }}
          >
            <defs>
              <radialGradient id="moonGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#b026ff" />
                <stop offset="100%" stopColor="#000033" />
              </radialGradient>
              <radialGradient id="craterGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#b026ff" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle r="100" fill="url(#moonGrad)" />
            {/* Craters */}
            <circle cx="-30" cy="-40" r="15" fill="url(#craterGrad)" />
            <circle cx="40" cy="-20" r="25" fill="url(#craterGrad)" />
            <circle cx="10" cy="50" r="20" fill="url(#craterGrad)" />
            <circle cx="-50" cy="30" r="10" fill="url(#craterGrad)" />
            {/* Glowing ring */}
            <motion.circle r="115" fill="none" stroke="#00f3ff" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="5 15" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}
