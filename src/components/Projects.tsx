import { useState } from 'react';
import { ExternalLink, Github, Linkedin, X } from 'lucide-react';

import innoservFirstPlace from '../assets/gallery/innoserv_first_place.jpg';
import blockballotBooth from '../assets/gallery/blockballot_booth.jpg';
import boomiPreview from '../assets/gallery/boomi_preview.png';
import bankingPreview from '../assets/gallery/banking_preview.png';
import cuttingedgeTeam from '../assets/gallery/cuttingedge_team.jpg';
import innoservBooth from '../assets/gallery/innoserv_booth.jpg';

export interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: string;
  githubUrl?: string;
  linkedInUrl?: string;
  imageSrc: string;
  technologies: string[];
  summary: string;
  highlights: string[];
}

const LINKEDIN_BLOCKBALLOT = 'https://www.linkedin.com/posts/pamitha-kularathne-ba2b06295_election-voting-srilanka-activity-7261064177136345088-2vpt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';
const LINKEDIN_NOVALITH = 'https://www.linkedin.com/feed/update/urn:li:activity:7468995875151712256/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';

const projectsData: Project[] = [
  {
    id: 'jck-visionary-build',
    title: 'JCK Visionary Build',
    year: '2025',
    role: 'Creator & Lead Developer',
    category: 'Web Application',
    githubUrl: 'https://github.com/frostt86/jck-visionary-build',
    imageSrc: cuttingedgeTeam,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    summary: 'A modern web application designed for interactive visual showcases and dynamic project builds with ultra-responsive UX.',
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
    category: 'Web Platform',
    githubUrl: 'https://github.com/frostt86/Graundier',
    imageSrc: innoservBooth,
    technologies: ['Full-Stack', 'JavaScript / TypeScript', 'UI/UX'],
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
    category: 'Enterprise Automation',
    imageSrc: boomiPreview,
    technologies: [
      'Dell Boomi',
      'Boomi Partner API',
      'REST APIs',
      'MS Teams Cards',
      'Confluence API',
      'Java',
    ],
    summary: 'Designed, developed, and maintained a suite of 5 enterprise Boomi automations replacing manual monitoring across all SLA customer environments.',
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
    category: 'Backend Architecture',
    imageSrc: bankingPreview,
    technologies: [
      'Java 26',
      'Spring Boot 3.5',
      'Spring Security 6',
      'JWT',
      'PostgreSQL',
      'Docker',
    ],
    summary: 'Architected a secure, scalable backend architecture for an enterprise banking platform separating persistence, service, and REST controllers.',
    highlights: [
      'Implemented robust JWT authentication and fine-grained RBAC authorization across domain entities.',
      'Managed relational schema migrations in PostgreSQL using Flyway and containerized testing with Docker.',
      'Built comprehensive test suites with JUnit 5 and Mockito.',
    ],
  },
  {
    id: 'blockballot',
    title: 'BlockBallot – Electronic Voting System',
    year: '2025',
    role: 'Project Leader & Full-Stack Developer',
    category: 'Blockchain & Web3',
    linkedInUrl: LINKEDIN_BLOCKBALLOT,
    imageSrc: blockballotBooth,
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'Solidity',
      'Web3.js',
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
    category: 'Winner - InnoServ Awards 2025',
    linkedInUrl: LINKEDIN_NOVALITH,
    imageSrc: innoservFirstPlace,
    technologies: [
      'Backend Development',
      'REST API Integration',
      'IoT Device Data Sync',
    ],
    summary: 'Contributed to Novalith, an award-winning smart pregnancy belt – a wearable health-monitoring solution for expectant mothers that won the InnoServ Awards 2025 in Taiwan.',
    highlights: [
      'Developed backend and API integrations connecting wearable device data with supporting software platform.',
      'Won 1st Place in the International Exchange Division at InnoServ Awards 2025 (Taiwan).',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 max-w-[760px] mx-auto px-4 border-t border-white/10">
      
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold font-sans text-white">
            selected work
          </h2>
          <p className="text-xs font-mono text-neutral-400 mt-0.5">
            web apps, enterprise automations & award-winning systems
          </p>
        </div>
        <span className="ziffer-pill font-mono text-[11px]">
          {projectsData.length} projects
        </span>
      </div>

      {/* Projects Stack */}
      <div className="space-y-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="ziffer-card p-6 cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image Box */}
            <div className="ziffer-img-box h-48 sm:h-56 mb-4">
              <img src={project.imageSrc} alt={project.title} />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-lg font-bold font-sans text-white group-hover:text-[#95e78e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  {project.role} • {project.category}
                </p>
              </div>
              <span className="ziffer-pill font-mono text-[11px] shrink-0">
                {project.year}
              </span>
            </div>

            <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-4">
              {project.summary}
            </p>

            {/* Tech Tags & External Links */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="ziffer-pill text-[11px] py-0.5 px-2">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#95e78e] flex items-center gap-1 p-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={13} />
                  </a>
                )}
                {project.linkedInUrl && (
                  <a
                    href={project.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#95e78e] flex items-center gap-1 p-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={13} />
                  </a>
                )}
                <ExternalLink size={13} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="ziffer-card max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-[#0f1111] border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-white/10">
              <div>
                <span className="ziffer-pill ziffer-pill-lime mb-2 inline-flex text-xs">
                  {selectedProject.year} • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-sans text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  {selectedProject.role}
                </p>
              </div>
              <button
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 border border-white/10"
                onClick={() => setSelectedProject(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="ziffer-img-box h-48 sm:h-56 mb-5">
              <img src={selectedProject.imageSrc} alt={selectedProject.title} />
            </div>

            <p className="text-sm font-sans text-neutral-200 leading-relaxed mb-5">
              {selectedProject.summary}
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-mono uppercase text-neutral-400 mb-2">
                Key Contributions:
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-sans text-neutral-300">
                    <span className="text-[#95e78e]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ziffer-pill ziffer-pill-lime text-xs font-mono"
                >
                  <Github size={14} className="mr-1 inline" /> View GitHub Repository
                </a>
              )}
              {selectedProject.linkedInUrl && (
                <a
                  href={selectedProject.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ziffer-pill text-xs font-mono"
                >
                  <Linkedin size={14} className="mr-1 inline" /> View LinkedIn Post
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}