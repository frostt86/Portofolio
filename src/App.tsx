import { Github, Linkedin, Mail } from 'lucide-react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen relative bg-black text-neutral-200">
      {/* Background visual layers */}
      <ParticleCanvas />
      <div className="grid-bg-mono" />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 space-y-12">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-900 bg-black/90 py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <div className="text-lg font-bold font-outfit text-white uppercase tracking-wider">
              Pamitha Kularathne
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1">
              Boomi Integration Consultant & Software Engineer
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:jkularatn@gmail.com"
              className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-neutral-900 text-center text-xs font-mono text-neutral-500">
          © {new Date().getFullYear()} Pamitha Kularathne. All rights reserved. High-contrast Cyber Minimalist Portfolio.
        </div>
      </footer>
    </div>
  );
}

export default App;