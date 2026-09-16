import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Image as ImageIcon } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    { 
      id: 1, 
      title: 'AKORA-AI Assistant', 
      category: 'Telegram Bots', 
      description: 'Advanced AI-powered assistant built for Telegram. Features intelligent natural language processing, automated moderation, and custom user queries handling.', 
      tech: ['Python', 'Telegram API', 'OpenAI'], 
      hasImage: false 
    },
    { 
      id: 2, 
      title: 'Enterprise Cyber Portal', 
      category: 'Web Apps', 
      description: 'Full-stack enterprise application with futuristic interface design. Implements secure role-based access and real-time data streaming.', 
      tech: ['React', 'Express.js', 'PostgreSQL'], 
      hasImage: false 
    },
    { 
      id: 3, 
      title: 'Community Sentinel', 
      category: 'Discord Bots', 
      description: 'Modular Discord bot for comprehensive community management. Handles automated welcome systems, raid protection, and leveling.', 
      tech: ['Node.js', 'Discord.js', 'MongoDB'], 
      hasImage: false 
    },
    { 
      id: 4, 
      title: 'Neon Portfolio V1', 
      category: 'Websites', 
      description: 'The first iteration of the personal developer portfolio. Built for high performance and striking visual aesthetics.', 
      tech: ['HTML5', 'CSS3', 'JS'], 
      hasImage: false 
    }
  ];

  const categories = ['All', 'Websites', 'Telegram Bots', 'Discord Bots', 'Web Apps'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-[#00f3ff]/20 pb-8">
            <div>
              <div className="text-[#00f3ff] font-mono text-sm mb-2 uppercase tracking-widest">&gt; /mnt/projects/verified</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Hologram Gallery</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)} 
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase transition-all ${
                    filter === cat 
                      ? 'bg-[#39ff14] text-black shadow-[0_0_15px_#39ff14]' 
                      : 'glass-panel text-[#00f3ff] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
         </div>
         
         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <AnimatePresence>
             {filtered.map(project => (
               <motion.div 
                 layout 
                 initial={{ opacity: 0, scale: 0.9 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 exit={{ opacity: 0, scale: 0.9 }} 
                 key={project.id} 
                 onClick={() => setSelectedProject(project)} 
                 className="group glass-panel rounded-2xl p-6 md:p-8 cursor-pointer border border-[#00f3ff]/30 hover:border-[#39ff14] transition-all relative overflow-hidden shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)]"
               >
                  <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-[#39ff14] w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                     {project.hasImage ? (
                       <div className="w-12 h-12 rounded-lg bg-[#00f3ff]/20 flex items-center justify-center border border-[#00f3ff]/50">
                         <ImageIcon className="text-[#00f3ff] w-6 h-6" />
                       </div>
                     ) : (
                       <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center border border-gray-800 text-[10px] font-mono text-gray-500">
                         N/A
                       </div>
                     )}
                     <span className="text-[#39ff14] font-mono text-xs md:text-sm uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-black/50 text-[#00f3ff] border border-[#00f3ff]/30">
                        {t}
                      </span>
                    ))}
                  </div>
               </motion.div>
             ))}
           </AnimatePresence>
         </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
             <motion.div 
               initial={{ y: 50 }} 
               animate={{ y: 0 }} 
               onClick={e => e.stopPropagation()}
               className="glass-panel w-full max-w-3xl rounded-3xl p-8 md:p-12 border border-[#39ff14] shadow-[0_0_50px_rgba(57,255,20,0.15)] bg-black/90 relative"
             >
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 p-2 rounded-full transition-colors"
                >
                  <X />
                </button>
                <div className="text-[#39ff14] font-mono text-sm mb-4 uppercase tracking-widest">&gt; {selectedProject.category}</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{selectedProject.title}</h2>
                
                {!selectedProject.hasImage && (
                  <div className="w-full h-48 md:h-64 bg-[#0a0a0c] border border-gray-800 rounded-xl flex items-center justify-center text-gray-600 font-mono text-sm mb-8 shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                    [ VISUAL DATA UNAVAILABLE / PENDING VERIFICATION ]
                  </div>
                )}
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">{selectedProject.description}</p>
                <div className="flex gap-3 flex-wrap mb-12">
                   {selectedProject.tech.map((t: string) => (
                     <span key={t} className="px-3 py-1 bg-[#00f3ff]/10 text-[#00f3ff] font-mono text-sm rounded-md border border-[#00f3ff]/30">
                       {t}
                     </span>
                   ))}
                </div>
                <button className="w-full py-4 bg-[#39ff14] text-black font-bold tracking-widest text-lg uppercase rounded-lg hover:bg-white hover:shadow-[0_0_20px_#fff] transition-all">
                  Initialize Uplink
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
