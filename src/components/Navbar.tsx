const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#posts', label: 'Posts' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#e6ecf5] border border-white/80 shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] backdrop-blur-md">
        
        {/* Brand Dot */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e6ecf5] border border-white/80 shadow-[inset_2px_2px_5px_#c2c9d6,inset_-2px_-2px_5px_#ffffff] text-xs font-bold text-slate-800 hover:text-[#ff6b35] transition-colors"
          title="Scroll to top"
        >
          PK
        </a>

        <div className="w-px h-4 bg-slate-300 mx-1" />

        {/* Nav Links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3.5 py-1.5 text-[12px] font-semibold text-slate-600 hover:text-[#ff6b35] hover:bg-[#e2e8f2] rounded-full transition-all shadow-[inset_0_0_0_transparent] hover:shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
