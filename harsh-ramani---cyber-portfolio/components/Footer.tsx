
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-cyan-900/50 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="mono text-4xl font-bold mb-8">Ready to <span className="text-cyan-400">Collaborate</span>?</h3>
        <div className="flex justify-center gap-8 mb-12">
          <a href="tel:+919662055464" className="text-2xl hover:text-cyan-400 transition" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
          <a href="mailto:harshramani1406@gmail.com" className="text-2xl hover:text-fuchsia-500 transition" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/harsh-ramani-2814152b9" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-2xl hover:text-fuchsia-500 transition" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="mono text-[10px] text-gray-600 uppercase tracking-[0.5em]">
          System Location: Vadodara, Gujarat, India // 2026 Edition
        </p>
      </div>
    </footer>
  );
};

export default Footer;
