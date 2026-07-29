import { useScrollReveal } from '../hooks/useScrollReveal';
import { Linkedin, ExternalLink } from 'lucide-react';

const awardsAndKeyCerts = [
  {
    title: 'Winner - InnoServ Awards 2025 (Taiwan)',
    subtitle: 'Novalith Smart Pregnancy Belt',
    detail: 'Innovative wearable health-monitoring solution for expectant mothers.',
    category: 'Award Winner',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7468995875151712256/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc',
  },
  {
    title: 'Java Programming Certificate',
    subtitle: 'Informatics Institute of Technology (IIT)',
    detail: 'Awarded with Distinction. Covered Spring Boot, Bootstrap, Thymeleaf, and Java.',
    category: 'Academic Distinction',
  },
  {
    title: 'Sherlock & WSO2 Innovation Challenge',
    subtitle: 'WSO2 & Sherlock Hackathon',
    detail: 'AI and integration teamwork challenge exploring WSO2 API architecture.',
    category: 'Competition Feature',
    link: 'https://www.linkedin.com/posts/pamitha-kularathne-ba2b06295_sherlock-wso2-teamwork-activity-7309983470678654977-1e9Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc',
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
    <section ref={ref} id="certifications" className="py-16 max-w-[760px] mx-auto px-4 border-t border-white/10">
      
      {/* Header */}
      <div className="mb-8 scroll-reveal">
        <h2 className="text-xl font-bold font-sans text-white">
          certifications & awards
        </h2>
        <p className="text-xs font-mono text-neutral-400 mt-0.5">
          verified credentials & competition achievements
        </p>
      </div>

      {/* Featured Awards */}
      <div className="space-y-4 mb-8 scroll-reveal">
        {awardsAndKeyCerts.map((item, idx) => (
          <div key={idx} className="ziffer-card p-6 border-l-4 border-l-[#95e78e]">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="ziffer-pill ziffer-pill-lime text-[11px] py-0.5 px-2">
                {item.category}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#95e78e] hover:underline flex items-center gap-1"
                >
                  <Linkedin size={13} /> LinkedIn Update <ExternalLink size={11} />
                </a>
              )}
            </div>

            <h3 className="text-base font-bold font-sans text-white mb-1">
              {item.title}
            </h3>
            <p className="text-xs font-mono text-neutral-300 mb-2">
              {item.subtitle}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Credentials Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children scroll-reveal">
        
        <div className="ziffer-card p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <h3 className="text-xs font-bold font-sans text-white">Boomi Professional</h3>
            <span className="text-[#95e78e] font-mono text-[11px]">4 Certs</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-neutral-300">
            {boomiProfessional.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#95e78e]">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ziffer-card p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <h3 className="text-xs font-bold font-sans text-white">Boomi Associate</h3>
            <span className="text-[#95e78e] font-mono text-[11px]">6 Certs</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-neutral-300">
            {boomiAssociate.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#95e78e]">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ziffer-card p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
            <h3 className="text-xs font-bold font-sans text-white">Anthropic AI</h3>
            <span className="text-[#95e78e] font-mono text-[11px]">3 Certs</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-neutral-300">
            {anthropicAiTooling.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#95e78e]">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}