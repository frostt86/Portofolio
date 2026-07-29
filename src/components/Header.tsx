import { ChevronDown, Award, Zap, Cpu } from 'lucide-react';
import pamitha from '../assets/pamitha.jpeg';

export default function Header() {
  return (
    <header className="hero-section">
      <div className="text-center space-y-8 px-4 relative z-10 max-w-5xl mx-auto pt-16">
        
        {/* Profile Image with Stark Monochrome Ring */}
        <div className="mb-6 animate-float-slow">
          <div className="profile-mono-frame mx-auto w-36 h-36 sm:w-44 sm:h-44">
            <img
              src={pamitha}
              alt="Pamitha Kularathne"
              className="w-full h-full rounded-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

        {/* Title Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 text-xs font-mono text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          BOOMI-CERTIFIED INTEGRATION CONSULTANT
        </div>

        {/* Name */}
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-outfit tracking-tight text-white uppercase">
            Pamitha Kularathne
          </h1>
        </div>

        {/* Tagline / Elevator Pitch */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 font-inter leading-relaxed px-4">
          Specializing in enterprise automation, API integrations, and monitoring solutions.
          Architected production Boomi automation suites, enterprise banking platforms, and award-winning health-tech wearables.
        </p>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
          <div className="hud-card p-4 text-center border-neutral-800">
            <div className="flex justify-center mb-1 text-white">
              <Zap size={20} />
            </div>
            <div className="text-2xl font-bold font-mono text-white">5 Suites</div>
            <div className="text-xs text-neutral-400 font-mono mt-0.5">Enterprise Automations</div>
          </div>

          <div className="hud-card p-4 text-center border-neutral-800">
            <div className="flex justify-center mb-1 text-white">
              <Award size={20} />
            </div>
            <div className="text-2xl font-bold font-mono text-white">17 Certs</div>
            <div className="text-xs text-neutral-400 font-mono mt-0.5">Dell Boomi Certified</div>
          </div>

          <div className="hud-card p-4 text-center border-neutral-800">
            <div className="flex justify-center mb-1 text-white">
              <Cpu size={20} />
            </div>
            <div className="text-2xl font-bold font-mono text-white">Winner</div>
            <div className="text-xs text-neutral-400 font-mono mt-0.5">InnoServ Awards 2025</div>
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="btn-mono-solid"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Projects
            <ChevronDown size={16} />
          </a>

          <a
            href="#contact"
            className="btn-mono-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}