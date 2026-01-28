
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 border-b border-cyan-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="mono text-xl font-bold text-cyan-400 tracking-tighter">HARSH_RAMANI.SYS</span>
        <div className="hidden md:flex space-x-8 mono text-xs uppercase tracking-widest">
          <a href="#about" className="hover:text-cyan-400 transition">Init</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Deployments</a>
          <a href="#cyber" className="hover:text-fuchsia-500 transition">Cyber_Lab</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Ping</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
