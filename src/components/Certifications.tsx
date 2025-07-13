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
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8 sm:mb-12 font-poppins text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
                <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-purple-900/40 to-purple-800/20
                         rounded-xl backdrop-blur-sm border border-purple-700/30
                         hover:border-purple-500/50 transition-all duration-500
                         hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2
                         hover:from-purple-800/50 hover:to-purple-700/30 cursor-pointer"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2
                               group-hover:text-purple-200 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-3">
                      {cert.issuer}
                    </p>
                    {cert.level && (
                        <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300
                                   rounded-full text-sm border border-purple-700/30
                                   group-hover:bg-purple-800/40 group-hover:border-purple-500/50
                                   group-hover:text-purple-200 transition-all duration-300">
                          {cert.level}
                        </span>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                              w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                              group-hover:w-3/4 transition-all duration-500"></div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}