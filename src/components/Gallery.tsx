import { useState } from 'react';
import { X, ExternalLink, Linkedin, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

import innoservFirstPlace from '../assets/gallery/innoserv_first_place.jpg';
import innoservBooth from '../assets/gallery/innoserv_booth.jpg';
import innoservDelegates from '../assets/gallery/innoserv_delegates.jpg';
import blockballotBooth from '../assets/gallery/blockballot_booth.jpg';
import cuttingedgeTeam from '../assets/gallery/cuttingedge_team.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  colSpanClass: string;
  aspectRatioClass: string;
  imageSrc: string;
  linkedInUrl: string;
  description: string;
}

const LINKEDIN_INNOSERV = 'https://www.linkedin.com/feed/update/urn:li:activity:7468995875151712256/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';
const LINKEDIN_CUTTINGEDGE = 'https://www.linkedin.com/feed/update/urn:li:activity:7480981283335004160/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';
const LINKEDIN_BLOCKBALLOT = 'https://www.linkedin.com/posts/rochani-riligala_blockchain-votingsystem-cuttingedge25-ugcPost-7342801556779540482-tWJu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';
const LINKEDIN_DINI = 'https://www.linkedin.com/posts/dini-klaassen_teamwork-growth-leadership-activity-7355665897887285248-AwQx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';

const galleryItems: GalleryItem[] = [
  {
    id: 'innoserv-first-place',
    title: '1st Place Winner – International ICT Innovative Services Awards 2025',
    location: 'Taiwan, 2025',
    year: '2025',
    category: 'InnoServ Awards 2025 • International First Place',
    colSpanClass: 'md:col-span-8',
    aspectRatioClass: 'aspect-[16/9]',
    imageSrc: innoservFirstPlace,
    linkedInUrl: LINKEDIN_INNOSERV,
    description: 'Award ceremony on stage at the 30th International ICT Innovative Services Awards 2025 (InnoServ Awards) in Taiwan. Awarded 1st Place in the International Exchange Division representing Sri Lanka with Novalith Smart Pregnancy Belt.',
  },
  {
    id: 'innoserv-booth',
    title: 'Novalith Showcase Booth – InnoServ 2025',
    location: 'Taiwan, 2025',
    year: '2025',
    category: 'Exhibition Booth • HealthTech Innovation',
    colSpanClass: 'md:col-span-4',
    aspectRatioClass: 'aspect-square',
    imageSrc: innoservBooth,
    linkedInUrl: LINKEDIN_INNOSERV,
    description: 'Novalith Smart Pregnancy Belt exhibition booth at the International ICT Innovative Services Awards 2025 in Taiwan with live wearable device demos and real-time vital metrics.',
  },
  {
    id: 'blockballot-booth',
    title: 'BlockBallot Blockchain Voting Showcase',
    location: 'Cutting Edge 2025',
    year: '2025',
    category: 'Cybersecurity & Blockchain • Live Demo',
    colSpanClass: 'md:col-span-6',
    aspectRatioClass: 'aspect-[4/3]',
    imageSrc: blockballotBooth,
    linkedInUrl: LINKEDIN_BLOCKBALLOT,
    description: 'Demonstrating BlockBallot — a transparent, blockchain-powered electronic voting system — at the CuttingEdge 2025 Cybersecurity & Blockchain track.',
  },
  {
    id: 'cuttingedge-team',
    title: 'CuttingEdge 25 Innovation Showcase Team',
    location: 'Cutting Edge 2025',
    year: '2025',
    category: 'IIT Innovation Track • Team Showcase',
    colSpanClass: 'md:col-span-6',
    aspectRatioClass: 'aspect-[4/3]',
    imageSrc: cuttingedgeTeam,
    linkedInUrl: LINKEDIN_CUTTINGEDGE,
    description: 'Team stage showcase at CuttingEdge 25: Shaping the Next Horizon of Innovation organized by Informatics Institute of Technology.',
  },
  {
    id: 'innoserv-delegates',
    title: '30th International ICT InnoServ Delegates & Winners',
    location: 'Taiwan, 2025',
    year: '2025',
    category: 'Global Delegation • Award Ceremony',
    colSpanClass: 'md:col-span-12',
    aspectRatioClass: 'aspect-[21/9]',
    imageSrc: innoservDelegates,
    linkedInUrl: LINKEDIN_DINI,
    description: 'International delegations from Sri Lanka, Taiwan, Vietnam, Hong Kong, USA, and Malaysia on stage during the InnoServ 2025 awards event.',
  },
];

export default function Gallery() {
  const ref = useScrollReveal();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section ref={ref} id="gallery" className="px-6 md:px-16 pb-[128px] max-w-[1280px] mx-auto pt-16 border-t border-on-surface/15">
      
      {/* Section Header */}
      <div className="mb-12 border-b border-on-surface/15 pb-6 scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-2">
            // Event Highlights & International Awards
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-extrabold flex items-center gap-3">
            GALLERY & HIGHLIGHTS
            <Sparkles className="text-tertiary" size={32} />
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Live exhibition booths, stage award presentations, and global innovation showcases.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={LINKEDIN_INNOSERV}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-sm text-xs text-tertiary uppercase tracking-widest flex items-center gap-1 font-bold hover:underline"
            >
              <Linkedin size={14} /> InnoServ Award <ExternalLink size={12} />
            </a>
            <a
              href={LINKEDIN_BLOCKBALLOT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-sm text-xs text-tertiary uppercase tracking-widest flex items-center gap-1 font-bold hover:underline"
            >
              <Linkedin size={14} /> BlockBallot Post <ExternalLink size={12} />
            </a>
            <a
              href={LINKEDIN_DINI}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-sm text-xs text-tertiary uppercase tracking-widest flex items-center gap-1 font-bold hover:underline"
            >
              <Linkedin size={14} /> Team & Growth Post <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Bento-style Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 stagger-children scroll-reveal">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`${item.colSpanClass} group project-card cursor-pointer`}
            onClick={() => setSelectedItem(item)}
          >
            {/* Image Box with Grayscale-to-Color hover */}
            <div className={`overflow-hidden ${item.aspectRatioClass} mb-4 bg-surface-container border border-on-surface/10 relative`}>
              <img
                src={item.imageSrc}
                alt={item.title}
                className="project-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
            </div>

            {/* Title & Tag */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-headline-md text-headline-md text-on-surface project-title transition-colors font-bold">
                {item.title}
              </h3>
              <span className="px-2 py-1 bg-tertiary text-white font-label-sm text-[10px] rounded-none shrink-0 font-bold">
                {item.year}
              </span>
            </div>

            {/* Subtitle & LinkedIn indicator */}
            <div className="flex items-center justify-between mt-1">
              <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                {item.category} • {item.location}
              </p>
              <a
                href={item.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-sm text-[11px] text-tertiary uppercase tracking-widest flex items-center gap-1 font-bold hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin size={12} /> Post Link <ExternalLink size={10} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[300] bg-on-surface/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-surface border border-on-surface max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-on-surface/20">
              <div>
                <span className="px-2 py-1 bg-tertiary text-white font-label-sm text-[10px] uppercase font-bold mb-2 inline-block">
                  {selectedItem.category}
                </span>
                <h3 className="font-headline-lg text-[28px] md:text-[34px] font-bold text-on-surface uppercase tracking-tight leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1">
                  {selectedItem.location}
                </p>
              </div>
              <button
                className="p-2 text-on-surface hover:text-tertiary transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Full Resolution Image */}
            <div className="overflow-hidden mb-6 bg-surface-container border border-on-surface/10">
              <img
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                className="w-full h-auto object-contain max-h-[50vh]"
              />
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              {selectedItem.description}
            </p>

            {/* LinkedIn Post Button */}
            {selectedItem.linkedInUrl && (
              <div className="pt-4 border-t border-on-surface/15">
                <a
                  href={selectedItem.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-on-surface text-surface px-6 py-3.5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-tertiary transition-colors font-bold w-full justify-center"
                >
                  <Linkedin size={16} /> Open Update on LinkedIn
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
