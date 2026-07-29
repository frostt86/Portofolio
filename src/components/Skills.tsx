import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Integration Platforms',
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
    skills: ['REST APIs', 'JSON', 'HTTP Client', 'XML', 'Webhooks', 'CSV', 'DDPs'],
  },
  {
    title: 'Boomi Components',
    skills: [
      'Process Reporting',
      'Maps & Lookups',
      'Decision Shapes',
      'Business Rules',
      'Flow Control',
      'Sub-Processes',
      'Environment Extensions',
      'Exception Handling',
    ],
  },
  {
    title: 'Cloud & Collaboration',
    skills: [
      'Teams Webhooks',
      'Confluence API',
      'ActiveCampaign API',
      'Pipedrive API',
      'AFAS Profit REST API',
      'Brevo SMTP',
      'Azure',
    ],
  },
  {
    title: 'Development & Databases',
    skills: [
      'Java (Advanced)',
      'PostgreSQL / SQL',
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
    <section ref={ref} id="skills" className="py-16 max-w-[760px] mx-auto px-4 border-t border-white/10">
      
      {/* Header */}
      <div className="mb-8 scroll-reveal">
        <h2 className="text-xl font-bold font-sans text-white">
          technical skills
        </h2>
        <p className="text-xs font-mono text-neutral-400 mt-0.5">
          tooling matrix & core technical proficiencies
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children scroll-reveal">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="ziffer-card p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold font-sans text-white mb-3 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>{cat.title}</span>
                <span className="text-[#95e78e] font-mono text-xs">0{idx + 1}</span>
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="ziffer-pill text-xs py-0.5 px-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}