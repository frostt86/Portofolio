import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
      <section ref={ref} id="about" className="py-20 relative scroll-reveal">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold gradient-text mb-8 font-poppins text-center">About Me</h2>
          <div className="space-y-8">
            <div className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40
                         p-8 rounded-xl backdrop-blur-sm border border-gray-800/50
                         hover:border-purple-500/50 transition-all duration-500
                         hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1
                         hover:from-purple-900/40 hover:to-purple-800/30 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                            rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200
                           transition-colors duration-300">
                  As a Software Engineering undergraduate and Boomi Integration Consultant at Yenlo, I am passionate about developing innovative solutions
                  that make a real impact. With a strong foundation in full-stack development, blockchain
                  technology, and enterprise integration, I consistently lead projects that challenge conventional approaches and deliver
                  practical results.
                </p>
              </div>

              {/* Bottom gradient line that expands on hover */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                            w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                            group-hover:w-3/4 transition-all duration-500"></div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold gradient-text mb-4">Experience</h3>
              <div className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40
                          p-6 rounded-xl backdrop-blur-sm border border-gray-800/50
                          hover:border-purple-500/50 transition-all duration-500
                          hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1
                          hover:from-purple-900/40 hover:to-purple-800/30 mb-6 overflow-hidden
                          cursor-pointer">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <h4 className="font-bold text-gray-200 group-hover:text-white
                               transition-colors duration-300">Yenlo</h4>
                  <p className="text-gray-400 group-hover:text-gray-300
                               transition-colors duration-300">Boomi Integration Consultant</p>
                  <p className="text-gray-500 group-hover:text-gray-400
                               transition-colors duration-300">Present</p>
                </div>

                {/* Bottom gradient line that expands on hover */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                              w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                              group-hover:w-3/4 transition-all duration-500"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold gradient-text mb-4">Education</h3>
              <div className="space-y-4">
                <div className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40
                            p-6 rounded-xl backdrop-blur-sm border border-gray-800/50
                            hover:border-purple-500/50 transition-all duration-500
                            hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1
                            hover:from-purple-900/40 hover:to-purple-800/30 overflow-hidden
                            cursor-pointer">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-gray-200 group-hover:text-white
                                 transition-colors duration-300">Informatics Institute of Technology</h4>
                    <p className="text-gray-400 group-hover:text-gray-300
                                 transition-colors duration-300">BSc (Hons) in Software Engineering</p>
                    <p className="text-gray-500 group-hover:text-gray-400
                                 transition-colors duration-300">2023–2027</p>
                  </div>

                  {/* Bottom gradient line that expands on hover */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                group-hover:w-3/4 transition-all duration-500"></div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40
                            p-6 rounded-xl backdrop-blur-sm border border-gray-800/50
                            hover:border-purple-500/50 transition-all duration-500
                            hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1
                            hover:from-purple-900/40 hover:to-purple-800/30 overflow-hidden
                            cursor-pointer">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-gray-200 group-hover:text-white
                                 transition-colors duration-300">St. Peter's College – Colombo 4</h4>
                    <p className="text-gray-500 group-hover:text-gray-400
                                 transition-colors duration-300">2008–2022</p>
                  </div>

                  {/* Bottom gradient line that expands on hover */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                group-hover:w-3/4 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}