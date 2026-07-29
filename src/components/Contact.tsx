import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-[760px] mx-auto px-5">
      <hr className="section-divider mb-16" />

      <p className="section-label mb-2">Let's Talk</p>
      <h2 className="section-title mb-4">Get in Touch</h2>

      <p className="text-sm text-slate-700 leading-relaxed mb-8 max-w-[540px] font-medium">
        Open to integration consulting, full-stack development opportunities, and 
        interesting collaboration projects. Drop me an email or connect on LinkedIn.
      </p>

      {/* Email — prominent Neumorphic Card */}
      <a
        href="mailto:jkularatn@gmail.com"
        className="card p-6 flex items-center gap-5 group mb-6 block bg-[#e6ecf5] border border-white/80 shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff] hover:border-[#ff6b35]/50 transition-all"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#e6ecf5] border border-white/80 shadow-[inset_3px_3px_6px_#c2c9d6,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center shrink-0">
          <Mail size={22} className="text-[#ff6b35]" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-mono font-bold mb-0.5">Email Address</p>
          <p className="text-lg font-bold text-slate-900 group-hover:text-[#ff6b35] transition-colors">
            jkularatn@gmail.com
          </p>
        </div>
      </a>

      {/* Social links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <a 
          href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card p-4 flex items-center gap-3.5 group block bg-[#e6ecf5] border border-white/80 shadow-[7px_7px_14px_#c2c9d6,-7px_-7px_14px_#ffffff] hover:border-[#ff6b35]/50 transition-all"
        >
          <div className="p-2 rounded-xl bg-[#e2e8f2] border border-white/80 shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]">
            <Linkedin size={18} className="text-[#0A66C2]" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-mono font-bold">LinkedIn</p>
            <p className="text-xs font-bold text-slate-900 group-hover:text-[#ff6b35] transition-colors">Pamitha K.</p>
          </div>
        </a>

        <a 
          href="https://github.com/frostt86" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card p-4 flex items-center gap-3.5 group block bg-[#e6ecf5] border border-white/80 shadow-[7px_7px_14px_#c2c9d6,-7px_-7px_14px_#ffffff] hover:border-[#ff6b35]/50 transition-all"
        >
          <div className="p-2 rounded-xl bg-[#e2e8f2] border border-white/80 shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]">
            <Github size={18} className="text-slate-900" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-mono font-bold">GitHub</p>
            <p className="text-xs font-bold text-slate-900 group-hover:text-[#ff6b35] transition-colors">frostt86</p>
          </div>
        </a>

        <div className="card-flat p-4 flex items-center gap-3.5 bg-[#e6ecf5] border border-white/80 shadow-[7px_7px_14px_#c2c9d6,-7px_-7px_14px_#ffffff]">
          <div className="p-2 rounded-xl bg-[#e2e8f2] border border-white/80 shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff]">
            <MapPin size={18} className="text-[#ff6b35]" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-mono font-bold">Location</p>
            <p className="text-xs font-bold text-slate-800">Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="card-flat p-4 text-center bg-[#e6ecf5] border border-white/80 shadow-[6px_6px_12px_#c2c9d6,-6px_-6px_12px_#ffffff]">
        <div className="flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b35] animate-pulse" />
          <span className="text-xs text-slate-700 font-semibold">
            Currently available for <span className="text-slate-950 font-bold">consulting & development</span> projects
          </span>
        </div>
      </div>
    </section>
  );
}