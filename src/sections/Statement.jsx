import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.statement-text',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
          }
        }
      );
      
      gsap.fromTo(
        '.statement-circle',
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          delay: 0.5,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-accent text-black text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <h2 className="statement-text text-[10vw] md:text-[8vw] leading-[0.85] font-display uppercase m-0 max-w-5xl mx-auto">
          WE DON'T FOLLOW TRENDS.
        </h2>
        <h2 className="statement-text text-[10vw] md:text-[8vw] leading-[0.85] font-display uppercase m-0 mt-4 max-w-5xl mx-auto">
          WE CREATE THEM.
        </h2>
        
        <div className="mt-20 flex justify-center">
          <a href="#contact" className="statement-circle w-32 h-32 md:w-40 md:h-40 rounded-full bg-black text-white flex items-center justify-center font-display text-xl md:text-2xl uppercase tracking-wider hover:scale-110 transition-transform duration-300">
            <span className="text-center leading-none">START<br/>NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Statement;
