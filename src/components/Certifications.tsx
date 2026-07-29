import { Award, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  {
    title: 'Java Programming Certificate',
    issuer: 'PDU-IIT',
    level: 'Distinction',
  },
  {
    title: 'Professional Boomi Developer',
    issuer: 'Boomi',
  },
  {
    title: 'Elasticsearch Engineer Certificate',
    issuer: 'Elastic',
  },
  {
    title: 'Webspire React.js Certificate',
    issuer: 'Webspire Academy',
  },
  {
    title: 'Angular Completion Certificate',
    issuer: 'LinkedIn Learning',
  },
  {
    title: 'AI Driven Competition Participation Certificates',
    issuer: 'Various Organizations',
  },
  {
    title: 'Volunteer Certificate – Cutting Edge 2023',
    issuer: 'Cutting Edge',
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="certifications" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit gradient-text section-heading">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children scroll-reveal">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-6 group cursor-pointer">
              <div className="relative z-10 flex items-start gap-4">
                {/* Verified icon */}
                <div className="shrink-0 mt-0.5">
                  <CheckCircle
                    size={22}
                    className="verified-pulse"
                    style={{ color: 'var(--color-neon-green)' }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white font-outfit mb-1 group-hover:text-neon-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-inter mb-2">{cert.issuer}</p>
                  {cert.level && (
                    <span className="neon-tag text-xs">
                      <Award size={12} className="inline mr-1 -mt-0.5" />
                      {cert.level}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}