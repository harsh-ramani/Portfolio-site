
import React from 'react';
import { Domain } from '../App';

interface HeroProps {
  domain: Domain;
}

const Hero: React.FC<HeroProps> = ({ domain }) => {
  const meta = {
    CYBER: {
      status: '[ System Breached ]',
      title: 'CYBER_SEC',
      desc: 'Penetration Tester & Ethical Hacker in Training',
      color: 'text-primary'
    },
    DATA: {
      status: '[ Pipeline Online ]',
      title: 'DATA_ENG',
      desc: 'Architecting Scalable Data Infrastructures',
      color: 'text-primary'
    },
    AI: {
      status: '[ Neural Link Active ]',
      title: 'AI_VISION',
      desc: 'Computer Vision & Machine Learning Specialist',
      color: 'text-primary'
    }
  };

  const current = meta[domain];

  return (
    <section id="about" className="pt-52 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="mono text-primary mb-2 tracking-widest text-sm uppercase">{current.status}</p>
        <h1 className="text-6xl md:text-8xl font-black mb-6 italic">
          HARSH <span className={`text-transparent bg-clip-text bg-gradient-to-r ${domain === 'CYBER' ? 'from-green-400 to-fuchsia-500' : domain === 'DATA' ? 'from-blue-400 to-white' : 'from-purple-500 to-cyan-400'}`}>
            {current.title}
          </span>
        </h1>
        <div className="mono text-lg md:text-xl text-gray-400 space-y-2 mb-8">
          <p className="terminal-header">{current.desc}</p>
          <p className="text-sm opacity-60">Initializing system modules for {domain} operations...</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a href="mailto:harshramani1406@gmail.com" className="cyber-btn px-8 py-3 mono font-bold uppercase tracking-tighter">
            Execute_Link
          </a>
          <button className="border border-white/20 text-white/50 px-8 py-3 mono hover:border-primary hover:text-primary transition">
            View_Manifest
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
