import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Very simple infinite marquee animation
      gsap.to('.marquee-inner', {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const items = [
    "VIDEO PRODUCTION", "BRANDING", "CGI", "CONTENT CREATION", 
    "PERFORMANCE MARKETING", "SOCIAL MEDIA", "WEBSITE DEVELOPMENT", "PERSONAL BRANDING"
  ];

  // Duplicate items to ensure smooth infinite scroll
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section ref={marqueeRef} className="py-12 md:py-20 border-y border-black overflow-hidden bg-white">
      <div className="flex whitespace-nowrap overflow-hidden no-scrollbar">
        <div className="marquee-inner flex items-center shrink-0">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-4xl md:text-6xl font-display uppercase text-black">{item}</span>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full mx-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
