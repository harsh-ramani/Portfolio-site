
import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="mono text-cyan-400 text-xl mb-8 uppercase tracking-widest underline decoration-fuchsia-600 underline-offset-8">Academic_Records</h3>
          <div className="space-y-8">
            <div className="border-l border-cyan-500/30 pl-6">
              <h4 className="text-xl font-bold">Sigma Institute of Engineering</h4>
              <p className="mono text-sm text-cyan-400">B.E. Information Technology | 2022-2026</p>
              <p className="text-gray-500 mt-2 italic">Performance_Index: 7.57 GPA</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mono text-cyan-400 text-xl mb-8 uppercase tracking-widest underline decoration-fuchsia-600 underline-offset-8">Authenticated_Certs</h3>
          <ul className="space-y-4 mono text-sm">
            <li className="flex items-center gap-3">
              <i className="fas fa-shield-alt text-fuchsia-500"></i>
              <span>Intel AI for Manufacturing (Jul 2025)</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-shield-alt text-fuchsia-500"></i>
              <span>Code Unnati - Edunet Foundation (Apr 2025)</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-shield-alt text-fuchsia-500"></i>
              <span>Data Engineering Fundamentals (2024)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
