import { useScrollReveal } from '../hooks/useScrollReveal';

const coreCompetencies = [
  'Enterprise Integration Development',
  'API Integration & Architecture',
  'Process Automation & Monitoring',
  'Solution Design & Optimization',
  'Integration Governance & Security',
  'Operational Reporting & Analytics',
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="about" className="px-6 md:px-16 py-16 md:py-24 max-w-[1280px] mx-auto border-t border-on-surface/15">
      
      {/* Heading */}
      <div className="mb-12 scroll-reveal">
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">
          // Profile & Executive Summary
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-extrabold">
          ABOUT PAMITHA
        </h2>
      </div>

      {/* Profile Bio Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 scroll-reveal">
        <div className="md:col-span-8 p-8 md:p-12 bg-surface-container border border-on-surface/15">
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6 font-medium">
            Boomi-certified Integration Consultant specializing in enterprise automation, API integrations, and monitoring solutions. At Yenlo, built 5 production automation suites and 7 migration processes that replaced hours of manual work with minutes of automated processing across managed customer environments.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Software Engineering undergraduate at the University of Westminster with 17 Boomi certifications and an InnoServ Awards 2025 win for an award-winning health-tech wearable.
          </p>
        </div>

        {/* Quick Facts Sidebar */}
        <div className="md:col-span-4 p-8 bg-surface border border-on-surface/15 flex flex-col justify-between">
          <div>
            <h3 className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-bold mb-4 border-b border-on-surface/15 pb-2">
              Primary Expertise
            </h3>
            <ul className="space-y-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              <li className="flex items-center justify-between">
                <span>Domain</span>
                <span className="font-bold text-on-surface">Dell Boomi</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Architecture</span>
                <span className="font-bold text-on-surface">REST & Java</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Status</span>
                <span className="font-bold text-tertiary">Active Consultant</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-on-surface/15">
            <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest block">
              Current Location
            </span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
              Panadura, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="mb-16 scroll-reveal">
        <h3 className="font-label-sm text-label-sm text-outline uppercase tracking-widest mb-6 font-bold">
          Core Competencies & Governance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreCompetencies.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-surface-container border border-on-surface/10 font-body-md text-body-md text-on-surface font-medium hover:border-tertiary transition-colors flex items-center gap-3"
            >
              <span className="text-tertiary font-bold">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-on-surface/15">
        
        {/* Work Experience */}
        <div className="scroll-reveal">
          <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase mb-6 flex items-center justify-between">
            <span>Work Experience</span>
            <span className="font-label-sm text-label-sm text-tertiary">01</span>
          </h3>

          <div className="p-8 bg-surface-container border border-on-surface/15">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-headline-md text-headline-md text-on-surface font-bold">Yenlo</h4>
              <span className="px-2 py-1 bg-tertiary text-white font-label-sm text-[10px] uppercase font-bold">
                2025 – 2026.08
              </span>
            </div>
            <p className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold mb-4">
              Boomi Integration Consultant
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
              Built 5 production automation suites and 7 migration processes replacing manual work across managed customer environments with automated processing.
            </p>

            <div className="pt-4 border-t border-on-surface/15">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Dell Boomi AtomSphere', 'Boomi Flow', 'DataHub', 'API Management', 'REST APIs', 'PostgreSQL', 'Java', 'Docker'].map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-surface text-on-surface font-mono text-[11px] border border-on-surface/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="scroll-reveal">
          <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase mb-6 flex items-center justify-between">
            <span>Education</span>
            <span className="font-label-sm text-label-sm text-tertiary">02</span>
          </h3>

          <div className="space-y-6">
            <div className="p-8 bg-surface-container border border-on-surface/15">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-headline-md text-[20px] text-on-surface font-bold">
                  University of Westminster
                </h4>
                <span className="px-2 py-1 bg-on-surface text-surface font-label-sm text-[10px] uppercase font-bold">
                  2023 – 2027
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-bold mb-2">
                BSc (Hons) in Software Engineering (Reading)
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Focus on enterprise software engineering, software architecture, full-stack systems, and distributed platforms.
              </p>
            </div>

            <div className="p-6 bg-surface-container border border-on-surface/15">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-headline-md text-[18px] text-on-surface font-bold">
                  St. Peter’s College
                </h4>
                <span className="font-label-sm text-label-sm text-outline">
                  2013 – 2021
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Primary & Secondary Academic Foundation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}