import { useRef, MouseEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Boomi Process Automation & Optimization',
    year: '2025',
    role: 'Boomi Integration Consultant',
    technologies: ['Boomi AtomSphere', 'Process Optimization', 'Enterprise Integration', 'Automation'],
    description: 'Optimized 4 critical integration processes at Yenlo, achieving 40% performance improvement while enhancing code readability and maintainability.',
    accent: 'cyan',
  },
  {
    title: 'Electronic Voting System',
    year: '2025',
    role: 'Project Leader',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Solidity', 'React'],
    description: 'Led the development of a secure and transparent electronic voting system utilizing blockchain technology.',
    accent: 'violet',
  },
  {
    title: 'Real-time Event Ticketing System',
    year: '2024',
    role: 'Full-Stack Developer',
    technologies: ['Angular', 'Spring Boot', 'NoSQL'],
    description: 'Developed a comprehensive event ticketing platform with real-time booking capabilities.',
    accent: 'magenta',
  },
  {
    title: 'Climate Change Awareness Website',
    year: '2023',
    role: 'Frontend Developer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Created an interactive website to raise awareness about climate change, featuring dynamic visualizations and educational content.',
    accent: 'cyan',
  },
  {
    title: 'Plane Ticket Management System',
    year: '2023',
    role: 'Backend Developer',
    technologies: ['Java', 'JDBC', 'MySQL'],
    description: 'Developed a system to manage flight bookings, passenger information, and ticket generation with a focus on data integrity.',
    accent: 'violet',
  },
  {
    title: 'Finance Tracker',
    year: '2024',
    role: 'Full-Stack Developer',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    description: 'Created a personal finance management system with expense tracking and budgeting features.',
    accent: 'magenta',
  },
  {
    title: 'AI Chat Bot',
    year: '2023',
    role: 'Backend Developer',
    technologies: ['Python', 'Natural Language Processing', 'REST APIs'],
    description: 'Implemented an intelligent chatbot system with natural language processing capabilities.',
    accent: 'cyan',
  },
];

const accentColors = {
  cyan: { color: 'var(--color-neon-cyan)', bg: 'rgba(0, 240, 255, 0.08)', border: 'rgba(0, 240, 255, 0.2)' },
  violet: { color: 'var(--color-neon-violet)', bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.2)' },
  magenta: { color: 'var(--color-neon-magenta)', bg: 'rgba(255, 0, 110, 0.08)', border: 'rgba(255, 0, 110, 0.2)' },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accent = accentColors[project.accent as keyof typeof accentColors];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        ref={cardRef}
        className="project-card-inner glass-card p-6 h-full flex flex-col"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white font-outfit pr-4 leading-tight">
              {project.title}
            </h3>
            <span
              className="shrink-0 px-3 py-1 text-sm font-bold rounded-lg"
              style={{ background: accent.bg, color: accent.color, border: `1px solid ${accent.border}` }}
            >
              {project.year}
            </span>
          </div>

          {/* Role badge */}
          <p className="text-sm font-semibold mb-3" style={{ color: accent.color }}>
            {project.role}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow font-inter">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t"
               style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            {project.technologies.map((tech, i) => (
              <span key={i} className="neon-tag text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit gradient-text section-heading">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-reveal">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}