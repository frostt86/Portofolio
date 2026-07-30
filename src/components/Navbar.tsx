const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#posts', label: 'Posts' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="nav-bar flex items-center gap-1.5 p-1.5 sm:p-2 rounded-full backdrop-blur-md">
        
        {/* Brand Dot */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="nav-brand flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors hover:text-[#ff6b35]"
          title="Scroll to top"
        >
          PK
        </a>

        <div className="nav-divider w-px h-4 mx-1" />

        {/* Nav Links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="nav-link px-3.5 py-1.5 text-[12px] font-semibold rounded-full transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
