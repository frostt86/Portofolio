import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen relative bg-surface text-on-surface font-geist selection:bg-tertiary selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-16">
        <Header />
        <Projects />
        <Gallery />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Global STUDIO_X Footer */}
      <footer className="w-full py-16 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1280px] mx-auto border-t border-on-surface dark:border-outline-variant">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-headline-md text-headline-md font-extrabold text-on-surface uppercase tracking-tighter hover:text-tertiary transition-colors"
          >
            PAMITHA_KULARATHNE
          </a>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container">
            © {new Date().getFullYear()} PAMITHA KULARATHNE. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container hover:text-tertiary transition-colors duration-300"
            href="https://github.com/frostt86"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container hover:text-tertiary transition-colors duration-300"
            href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container hover:text-tertiary transition-colors duration-300"
            href="mailto:jkularatn@gmail.com"
          >
            Email
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container hover:text-tertiary transition-colors duration-300 flex items-center"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top <span className="material-symbols-outlined text-[14px] ml-1">arrow_upward</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;