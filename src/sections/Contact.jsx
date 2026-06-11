import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-elem',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <h2 className="contact-elem text-[8vw] md:text-[6vw] lg:text-[7vw] leading-[0.85] font-display uppercase m-0 mb-8">
          LET'S BUILD<br/>
          SOMETHING <span className="text-accent">AMAZING.</span>
        </h2>
        
        <p className="contact-elem text-xl md:text-3xl font-medium text-muted mb-16 max-w-2xl">
          Ready to scale your brand with QUSERA? We're ready to make it happen.
        </p>

        <div className="contact-elem flex flex-wrap gap-6 items-center">
          <a href="mailto:hello@qusera.com" className="group relative inline-flex items-center justify-center px-10 py-5 bg-black text-white font-display text-2xl uppercase tracking-wider overflow-hidden rounded-full">
            <span className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative group-hover:text-black transition-colors duration-300">Book a Call</span>
          </a>
          
          <a href="#" className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-black text-black font-display text-2xl uppercase tracking-wider overflow-hidden rounded-full">
            <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative group-hover:text-white transition-colors duration-300">Start a Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
