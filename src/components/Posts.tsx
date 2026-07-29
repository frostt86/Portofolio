import { useState } from 'react';
import { ExternalLink, Linkedin, X, Maximize2 } from 'lucide-react';

import innoservFirstPlace from '../assets/gallery/innoserv_first_place.jpg';
import linkedinBlockballotShot from '../assets/gallery/linkedin_blockballot_shot.png';
import linkedinRonShot from '../assets/gallery/linkedin_ron_shot.png';
import linkedinSherlockShot from '../assets/gallery/linkedin_sherlock_shot.png';
import linkedinRguLaunchShot from '../assets/gallery/linkedin_rgu_launch_shot.png';
import linkedinCuttingedgeShot from '../assets/gallery/linkedin_rochani_shot.png';

interface PostItem {
  id: string;
  author: string;
  title: string;
  category: string;
  date: string;
  screenshotSrc: string;
  url: string;
}

const posts: PostItem[] = [
  {
    id: 'innoserv-win',
    author: 'Pamitha Kularathne',
    title: '🏆 1st Place Win — ICT InnoServ Awards 2025 (Taiwan)',
    category: 'International Award',
    date: 'May 2025',
    screenshotSrc: innoservFirstPlace,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7468995875151712256/',
  },
  {
    id: 'rgu-launch',
    author: 'Pamitha Kularathne',
    title: '🎓 Robert Gordon University (RGU) Program Launch — IIT Campus',
    category: 'Academic Milestone',
    date: 'Feb 2025',
    screenshotSrc: linkedinRguLaunchShot,
    url: 'https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/',
  },
  {
    id: 'blockballot-post',
    author: 'Pamitha Kularathne',
    title: '🗳️ BlockBallot: Blockchain Electronic Voting System',
    category: 'Web3 & Governance',
    date: 'Nov 2024',
    screenshotSrc: linkedinBlockballotShot,
    url: 'https://www.linkedin.com/posts/pamitha-kularathne-ba2b06295_election-voting-srilanka-activity-7261064177136345088-2vpt',
  },
  {
    id: 'cuttingedge-showcase',
    author: 'Pamitha Kularathne',
    title: '🚀 CuttingEdge 25 Innovation Showcase — Temple Trees',
    category: 'Exhibition & IoT',
    date: 'May 2025',
    screenshotSrc: linkedinCuttingedgeShot,
    url: 'https://www.linkedin.com/posts/pamitha-kularathne-ba2b06295_cuttingedge2025-innovation-iot-activity-7465049671858589696-_Y0v',
  },
  {
    id: 'ron-meeting',
    author: 'Ron van der Veeke',
    title: '🤝 Meeting Yenlo Leadership Team & Integration Insights',
    category: 'Yenlo Team Spotlight',
    date: 'Jan 2025',
    screenshotSrc: linkedinRonShot,
    url: 'https://www.linkedin.com/posts/ron-van-der-veeke-3a051a8b_last-week-i-finally-got-the-chance-to-meet-ugcPost-7409902097455947776-sowX',
  },
  {
    id: 'sherlock-hackathon',
    author: 'Pamitha Kularathne',
    title: '🕵️ 4th Place — WSO2 Sherlock Hackathon Challenge',
    category: 'Hackathon Award',
    date: 'Dec 2024',
    screenshotSrc: linkedinSherlockShot,
    url: 'https://www.linkedin.com/posts/pamitha-kularathne-ba2b06295_sherlock-wso2-teamwork-activity-7309983470678654977-1e9Q',
  },
];

export default function Posts() {
  const [activeModalPost, setActiveModalPost] = useState<PostItem | null>(null);

  return (
    <section id="posts" className="py-20 max-w-[760px] mx-auto px-5">
      <hr className="section-divider mb-16" />

      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="section-label mb-1">LinkedIn Feed & Updates</p>
          <h2 className="section-title">Public Posts & Media</h2>
        </div>
        <a
          href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/"
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-accent text-xs font-bold"
        >
          <Linkedin size={13} /> View LinkedIn Profile
        </a>
      </div>

      {/* 2-Column CSS Masonry Canvas Layout */}
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="break-inside-avoid card p-0 overflow-hidden cursor-pointer group bg-[#e6ecf5] border border-white/80 shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff] hover:shadow-[12px_12px_24px_#b8c0cf,-10px_-10px_22px_#ffffff] transition-all duration-300"
            onClick={() => setActiveModalPost(post)}
          >
            {/* Real Screenshot Container */}
            <div className="relative overflow-hidden bg-[#e2e8f2] border-b border-slate-300/80">
              <img
                src={post.screenshotSrc}
                alt={post.title}
                className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Hover Lightbox Badge Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                <div className="self-end">
                  <span className="p-2 rounded-full bg-slate-900/80 text-white inline-flex border border-white/20 shadow-md">
                    <Maximize2 size={14} />
                  </span>
                </div>
                <div className="flex items-center justify-between text-white text-xs font-semibold">
                  <span>Click for Full Resolution Screenshot</span>
                  <ExternalLink size={13} />
                </div>
              </div>
            </div>

            {/* Post Information */}
            <div className="p-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="pill pill-accent text-[10px]">{post.category}</span>
                <span className="text-[11px] font-mono text-slate-500 font-bold">{post.date}</span>
              </div>

              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#ff6b35] transition-colors leading-snug mb-3">
                {post.title}
              </h3>

              <div className="flex items-center justify-between pt-3 border-t border-slate-300/80 text-xs font-mono text-slate-600 font-bold">
                <span>Post by {post.author}</span>
                <span className="text-[#ff6b35] group-hover:underline flex items-center gap-1">
                  View <ExternalLink size={11} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Screenshot Lightbox Modal */}
      {activeModalPost && (
        <div
          className="fixed inset-0 z-[300] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalPost(null)}
        >
          <div
            className="card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-0 bg-[#e6ecf5] border-white/90 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-300/80 flex items-center justify-between bg-[#e2e8f2]">
              <div>
                <span className="pill pill-accent text-[10px] mb-1 inline-flex">{activeModalPost.category}</span>
                <h3 className="text-base font-extrabold text-slate-900">{activeModalPost.title}</h3>
              </div>
              <button
                className="p-2 rounded-full bg-[#e6ecf5] text-slate-700 hover:text-slate-950 border border-white/80 shadow-[3px_3px_6px_#c2c9d6,-3px_-3px_6px_#ffffff]"
                onClick={() => setActiveModalPost(null)}
              >
                <X size={18} />
              </button>
            </div>

            {/* High Resolution Image Body */}
            <div className="p-4 bg-[#e2e8f2]">
              <img
                src={activeModalPost.screenshotSrc}
                alt={activeModalPost.title}
                className="w-full rounded-xl border border-slate-300/80 shadow-md"
              />
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 border-t border-slate-300/80 flex items-center justify-between bg-[#e6ecf5]">
              <span className="text-xs font-mono text-slate-600 font-bold">Original Post on LinkedIn</span>
              <a
                href={activeModalPost.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-accent text-xs font-bold"
              >
                Open on LinkedIn <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
