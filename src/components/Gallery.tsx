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
    title: '1st Place Winner – International ICT InnoServ Awards 2025',
    location: 'Taiwan, 2025',
    year: '2025',
    category: 'InnoServ Awards 2025 • First Place',
    imageSrc: innoservFirstPlace,
    linkedInUrl: LINKEDIN_INNOSERV,
    description: 'Award ceremony on stage at the 30th International ICT Innovative Services Awards 2025 in Taiwan. Awarded 1st Place in the International Exchange Division representing Sri Lanka with Novalith Smart Pregnancy Belt.',
  },
  {
    id: 'innoserv-booth',
    title: 'Novalith Exhibition Booth – InnoServ 2025',
    location: 'Taiwan, 2025',
    year: '2025',
    category: 'Exhibition Booth • HealthTech',
    imageSrc: innoservBooth,
    linkedInUrl: LINKEDIN_INNOSERV,
    description: 'Novalith Smart Pregnancy Belt exhibition booth at the International ICT Innovative Services Awards 2025 in Taiwan with live wearable device demos.',
  },
  {
    id: 'blockballot-booth',
    title: 'BlockBallot Blockchain Voting Demo',
    location: 'Cutting Edge 2025',
    year: '2025',
    category: 'Cybersecurity & Blockchain',
    imageSrc: blockballotBooth,
    linkedInUrl: LINKEDIN_BLOCKBALLOT,
    description: 'Demonstrating BlockBallot — a transparent, blockchain-powered electronic voting system — at CuttingEdge 2025.',
  },
  {
    id: 'cuttingedge-team',
    title: 'CuttingEdge 25 Innovation Showcase Team',
    location: 'Cutting Edge 2025',
    year: '2025',
    category: 'IIT Track • Team Showcase',
    imageSrc: cuttingedgeTeam,
    linkedInUrl: LINKEDIN_CUTTINGEDGE,
    description: 'Team stage showcase at CuttingEdge 25: Shaping the Next Horizon of Innovation organized by Informatics Institute of Technology.',
  },
  {
    id: 'innoserv-delegates',
    title: 'International ICT InnoServ Delegates & Winners',
    location: 'Taiwan, 2025',
    year: '2025',
    category: 'Global Delegation • Stage Ceremony',
    imageSrc: innoservDelegates,
    linkedInUrl: LINKEDIN_DINI,
    description: 'International delegations from Sri Lanka, Taiwan, Vietnam, Hong Kong, USA, and Malaysia on stage during InnoServ 2025.',
  },
];

export default function Gallery() {
  const ref = useScrollReveal();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section ref={ref} id="gallery" className="py-16 max-w-[760px] mx-auto px-4 border-t border-white/10">
      
      {/* Header */}
      <div className="mb-8 scroll-reveal flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold font-sans text-white flex items-center gap-2">
            event gallery <Sparkles className="text-[#95e78e]" size={18} />
          </h2>
          <p className="text-xs font-mono text-neutral-400 mt-0.5">
            stage awards, exhibition booths & global showcases
          </p>
        </div>
        <span className="ziffer-pill font-mono text-[11px]">
          {galleryItems.length} photos
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children scroll-reveal">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="ziffer-card p-4 cursor-pointer group flex flex-col justify-between"
            onClick={() => setSelectedItem(item)}
          >
            <div className="ziffer-img-box h-44 mb-3">
              <img src={item.imageSrc} alt={item.title} />
            </div>

            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-bold font-sans text-white group-hover:text-[#95e78e] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <span className="ziffer-pill text-[10px] py-0.5 px-2 shrink-0 font-mono">
                  {item.year}
                </span>
              </div>

              <p className="text-[11px] font-mono text-neutral-400 mb-3">
                {item.category}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-neutral-400 group-hover:text-white">
                <span>View Details</span>
                <ExternalLink size={12} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[300] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="ziffer-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 bg-[#0f1111] border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-white/10">
              <div>
                <span className="ziffer-pill ziffer-pill-lime text-xs mb-2 inline-flex">
                  {selectedItem.category}
                </span>
                <h3 className="text-xl font-bold font-sans text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  {selectedItem.location}
                </p>
              </div>
              <button
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 border border-white/10"
                onClick={() => setSelectedItem(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="ziffer-img-box mb-4">
              <img src={selectedItem.imageSrc} alt={selectedItem.title} className="max-h-[50vh] object-contain" />
            </div>

            <p className="text-sm font-sans text-neutral-300 leading-relaxed mb-4">
              {selectedItem.description}
            </p>

            <a
              href={selectedItem.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ziffer-pill ziffer-pill-lime text-xs font-mono w-full justify-center py-2.5"
            >
              <Linkedin size={14} className="mr-1 inline" /> Open Update on LinkedIn <ExternalLink size={12} className="ml-1 inline" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
