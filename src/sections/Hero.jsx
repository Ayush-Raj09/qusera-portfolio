import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the typography lines
      gsap.fromTo(
        '.hero-text-line',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
      );
      
      // Reveal tagline/badge
      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      // Reveal descriptive paragraph
      gsap.fromTo(
        '.hero-subtext',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: 'power3.out' }
      );
      
      // Reveal action buttons
      gsap.fromTo(
        '.hero-buttons',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 1.2, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* Immersive Three.js background */}
      <ThreeBackground />
      
      {/* Decorative vertical coordinates / Grid overlay indicators */}
      <div className="absolute left-6 md:left-12 top-1/3 w-[1px] h-32 bg-neutral-200 hidden sm:block"></div>
      <div className="absolute right-6 md:right-12 top-1/4 text-right font-mono text-[10px] text-neutral-400 tracking-wider hidden md:block select-none leading-loose">
        SYS // LOC : QUS.395<br />
        FPS // 60.00 ACTIVE<br />
        RENDER // CANVAS_THREE
      </div>

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
        
        {/* Main Editorial Typography */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden mb-6">
            <span className="hero-badge inline-block bg-neutral-900 text-white font-mono text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
              Creative Studio Portfolio // v1.0
            </span>
          </div>

          <h1 className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-display uppercase text-black m-0 p-0 tracking-tighter">
            <div className="overflow-hidden py-1">
              <div className="hero-text-line">WE CREATE</div>
            </div>
            <div className="overflow-hidden py-1">
              <div className="hero-text-line text-accent">VISUAL WORK</div>
            </div>
            <div className="overflow-hidden py-1">
              <div className="hero-text-line">THAT GETS</div>
            </div>
            <div className="overflow-hidden py-1">
              <div className="hero-text-line text-neutral-800">NOTICED.</div>
            </div>
          </h1>
        </div>

        {/* Supporting Narrative */}
        <div className="lg:col-span-4 flex flex-col justify-end pb-4 lg:pb-8">
          <p className="hero-subtext text-lg md:text-xl text-neutral-600 font-normal max-w-md mb-10 leading-relaxed">
            A boutique creative hub pushing boundaries in CGI, video, branding, motion graphics, photography, and high-fidelity web experiences.
          </p>
          
          <div className="hero-buttons flex flex-wrap gap-6 items-center">
            <a 
              href="#featured" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white font-display text-lg uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300"
            >
              <span className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative group-hover:text-black transition-colors duration-300">View Showcase</span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-black text-black font-display text-lg uppercase tracking-wider overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 bg-neutral-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center space-x-4 opacity-50 hidden sm:flex"
      >
        <div className="w-[1px] h-12 bg-black"></div>
        <span className="text-[10px] font-mono uppercase tracking-widest rotate-90 origin-left translate-y-6">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
