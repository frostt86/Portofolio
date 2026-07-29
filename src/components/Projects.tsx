import { useState } from 'react';
import { X, ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: string;
  colSpanClass: string;
  aspectRatioClass: string;
  githubUrl?: string;
  imageSrc?: string;
  technologies: string[];
  summary: string;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    id: 'jck-visionary-build',
    title: 'JCK Visionary Build',
    year: '2025',
    role: 'Creator & Lead Developer',
    category: 'Web Application • Architecture Showcase',
    colSpanClass: 'md:col-span-8',
    aspectRatioClass: 'aspect-[16/9]',
    githubUrl: 'https://github.com/frostt86/jck-visionary-build',
    imageSrc: '',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Frontend Architecture'],
    summary: 'A modern, high-performance web application designed for interactive visual showcases and dynamic project builds with ultra-responsive UX.',
    highlights: [
      'Engineered responsive web interface with custom styling and smooth animation transitions.',
      'Implemented clean modular component architecture for maintainability and scalability.',
      'Source code hosted and open-sourced on GitHub repository.',
    ],
  },
  {
    id: 'graundier',
    title: 'Graundier',
    year: '2025',
    role: 'Creator & Lead Developer',
    category: 'Web Platform • Digital Product',
    colSpanClass: 'md:col-span-4',
    aspectRatioClass: 'aspect-square',
    githubUrl: 'https://github.com/frostt86/Graundier',
    imageSrc: '',
    technologies: ['Full-Stack', 'JavaScript / TypeScript', 'Web Platform', 'UI/UX Design'],
    summary: 'A sleek web platform built to streamline interactive workflows and deliver a minimalist, high-impact user experience.',
    highlights: [
      'Designed and developed full-stack features with clean data handling and fast response times.',
      'Optimized layout for cross-device compatibility and dark mode design standards.',
      'Hosted publicly on GitHub.',
    ],
  },
  {
    id: 'boomi-automations',
    title: 'Boomi Customer Environment Monitoring Suite',
    year: '2025',
    role: 'Boomi Integration Consultant',
    category: 'Enterprise Automation • Monitoring',
    colSpanClass: 'md:col-span-6',
    aspectRatioClass: 'aspect-[4/3]',
    imageSrc: '',
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
    summary: 'Designed, developed, and maintained a suite of 5 enterprise Boomi automations replacing manual monitoring across all SLA customer environments within 7 months.',
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
    role: 'Backend Architect & Developer',
    category: 'Backend Architecture • Security',
    colSpanClass: 'md:col-span-6',
    aspectRatioClass: 'aspect-[4/3]',
    imageSrc: '',
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
    title: 'Data Core – Pipedrive Platform Integration',
    year: '2025',
    role: 'Integration Specialist',
    category: 'Data Platform • BI Reporting',
    colSpanClass: 'md:col-span-4',
    aspectRatioClass: 'aspect-[3/4]',
    imageSrc: '',
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
    category: 'Process Automation • CRM',
    colSpanClass: 'md:col-span-8',
    aspectRatioClass: 'aspect-[16/9]',
    imageSrc: '',
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
    category: 'Blockchain & Web3 • Smart Contracts',
    colSpanClass: 'md:col-span-6',
    aspectRatioClass: 'aspect-[4/3]',
    imageSrc: '',
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
    role: 'Backend & API Integration Lead',
    category: 'Winner - InnoServ Awards 2025 (Taiwan)',
    colSpanClass: 'md:col-span-6',
    aspectRatioClass: 'aspect-[4/3]',
    imageSrc: '',
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

  return (
    <section ref={ref} id="projects" className="px-6 md:px-16 pb-[128px] max-w-[1280px] mx-auto pt-16">
      
      {/* Section Header */}
      <div className="mb-12 border-b border-on-surface/15 pb-6 scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">
            // Selected Work & Applications
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-extrabold">
            PROJECT GALLERY
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          A showcase of enterprise integration suites, full-stack web platforms, and award-winning hardware systems.
        </p>
      </div>

      {/* STUDIO_X Bento-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 stagger-children scroll-reveal">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`${project.colSpanClass} group project-card cursor-pointer`}
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Container with Grayscale-to-Color hover effect */}
            <div className={`overflow-hidden ${project.aspectRatioClass} mb-4 bg-surface-container border border-on-surface/10 relative`}>
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="project-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-surface-container-high text-on-surface-variant group-hover:text-on-surface transition-colors">
                  <ImageIcon size={40} className="mb-3 opacity-40 group-hover:opacity-80 transition-opacity" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-center">
                    [{project.category}]
                  </span>
                  <span className="text-[11px] font-mono mt-1 text-outline">
                    Click to view project specs
                  </span>
                </div>
              )}
            </div>

            {/* Card Header & Title */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-headline-md text-headline-md text-on-surface project-title transition-colors font-bold">
                {project.title}
              </h3>
              <span className="px-2 py-1 bg-tertiary text-white font-label-sm text-[10px] rounded-none shrink-0 font-bold">
                {project.year}
              </span>
            </div>

            {/* Category Subtitle */}
            <div className="flex items-center justify-between mt-1">
              <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                {project.category}
              </p>
              {project.githubUrl && (
                <span className="font-label-sm text-[11px] text-tertiary uppercase tracking-widest flex items-center gap-1 font-bold">
                  <Github size={12} /> GitHub Repo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Specification Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[300] bg-on-surface/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-surface border border-on-surface max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-on-surface/20">
              <div>
                <span className="px-2 py-1 bg-tertiary text-white font-label-sm text-[10px] uppercase font-bold mb-2 inline-block">
                  {selectedProject.year} • {selectedProject.category}
                </span>
                <h3 className="font-headline-lg text-[32px] font-bold text-on-surface uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1">
                  {selectedProject.role}
                </p>
              </div>
              <button
                className="p-2 text-on-surface hover:text-tertiary transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Box */}
            <div className="overflow-hidden aspect-[16/9] mb-6 bg-surface-container border border-on-surface/10">
              {selectedProject.imageSrc ? (
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high text-on-surface-variant p-6">
                  <ImageIcon size={48} className="mb-2 opacity-50" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    Project Image Preview
                  </span>
                </div>
              )}
            </div>

            {/* Summary */}
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              {selectedProject.summary}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-3 font-bold">
                Key Contributions:
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body-md text-body-md text-on-surface-variant">
                    <span className="text-tertiary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub Repo Button */}
            {selectedProject.githubUrl && (
              <div className="mb-6 pt-4 border-t border-on-surface/15">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-on-surface text-surface px-6 py-3.5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-tertiary transition-colors font-bold w-full justify-center"
                >
                  <Github size={16} /> View GitHub Repository
                  <ExternalLink size={14} />
                </a>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-3 font-bold">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-surface-container text-on-surface font-mono text-xs border border-on-surface/10">
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