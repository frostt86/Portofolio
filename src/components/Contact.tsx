import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jkularatn@gmail.com',
    href: 'mailto:jkularatn@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(070) 1594530',
    href: 'tel:+94701594530',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    href: 'https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/',
    external: true,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit gradient-text section-heading">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 scroll-reveal-left">
            <p className="text-gray-400 text-lg font-inter leading-relaxed mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out — I'm always open to discussing new opportunities.
            </p>

            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="glass-card p-5 flex items-center gap-4 group cursor-pointer block"
              >
                <div
                  className="relative z-10 shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(0, 240, 255, 0.08)',
                    border: '1px solid rgba(0, 240, 255, 0.15)',
                  }}
                >
                  <item.icon size={20} style={{ color: 'var(--color-neon-cyan)' }} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-medium text-gray-500 font-inter">{item.label}</h3>
                  <p className="text-white font-semibold group-hover:text-neon-cyan transition-colors font-outfit">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal-right">
            <form
              className="glass-card p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative z-10 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2 font-inter">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="neon-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2 font-inter">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="neon-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2 font-inter">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="neon-input resize-none"
                    placeholder="Your message"
                  />
                </div>

                <button type="submit" className="neon-button-filled neon-button w-full justify-center">
                  <Send size={16} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}