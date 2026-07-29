import { useState, useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Hero / Intro' },
  { id: 'about', label: 'About & Skills' },
  { id: 'work', label: 'Selected Work' },
  { id: 'posts', label: 'Posts & Feed' },
  { id: 'contact', label: 'Get in Touch' },
];

export default function SideScrollbar() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const trackRef = useRef<HTMLDivElement>(null);

  /* Calculate Page Scroll Percentage */
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const currentScroll = window.scrollY;
    const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
    setScrollProgress(progress);

    // Identify active section
    const scrollPos = currentScroll + window.innerHeight / 3;
    for (const section of sections) {
      const el = document.getElementById(section.id === 'hero' ? 'root' : section.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Scroll to position on click / drag */
  const scrollToPercent = (percent: number) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (percent / 100) * totalHeight;
    window.scrollTo({ top: targetScroll, behavior: isDragging ? 'auto' : 'smooth' });
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const percent = Math.min(Math.max((offsetY / rect.height) * 100, 0), 100);
    scrollToPercent(percent);
  };

  /* Drag Handlers */
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;
      const percent = Math.min(Math.max((offsetY / rect.height) * 100, 0), 100);
      scrollToPercent(percent);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <aside 
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 group/side select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Top Scroll Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e6ecf5] text-slate-600 hover:text-[#ff6b35] border border-white/90 shadow-[3px_3px_7px_#c2c9d6,-3px_-3px_7px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center transition-all opacity-80 hover:opacity-100"
        title="Scroll to Top"
      >
        <ArrowUp size={13} />
      </button>

      {/* Vertical Recessed Neumorphic Slider Track */}
      <div 
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-4 sm:w-5 h-56 sm:h-64 rounded-full bg-[#dbe2ee] border border-white/90 shadow-[inset_4px_4px_8px_#c2c9d6,inset_-4px_-4px_8px_#ffffff] p-0.5 flex items-center justify-center cursor-pointer"
      >

        {/* Section Notch Markers */}
        <div className="absolute inset-y-4 inset-x-0 flex flex-col justify-between items-center pointer-events-none opacity-40">
          {sections.map((sec) => (
            <span 
              key={sec.id} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                activeSection === sec.id ? 'bg-[#ff6b35] scale-125' : 'bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Tactile Pill-Shaped Slider Thumb Handle */}
        <div
          onMouseDown={handleMouseDown}
          className={`absolute left-1/2 -translate-x-1/2 w-6 sm:w-7 h-10 rounded-full bg-gradient-to-b from-[#ffffff] to-[#dce4f0] border border-white shadow-[4px_4px_10px_#b8c0cf,-4px_-4px_10px_#ffffff] cursor-grab active:cursor-grabbing transition-transform duration-75 flex flex-col items-center justify-center gap-1 ${
            isDragging ? 'scale-110 shadow-[6px_6px_14px_#b8c0cf,-6px_-6px_14px_#ffffff]' : ''
          }`}
          style={{
            top: `calc(${scrollProgress}% - ${(scrollProgress / 100) * 40}px)`,
          }}
        >
          {/* Tactile Pill Thumb Grooves & Accent Indicator */}
          <span className="w-3.5 h-0.5 rounded-full bg-[#ff6b35]" />
          <span className="w-3 h-0.5 rounded-full bg-slate-400" />
          <span className="w-3 h-0.5 rounded-full bg-slate-400" />
        </div>

      </div>

      {/* Floating Animated Neumorphic Section Badge Tooltip */}
      <div 
        className={`absolute right-12 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#e6ecf5] border border-white/90 shadow-[6px_6px_14px_#c2c9d6,-6px_-6px_14px_#ffffff] text-xs font-mono font-bold text-slate-900 whitespace-nowrap pointer-events-none transition-all duration-300 ${
          isHovered || isDragging
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-3 scale-95'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
          <span>{sections.find(s => s.id === activeSection)?.label || 'Portfolio'}</span>
          <span className="text-[10px] text-[#ff6b35] font-bold">({Math.round(scrollProgress)}%)</span>
        </div>
      </div>

      {/* Bottom Scroll Button */}
      <button
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e6ecf5] text-slate-600 hover:text-[#ff6b35] border border-white/90 shadow-[3px_3px_7px_#c2c9d6,-3px_-3px_7px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center transition-all opacity-80 hover:opacity-100"
        title="Scroll to Bottom"
      >
        <ArrowDown size={13} />
      </button>

    </aside>
  );
}
