
import React from 'react';
import { Domain } from '../App';

interface StatsProps {
  domain: Domain;
}

const Stats: React.FC<StatsProps> = ({ domain }) => {
  const statsMap: Record<Domain, Array<{label: string, value: string}>> = {
    CYBER: [
      { label: 'THREAT_LEVEL', value: 'ELEVATED' },
      { label: 'LAB_HOURS', value: '450+' },
      { label: 'OS_FOCUS', value: 'KALI_LINUX' },
      { label: 'TOOLS', value: 'METASPLOIT' },
    ],
    DATA: [
      { label: 'THROUGHPUT', value: '99.9%' },
      { label: 'STACK', value: 'PYTHON/SQL' },
      { label: 'LAKEHOUSE', value: 'DELTA_LAKE' },
      { label: 'PIPELINES', value: 'AIRFLOW' },
    ],
    AI: [
      { label: 'ACCURACY', value: '94.2%' },
      { label: 'FRAMEWORKS', value: 'PYTORCH' },
      { label: 'VISION', value: 'OPENCV' },
      { label: 'COMPUTE', value: 'CUDA_CORE' },
    ]
  };

  const currentStats = statsMap[domain];

  return (
    <section className="py-10 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mono text-center">
        {currentStats.map((skill, index) => (
          <div key={index}>
            <p className="text-primary text-2xl font-bold">{skill.value}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
