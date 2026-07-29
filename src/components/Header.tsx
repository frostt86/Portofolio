import pamitha from '../assets/pamitha.jpeg';

export default function Header() {
  return (
    <section className="px-6 md:px-16 pt-28 pb-16 md:pt-40 md:pb-24 max-w-[1280px] mx-auto">
      
      {/* Top Tag */}
      <div className="mb-6 flex items-center gap-3">
        <span className="px-2.5 py-1 bg-tertiary text-white font-label-sm text-[11px] uppercase tracking-widest font-bold">
          2025–2026 Portfolio
        </span>
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider hidden sm:inline-block">
          Dell Boomi Integration Specialist
        </span>
      </div>

      {/* Main Editorial Hero Headline */}
      <div className="grid grid-cols-12 gap-6 items-end mb-12">
        <div className="col-span-12 lg:col-span-9">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tighter uppercase leading-[0.95] font-extrabold">
            INTEGRATION CONSULTANT & SOFTWARE ENGINEER
          </h1>
        </div>

        {/* Profile Image Thumbnail in Editorial Frame */}
        <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
          <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden border border-on-surface bg-surface-container shrink-0">
            <img
              src={pamitha}
              alt="Pamitha Kularathne"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Hero Description & Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-on-surface/15">
        <div className="md:col-span-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
            Specializing in enterprise automation, API integrations, and monitoring solutions. At Yenlo, built 5 production automation suites and 7 migration processes replacing hours of manual work with minutes of automated processing. Software Engineering undergraduate at the University of Westminster with 17 Boomi certifications and an InnoServ Awards 2025 win.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-label-sm font-label-sm uppercase tracking-wider text-outline border-b border-on-surface/10 pb-1">
              <span>Production Automations</span>
              <span className="font-bold text-on-surface font-mono">5 Suites</span>
            </div>
            <div className="flex justify-between items-center text-label-sm font-label-sm uppercase tracking-wider text-outline border-b border-on-surface/10 pb-1">
              <span>Boomi Certifications</span>
              <span className="font-bold text-on-surface font-mono">17 Certs</span>
            </div>
            <div className="flex justify-between items-center text-label-sm font-label-sm uppercase tracking-wider text-outline pb-1">
              <span>Innovation Award</span>
              <span className="font-bold text-tertiary font-mono">Winner 2025</span>
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="inline-block bg-on-surface text-surface px-6 py-3.5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-tertiary transition-colors duration-300 font-bold"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-block border border-on-surface text-on-surface px-6 py-3.5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-colors duration-300 font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}