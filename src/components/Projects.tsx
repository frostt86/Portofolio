import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text mb-12 font-poppins">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800/50 
                         hover:border-purple-500/30 transition-all duration-300 hover:glow
                         transform hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
                <span className="text-purple-400 font-semibold">{project.year}</span>
              </div>
              <p className="text-purple-400 font-semibold mb-2">{project.role}</p>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm
                             border border-purple-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}