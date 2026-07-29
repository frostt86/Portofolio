import { useState } from 'react';
import { ExternalLink, X, Image as ImageIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: string;
  imageSrc?: string;
  technologies: string[];
  summary: string;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    id: 'boomi-automations',
    title: 'Boomi Customer Environment Monitoring Suite',
    year: '2025',
    role: 'Boomi Integration Consultant',
    category: 'Enterprise Integration',
    imageSrc: '', // Placeholder slot for user image
    technologies: [
      'Dell Boomi',
      'Boomi Partner API',
      'REST APIs',
      'XML',
      'JSON',
      'MS Teams Adaptive Cards',
      'Confluence REST API',
      'Java',
      'DDPs',
      'Environment Extensions',
    ],
    summary: 'Designed, developed, and maintained a suite of 5 enterprise Boomi automations replacing manual monitoring and reporting workflows across all SLA customer environments within 7 months.',
    highlights: [
      'Covered SSL/TLS certificate health, connector inventory, consultant deployment activity, runtime Java compliance, and license usage.',
      'Published centralized HTML dashboards to Confluence via REST API & proactive MS Teams Adaptive Card alerts.',
      'Reduced manual reporting from 2–3 hours down to 20 mins, and cut 20-minute processing cycles under 5 mins (~90% time savings).',
      'Eliminated error-prone manual checks, improving compliance visibility and audit readiness.',
    ],
  },
  {
    id: 'banking-api-platform',
    title: 'Enterprise Banking API Platform',
    year: '2025',
    role: 'Backend Architect & Developer',
    category: 'Backend Architecture',
    imageSrc: '', // Placeholder slot for user image
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
      'Mockito',
    ],
    summary: 'Architected and developed a secure, scalable backend architecture for an enterprise banking platform with strict input validation and clean domain separation.',
    highlights: [
      'Implemented robust authentication and RBAC authorization mechanisms across domain entities.',
      'Separated persistence, service, and REST controller layers for high maintainability.',
      'Managed schema migrations in PostgreSQL using Flyway and containerized testing environments with Docker.',
      'Built comprehensive unit and integration testing suites using JUnit 5 and Mockito.',
    ],
  },
  {
    id: 'pipedrive-datacore',
    title: 'Data Core – Pipedrive Platform Integration',
    year: '2025',
    role: 'Integration Specialist',
    category: 'Data Platform',
    imageSrc: '', // Placeholder slot for user image
    technologies: [
      'Dell Boomi',
      'Pipedrive REST API',
      'PostgreSQL',
      'SQL',
      'JSON',
      'Confluence',
      'Data Modeling',
      'Azure',
    ],
    summary: 'Delivered the Pipedrive workstream of a company-wide data platform initiative consolidating marketing, sales, and operational data into PostgreSQL for BI reporting.',
    highlights: [
      'Researched and documented Pipedrive API endpoints in Confluence, including extended field metadata.',
      'Designed PostgreSQL table structures aligned with the enterprise data dictionary & Bow Tie framework.',
      'Developed Boomi integration from Pipedrive source to PostgreSQL, validating end-to-end data transfer.',
    ],
  },
  {
    id: 'crm-automation',
    title: 'Questionnaire-to-CRM Marketing Automation',
    year: '2025',
    role: 'Integration Consultant',
    category: 'Process Automation',
    imageSrc: '', // Placeholder slot for user image
    technologies: [
      'Dell Boomi',
      'Boomi Flow Services',
      'ActiveCampaign REST API',
      'Brevo SMTP',
      'JSON',
      'Business Rules',
      'DDPs',
    ],
    summary: 'Designed a Boomi integration exposed as a Flow Service that processes incoming questionnaire/scan submissions and routes them through multiple concurrent processing paths.',
    highlights: [
      'Automated contact creation in ActiveCampaign with duplicate handling and scan-specific tagging.',
      'Persisted questionnaire domain scores and answers as structured notes on ActiveCampaign contacts.',
      'Evaluated prospect language (Dutch/English) to dispatch localized email confirmations via Brevo SMTP.',
    ],
  },
  {
    id: 'blockballot',
    title: 'BlockBallot – Electronic Voting System',
    year: '2025',
    role: 'Project Leader & Full-Stack Developer',
    category: 'Blockchain & Web3',
    imageSrc: '', // Placeholder slot for user image
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'Solidity',
      'Web3.js',
      'Ethers.js',
      'Stellar',
      'MySQL',
      'REST APIs',
    ],
    summary: 'Architected and built an end-to-end full-stack application for a secure, blockchain-based voting system designed for transparent and tamper-proof elections.',
    highlights: [
      'Developed smart contract layer and backend services for vote casting, identity verification, and real-time tallying.',
      'Designed interactive Angular frontend integrated with Web3 wallet providers.',
      'Collaborated with Election Commission experts and industry leaders to test pilot implementations.',
    ],
  },
  {
    id: 'novalith-smartbelt',
    title: 'Novalith Smart Pregnancy Belt',
    year: '2025',
    role: 'Backend & Integration Lead',
    category: 'Award-Winning HealthTech',
    imageSrc: '', // Placeholder slot for user image
    technologies: [
      'Backend Development',
      'REST API Integration',
      'IoT Device Data Sync',
      'Web Development',
      'Digital Marketing',
    ],
    summary: 'Contributed to Novalith, an award-winning smart pregnancy belt – a wearable health-monitoring solution for expectant mothers that won the InnoServ Awards 2025 in Taiwan.',
    highlights: [
      'Developed product backend and API integrations connecting wearable device data with software platform.',
      'Contributed to Novalith marketing and online presence, shaping public launch and showcase.',
      'Won the InnoServ Awards 2025 (Taiwan) for health-tech innovation.',
    ],
  },
];

export default function Projects() {
  const ref = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section ref={ref} id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white uppercase tracking-tight section-heading-mono">
            Featured Projects
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-4 uppercase tracking-widest">
            // Enterprise Automations, API Platforms & Innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children scroll-reveal">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="hud-card hud-corner-notches flex flex-col justify-between p-6 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Image Container / Placeholder Slot */}
                <div className="project-img-box mb-5">
                  {project.imageSrc ? (
                    <img src={project.imageSrc} alt={project.title} />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-neutral-900/90 text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      <ImageIcon size={36} className="mb-2 opacity-60" />
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        [{project.category}]
                      </span>
                    </div>
                  )}
                  <div className="project-img-overlay" />
                </div>

                {/* Card Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold font-outfit text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="badge-mono badge-mono-highlight text-[10px]">
                    {project.year}
                  </span>
                </div>

                <p className="text-xs font-mono text-neutral-400 font-semibold mb-3">
                  {project.role}
                </p>

                <p className="text-xs font-inter text-neutral-300 line-clamp-3 leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="badge-mono text-[10px]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="badge-mono text-[10px] text-neutral-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Modal Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="hud-card hud-corner-notches max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-neutral-950 border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
              <div>
                <span className="badge-mono badge-mono-highlight text-xs mb-2 inline-block">
                  {selectedProject.year} • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-outfit text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-neutral-400 font-semibold mt-1">
                  {selectedProject.role}
                </p>
              </div>
              <button
                className="p-2 text-neutral-400 hover:text-white rounded-md bg-neutral-900 border border-neutral-800"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="project-img-box h-48 sm:h-64 mb-6">
              {selectedProject.imageSrc ? (
                <img src={selectedProject.imageSrc} alt={selectedProject.title} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-500">
                  <ImageIcon size={48} className="mb-2 opacity-50" />
                  <span className="text-xs font-mono uppercase tracking-widest">
                    Project Visual Preview Slot
                  </span>
                </div>
              )}
            </div>

            {/* Summary */}
            <p className="text-sm font-inter text-neutral-200 leading-relaxed mb-6">
              {selectedProject.summary}
            </p>

            {/* Key Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
                Key Contributions & Outcomes:
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-inter text-neutral-300">
                    <span className="text-white mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-3">
                Technologies & Tools Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="badge-mono">
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