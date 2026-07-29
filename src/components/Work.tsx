import { useState } from 'react';
import { ExternalLink, Github, Linkedin, X, Maximize2 } from 'lucide-react';

import innoservFirstPlace from '../assets/gallery/innoserv_first_place.jpg';
import blockballotBooth from '../assets/gallery/blockballot_booth.jpg';
import boomiPreview from '../assets/gallery/boomi_preview.png';
import bankingPreview from '../assets/gallery/banking_preview.png';
import cuttingedgeTeam from '../assets/gallery/cuttingedge_team.jpg';
import innoservBooth from '../assets/gallery/innoserv_booth.jpg';
import innoservDelegates from '../assets/gallery/innoserv_delegates.jpg';
import jckPreview from '../assets/gallery/jck_preview.png';
import grandeurPreview from '../assets/gallery/grandeur_preview.png';
import yenloAvurudu from '../assets/gallery/yenlo_avurudu_celebration.png';
import financeTrackerPreview from '../assets/gallery/finance_tracker_preview.png';

/* ─── Types ─── */
interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: string;
  githubUrl?: string;
  linkedInUrl?: string;
  imageSrc: string;
  tech: string[];
  summary: string;
  highlights: string[];
}

/* ─── Data ─── */
const LI_BLOCKBALLOT = 'https://www.linkedin.com/posts/pamitha-kularathne-ba2b06295_election-voting-srilanka-activity-7261064177136345088-2vpt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';
const LI_NOVALITH = 'https://www.linkedin.com/feed/update/urn:li:activity:7468995875151712256/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';

// All projects displayed side by side in a 2-column grid, with BlockBallot FIRST
const projects: Project[] = [
  {
    id: 'blockballot',
    title: 'BlockBallot — Blockchain Voting System',
    year: '2025',
    role: 'Project Leader & Web3 Lead',
    category: 'Blockchain & Web3 Governance',
    linkedInUrl: LI_BLOCKBALLOT,
    imageSrc: blockballotBooth,
    tech: ['Java', 'Spring Boot', 'Angular', 'Solidity', 'Web3.js', 'Ethereum'],
    summary: 'End-to-end blockchain electronic voting platform for election transparency and security in Sri Lanka. Leverages Ethereum smart contracts for immutable ballot records.',
    highlights: [
      'Architected Solidity smart contract layer for cryptographic vote casting, identity verification, and tamper-evident tallying.',
      'Developed Spring Boot backend microservices and Angular Web3 frontend with wallet authentication.',
      'Showcased live at the CuttingEdge \'25 Innovation Showcase at Temple Trees.',
    ],
  },
  {
    id: 'novalith',
    title: 'Novalith Smart Pregnancy Belt',
    year: '2025',
    role: 'Backend & API Integration Lead',
    category: '🏆 InnoServ 2025 Winner',
    linkedInUrl: LI_NOVALITH,
    imageSrc: innoservFirstPlace,
    tech: ['Backend Dev', 'REST APIs', 'IoT Telemetry', 'Cloud Alerts'],
    summary: 'Award-winning wearable health-monitoring solution for expectant mothers. Integrates IoT sensor telemetry with cloud REST APIs to track maternal vital signs in real-time.',
    highlights: [
      'Architected backend REST APIs and real-time telemetry data sync pipeline for wearable IoT sensors.',
      'Won 1st Place — International Exchange Division at the ICT InnoServ Awards 2025 in Taiwan.',
      'Integrated automated alert escalation workflows for abnormal maternal health readings.',
    ],
  },
  {
    id: 'jck',
    title: 'JCK Constructions Platform',
    year: '2025',
    role: 'Lead Web Developer & Architect',
    category: 'Commercial Construction Platform',
    githubUrl: 'https://github.com/frostt86/jck-visionary-build',
    imageSrc: jckPreview,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UI/UX'],
    summary: 'High-density corporate web platform engineered for JCK Constructions (Pvt) Ltd. Features 3 decades of construction achievements and 120+ completed projects.',
    highlights: [
      'Engineered responsive, dark-themed corporate web application with high-density metrics and interactive project cards.',
      'Built modular component architecture with custom state management and smooth section animations.',
      'Integrated project showcases, service breakdown, career portal, and customer inquiry workflows.',
    ],
  },
  {
    id: 'graundier',
    title: 'Grandeur — Culinary Excellence',
    year: '2025',
    role: 'Full-Stack Web Architect',
    category: 'Global Culinary Platform',
    githubUrl: 'https://github.com/frostt86/Graundier',
    imageSrc: grandeurPreview,
    tech: ['Full-Stack', 'JavaScript / TypeScript', 'Tailwind CSS'],
    summary: 'Global Web Application & Product Catalog built for Grandeur, a premier supplier of high-grade culinary ingredients for luxury hotels and fine-dining restaurants.',
    highlights: [
      'Designed an immersive UI with food product catalogs, brand showcases, and curated recipe highlights.',
      'Built cross-device responsive navigation, brand selection menus, and partner inquiry portals.',
      'Optimized asset loading and image rendering for fast international response times.',
    ],
  },
  {
    id: 'boomi-suite',
    title: 'Boomi Production Monitoring Suite',
    year: '2025',
    role: 'Boomi Integration Consultant',
    category: 'Enterprise Automation',
    imageSrc: boomiPreview,
    tech: ['Dell Boomi', 'REST APIs', 'MS Teams Webhooks', 'Java'],
    summary: 'Enterprise Boomi automation platform featuring 5 production suites that replace manual SLA monitoring across customer environments at Yenlo.',
    highlights: [
      'Developed automated SSL certificate health monitoring with MS Teams webhook alerts.',
      'Built atom connector inventory & Java runtime compliance reporting pushed to Confluence dashboards via REST API.',
      'Achieved ~90% time savings across SLA reporting cycles, reducing 2-3 hour manual tasks to ~20 minutes.',
    ],
  },
  {
    id: 'finance-tracker',
    title: 'Personal Finance Tracker',
    year: '2025',
    role: 'Full-Stack Software Engineer',
    category: 'Full-Stack Financial Management',
    imageSrc: financeTrackerPreview,
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap'],
    summary: 'Comprehensive full-stack financial management web application for personal budgeting and expense tracking. Features transaction analytics & budget alerts.',
    highlights: [
      'Engineered Spring Boot backend with MySQL database schemas, transaction management, and budget tracking.',
      'Built responsive web interfaces with Thymeleaf, Bootstrap, and glassmorphic UI card designs.',
      'Implemented secure user authentication, account balance calculations, and monthly expense reporting.',
    ],
  },
  {
    id: 'banking-api',
    title: 'AEGIS Banking ERP System',
    year: '2025',
    role: 'Backend & Enterprise Architect',
    category: 'Enterprise Banking ERP',
    imageSrc: bankingPreview,
    tech: ['Java 26', 'Spring Boot 3.5', 'JWT Auth', 'PostgreSQL', 'Docker'],
    summary: 'Production-grade AEGIS Banking ERP platform built for enterprise financial operations. Features real-time management console, customer registry tracking & JWT security.',
    highlights: [
      'Engineered AEGIS Banking ERP management console with real-time customer registry metrics and cluster status.',
      'Implemented Java 26 & Spring Boot 3.5 microservices with zero-trust JWT authentication & fine-grained RBAC.',
      'Configured H2 memory mode & PostgreSQL database migrations with Flyway and automated Docker test pipelines.',
    ],
  },
];

/* ─── Gallery photos ─── */
const gallery = [
  { src: yenloAvurudu, caption: 'Yenlo Lanka Avurudu Sri Lankan New Year Team Celebration' },
  { src: innoservFirstPlace, caption: 'InnoServ 2025 — 1st Place Stage Ceremony, Taiwan' },
  { src: innoservBooth, caption: 'Novalith HealthTech Exhibition Booth, Taiwan' },
  { src: blockballotBooth, caption: 'BlockBallot Demo — CuttingEdge 2025' },
  { src: cuttingedgeTeam, caption: 'CuttingEdge 25 Team Showcase' },
  { src: innoservDelegates, caption: 'International Delegates — InnoServ 2025' },
];

/* Doubled array for seamless infinite rolling loop */
const rollingGallery = [...gallery, ...gallery];

/* ─── Component ─── */
export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 max-w-[960px] mx-auto px-5">
      <hr className="section-divider mb-16" />

      <p className="section-label mb-2">Portfolio</p>
      <h2 className="section-title mb-10">Selected Work & Projects</h2>

      {/* Featured projects — Side by Side 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
        {projects.map((p) => (
          <div 
            key={p.id} 
            className="card p-0 overflow-hidden cursor-pointer group hover:border-[#ff6b35]/50 transition-all duration-300 bg-[#e6ecf5] shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff] flex flex-col justify-between" 
            onClick={() => setSelected(p)}
          >
            <div>
              <div className="img-frame h-48 sm:h-56 border-b border-slate-300/80 bg-[#e2e8f2]">
                <img src={p.imageSrc} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 bg-[#e6ecf5]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#ff6b35] transition-colors leading-snug">{p.title}</h3>
                  <span className="pill pill-accent text-[9px] shrink-0">{p.category}</span>
                </div>
                <p className="text-[11px] font-mono text-[#ff6b35] font-bold mb-2.5">{p.role} · {p.year}</p>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">{p.summary}</p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-0 bg-[#e6ecf5]">
              <div className="flex items-center justify-between pt-3 border-t border-slate-300/80">
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span key={t} className="pill text-[9px] px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-600 font-bold group-hover:text-[#ff6b35] transition-colors shrink-0 flex items-center gap-1">
                  Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Event Gallery Header ─── */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div>
          <p className="section-label mb-1">Live Highlights</p>
          <h3 className="text-lg font-bold text-slate-900">Event Gallery</h3>
        </div>

        <span className="pill pill-accent text-[11px]">
          ● Hover photo to pause marquee • Click to expand
        </span>
      </div>

      {/* ─── Smooth Hardware Accelerated Rolling Screen Gallery Container ─── */}
      <div className="w-full overflow-hidden rounded-2xl border border-white/80 bg-[#e6ecf5] p-4 shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff] relative">
        <div className="animate-rolling flex gap-5">
          {rollingGallery.map((item, i) => {
            const originalIndex = i % gallery.length;
            return (
              <div
                key={i}
                className="w-80 sm:w-[480px] aspect-[16/10] shrink-0 rounded-xl overflow-hidden cursor-pointer relative group/roll border border-white/80 bg-[#e2e8f2] shadow-[6px_6px_14px_#c2c9d6,-6px_-6px_14px_#ffffff]"
                onClick={() => setLightbox(originalIndex)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/roll:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 group-hover/roll:opacity-100 transition-opacity flex flex-col justify-between p-5">
                  <div className="self-end opacity-0 group-hover/roll:opacity-100 transition-opacity">
                    <span className="p-2.5 rounded-full bg-slate-900/80 text-white inline-flex border border-white/20 shadow-md">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                  <span className="text-sm sm:text-base text-white font-bold leading-snug">
                    {item.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Project Detail Modal ─── */}
      {selected && (
        <div className="fixed inset-0 z-[300] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="card max-w-xl w-full max-h-[85vh] overflow-y-auto p-0 bg-[#e6ecf5] border-white/90 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="img-frame h-56 sm:h-64 rounded-t-2xl rounded-b-none border-b-0">
              <img src={selected.imageSrc} alt={selected.title} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <span className="pill pill-accent text-[10px] mb-2 inline-flex">{selected.year} · {selected.category}</span>
                  <h3 className="text-xl font-extrabold text-slate-900">{selected.title}</h3>
                  <p className="text-xs font-mono text-[#ff6b35] font-bold mt-0.5">{selected.role}</p>
                </div>
                <button className="p-1.5 rounded-full bg-[#e2e8f2] text-slate-700 hover:text-slate-950 border border-white/80 shadow-[3px_3px_6px_#c2c9d6,-3px_-3px_6px_#ffffff]" onClick={() => setSelected(null)}><X size={16} /></button>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed my-4">{selected.summary}</p>

              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">Key Highlights & Architecture:</h4>
                <ul className="space-y-1.5">
                  {selected.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-700 font-medium flex items-start gap-1.5">
                      <span className="text-[#ff6b35] font-bold mt-px">·</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {selected.tech.map((t) => <span key={t} className="pill text-[10px]">{t}</span>)}
              </div>

              <div className="flex gap-2 pt-4 border-t border-slate-300/80">
                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="pill pill-accent text-[11px]">
                    <Github size={13} /> View GitHub Repository
                  </a>
                )}
                {selected.linkedInUrl && (
                  <a href={selected.linkedInUrl} target="_blank" rel="noopener noreferrer" className="pill text-[11px]">
                    <Linkedin size={13} /> LinkedIn Post <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Gallery Lightbox ─── */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[300] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lightbox].src} alt={gallery[lightbox].caption} className="w-full rounded-xl border border-white/20 shadow-2xl" />
            <p className="text-center text-sm text-white mt-3 font-semibold">{gallery[lightbox].caption}</p>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-950 border border-white/20" onClick={() => setLightbox(null)}><X size={18} /></button>
          </div>
        </div>
      )}
    </section>
  );
}
