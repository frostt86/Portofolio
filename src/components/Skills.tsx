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
      'Dynamic Document Properties',
      'Environment Extensions',
      'Exception Handling',
    ],
  },
  {
    title: 'Cloud & Collaboration',
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
    <section ref={ref} id="skills" className="px-6 md:px-16 py-16 md:py-24 max-w-[1280px] mx-auto border-t border-on-surface/15">
      
      {/* Heading */}
      <div className="mb-12 scroll-reveal">
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">
          // Technical Proficiency & Tooling Matrix
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-extrabold">
          TECHNICAL SKILLS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-reveal">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="p-8 bg-surface-container border border-on-surface/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-on-surface/15">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
                  {cat.title}
                </h3>
                <span className="font-label-sm text-label-sm text-tertiary font-mono font-bold">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 bg-surface text-on-surface font-mono text-xs border border-on-surface/10">
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