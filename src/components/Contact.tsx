import { Mail, Phone, MapPin, Linkedin, Send, UserCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Address',
    value: 'jkularatn@gmail.com',
    href: 'mailto:jkularatn@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '+94 (70) 159 4530',
    href: 'tel:+94701594530',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '370/33, Thekkawatta, Panadura',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/pamitha-kularathne-ba2b06295',
    href: 'https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/',
    external: true,
  },
];

const references = [
  {
    name: 'Vindula Athukorala',
    title: 'Senior Managed Service Engineer',
    company: 'Yenlo',
    email: 'vindula.athukorala@yenlo.com',
    phone: '+94 77 721 8773',
  },
  {
    name: 'Ruwan Mohandiram',
    title: 'Owner & CEO',
    company: 'Finco Tech',
    phone: '+94 77 364 7596',
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white uppercase tracking-tight section-heading-mono">
            Get In Touch
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-4 uppercase tracking-widest">
            // Direct Contact Channels & References
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Details */}
          <div className="space-y-4 scroll-reveal-left">
            <h3 className="text-xl font-bold font-outfit text-white uppercase mb-6">
              Contact Information
            </h3>

            {contactDetails.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="hud-card p-4 flex items-center gap-4 group cursor-pointer block hover:border-white/50"
                >
                  <div className="p-3 rounded-md bg-white/10 text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold font-outfit text-white group-hover:text-neutral-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Form */}
          <div className="scroll-reveal-right">
            <form
              className="hud-card hud-corner-notches p-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-bold font-outfit text-white uppercase mb-4">
                Send Direct Message
              </h3>

              <div>
                <label htmlFor="mono-name" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="mono-name"
                  className="input-mono"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="mono-email" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="mono-email"
                  className="input-mono"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="mono-message" className="block text-xs font-mono text-neutral-400 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="mono-message"
                  rows={4}
                  className="input-mono resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button type="submit" className="btn-mono-solid w-full mt-2">
                <Send size={14} />
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* References Section */}
        <div className="scroll-reveal">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck size={20} className="text-white" />
            <h3 className="text-xl font-bold font-outfit text-white uppercase">
              Professional References
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((refItem, idx) => (
              <div key={idx} className="hud-card p-6 border-neutral-800">
                <h4 className="text-lg font-bold font-outfit text-white">
                  {refItem.name}
                </h4>
                <p className="text-xs font-mono text-neutral-300 font-semibold mt-0.5">
                  {refItem.title} – {refItem.company}
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-800 space-y-1 font-mono text-xs text-neutral-400">
                  {refItem.email && <div>Email: {refItem.email}</div>}
                  <div>Phone: {refItem.phone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}