import { Briefcase, GraduationCap, Terminal, CheckCircle2 } from 'lucide-react';
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
    <section ref={ref} id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title">About Me</h2>
          <p className="text-sm font-mono text-neutral-400 mt-2">
            Integration Consultant & Full-Stack Developer
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="mini-card p-8 mb-14 scroll-reveal">
          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-inter mb-4">
            Boomi-certified Integration Consultant specializing in enterprise automation, API integrations, and monitoring solutions.
            At Yenlo, built 5 production automation suites and 7 migration processes that replaced hours of manual work with minutes of automated processing across managed customer environments.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed font-inter">
            Software Engineering undergraduate at the University of Westminster with 17 Boomi certifications and an InnoServ Awards 2025 win for an award-winning health-tech wearable.
          </p>
        </div>

        {/* Competencies */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coreCompetencies.map((item, idx) => (
              <div key={idx} className="mini-card p-3.5 flex items-center gap-2.5 text-xs font-inter text-neutral-200">
                <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Experience */}
          <div className="scroll-reveal-left">
            <div className="flex items-center gap-2.5 mb-6">
              <Briefcase size={18} className="text-cyan-400" />
              <h3 className="text-xl font-bold font-outfit text-white">Work Experience</h3>
            </div>

            <div className="mini-card p-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-white font-outfit">Yenlo</h4>
                <span className="tag-emerald">2025 – 2026.08</span>
              </div>
              <p className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                Boomi Integration Consultant
              </p>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                Built 5 production automation suites and 7 migration processes replacing manual work across managed customer environments with automated processing.
              </p>

              <div className="pt-3 border-t border-neutral-800">
                <div className="flex flex-wrap gap-1.5">
                  {['Dell Boomi AtomSphere', 'Boomi Flow', 'DataHub', 'API Management', 'REST APIs', 'PostgreSQL', 'Java', 'Docker'].map((tech, i) => (
                    <span key={i} className="tag-neutral text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="scroll-reveal-right">
            <div className="flex items-center gap-2.5 mb-6">
              <GraduationCap size={18} className="text-violet-400" />
              <h3 className="text-xl font-bold font-outfit text-white">Education</h3>
            </div>

            <div className="space-y-4">
              <div className="mini-card p-6">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-base font-bold text-white font-outfit">
                    University of Westminster
                  </h4>
                  <span className="tag-neutral text-[10px]">2023 – 2027</span>
                </div>
                <p className="text-xs font-mono text-neutral-300 font-semibold mb-2">
                  BSc (Hons) in Software Engineering (Reading)
                </p>
                <p className="text-xs text-neutral-400">
                  Full-stack software engineering, enterprise integration, and system design.
                </p>
              </div>

              <div className="mini-card p-6">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-base font-bold text-white font-outfit">
                    St. Peter’s College
                  </h4>
                  <span className="tag-neutral text-[10px]">2013 – 2021</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Primary & Secondary Education.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}