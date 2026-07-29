import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import pamitha from '../assets/pamitha.jpeg';

export default function Header() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="hero-section">
      <div className="hero-bg-gradient" />

      <div className="text-center space-y-8 px-4 relative z-10 max-w-4xl mx-auto">
        {/* Profile Image with Holographic Ring */}
        <div className="mb-8 animate-float">
          <div className="profile-holo-ring mx-auto w-36 h-36 sm:w-48 sm:h-48">
            <img
              src={pamitha}
              alt="Pamitha Kularathne"
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover relative z-10"
            />
          </div>
        </div>

        {/* Name with Typewriter */}
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-outfit leading-tight glitch-hover">
            <span className="gradient-text">
              {showTypewriter ? 'Pamitha Kularathne' : '\u00A0'}
            </span>
          </h1>
        </div>

        {/* Subtitle with neon glow */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium font-outfit text-glow-cyan"
            style={{ color: 'var(--color-neon-cyan)', opacity: 0.9 }}>
          Boomi Integration Consultant
        </h2>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 font-inter leading-relaxed px-4">
          Passionate about creating practical software solutions, innovative blockchain
          applications, and seamless enterprise integrations
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <a href="#about" className="neon-button"
             onClick={(e) => {
               e.preventDefault();
               document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
             }}>
            Explore My Work
            <ChevronDown size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-inter">Scroll</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-neon-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </header>
  );
}