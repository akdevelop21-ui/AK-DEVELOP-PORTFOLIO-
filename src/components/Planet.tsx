import React from 'react';
import { motion } from 'motion/react';

export function Planet() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
       {/* Interactive SVG planet */}
       <motion.svg 
         viewBox="0 0 400 400" 
         className="w-[300px] h-[300px] drop-shadow-[0_0_30px_rgba(0,243,255,0.4)] cursor-grab active:cursor-grabbing"
         whileHover={{ scale: 1.05 }}
       >
         <defs>
           <radialGradient id="planetGrad" cx="30%" cy="30%" r="70%">
             <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.8" />
             <stop offset="100%" stopColor="#0a0a0c" stopOpacity="0.9" />
           </radialGradient>
           <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#b026ff" stopOpacity="0.1" />
             <stop offset="50%" stopColor="#b026ff" stopOpacity="0.8" />
             <stop offset="100%" stopColor="#b026ff" stopOpacity="0.1" />
           </linearGradient>
         </defs>

         {/* Base Planet Sphere */}
         <circle r="130" cx="200" cy="200" fill="url(#planetGrad)" />
         
         {/* Holographic Longitude/Latitude Lines */}
         <g stroke="#39ff14" strokeWidth="0.5" strokeOpacity="0.3" fill="none">
            <ellipse cx="200" cy="200" rx="130" ry="40" />
            <ellipse cx="200" cy="200" rx="130" ry="90" />
            <ellipse cx="200" cy="200" rx="40" ry="130" />
            <ellipse cx="200" cy="200" rx="90" ry="130" />
         </g>

         {/* Digital Grid Outline */}
         <motion.circle 
           r="140" cx="200" cy="200" 
           fill="none" 
           stroke="#00f3ff" 
           strokeWidth="1" 
           strokeDasharray="4 12" 
           animate={{ rotate: 360 }} 
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
           style={{ originX: '200px', originY: '200px' }}
         />
         
         {/* Orbital Rings */}
         <motion.ellipse 
           cx="200" cy="200" rx="190" ry="50" 
           fill="none" 
           stroke="url(#ringGrad)" 
           strokeWidth="2" 
           transform="rotate(-20 200 200)" 
         />
         <motion.ellipse 
           cx="200" cy="200" rx="170" ry="30" 
           fill="none" 
           stroke="#00f3ff" 
           strokeOpacity="0.3"
           strokeWidth="1" 
           strokeDasharray="5 15"
           transform="rotate(-20 200 200)" 
           animate={{ strokeDashoffset: [0, 100] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         />

         {/* Drifting Data Particles */}
         <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ originX: '200px', originY: '200px' }}>
           {Array.from({length: 8}).map((_, i) => (
              <circle key={i} r="2.5" fill="#39ff14" cx={200 + Math.cos(i*45)*190} cy={200 + Math.sin(i*45)*50} />
           ))}
         </motion.g>
       </motion.svg>
    </div>
  )
}
