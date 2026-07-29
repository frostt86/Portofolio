import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Posts from './components/Posts';
import Contact from './components/Contact';
import SideScrollbar from './components/SideScrollbar';

function App() {
  return (
    <div className="min-h-screen bg-[#e6ecf5] text-slate-700 font-sans antialiased selection:bg-[#ff6b35] selection:text-white">
      <Navbar />
      <SideScrollbar />

      <main>
        <Header />
        <About />
        <Work />
        <Posts />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 max-w-[760px] mx-auto px-5 border-t border-slate-300/60 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
        <span>© {new Date().getFullYear()} Pamitha Kularathne</span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/frostt86" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">github</a>
          <a href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">linkedin</a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-slate-900 transition-colors font-bold"
          >
            top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;