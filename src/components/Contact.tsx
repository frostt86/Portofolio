import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="py-20 relative scroll-reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text mb-12 font-poppins">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold text-gray-200">Email</h3>
                <a href="mailto:jkularatn@gmail.com" className="text-purple-400 hover:text-purple-300">
                  jkularatn@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold text-gray-200">Phone</h3>
                <a href="tel:+94701594530" className="text-purple-400 hover:text-purple-300">
                  (070) 1594530
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Linkedin className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold text-gray-200">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/pamitha-kularathne-ba2b06295/"
                  className="text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         text-gray-200 placeholder-gray-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         text-gray-200 placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg 
                         focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         text-gray-200 placeholder-gray-500"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 
                       text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 
                       transition-all duration-300 transform hover:scale-105 glow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}