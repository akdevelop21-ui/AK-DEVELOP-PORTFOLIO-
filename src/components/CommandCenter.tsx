import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Globe, Database, Shield, Zap } from 'lucide-react';

export function CommandCenter() {
  const [activeTab, setActiveTab] = useState('sys');

  return (
    <section id="command" className="py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
         
         <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-4">
              <Terminal className="text-[#39ff14] w-10 h-10" />
              AK COMMAND CENTER
            </h2>
         </div>

         <div className="glass-panel border-[#39ff14] rounded-2xl overflow-hidden flex flex-col md:flex-row h-[500px] shadow-[0_0_30px_rgba(57,255,20,0.15)]">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-black/80 border-r border-[#39ff14]/20 p-4 flex flex-col gap-2">
               <div className="text-[#00f3ff] font-mono text-xs mb-6 px-2 opacity-70">
                 // SELECT MODULE
               </div>
               {[
                 { id: 'sys', label: 'SYS_DIAGNOSTICS', icon: <Cpu size={16} /> },
                 { id: 'nav', label: 'NODE_NAVIGATOR', icon: <Globe size={16} /> },
                 { id: 'sec', label: 'SECURITY_LOG', icon: <Shield size={16} /> },
                 { id: 'db',  label: 'DATA_STREAM', icon: <Database size={16} /> },
               ].map(tab => (
                 <button 
                   key={tab.id} 
                   onClick={() => setActiveTab(tab.id)} 
                   className={`text-left px-4 py-3 font-mono text-xs sm:text-sm flex items-center gap-3 rounded transition-all ${
                     activeTab === tab.id 
                       ? 'bg-[#39ff14]/20 text-[#39ff14] border-l-4 border-[#39ff14]' 
                       : 'text-gray-500 hover:bg-white/5 hover:text-[#00f3ff]'
                   }`}
                 >
                    {tab.icon} {tab.label}
                 </button>
               ))}
            </div>
            
            {/* Main Terminal Area */}
            <div className="flex-1 p-6 sm:p-8 font-mono relative overflow-hidden bg-[#050505]">
               {/* Terminal Scanline Overlay */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
               
               {activeTab === 'sys' && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <div className="flex items-center gap-3 text-[#00f3ff] text-xl mb-8 border-b border-[#00f3ff]/20 pb-4">
                      <Zap /> CORE DIAGNOSTICS
                   </div>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                     <div className="p-4 border border-[#39ff14]/30 rounded bg-[#39ff14]/5">
                        <div className="text-white text-2xl font-bold mb-1">99.9%</div>
                        <div className="text-[#39ff14] text-[10px]">LOGIC EFFICIENCY</div>
                     </div>
                     <div className="p-4 border border-[#00f3ff]/30 rounded bg-[#00f3ff]/5">
                        <div className="text-white text-2xl font-bold mb-1">12ms</div>
                        <div className="text-[#00f3ff] text-[10px]">NETWORK LATENCY</div>
                     </div>
                     <div className="p-4 border border-[#b026ff]/30 rounded bg-[#b026ff]/5">
                        <div className="text-white text-2xl font-bold mb-1">OPT</div>
                        <div className="text-[#b026ff] text-[10px]">RENDER ENGINE</div>
                     </div>
                   </div>
                   <div className="text-gray-400 text-sm space-y-2">
                      <p>&gt; Checking neural pathways... <span className="text-[#39ff14]">OK</span></p>
                      <p>&gt; Verifying layout constraints... <span className="text-[#39ff14]">OK</span></p>
                      <p>&gt; Syncing animation loops... <span className="text-[#39ff14]">OK</span></p>
                      <p className="animate-pulse text-[#00f3ff] mt-4">_ AWAITING USER INPUT</p>
                   </div>
                 </motion.div>
               )}

               {activeTab === 'nav' && (
                 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                   <h3 className="text-[#39ff14] text-xl mb-6 border-b border-[#39ff14]/20 pb-4">SECTOR NAVIGATION</h3>
                   <div className="grid grid-cols-2 gap-4">
                     {[
                        {name: 'ABOUT', href: '#about'},
                        {name: 'SKILLS', href: '#skills'},
                        {name: 'PROJECTS', href: '#projects'},
                        {name: 'SERVICES', href: '#services'},
                        {name: 'CONTACT', href: '#contact'}
                     ].map(link => (
                        <a key={link.name} href={link.href} className="p-4 border border-gray-800 hover:border-[#00f3ff] hover:bg-[#00f3ff]/10 rounded text-gray-400 hover:text-white transition-all flex justify-between items-center group">
                          <span>&gt; {link.name}</span>
                          <span className="text-[#00f3ff] opacity-0 group-hover:opacity-100 transition-opacity">EXEC</span>
                        </a>
                     ))}
                   </div>
                 </motion.div>
               )}

               {/* Fallbacks for other tabs */}
               {(activeTab === 'sec' || activeTab === 'db') && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center justify-center text-gray-600">
                    &gt; ENCRYPTED MODULE. ACCESS RESTRICTED.
                 </motion.div>
               )}
            </div>
         </div>

      </div>
    </section>
  )
}
