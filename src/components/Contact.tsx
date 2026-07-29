import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [localTime, setLocalTime] = useState<string>('--:-- --');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      setLocalTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="contact" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto border-t border-on-surface/15 text-center">
      
      {/* Availability Header */}
      <div className="mb-8 scroll-reveal">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container mb-2 block font-bold">
          Available for select consulting & full-stack projects
        </span>
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tighter leading-[0.9] font-extrabold uppercase">
          GET IN TOUCH
        </h2>
      </div>

      {/* Massive Email Link with Vibrant Orange Hover */}
      <div className="w-full overflow-hidden mb-16 scroll-reveal">
        <a
          className="email-hover block font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface transition-all duration-500 ease-in-out decoration-none break-words font-extrabold"
          href="mailto:jkularatn@gmail.com"
        >
          JKULARATN@GMAIL.COM
        </a>
      </div>

      {/* Office & Local Time Row */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full mb-16 border-t border-b border-on-surface/15 py-10 scroll-reveal">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container">
            Primary Office
          </span>
          <p className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
            PANADURA, SRI LANKA
          </p>
        </div>

        <div className="hidden md:block w-px h-12 bg-on-surface opacity-20 mx-8"></div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container">
            Phone Contact
          </span>
          <p className="font-headline-md text-headline-md font-bold text-on-surface uppercase">
            +94 (70) 159 4530
          </p>
        </div>

        <div className="hidden md:block w-px h-12 bg-on-surface opacity-20 mx-8"></div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-container">
            Local Time (SLST)
          </span>
          <p className="font-headline-md text-headline-md font-bold text-tertiary font-mono">
            {localTime}
          </p>
        </div>
      </div>

      {/* Direct Contact Form */}
      <div className="max-w-xl mx-auto text-left scroll-reveal">
        <form
          className="p-8 bg-surface-container border border-on-surface/15 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="font-headline-md text-headline-md font-bold text-on-surface uppercase mb-4">
            Send Direct Inquiry
          </h3>

          <div>
            <label htmlFor="studio-name" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface block mb-2 font-bold">
              Your Name
            </label>
            <input
              type="text"
              id="studio-name"
              className="w-full p-3.5 bg-surface border border-on-surface/20 text-on-surface focus:border-tertiary outline-none font-body-md text-body-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="studio-email" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface block mb-2 font-bold">
              Email Address
            </label>
            <input
              type="email"
              id="studio-email"
              className="w-full p-3.5 bg-surface border border-on-surface/20 text-on-surface focus:border-tertiary outline-none font-body-md text-body-md"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="studio-message" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface block mb-2 font-bold">
              Project Details / Inquiry
            </label>
            <textarea
              id="studio-message"
              rows={4}
              className="w-full p-3.5 bg-surface border border-on-surface/20 text-on-surface focus:border-tertiary outline-none font-body-md text-body-md resize-none"
              placeholder="Describe your project or inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-on-surface text-surface py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-tertiary transition-colors duration-300 font-bold"
          >
            Submit Inquiry
          </button>
        </form>
      </div>

    </section>
  );
}