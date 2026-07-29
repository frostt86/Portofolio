import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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
    <div className="min-h-screen relative" style={{ background: 'var(--color-void-950)' }}>
      {/* Background layers */}
      <ParticleCanvas />
      <div className="grid-bg" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-12">
        <div className="footer-glow-line" />
        <div className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Social links */}
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 240, 255, 0.3)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Github size={18} className="text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139, 92, 246, 0.3)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Linkedin size={18} className="text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:jkularatn@gmail.com"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 0, 110, 0.3)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Mail size={18} className="text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>

              {/* Copyright */}
              <p className="text-sm text-gray-600 font-inter flex items-center gap-1">
                © 2024 Pamitha Kularathne. Built with <Heart size={14} style={{ color: 'var(--color-neon-magenta)' }} />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;