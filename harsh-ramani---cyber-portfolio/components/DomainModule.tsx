
import React from 'react';
import { Domain } from '../App';

interface DomainModuleProps {
  domain: Domain;
}

const DomainModule: React.FC<DomainModuleProps> = ({ domain }) => {
  const content = {
    CYBER: {
      title: 'Cyber_Security.log',
      icon: 'fa-user-secret',
      desc: 'Engaged in continuous learning of network vulnerabilities and ethical hacking techniques. Mastering the art of perimeter defense and system hardening.',
      skills: ['Network Security', 'OWASP Top 10', 'Social Engineering', 'Burp Suite']
    },
    DATA: {
      title: 'Data_Architecture.env',
      icon: 'fa-database',
      desc: 'Specializing in ETL processes and large-scale data modeling. Building robust data pipelines that transform raw metrics into actionable intelligence.',
      skills: ['ETL Pipelines', 'Pandas/NumPy', 'SQL Optimization', 'Cloud Data Warehousing']
    },
    AI: {
      title: 'Neural_Network.bin',
      icon: 'fa-brain',
      desc: 'Exploring the boundaries of computer vision and predictive modeling. Implementing deep learning architectures for real-time object detection.',
      skills: ['Convolutional Neural Nets', 'Mediapipe SDK', 'Scikit-Learn', 'Feature Engineering']
    }
  }[domain];

  return (
    <section id="domain-focus" className="py-20 px-6">
      <div className="max-w-5xl mx-auto border-l-4 border-primary bg-primary/5 p-8 rounded-r-xl transition-all">
        <h3 className="mono text-primary text-2xl font-bold mb-4 uppercase tracking-widest flex items-center gap-3">
          <i className={`fas ${content.icon}`}></i> {content.title}
        </h3>
        <p className="text-gray-300 max-w-2xl mb-6 leading-relaxed">
          {content.desc}
        </p>
        <div className="flex flex-wrap gap-4 mono text-xs">
          {content.skills.map(s => (
            <span key={s} className="bg-white/5 border border-primary/20 px-3 py-1 rounded whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainModule;
