import { useScrollReveal } from '../hooks/useScrollReveal';

const awardsAndKeyCerts = [
  {
    title: 'Winner - InnoServ Awards 2025 (Taiwan)',
    subtitle: 'Novalith Smart Pregnancy Belt',
    detail: 'Innovative wearable health-monitoring solution for expectant mothers.',
    category: 'Award Winner',
  },
  {
    title: 'Java Programming Certificate',
    subtitle: 'Informatics Institute of Technology (IIT)',
    detail: 'Awarded with Distinction. Covered Spring Boot, Bootstrap, Thymeleaf, and Java.',
    category: 'Academic Distinction',
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
    <section ref={ref} id="certifications" className="px-6 md:px-16 py-16 md:py-24 max-w-[1280px] mx-auto border-t border-on-surface/15">
      
      {/* Heading */}
      <div className="mb-12 scroll-reveal">
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">
          // Verified Professional Credentials & Innovation Awards
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-extrabold">
          CERTIFICATIONS & AWARDS
        </h2>
      </div>

      {/* Featured Awards Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 scroll-reveal">
        {awardsAndKeyCerts.map((item, idx) => (
          <div key={idx} className="p-8 bg-surface-container border border-on-surface/20 border-l-4 border-l-tertiary">
            <span className="px-2.5 py-1 bg-tertiary text-white font-label-sm text-[10px] uppercase font-bold mb-3 inline-block">
              {item.category}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-1">
              {item.title}
            </h3>
            <p className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider mb-2">
              {item.subtitle}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children scroll-reveal">
        
        {/* Boomi Professional */}
        <div className="p-8 bg-surface-container border border-on-surface/15">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-on-surface/15">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
              Boomi Professional
            </h3>
            <span className="font-label-sm text-label-sm text-tertiary font-bold font-mono">4 Certs</span>
          </div>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            {boomiProfessional.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-tertiary font-bold">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Boomi Associate */}
        <div className="p-8 bg-surface-container border border-on-surface/15">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-on-surface/15">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
              Boomi Associate
            </h3>
            <span className="font-label-sm text-label-sm text-tertiary font-bold font-mono">6 Certs</span>
          </div>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            {boomiAssociate.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-tertiary font-bold">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Anthropic AI Tooling */}
        <div className="p-8 bg-surface-container border border-on-surface/15">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-on-surface/15">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
              Anthropic AI Tooling
            </h3>
            <span className="font-label-sm text-label-sm text-tertiary font-bold font-mono">3 Certs</span>
          </div>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            {anthropicAiTooling.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-tertiary font-bold">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}