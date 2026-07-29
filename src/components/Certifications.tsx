import { Award, CheckCircle2, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const awardsAndKeyCerts = [
  {
    title: 'Winner - InnoServ Awards 2025 (Taiwan)',
    subtitle: 'Novalith Smart Pregnancy Belt',
    detail: 'Innovative wearable health-monitoring solution for expectant mothers.',
    category: 'Award Winner',
    icon: Sparkles,
  },
  {
    title: 'Java Programming Certificate',
    subtitle: 'Informatics Institute of Technology (IIT)',
    detail: 'Awarded with Distinction. Covered Spring Boot, Bootstrap, Thymeleaf, and Java.',
    category: 'Academic Distinction',
    icon: Award,
  },
];

const boomiProfessional = [
  'Professional Integration Developer Certification (Apr 2025)',
  'Professional API Management Certification (Mar 2026)',
  'Professional Linux Operational Administrator Certification (Jun 2026)',
  'Professional Windows Operational Administrator Certification (Jun 2026)',
];

const boomiAssociate = [
  'Associate Integration Developer Certification (Jun 2026)',
  'Associate Integration Architect Certification (Apr 2026)',
  'Associate Runtime Architect Certification (Apr 2026)',
  'Associate Administrator Certification (May 2026)',
  'Associate Data Hub Certification (Jun 2026)',
  'Associate Flow Essentials Certification (Sep 2025)',
];

const anthropicAiTooling = [
  'Claude 101 – Anthropic (Jun 2026)',
  'Claude Code 101 – Anthropic (Jun 2026)',
  'Introduction to Claude Cowork – Anthropic (Jun 2026)',
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="text-sm font-mono text-neutral-400 mt-2">
            Professional credentials & competition achievements
          </p>
        </div>

        {/* Featured Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 scroll-reveal">
          {awardsAndKeyCerts.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="mini-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-cyan-400 shrink-0">
                    <IconComp size={20} />
                  </div>
                  <div>
                    <span className="tag-cyan text-[10px] mb-2 inline-flex">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold font-outfit text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-300 font-semibold mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children scroll-reveal">
          
          {/* Boomi Professional */}
          <div className="mini-card p-6">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-neutral-800">
              <ShieldCheck size={18} className="text-cyan-400" />
              <h3 className="text-base font-bold font-outfit text-white">
                Boomi – Professional
              </h3>
            </div>
            <ul className="space-y-2.5">
              {boomiProfessional.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Boomi Associate */}
          <div className="mini-card p-6">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-neutral-800">
              <ShieldCheck size={18} className="text-violet-400" />
              <h3 className="text-base font-bold font-outfit text-white">
                Boomi – Associate
              </h3>
            </div>
            <ul className="space-y-2.5">
              {boomiAssociate.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Anthropic AI Tooling */}
          <div className="mini-card p-6">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-neutral-800">
              <Terminal size={18} className="text-cyan-400" />
              <h3 className="text-base font-bold font-outfit text-white">
                Anthropic – AI Tooling
              </h3>
            </div>
            <ul className="space-y-2.5">
              {anthropicAiTooling.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}