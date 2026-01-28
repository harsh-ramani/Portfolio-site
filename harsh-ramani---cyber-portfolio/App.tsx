
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DomainModule from './components/DomainModule';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export type Domain = 'CYBER' | 'DATA' | 'AI';

const App: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<Domain>('CYBER');

  useEffect(() => {
    const classMap: Record<Domain, string> = {
      CYBER: 'theme-cyber',
      DATA: 'theme-data',
      AI: 'theme-ai'
    };
    document.body.className = `grid-bg ${classMap[activeDomain]}`;
  }, [activeDomain]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Domain Switcher Tab Bar */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-4">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-1 flex rounded-full shadow-2xl">
          {(['CYBER', 'DATA', 'AI'] as Domain[]).map((d) => (
            <button
              key={d}
              onClick={() => setActiveDomain(d)}
              className={`flex-1 py-2 px-4 rounded-full mono text-[10px] font-bold tracking-widest transition-all ${
                activeDomain === d 
                ? 'bg-primary text-black' 
                : 'text-gray-500 hover:text-white'
              }`}
            >
              {d}_MODE
            </button>
          ))}
        </div>
      </div>

      <main className="fade-in" key={activeDomain}>
        <Hero domain={activeDomain} />
        <Stats domain={activeDomain} />
        <DomainModule domain={activeDomain} />
        <Projects domain={activeDomain} />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;
