import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import pamithaHero from '../assets/pamitha_hero.jpg';
import { NeumorphicControlDeck, NeumorphicGauge } from './NeumorphicControls';

export default function Header() {
  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 max-w-[960px] mx-auto px-5">
      
      {/* 2-Column Minimal Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
        
        {/* Left Side — Portrait Photo & Telemetry Objects */}
        <div className="flex flex-col gap-4 max-w-[280px] sm:max-w-[300px] mx-auto md:mx-0">
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/80 bg-[#e6ecf5] aspect-[4/5] shadow-[12px_12px_24px_#c2c9d6,-12px_-12px_24px_#ffffff]">
              <img 
                src={pamithaHero} 
                alt="Pamitha Kularathne" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" 
              />
              {/* Gradient Overlay for bottom subtle frame accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#ff6b35]" /> Sri Lanka</span>
                <span className="text-[#ff6b35] font-semibold">BSc (Hons) SE</span>
              </div>
            </div>
          </div>

          {/* Interactive Neumorphic Telemetry Gauge Objects */}
          <div className="grid grid-cols-1 gap-2.5">
            <NeumorphicGauge label="Boomi SLA Optimization" value={90} unit="%" status="Active Suite" />
            <NeumorphicGauge label="Backend Microservices" value={99} unit="%" status="Production Live" />
          </div>
        </div>

        {/* Right Side — Minimal Text Content & Controls */}
        <div className="text-left">
          
          {/* Status Badge */}
          <div className="mb-4 inline-flex">
            <span className="pill pill-accent text-[11px] px-3.5 py-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b35] animate-pulse" />
              Certified Boomi Integration Consultant
            </span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Pamitha Kularathne
          </h1>

          {/* Minimal Headline Tagline */}
          <p className="text-lg text-slate-800 font-medium leading-snug mb-4">
            Architecting <span className="serif-italic text-[#ff6b35]">enterprise integrations</span>,{' '}
            <span className="serif-italic text-blue-600">cloud automations</span>, & scalable backend platforms.
          </p>

          {/* Minimal Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
            Integration Consultant at <strong className="text-slate-900 font-bold">Yenlo Lanka</strong> & Software Engineering Undergraduate at the <strong className="text-slate-900 font-bold">University of Westminster</strong>. Specializing in Dell Boomi integration architectures, RESTful microservices, and distributed systems.
          </p>

          {/* Minimal Metrics Row — Unified Neumorphic Container */}
          <div className="card-flat p-4 mb-6 bg-[#e6ecf5] border border-white/80 rounded-2xl shadow-[6px_6px_14px_#c2c9d6,-6px_-6px_14px_#ffffff] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex-1 text-center sm:text-left sm:pl-2 w-full sm:w-auto">
              <p className="text-xl font-bold text-slate-900 font-mono">17</p>
              <p className="text-[10px] text-slate-500 font-mono font-semibold">Boomi Certifications</p>
            </div>

            {/* Neumorphic Single Line Separator */}
            <div className="w-full sm:w-[1px] h-[1px] sm:h-9 bg-[#c5ccd8] shadow-[0_1px_0_#ffffff] sm:shadow-[1px_0_0_#ffffff] shrink-0" />

            <div className="flex-1 text-center sm:text-left sm:pl-6 w-full sm:w-auto">
              <p className="text-xl font-bold text-[#ff6b35] font-mono">20+</p>
              <p className="text-[10px] text-slate-500 font-mono font-semibold">Projects Completed</p>
            </div>

            {/* Neumorphic Single Line Separator */}
            <div className="w-full sm:w-[1px] h-[1px] sm:h-9 bg-[#c5ccd8] shadow-[0_1px_0_#ffffff] sm:shadow-[1px_0_0_#ffffff] shrink-0" />

            <div className="flex-1 text-center sm:text-left sm:pl-6 w-full sm:w-auto">
              <p className="text-xl font-bold text-blue-600 font-mono">~90%</p>
              <p className="text-[10px] text-slate-500 font-mono font-semibold">SLA Time Savings</p>
            </div>
          </div>

          {/* Interactive Neumorphic Tactile Control Deck */}
          <NeumorphicControlDeck />

          {/* Action Buttons & Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff6b35] text-white text-xs font-bold hover:bg-[#e55622] transition-all shadow-[6px_6px_14px_#c2c9d6,-6px_-6px_14px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]"
            >
              Selected Work <ArrowDown size={13} />
            </a>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-5 py-2.5 rounded-full bg-[#e6ecf5] text-slate-800 text-xs font-bold border border-white/80 shadow-[6px_6px_14px_#c2c9d6,-6px_-6px_14px_#ffffff] hover:text-[#ff6b35] transition-all active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-2 w-full justify-center sm:w-auto sm:justify-start">
              <a
                href="https://github.com/frostt86"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#e6ecf5] text-slate-700 hover:text-slate-950 border border-white/80 shadow-[4px_4px_10px_#c2c9d6,-4px_-4px_10px_#ffffff] transition-all active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#e6ecf5] text-slate-700 hover:text-[#ff6b35] border border-white/80 shadow-[4px_4px_10px_#c2c9d6,-4px_-4px_10px_#ffffff] transition-all active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>

              <a
                href="mailto:jkularatn@gmail.com"
                className="p-2.5 rounded-full bg-[#e6ecf5] text-slate-700 hover:text-blue-600 border border-white/80 shadow-[4px_4px_10px_#c2c9d6,-4px_-4px_10px_#ffffff] transition-all active:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]"
                aria-label="Send Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}