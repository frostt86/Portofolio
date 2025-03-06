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
            <div className="flex flex-col gap-12 sm:gap-16">
              <div className="flex flex-wrap gap-6 sm:gap-12 justify-center">
                {specialSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-pebble special w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-base sm:text-lg"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                {regularSkills.map((skill, index) => (
                  <button
                    key={index}
                    className="px-4 sm:px-8 py-2 sm:py-3 bg-purple-900/30 rounded-lg text-purple-300 
                             transition-all duration-300 border border-purple-700/30 
                             hover:border-purple-500/50 backdrop-blur-sm hover:text-white
                             hover:bg-purple-800/40 hover:scale-105 transform text-sm sm:text-base"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 sm:mb-8 text-center">Soft Skills</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {skills.soft.map((skill, index) => (
                <button
                  key={index}
                  className="px-4 sm:px-8 py-2 sm:py-3 bg-purple-900/30 rounded-lg text-purple-300 
                           transition-all duration-300 border border-purple-700/30 
                           hover:border-purple-500/50 backdrop-blur-sm hover:text-white
                           hover:bg-purple-800/40 hover:scale-105 transform text-sm sm:text-base"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}