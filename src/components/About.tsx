import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
      <section ref={ref} id="about" className="py-20 relative scroll-reveal">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-2 font-poppins text-center">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
                         mx-auto rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-8">
            <div className="group relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60
                         p-8 rounded-2xl backdrop-blur-sm border border-gray-800/50
                         hover:border-purple-500/50 transition-all duration-700
                         hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2
                         hover:from-purple-900/50 hover:via-purple-800/30 hover:to-purple-900/50
                         overflow-hidden cursor-pointer hover:scale-[1.02]">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-pink-600/0
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                            animate-pulse"></div>

              {/* Floating particles effect */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full
                            opacity-0 group-hover:opacity-60 transition-opacity duration-700
                            animate-bounce"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-pink-400 rounded-full
                            opacity-0 group-hover:opacity-80 transition-opacity duration-700
                            animate-pulse"></div>
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-purple-300 rounded-full
                            opacity-0 group-hover:opacity-70 transition-opacity duration-700
                            animate-ping"></div>

              <div className="relative z-10">
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-100
                           transition-colors duration-500 group-hover:drop-shadow-sm">
                  As a Software Engineering undergraduate and Boomi Integration Consultant at Yenlo, I am passionate about developing innovative solutions
                  that make a real impact. With a strong foundation in full-stack development, blockchain
                  technology, and enterprise integration, I consistently lead projects that challenge conventional approaches and deliver
                  practical results.
                </p>
              </div>

              {/* Multi-layered bottom gradient lines */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                            w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                            group-hover:w-3/4 transition-all duration-700"></div>
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2
                            w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50
                            group-hover:w-2/3 transition-all duration-900 delay-100"></div>
            </div>

            <div>
              <div className="relative mb-6">
                <h3 className="text-2xl font-semibold gradient-text mb-2">Experience</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                             rounded-full animate-pulse"></div>
              </div>
              <div className="group relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60
                          p-6 rounded-2xl backdrop-blur-sm border border-gray-800/50
                          hover:border-purple-500/50 transition-all duration-700
                          hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2
                          hover:from-purple-900/50 hover:via-purple-800/30 hover:to-purple-900/50
                          mb-6 overflow-hidden cursor-pointer hover:scale-[1.02]">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-pink-600/0
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                              animate-pulse"></div>

                {/* Floating particles */}
                <div className="absolute top-3 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full
                              opacity-0 group-hover:opacity-60 transition-opacity duration-700
                              animate-bounce"></div>
                <div className="absolute bottom-4 left-6 w-1 h-1 bg-pink-400 rounded-full
                              opacity-0 group-hover:opacity-80 transition-opacity duration-700
                              animate-pulse"></div>

                <div className="relative z-10">
                  <h4 className="font-bold text-gray-200 group-hover:text-white text-xl
                               transition-colors duration-500 group-hover:drop-shadow-sm">Yenlo</h4>
                  <p className="text-gray-400 group-hover:text-purple-300 text-lg
                               transition-colors duration-500">Boomi Integration Consultant</p>
                  <p className="text-gray-500 group-hover:text-purple-400
                               transition-colors duration-500">Present</p>
                </div>

                {/* Multi-layered bottom gradient lines */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                              w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                              group-hover:w-3/4 transition-all duration-700"></div>
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2
                              w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50
                              group-hover:w-2/3 transition-all duration-900 delay-100"></div>
              </div>
            </div>

            <div>
              <div className="relative mb-6">
                <h3 className="text-2xl font-semibold gradient-text mb-2">Education</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                             rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-4">
                <div className="group relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60
                            p-6 rounded-2xl backdrop-blur-sm border border-gray-800/50
                            hover:border-purple-500/50 transition-all duration-700
                            hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2
                            hover:from-purple-900/50 hover:via-purple-800/30 hover:to-purple-900/50
                            overflow-hidden cursor-pointer hover:scale-[1.02]">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-pink-600/0
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                animate-pulse"></div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full
                                opacity-0 group-hover:opacity-60 transition-opacity duration-700
                                animate-bounce"></div>
                  <div className="absolute bottom-3 left-4 w-1 h-1 bg-pink-400 rounded-full
                                opacity-0 group-hover:opacity-80 transition-opacity duration-700
                                animate-pulse"></div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-gray-200 group-hover:text-white text-lg
                                 transition-colors duration-500 group-hover:drop-shadow-sm">Informatics Institute of Technology</h4>
                    <p className="text-gray-400 group-hover:text-purple-300
                                 transition-colors duration-500">BSc (Hons) in Software Engineering</p>
                    <p className="text-gray-500 group-hover:text-purple-400
                                 transition-colors duration-500">2023–2027</p>
                  </div>

                  {/* Multi-layered bottom gradient lines */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                group-hover:w-3/4 transition-all duration-700"></div>
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50
                                group-hover:w-2/3 transition-all duration-900 delay-100"></div>
                </div>

                <div className="group relative bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60
                            p-6 rounded-2xl backdrop-blur-sm border border-gray-800/50
                            hover:border-purple-500/50 transition-all duration-700
                            hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2
                            hover:from-purple-900/50 hover:via-purple-800/30 hover:to-purple-900/50
                            overflow-hidden cursor-pointer hover:scale-[1.02]">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-pink-600/0
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                animate-pulse"></div>

                  {/* Floating particles */}
                  <div className="absolute top-5 right-8 w-1 h-1 bg-purple-400 rounded-full
                                opacity-0 group-hover:opacity-60 transition-opacity duration-700
                                animate-bounce"></div>
                  <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full
                                opacity-0 group-hover:opacity-80 transition-opacity duration-700
                                animate-pulse"></div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-gray-200 group-hover:text-white text-lg
                                 transition-colors duration-500 group-hover:drop-shadow-sm">St. Peter's College – Colombo 4</h4>
                    <p className="text-gray-500 group-hover:text-purple-400
                                 transition-colors duration-500">2008–2022</p>
                  </div>

                  {/* Multi-layered bottom gradient lines */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                group-hover:w-3/4 transition-all duration-700"></div>
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 opacity-50
                                group-hover:w-2/3 transition-all duration-900 delay-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}