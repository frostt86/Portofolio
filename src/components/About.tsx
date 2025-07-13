import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
      <section ref={ref} id="about" className="py-20 relative scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold gradient-text mb-8 font-poppins">About Me</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a Software Engineering undergraduate and Boomi Integration Consultant at Yenlo, I am passionate about developing innovative solutions
                that make a real impact. With a strong foundation in full-stack development, blockchain
                technology, and enterprise integration, I consistently lead projects that challenge conventional approaches and deliver
                practical results.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold gradient-text mb-4">Experience</h3>
              <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800/50
                          hover:border-purple-500/30 transition-all duration-300 hover:glow mb-6">
                <h4 className="font-bold text-gray-200">Yenlo</h4>
                <p className="text-gray-400">Boomi Integration Consultant</p>
                <p className="text-gray-500">Present</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold gradient-text mb-4">Education</h3>
              <div className="space-y-4">
                <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800/50
                            hover:border-purple-500/30 transition-all duration-300 hover:glow">
                  <h4 className="font-bold text-gray-200">Informatics Institute of Technology</h4>
                  <p className="text-gray-400">BSc (Hons) in Software Engineering</p>
                  <p className="text-gray-500">2023–2027</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800/50
                            hover:border-purple-500/30 transition-all duration-300 hover:glow">
                  <h4 className="font-bold text-gray-200">St. Peter's College – Colombo 4</h4>
                  <p className="text-gray-500">2008–2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}