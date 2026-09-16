import React from 'react';
import { Planet } from './Planet';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#39ff14] font-mono text-sm mb-4 tracking-widest uppercase">&gt; Profile_Data</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Digital Architect</h2>
          <div className="glass-panel p-6 rounded-2xl border-[#00f3ff]/30 mb-6">
             <ul className="space-y-3 font-mono text-sm">
                <li className="flex gap-4"><span className="text-[#00f3ff] w-24">ENTITY:</span> <span className="text-gray-300">AK DEVELOP ™</span></li>
                <li className="flex gap-4"><span className="text-[#00f3ff] w-24">ROLE:</span> <span className="text-gray-300">Web & Bot Developer</span></li>
                <li className="flex gap-4"><span className="text-[#00f3ff] w-24">LOCATION:</span> <span className="text-[#39ff14]">Ethiopia</span></li>
                <li className="flex gap-4"><span className="text-[#00f3ff] w-24">EDUCATION:</span> <span className="text-gray-300">Grade 11</span></li>
                <li className="flex gap-4"><span className="text-[#00f3ff] w-24">LANGUAGES:</span> <span className="text-gray-300">Afaan Oromoo, Amharic, English</span></li>
             </ul>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg mb-8">
            I am a passionate developer specializing in building premium, highly interactive, futuristic cyberpunk applications and intelligent community bots. My mission is to merge striking visual identity with high-performance engineering.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
           <Planet />
        </motion.div>
        
      </div>
    </section>
  )
}
