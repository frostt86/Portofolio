import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  {
    title: 'Java Programming Certificate',
    issuer: 'PDU-IIT',
    level: 'Distinction'
  },
  {
    title: 'Professional Boomi Developer',
    issuer: 'Boomi'
  },
  {
    title: 'Elasticsearch Engineer Certificate',
    issuer: 'Elastic'
  },
  {
    title: 'Webspire React.js Certificate',
    issuer: 'Webspire Academy'
  },
  {
    title: 'Angular Completion Certificate',
    issuer: 'LinkedIn Learning'
  },
  {
    title: 'AI Driven Competition Participation Certificates',
    issuer: 'Various Organizations'
  },
  {
    title: 'Volunteer Certificate – Cutting Edge 2023',
    issuer: 'Cutting Edge'
  }
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
      <section ref={ref} id="certifications" className="py-20 relative scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold gradient-text mb-12 font-poppins">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
                <div
                    key={index}
                    className="p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800/50
                         hover:border-purple-500/30 transition-all duration-300 hover:glow
                         transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  {cert.level && (
                      <span className="inline-block mt-2 px-3 py-1 bg-purple-900/30 text-purple-300
                               rounded-full text-sm border border-purple-700/30">
                  {cert.level}
                </span>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}