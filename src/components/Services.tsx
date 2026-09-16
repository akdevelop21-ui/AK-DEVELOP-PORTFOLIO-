import React from 'react';

export function Services() {
  const websitePackages = [
    { name: 'Elite', price: '500 ETB', features: ['Single Page', 'Responsive', 'Basic SEO'] },
    { name: 'Advanced', price: '800 ETB', features: ['Multi Page', 'UI/UX', 'Contact Form', 'SEO'] },
    { name: 'Master', price: '1,300 ETB', features: ['Full Stack', 'Database', 'Admin Panel', 'Pro SEO'] },
    { name: 'Premium Plus', price: '2,000 ETB', features: ['Enterprise', 'Custom AI', 'High Perf', 'Priority'] },
  ];
  const botPackages = [
    { name: 'Elite', price: '650 ETB', features: ['Basic Commands', 'Auto-replies', 'Standard Host'] },
    { name: 'Advanced', price: '900 ETB', features: ['API Integration', 'DB Connect', 'Users'] },
    { name: 'Master', price: '1,500 ETB', features: ['Complex Flows', 'Payments', 'Advanced Admin'] },
    { name: 'Premium Plus', price: '2,500 ETB', features: ['Custom AI Logic', 'High Load', 'Priority'] },
  ];

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Services</h2>
          <p className="text-[#00f3ff] font-light text-lg">Transparent pricing for development packages.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl">
            <h3 className="text-xl font-bold mb-8 text-[#39ff14] drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">Web Architecture</h3>
            <div className="space-y-2">
              {websitePackages.map((pkg, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#00f3ff]/10 border border-transparent hover:border-[#00f3ff]/50 transition-all">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{pkg.name}</h4>
                    <p className="text-sm text-[#00f3ff] font-light">{pkg.features.join(' • ')}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-bold text-[#39ff14]">{pkg.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-8 md:p-10 rounded-3xl">
            <h3 className="text-xl font-bold mb-8 text-[#39ff14] drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">Bot Engineering</h3>
            <div className="space-y-2">
              {botPackages.map((pkg, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#00f3ff]/10 border border-transparent hover:border-[#00f3ff]/50 transition-all">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{pkg.name}</h4>
                    <p className="text-sm text-[#00f3ff] font-light">{pkg.features.join(' • ')}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-bold text-[#39ff14]">{pkg.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
