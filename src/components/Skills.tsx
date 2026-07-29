import { Layers, Cpu, Cloud, Code, UserCheck, Wrench } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Integration Platforms',
    icon: Layers,
    color: 'cyan',
    skills: [
      'Dell Boomi AtomSphere',
      'Boomi Flow Services',
      'API Management',
      'Integration Process Design',
      'DataHub',
    ],
  },
  {
    title: 'Integration Technologies',
    icon: Cpu,
    color: 'emerald',
    skills: ['REST APIs', 'JSON', 'HTTP Client', 'XML', 'Webhooks', 'CSV', 'DDPs'],
  },
  {
    title: 'Boomi Components',
    icon: Wrench,
    color: 'violet',
    skills: [
      'Process Reporting',
      'Maps & Lookups',
      'Decision Shapes',
      'Business Rules',
      'Flow Control',
      'Sub-Processes',
      'Dynamic Document Properties',
      'Environment Extensions',
      'Exception Handling',
    ],
  },
  {
    title: 'Cloud & Collaboration',
    icon: Cloud,
    color: 'cyan',
    skills: [
      'Teams Webhooks',
      'Confluence REST API',
      'ActiveCampaign API',
      'Pipedrive API',
      'AFAS Profit REST API',
      'Brevo SMTP',
      'Azure',
    ],
  },
  {
    title: 'Development & Databases',
    icon: Code,
    color: 'emerald',
    skills: [
      'Java (Advanced)',
      'SQL / PostgreSQL / MSSQL',
      'Spring Boot',
      'Solidity',
      'React.js',
      'Angular',
      'MongoDB',
      'TypeScript',
      'Git',
      'Docker',
      'Linux',
    ],
  },
  {
    title: 'Soft Skills & Leadership',
    icon: UserCheck,
    color: 'violet',
    skills: [
      'Problem Solving',
      'Project Management',
      'Teamwork & Leadership',
      'Adaptability under pressure',
      'Creativity',
      'Fluent Communication',
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-sm font-mono text-neutral-400 mt-2">
            Tooling matrix & core technical proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children scroll-reveal">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div key={idx} className="mini-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-800">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200">
                      <IconComp size={18} />
                    </div>
                    <h3 className="text-base font-bold font-outfit text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tag-neutral text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}