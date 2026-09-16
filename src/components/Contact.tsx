import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Bot, MapPin, Copy, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    { id: 'phone', icon: <Phone />, label: 'Phone', value: '+251982347412', copyValue: '+251982347412', link: 'tel:+251982347412', color: 'text-neon-green' },
    { id: 'telegram', icon: <MessageCircle />, label: 'Telegram', value: '@AK_DEVELOP2', copyValue: 'AK_DEVELOP2', link: 'https://t.me/AK_DEVELOP2', color: 'text-neon-blue' },
    { id: 'bot', icon: <Bot />, label: 'Bot', value: '@AK_DEVELOP_bot', copyValue: 'AK_DEVELOP_bot', link: 'https://t.me/AK_DEVELOP_bot', color: 'text-neon-purple' },
    { id: 'location', icon: <MapPin />, label: 'Location', value: 'Ethiopia', copyValue: 'Ethiopia', link: null, color: 'text-neon-red' },
  ];

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="text-white">INITIALIZE</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-orange-400">CONTACT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactMethods.map((method) => (
              <div key={method.id} className="glass-panel p-6 rounded-3xl flex items-center justify-between group hover:border-white/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-white/5 ${method.color}`}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">{method.label}</h4>
                    {method.link ? (
                      <a href={method.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-white">{method.value}</span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy(method.copyValue, method.id)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied === method.id ? <CheckCircle2 className="w-5 h-5 text-neon-green" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-red/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl font-black mb-8 text-white">Send Transmission</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Transmission Sent."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Name / Designation</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-neon-red focus:bg-white/5 transition-all text-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Return Address</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-neon-red focus:bg-white/5 transition-all text-lg"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Message Data</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-neon-red focus:bg-white/5 transition-all resize-none text-lg"
                  placeholder="Describe your project..."
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Execute
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
