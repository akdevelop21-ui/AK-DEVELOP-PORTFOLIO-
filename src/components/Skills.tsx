import React from 'react';
import { motion } from 'motion/react';

export function Skills() {
  const skills = [
    { name: 'HTML5', level: 95, x: 10, y: 20 },
    { name: 'CSS3', level: 92, x: 30, y: 15 },
    { name: 'JavaScript', level: 88, x: 50, y: 25 },
    { name: 'React', level: 83, x: 70, y: 20 },
    { name: 'Node.js', level: 86, x: 40, y: 50 },
    { name: 'Express.js', level: 79, x: 60, y: 45 },
    { name: 'Python', level: 92, x: 20, y: 60 },
    { name: 'Telegram Bot', level: 94, x: 15, y: 80 },
    { name: 'Discord Bot', level: 85, x: 35, y: 85 },
    { name: 'PostgreSQL', level: 84, x: 55, y: 70 },
    { name: 'Firebase', level: 90, x: 80, y: 60 },
    { name: 'GraphQL', level: 78, x: 85, y: 40 },
    { name: 'UI/UX Design', level: 87, x: 10, y: 40 },
    { name: 'Web Design', level: 93, x: 30, y: 35 },
    { name: 'AI Integration', level: 70, x: 75, y: 85 },
  ];

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 relative">
         
         {/* Timeline Section */}
         <div className="mb-32">
            <div className="text-[#00f3ff] font-mono text-sm mb-2 uppercase tracking-widest">&gt; Chronology</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Tech Timeline</h2>
            
            <div className="flex flex-col gap-8 border-l-2 border-[#00f3ff]/20 md:ml-4 pl-8 relative">
               {[
                 { year: '2023', title: 'Foundation', text: 'Initiated basic web frameworks (HTML, CSS, JS) and core logic.' },
                 { year: '2024', title: 'Automation', text: 'Mastered Python & Bot APIs (Telegram, Discord) for community tools.' },
                 { year: '2025', title: 'Architecture', text: 'Full-stack integration (React, Node.js, Express, Databases).' },
                 { year: '2026', title: 'Innovation', text: 'Advanced Cyber UI, 3D Canvas, and sophisticated AI Integrations.' },
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   className="relative glass-panel p-6 rounded-xl border-[#00f3ff]/20 hover:border-[#39ff14] max-w-3xl"
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                 >
                   <span className="absolute -left-[41px] top-8 w-4 h-4 bg-black border-2 border-[#39ff14] rounded-full shadow-[0_0_10px_#39ff14]" />
                   <div className="text-[#39ff14] font-mono text-xl mb-2">{item.year} <span className="text-white ml-2">- {item.title}</span></div>
                   <div className="text-gray-400">{item.text}</div>
                 </motion.div>
               ))}
            </div>
         </div>

         {/* Constellation Section */}
         <div className="mb-16">
            <div className="text-[#b026ff] font-mono text-sm mb-2 uppercase tracking-widest">&gt; Neural_Network</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Skill Constellation</h2>
         </div>
         
         {/* Desktop Constellation View */}
         <div className="hidden md:block relative w-full h-[600px] glass-panel rounded-3xl overflow-hidden bg-[#050505] shadow-[0_0_40px_rgba(176,38,255,0.1)] border-[#b026ff]/30">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {skills.map((s1, i) => 
                skills.slice(i+1).map((s2, j) => {
                  const dist = Math.sqrt(Math.pow(s1.x - s2.x, 2) + Math.pow(s1.y - s2.y, 2));
                  if (dist < 35) {
                    return (
                      <line 
                        key={`${i}-${j}`} 
                        x1={`${s1.x}%`} y1={`${s1.y}%`} 
                        x2={`${s2.x}%`} y2={`${s2.y}%`} 
                        stroke="rgba(176, 38, 255, 0.2)" 
                        strokeWidth="1" 
                      />
                    );
                  }
                  return null;
                })
              )}
            </svg>
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.05, type: 'spring' }}
                viewport={{ once: true }}
              >
                 <div className="w-4 h-4 rounded-full bg-[#00f3ff] shadow-[0_0_15px_#00f3ff] group-hover:bg-[#39ff14] group-hover:shadow-[0_0_25px_#39ff14] transition-colors relative z-10" />
                 <div className="absolute top-6 text-xs font-mono text-[#00f3ff] group-hover:text-[#39ff14] bg-black/90 px-3 py-1.5 rounded border border-[#00f3ff]/30 group-hover:border-[#39ff14]/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                   {skill.name} <span className="text-white">[{skill.level}%]</span>
                 </div>
              </motion.div>
            ))}
         </div>

         {/* Mobile Fallback List */}
         <div className="md:hidden grid grid-cols-2 gap-4">
           {skills.map((skill, idx) => (
             <div key={idx} className="glass-panel p-4 rounded-xl border-[#b026ff]/30">
                <div className="text-sm font-bold text-white mb-2">{skill.name}</div>
                <div className="flex items-center gap-2">
                  <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-[#b026ff]" style={{ width: `${skill.level}%` }} />
                  </div>
                  <div className="text-[#39ff14] font-mono text-xs">{skill.level}%</div>
                </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  )
}
