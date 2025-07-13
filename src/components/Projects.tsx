import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Boomi Process Automation & Optimization',
    year: '2025',
    role: 'Boomi Integration Consultant',
    technologies: ['Boomi AtomSphere', 'Process Optimization', 'Enterprise Integration', 'Automation'],
    description: 'Optimized 4 critical integration processes at Yenlo, achieving 40% performance improvement while enhancing code readability and maintainability.'
  },
  {
    title: 'Electronic Voting System',
    year: '2025',
    role: 'Project Leader',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Solidity', 'React'],
    description: 'Led the development of a secure and transparent electronic voting system utilizing blockchain technology.'
  },
  {
    title: 'Real-time Event Ticketing System',
    year: '2024',
    role: 'Full-Stack Developer',
    technologies: ['Angular', 'Spring Boot', 'NoSQL'],
    description: 'Developed a comprehensive event ticketing platform with real-time booking capabilities.'
  },
  {
    title: 'Climate Change Awareness Website',
    year: '2023',
    role: 'Frontend Developer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Created an interactive website to raise awareness about climate change, featuring dynamic visualizations and educational content.'
  },
  {
    title: 'Plane Ticket Management System',
    year: '2023',
    role: 'Backend Developer',
    technologies: ['Java', 'JDBC', 'MySQL'],
    description: 'Developed a system to manage flight bookings, passenger information, and ticket generation with a focus on data integrity.'
  },
  {
    title: 'Finance Tracker',
    year: '2024',
    role: 'Full-Stack Developer',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    description: 'Created a personal finance management system with expense tracking and budgeting features.'
  },
  {
    title: 'AI Chat Bot',
    year: '2023',
    role: 'Backend Developer',
    technologies: ['Python', 'Natural Language Processing', 'REST APIs'],
    description: 'Implemented an intelligent chatbot system with natural language processing capabilities.'
  }
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
      <section ref={ref} id="projects" className="py-20 relative scroll-reveal">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold gradient-text mb-12 font-poppins text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40
                         p-6 rounded-xl backdrop-blur-sm border border-gray-800/50
                         hover:border-purple-500/50 transition-all duration-500
                         hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2
                         hover:from-purple-900/40 hover:to-purple-800/30 h-full flex flex-col
                         cursor-pointer overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10
                            rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-200 group-hover:text-white
                                   transition-colors duration-300">{project.title}</h3>
                      <span className="text-purple-400 font-semibold group-hover:text-purple-300
                                     transition-colors duration-300">{project.year}</span>
                    </div>
                    <p className="text-purple-400 font-semibold mb-2 group-hover:text-purple-300
                                transition-colors duration-300">{project.role}</p>
                    <p className="text-gray-400 mb-4 flex-grow group-hover:text-gray-300
                                transition-colors duration-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {project.technologies.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm
                                       border border-purple-700/30 rounded-md
                                       group-hover:bg-purple-800/40 group-hover:text-purple-200
                                       group-hover:border-purple-500/50 transition-all duration-300
                                       hover:scale-105 transform cursor-pointer"
                          >
                            {tech}
                          </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient line that expands on hover */}
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