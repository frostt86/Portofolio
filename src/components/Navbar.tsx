import { useState } from 'react';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(href.slice(1));
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-on-surface/15 h-16 flex items-center px-6 md:px-16 transition-colors">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto">
        
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-headline-md text-[20px] md:text-headline-md font-extrabold tracking-tighter text-on-surface uppercase hover:text-tertiary transition-colors"
        >
          PAMITHA_KULARATHNE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-tertiary border-b-2 border-tertiary pb-1 font-bold'
                  : 'text-on-surface hover:text-tertiary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-on-surface p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Slide-down Nav */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-surface border-b border-on-surface/20 px-6 py-6 flex flex-col gap-4 md:hidden shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface hover:text-tertiary py-2 border-b border-on-surface/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
