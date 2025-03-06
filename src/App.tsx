import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const starsRef = useRef<HTMLDivElement>(null);
  const starsLayerOneRef = useRef<HTMLDivElement>(null);
  const starsLayerTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!starsRef.current || !starsLayerOneRef.current || !starsLayerTwoRef.current) return;
      
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      // Main stars layer - moderate movement
      const moveX = (mouseX - 0.5) * 30;
      const moveY = (mouseY - 0.5) * 30;
      starsRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      
      // First parallax layer - faster movement
      const moveX1 = (mouseX - 0.5) * 50;
      const moveY1 = (mouseY - 0.5) * 50;
      starsLayerOneRef.current.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
      
      // Second parallax layer - slower movement
      const moveX2 = (mouseX - 0.5) * 15;
      const moveY2 = (mouseY - 0.5) * 15;
      starsLayerTwoRef.current.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div ref={starsRef} className="stars"></div>
      <div ref={starsLayerOneRef} className="stars-layer-one"></div>
      <div ref={starsLayerTwoRef} className="stars-layer-two"></div>
      <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-32 relative">
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="bg-gray-900/50 py-8 mt-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jkularatn@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500">© 2024 Pamitha Kularathne. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;