import { useState } from 'react';
import { ExternalLink, Github, X, Image as ImageIcon, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: string;
  githubUrl?: string;
  imageSrc?: string;
  technologies: string[];
  summary: string;
  highlights: string[];
  tagColor?: 'cyan' | 'emerald' | 'violet' | 'rose';
}

const projectsData: Project[] = [
  {
    id: 'jck-visionary-build',
    title: 'JCK Visionary Build',
    year: '2025',
    role: 'Creator & Lead Developer',
    category: 'Web Application',
    githubUrl: 'https://github.com/frostt86/jck-visionary-build',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'cyan',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Frontend Architecture'],
    summary: 'A modern, high-performance web application designed for interactive visual showcases and dynamic project builds with ultra-responsive UX.',
    highlights: [
      'Engineered responsive web interface with custom styling and smooth animation transitions.',
      'Implemented clean modular component architecture for maintainability and scalability.',
      'Hosted and open-sourced on GitHub repository.',
    ],
  },
  {
    id: 'graundier',
    title: 'Graundier',
    year: '2025',
    role: 'Creator & Lead Developer',
    category: 'Web Application',
    githubUrl: 'https://github.com/frostt86/Graundier',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'emerald',
    technologies: ['Full-Stack', 'JavaScript / TypeScript', 'Web Platform', 'UI/UX Design'],
    summary: 'A sleek web platform built to streamline interactive workflows and deliver a minimalist, high-impact user experience.',
    highlights: [
      'Designed and developed full-stack features with clean data handling and fast response times.',
      'Optimized layout for cross-device compatibility and dark mode design standards.',
      'Source code hosted publicly on GitHub.',
    ],
  },
  {
    id: 'boomi-automations',
    title: 'Boomi Customer Environment Monitoring Suite',
    year: '2025',
    role: 'Boomi Integration Consultant',
    category: 'Enterprise Automation',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'cyan',
    technologies: [
      'Dell Boomi',
      'Boomi Partner API',
      'REST APIs',
      'XML',
      'JSON',
      'MS Teams Adaptive Cards',
      'Confluence REST API',
      'Java',
      'Environment Extensions',
    ],
    summary: 'Designed and developed 5 enterprise Boomi automations replacing manual monitoring across all SLA customer environments within 7 months.',
    highlights: [
      'Monitored SSL/TLS cert health, connector inventory, consultant activity, Java compliance, and license usage.',
      'Published centralized Confluence dashboards via REST API & sent MS Teams Adaptive Card alerts.',
      'Cut 2–3 hour reporting down to ~20 mins and 20-min processing cycles to under 5 mins (~90% time savings).',
    ],
  },
  {
    id: 'banking-api-platform',
    title: 'Enterprise Banking API Platform',
    year: '2025',
    role: 'Backend Architect',
    category: 'Backend Platform',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'violet',
    technologies: [
      'Java 26',
      'Spring Boot 3.5',
      'Spring Security 6',
      'JWT',
      'RBAC',
      'PostgreSQL',
      'Flyway',
      'Docker',
      'JUnit 5',
    ],
    summary: 'Architected a secure, scalable backend architecture for an enterprise banking platform separating persistence, service, and REST controllers.',
    highlights: [
      'Implemented robust JWT authentication and fine-grained RBAC authorization across domain entities.',
      'Managed relational schema migrations in PostgreSQL using Flyway and containerized testing with Docker.',
      'Built comprehensive test suites with JUnit 5 and Mockito.',
    ],
  },
  {
    id: 'pipedrive-datacore',
    title: 'Data Core – Pipedrive Integration',
    year: '2025',
    role: 'Integration Specialist',
    category: 'Data Platform',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'emerald',
    technologies: [
      'Dell Boomi',
      'Pipedrive REST API',
      'PostgreSQL',
      'SQL',
      'JSON',
      'Confluence',
      'Data Modeling',
    ],
    summary: 'Delivered the Pipedrive workstream of a company-wide data platform consolidating marketing, sales, and operational data into PostgreSQL for BI reporting.',
    highlights: [
      'Researched and documented Pipedrive API endpoints in Confluence with extended metadata.',
      'Designed PostgreSQL table structures aligned with Bow Tie reporting framework.',
      'Developed Boomi integration from Pipedrive source data to PostgreSQL.',
    ],
  },
  {
    id: 'crm-automation',
    title: 'Questionnaire-to-CRM Marketing Automation',
    year: '2025',
    role: 'Integration Consultant',
    category: 'Process Automation',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'violet',
    technologies: [
      'Dell Boomi',
      'Boomi Flow Services',
      'ActiveCampaign REST API',
      'Brevo SMTP',
      'JSON',
      'DDPs',
    ],
    summary: 'Built a Boomi integration exposed as a Flow Service that processes incoming questionnaire submissions and routes them through concurrent processing paths.',
    highlights: [
      'Automated contact creation in ActiveCampaign with duplicate handling and scan-specific tags.',
      'Persisted domain scores as structured notes and dispatched localized emails via Brevo SMTP.',
    ],
  },
  {
    id: 'blockballot',
    title: 'BlockBallot – Electronic Voting System',
    year: '2025',
    role: 'Project Leader & Full-Stack Developer',
    category: 'Blockchain & Web3',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'cyan',
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'Solidity',
      'Web3.js',
      'Ethers.js',
      'Stellar',
      'MySQL',
    ],
    summary: 'Architected and built an end-to-end blockchain-based voting system for transparent and tamper-proof electronic elections.',
    highlights: [
      'Developed smart contract layer and backend services for vote casting and identity verification.',
      'Designed interactive Angular frontend integrated with Web3 wallet providers.',
    ],
  },
  {
    id: 'novalith-smartbelt',
    title: 'Novalith Smart Pregnancy Belt',
    year: '2025',
    role: 'Backend & Integration Lead',
    category: 'InnoServ Award Winner 2025',
    imageSrc: '', // Placeholder slot for user image
    tagColor: 'rose',
    technologies: [
      'Backend Development',
      'REST API Integration',
      'IoT Device Data Sync',
      'Web Development',
    ],
    summary: 'Contributed to Novalith, an award-winning smart pregnancy belt – a wearable health-monitoring solution for expectant mothers that won the InnoServ Awards 2025 in Taiwan.',
    highlights: [
      'Developed backend and API integrations connecting wearable device data with supporting software platform.',
      'Contributed to Novalith marketing and online presence.',
      'Won the InnoServ Awards 2025 (Taiwan) for health-tech innovation.',
    ],
  },
];

export default function Projects() {
  const ref = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getTagStyle = (color?: string) => {
    switch (color) {
      case 'emerald': return 'tag-emerald';
      case 'violet': return 'tag-violet';
      case 'rose': return 'tag-cyan';
      default: return 'tag-cyan';
    }
  };

  return (
    <section ref={ref} id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-sm font-mono text-neutral-400 mt-2">
            Web applications, enterprise integration suites & award-winning solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children scroll-reveal">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="mini-card p-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Image Container / Placeholder */}
                <div className="img-container mb-4">
                  {project.imageSrc ? (
                    <img src={project.imageSrc} alt={project.title} />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-neutral-900/60 text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      <ImageIcon size={32} className="mb-2 opacity-50" />
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Title & Category Tag */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold font-outfit text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className={getTagStyle(project.tagColor)}>
                    {project.year}
                  </span>
                </div>

                <p className="text-xs font-mono text-neutral-400 font-semibold mb-2">
                  {project.role}
                </p>

                <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/60">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tag-neutral text-[10px]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tag-neutral text-[10px] text-neutral-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer Links */}
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1">
                    Details <ExternalLink size={12} />
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-cyan-400 p-1 flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                      <span className="text-[11px]">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="mini-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-neutral-950 border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-neutral-800">
              <div>
                <span className={`${getTagStyle(selectedProject.tagColor)} text-xs mb-2 inline-flex`}>
                  {selectedProject.year} • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-outfit text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 font-semibold mt-1">
                  {selectedProject.role}
                </p>
              </div>
              <button
                className="p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-900 border border-neutral-800"
                onClick={() => setSelectedProject(null)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Preview Box */}
            <div className="img-container h-48 sm:h-60 mb-5">
              {selectedProject.imageSrc ? (
                <img src={selectedProject.imageSrc} alt={selectedProject.title} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-500">
                  <ImageIcon size={40} className="mb-2 opacity-50" />
                  <span className="text-xs font-mono uppercase">
                    Project Image Preview Slot
                  </span>
                </div>
              )}
            </div>

            {/* Summary */}
            <p className="text-sm text-neutral-200 leading-relaxed mb-5">
              {selectedProject.summary}
            </p>

            {/* Highlights */}
            <div className="mb-5">
              <h4 className="text-xs font-mono uppercase text-neutral-400 mb-2">
                Key Contributions:
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="text-cyan-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub Link if available */}
            {selectedProject.githubUrl && (
              <div className="mb-5 pt-3 border-t border-neutral-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-xs"
                >
                  <Github size={16} />
                  View Repository on GitHub
                </a>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-neutral-400 mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="tag-neutral text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}