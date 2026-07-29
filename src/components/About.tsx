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
          <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white uppercase tracking-tight section-heading-mono">
            About Me
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-4 uppercase tracking-widest">
            // Profile & Executive Summary
          </p>
        </div>

        {/* Executive Bio Card */}
        <div className="hud-card hud-corner-notches p-8 sm:p-10 mb-16 scroll-reveal">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-lg bg-white/10 border border-white/20 items-center justify-center text-white">
              <Terminal size={22} />
            </div>
            <div className="space-y-4">
              <p className="text-neutral-200 text-lg leading-relaxed font-inter">
                Boomi-certified Integration Consultant specializing in enterprise automation, API integrations, and monitoring solutions.
                At Yenlo, built 5 production automation suites and 7 migration processes that replaced hours of manual work with minutes of automated processing across managed customer environments.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed font-inter">
                Software Engineering undergraduate at the University of Westminster with 17 Boomi certifications and an InnoServ Awards 2025 win for an award-winning health-tech wearable.
              </p>
            </div>
          </div>
        </div>

        {/* Core Competencies Grid */}
        <div className="mb-16 scroll-reveal">
          <h3 className="text-xl font-bold font-outfit text-white uppercase tracking-wider mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map((item, idx) => (
              <div key={idx} className="hud-card p-4 flex items-center gap-3 border-neutral-800 hover:border-neutral-500">
                <CheckCircle2 size={16} className="text-white shrink-0" />
                <span className="text-xs font-mono text-neutral-200 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div className="scroll-reveal-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-md bg-white text-black flex items-center justify-center font-bold">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-outfit text-white uppercase">Work Experience</h3>
                <p className="text-xs font-mono text-neutral-400">Production & Industry Roles</p>
              </div>
            </div>

            <div className="timeline-mono">
              <div className="timeline-mono-item">
                <div className="hud-card p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-white font-outfit">Yenlo</h4>
                    <span className="badge-mono badge-mono-highlight">2025 – 2026.08</span>
                  </div>
                  <p className="text-sm font-mono font-semibold text-neutral-300 mb-3">
                    Boomi Integration Consultant
                  </p>
                  <p className="text-xs font-inter text-neutral-400 leading-relaxed mb-4">
                    Built 5 production automation suites and 7 migration processes replacing manual work across managed customer environments with automated processing.
                  </p>

                  <div className="pt-3 border-t border-neutral-800">
                    <div className="text-xs font-mono text-neutral-400 mb-2">Key Technologies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Dell Boomi AtomSphere', 'Boomi Flow', 'DataHub', 'API Management', 'REST APIs', 'PostgreSQL', 'Java', 'Docker', 'Claude Code'].map((tech, i) => (
                        <span key={i} className="badge-mono text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="scroll-reveal-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-md bg-white text-black flex items-center justify-center font-bold">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-outfit text-white uppercase">Education</h3>
                <p className="text-xs font-mono text-neutral-400">Academic Background</p>
              </div>
            </div>

            <div className="timeline-mono space-y-6">
              <div className="timeline-mono-item">
                <div className="hud-card p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-lg font-bold text-white font-outfit">
                      University of Westminster
                    </h4>
                    <span className="badge-mono">2023 – 2027</span>
                  </div>
                  <p className="text-sm font-mono text-neutral-300 font-semibold mb-2">
                    BSc (Hons) in Software Engineering (Reading)
                  </p>
                  <p className="text-xs font-inter text-neutral-400">
                    Focused on full-stack software development, distributed systems, enterprise software, and software architecture.
                  </p>
                </div>
              </div>

              <div className="timeline-mono-item">
                <div className="hud-card p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-lg font-bold text-white font-outfit">
                      St. Peter’s College
                    </h4>
                    <span className="badge-mono">2013 – 2021</span>
                  </div>
                  <p className="text-xs font-inter text-neutral-400">
                    Primary & Secondary Education.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}