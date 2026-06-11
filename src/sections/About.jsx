import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-text',
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
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
    <section id="about" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-white relative">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
        <div className="md:col-span-7">
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-display uppercase m-0 about-text">
            WE <span className="text-accent">CREATE.</span><br/>
            WE BUILD.<br/>
            WE SCALE.
          </h2>
        </div>
        <div className="md:col-span-5 about-text">
          <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-lg">
            Qusera is a full-service creative agency delivering branding, content, digital marketing, web experiences, animation, and performance-driven growth.
          </p>
          <div className="mt-12 w-full h-[1px] bg-gray-200"></div>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-black font-display text-2xl uppercase">Establish 2026</span>
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
