import { useScrollReveal } from '../hooks/useScrollReveal';

const specialSkills = ['Spring Boot', 'Angular', 'Solidity', 'SQL'];
const regularSkills = ['Python', 'React', 'NoSQL'];

const skills = {
  soft: [
    'Problem Solving',
    'Project Management',
    'Teamwork',
    'Leadership',
    'Adaptability'
  ]
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
      <section ref={ref} id="skills" className="py-16 sm:py-20 relative scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8 sm:mb-12 font-poppins text-center">Skills</h2>

          <div className="space-y-12 sm:space-y-16">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 sm:mb-8 text-center">Technical Skills</h3>

              {/* Special Skills - Featured Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {specialSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/20
                           p-6 rounded-xl backdrop-blur-sm border border-purple-700/30
                           hover:border-purple-500/50 transition-all duration-500
                           hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2
                           hover:from-purple-800/50 hover:to-purple-700/30"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700
                                  rounded-lg flex items-center justify-center shadow-lg">
                          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        </div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-200
                                 transition-colors duration-300">{skill}</h4>
                      </div>

                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                group-hover:w-3/4 transition-all duration-500"></div>
                    </div>
                ))}
              </div>

              {/* Regular Skills - Modern Pills */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                {regularSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/60 rounded-full text-gray-300
                           transition-all duration-300 border border-gray-700/50
                           hover:border-purple-500/50 backdrop-blur-sm hover:text-white
                           hover:bg-purple-900/40 hover:scale-110 transform text-sm sm:text-base
                           hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer
                           relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20
                                translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      <span className="relative z-10">{skill}</span>
                    </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 sm:mb-8 text-center">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.soft.map((skill, index) => (
                    <div
                        key={index}
                        className="group px-6 py-4 bg-gradient-to-r from-gray-900/60 to-gray-800/40
                           rounded-lg text-gray-300 transition-all duration-300
                           border border-gray-700/50 hover:border-purple-500/50
                           backdrop-blur-sm hover:text-white hover:from-purple-900/40
                           hover:to-purple-800/30 hover:scale-105 transform text-sm sm:text-base
                           hover:shadow-md hover:shadow-purple-500/10 cursor-pointer
                           text-center relative overflow-hidden"
                    >
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r
                                from-purple-500 to-pink-500 group-hover:w-full
                                transition-all duration-500"></div>
                      <span className="relative z-10">{skill}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}