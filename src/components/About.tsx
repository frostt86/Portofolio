import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit gradient-text section-heading">
            About Me
          </h2>
        </div>

        {/* Bio Card */}
        <div className="glass-card p-8 sm:p-10 mb-16 scroll-reveal scan-line">
          <div className="relative z-10 flex items-start gap-4">
            <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl items-center justify-center"
                 style={{ background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.15)' }}>
              <Sparkles size={22} style={{ color: 'var(--color-neon-cyan)' }} />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              As a Software Engineering undergraduate and Boomi Integration Consultant at Yenlo, I am passionate about developing innovative solutions
              that make a real impact. With a strong foundation in full-stack development, blockchain
              technology, and enterprise integration, I consistently lead projects that challenge conventional approaches and deliver
              practical results.
            </p>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="scroll-reveal-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                   style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <Briefcase size={20} style={{ color: 'var(--color-neon-violet)' }} />
              </div>
              <h3 className="text-2xl font-bold font-outfit gradient-text">Experience</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="glass-card p-6">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white font-outfit">Yenlo</h4>
                      <span className="neon-tag">Present</span>
                    </div>
                    <p className="text-lg font-medium" style={{ color: 'var(--color-neon-cyan)' }}>
                      Boomi Integration Consultant
                    </p>
                    <p className="text-gray-400 mt-2 text-sm font-inter">
                      Optimizing enterprise integration processes and building automation workflows using Boomi AtomSphere platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="scroll-reveal-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                   style={{ background: 'rgba(255, 0, 110, 0.1)', border: '1px solid rgba(255, 0, 110, 0.2)' }}>
                <GraduationCap size={20} style={{ color: 'var(--color-neon-magenta)' }} />
              </div>
              <h3 className="text-2xl font-bold font-outfit gradient-text">Education</h3>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="glass-card p-6">
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white font-outfit">
                      Informatics Institute of Technology
                    </h4>
                    <p className="font-medium mt-1" style={{ color: 'var(--color-neon-cyan)' }}>
                      BSc (Hons) in Software Engineering
                    </p>
                    <span className="neon-tag-violet neon-tag mt-2 inline-block">2023–2027</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="glass-card p-6">
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-white font-outfit">
                      St. Peter's College – Colombo 4
                    </h4>
                    <span className="neon-tag-violet neon-tag mt-2 inline-block">2008–2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}