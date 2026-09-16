import React, { useState } from 'react';

export function Footer() {
  const [clicks, setClicks] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 3) {
      setEasterEgg(true);
      setClicks(0);
      setTimeout(() => setEasterEgg(false), 3000);
    }
  };

  return (
    <footer className="py-8 border-t border-[#00f3ff]/20 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
         <div className="text-[#00f3ff] font-mono text-sm flex items-center gap-3 mb-4 md:mb-0">
           <img src="file_000000007da482089055a224910c6681.png" alt="AK" className="w-8 h-8 rounded border border-[#00f3ff]/30" />
           <span>AK DEVELOP ™ © 2026</span>
         </div>
         <div className="flex items-center gap-8">
           <a href="#home" className="text-gray-500 hover:text-[#39ff14] text-sm font-mono uppercase tracking-widest transition-colors">
              [ Return_Top ]
           </a>
           {/* Easter Egg Trigger */}
           <span 
             onClick={handleClick} 
             className="w-3 h-3 rounded-full bg-[#0a0a0c] border border-gray-800 cursor-pointer hover:bg-[#39ff14] hover:border-[#39ff14] transition-colors shadow-inner" 
             title="Signal Node"
           />
         </div>
      </div>
      
      {/* Easter Egg Modal */}
      {easterEgg && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
           <div className="text-[#39ff14] font-mono text-center relative z-10">
             <div className="text-5xl md:text-7xl font-bold animate-pulse mb-6 drop-shadow-[0_0_20px_#39ff14]">
               &gt; ACCESS GRANTED
             </div>
             <div className="text-lg md:text-xl text-[#00f3ff] tracking-widest">
               WELCOME TO THE MAINFRAME, OPERATOR.
             </div>
           </div>
        </div>
      )}
    </footer>
  )
}
