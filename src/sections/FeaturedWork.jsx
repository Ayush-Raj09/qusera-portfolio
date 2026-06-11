import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featuredPlaceholders } from '../data/data';
import ProjectCard from '../components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-header-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-24 md:py-32 bg-white px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto">
        {/* Editorial Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="featured-header-item">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">// Selected Creations</span>
            <h2 className="text-6xl md:text-8xl lg:text-[9vw] leading-[0.8] font-display uppercase">
              FEATURED <span className="text-accent">WORK</span>
            </h2>
          </div>
          <div className="featured-header-item flex flex-col items-start md:items-end">
            <p className="text-sm font-mono text-neutral-400 max-w-xs mb-4 text-left md:text-right">
              A curated selection of our high-fidelity digital and physical productions. Click cards to insert media.
            </p>
            <a href="#portfolio" className="flex items-center space-x-4 text-black group">
              <span className="font-display text-lg uppercase group-hover:text-accent transition-colors duration-300">View Grid</span>
              <div className="w-10 h-10 rounded-full border border-black group-hover:border-accent flex items-center justify-center group-hover:text-accent transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </a>
          </div>
        </div>

        {/* CSS Grid with dynamic, asymmetric layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          {featuredPlaceholders.map((project) => (
            <ProjectCard key={project.id} project={project} showAspect={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
