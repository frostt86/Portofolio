import { ChevronDown, Award, Zap, Cpu } from 'lucide-react';
import pamitha from '../assets/pamitha.jpeg';

export default function Header() {
  return (
    <header className="hero-section min-h-[90vh] flex items-center justify-center pt-20 pb-12 relative">
      <div className="text-center space-y-7 px-4 relative z-10 max-w-4xl mx-auto">
        
        {/* Profile Image with subtle cyan glow */}
        <div className="mb-4">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-500/40 via-white/20 to-violet-500/40 shadow-xl shadow-cyan-950/40">
              <img
                src={pamitha}
                alt="Pamitha Kularathne"
                className="w-full h-full rounded-full object-cover grayscale contrast-110"
              />
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE FOR CONSULTING & ROLES
        </div>

        {/* Main Title */}
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-outfit tracking-tight text-white uppercase">
            Pamitha Kularathne
          </h1>
          <p className="text-lg sm:text-xl font-medium font-outfit text-cyan-400 mt-2">
            Boomi Integration Consultant & Software Engineer
          </p>
        </div>

        {/* Bio summary */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 font-inter leading-relaxed px-4">
          Specializing in enterprise automation, API integrations, and monitoring solutions. Built 5 production Boomi automation suites at Yenlo & award-winning health-tech wearables.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto pt-2">
          <div className="mini-card p-3 text-center">
            <div className="text-xl font-bold font-outfit text-white">5 Suites</div>
            <div className="text-[11px] text-neutral-400 font-mono">Automations</div>
          </div>

          <div className="mini-card p-3 text-center">
            <div className="text-xl font-bold font-outfit text-white">17 Certs</div>
            <div className="text-[11px] text-neutral-400 font-mono">Dell Boomi</div>
          </div>

          <div className="mini-card p-3 text-center">
            <div className="text-xl font-bold font-outfit text-white">Winner</div>
            <div className="text-[11px] text-neutral-400 font-mono">InnoServ 2025</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Projects
            <ChevronDown size={15} />
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}