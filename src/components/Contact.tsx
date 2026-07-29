import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jkularatn@gmail.com',
    href: 'mailto:jkularatn@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 (70) 159 4530',
    href: 'tel:+94701594530',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Panadura, Sri Lanka',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pamitha-kularathne-ba2b06295',
    href: 'https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/',
    external: true,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-sm font-mono text-neutral-400 mt-2">
            Let's discuss enterprise integrations, full-stack projects, or new opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Information */}
          <div className="space-y-4 scroll-reveal-left">
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              I am open to enterprise integration consulting, custom web development projects, and architectural collaborations. Feel free to connect directly through any of the channels below.
            </p>

            {contactDetails.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="mini-card p-4 flex items-center gap-4 group cursor-pointer block"
                >
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold font-outfit text-white group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal-right">
            <form
              className="mini-card p-6 sm:p-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-lg font-bold font-outfit text-white mb-2">
                Send a Message
              </h3>

              <div>
                <label htmlFor="minimal-name" className="block text-xs font-mono text-neutral-400 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="minimal-name"
                  className="input-minimal"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="minimal-email" className="block text-xs font-mono text-neutral-400 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="minimal-email"
                  className="input-minimal"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="minimal-message" className="block text-xs font-mono text-neutral-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="minimal-message"
                  rows={4}
                  className="input-minimal resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}