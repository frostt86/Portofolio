import { useScrollReveal } from '../hooks/useScrollReveal';

const technicalSkills = [
  {
    name: 'Spring Boot',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg'
  },
  {
    name: 'Angular',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg'
  },
  {
    name: 'Solidity',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg'
  },
  {
    name: 'SQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    name: 'Boomi',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Boomi-logo.svg/512px-Boomi-logo.svg.png'
  },
  {
    name: 'Elasticsearch',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg'
  },
  {
    name: 'NoSQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
  }
];

const skills = {
  soft: [
    'Problem Solving',
    'Project Management',
    'Teamwork',
    'Leadership',
    'Adaptability',
    'Communication',
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

              {/* Technical Skills - Animated Horizontal Carousel */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-8">
                  {/* First set of skills */}
                  {technicalSkills.map((skill, index) => (
                      <div
                          key={index}
                          className="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/20
                             p-6 rounded-xl backdrop-blur-sm border border-purple-700/30
                             hover:border-purple-500/50 transition-all duration-500
                             hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2
                             hover:from-purple-800/50 hover:to-purple-700/30 flex-shrink-0 min-w-[200px]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                                  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-purple-700/20
                                    rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm
                                    border border-purple-600/30 group-hover:border-purple-400/50 transition-all duration-300">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-10 h-10 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <div className="w-8 h-8 bg-purple-500/40 rounded-full hidden"></div>
                          </div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-200
                                   transition-colors duration-300">{skill.name}</h4>
                        </div>

                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                  w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                  group-hover:w-3/4 transition-all duration-500"></div>
                      </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {technicalSkills.map((skill, index) => (
                      <div
                          key={`duplicate-${index}`}
                          className="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/20
                             p-6 rounded-xl backdrop-blur-sm border border-purple-700/30
                             hover:border-purple-500/50 transition-all duration-500
                             hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2
                             hover:from-purple-800/50 hover:to-purple-700/30 flex-shrink-0 min-w-[200px]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                                  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-purple-700/20
                                    rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm
                                    border border-purple-600/30 group-hover:border-purple-400/50 transition-all duration-300">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-10 h-10 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <div className="w-8 h-8 bg-purple-500/40 rounded-full hidden"></div>
                          </div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-purple-200
                                   transition-colors duration-300">{skill.name}</h4>
                        </div>

                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2
                                  w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500
                                  group-hover:w-3/4 transition-all duration-500"></div>
                      </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }

                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }

                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
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