import { useScrollReveal } from '../hooks/useScrollReveal';

const technicalSkills = [
  {
    name: 'Spring Boot',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
  },
  {
    name: 'Angular',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'Solidity',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg',
  },
  {
    name: 'SQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  },
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Boomi',
    icon: '',
  },
  {
    name: 'Elasticsearch',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg',
  },
  {
    name: 'NoSQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Project Management', icon: '📋' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Leadership', icon: '🎯' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Communication', icon: '💬' },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit gradient-text section-heading">
            Skills
          </h2>
        </div>

        {/* Technical Skills - Hex Grid */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-10 font-outfit"
              style={{ color: 'var(--color-neon-cyan)' }}>
            Technical Skills
          </h3>

          <div className="hex-grid stagger-children scroll-reveal">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="hex-item group">
                {skill.icon ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className={`w-12 h-12 rounded-xl items-center justify-center text-xl font-bold ${skill.icon ? 'hidden' : 'flex'}`}
                  style={{
                    background: 'rgba(0, 240, 255, 0.1)',
                    color: 'var(--color-neon-cyan)',
                  }}
                >
                  {skill.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors font-inter text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-10 font-outfit"
              style={{ color: 'var(--color-neon-violet)' }}>
            Soft Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto stagger-children scroll-reveal">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-5 text-center cursor-pointer group"
              >
                <div className="relative z-10">
                  <span className="text-2xl mb-2 block">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors font-inter">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}