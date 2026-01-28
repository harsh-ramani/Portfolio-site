
import React from 'react';
import { Domain } from '../App';

interface ProjectsProps {
  domain: Domain;
}

const Projects: React.FC<ProjectsProps> = ({ domain }) => {
  const allProjects = [
    {
      title: 'Virtual Painter',
      domain: 'AI',
      category: 'MOD: AI_VISION',
      description: 'Engineered a hand-tracking interface using OpenCV and Mediapipe. Real-time gesture recognition for digital canvas manipulation.',
      tags: ['#PYTHON', '#OPENCV', '#MEDIAPIPE'],
      icon: 'fa-eye'
    },
    {
      title: 'Delivery Risk Predictor',
      domain: 'DATA',
      category: 'MOD: DATA_ENGINEERING',
      description: 'ML model predicting deadline breaches. Designed risk-scoring algorithms to prioritize high-risk job processing for logistics optimization.',
      tags: ['#ML', '#PREDICTIVE_ANALYTICS', '#DATA_ENG'],
      icon: 'fa-database'
    },
    {
      title: 'Port Scanner X',
      domain: 'CYBER',
      category: 'MOD: NETWORK_INTEL',
      description: 'Asynchronous network reconnaissance tool designed for identifying open ports and service versions in local environments.',
      tags: ['#NETWORK', '#PYTHON', '#SECURITY'],
      icon: 'fa-search'
    },
    {
      title: 'Threat Intel Dashboard',
      domain: 'CYBER',
      category: 'MOD: SEC_OPS',
      description: 'A visualizer for real-time security logs, highlighting suspicious IP behavior and potential DDoS patterns.',
      tags: ['#DASHBOARD', '#LOG_ANALYSIS', '#REACT'],
      icon: 'fa-shield-virus'
    }
  ];

  const filtered = allProjects.filter(p => p.domain === domain);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="mono text-primary text-2xl mb-12 uppercase tracking-[0.2em] underline decoration-white/10 underline-offset-[16px]">
          Targeted_Deployments
        </h3>
        
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, idx) => (
              <div key={idx} className="bg-black/60 border border-white/5 p-8 rounded-sm relative overflow-hidden group hover:border-primary transition-all duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-40 transition">
                  <i className={`fas ${project.icon} text-primary text-4xl`}></i>
                </div>
                <p className="mono text-primary text-xs mb-2 opacity-70">{project.category}</p>
                <h4 className="text-2xl font-bold mb-4 tracking-tighter group-hover:text-primary transition">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mono text-[10px] text-primary/80">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-primary/10 px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center mono text-gray-600 border border-dashed border-white/10">
            [ ERROR: No modules deployed for this domain yet ]
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
