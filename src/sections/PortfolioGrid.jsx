import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioGridPlaceholders } from '../data/data';
import ProjectCard from '../components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const PortfolioGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-header-item',
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
    <section id="portfolio" ref={containerRef} className="py-24 md:py-32 bg-neutral-900 text-white px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-800 pb-12">
          <div className="portfolio-header-item">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">// Creative Catalogue</span>
            <h2 className="text-6xl md:text-8xl lg:text-[9vw] leading-[0.8] font-display uppercase">
              PORTFOLIO <span className="text-accent">GRID</span>
            </h2>
          </div>
          <div className="portfolio-header-item flex flex-col items-start md:items-end">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-3 py-1 rounded mb-4 uppercase">
              70% Work / 20% Story / 10% Info
            </span>
            <p className="text-sm font-mono text-neutral-500 max-w-xs text-left md:text-right">
              Asymmetric layout prepared for branding projects, photography, motion graphics, and interactive sites.
            </p>
          </div>
        </div>

        {/* Masonry / Grid Layout with Tailwind Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {portfolioGridPlaceholders.map((project) => (
            <div 
              key={project.id} 
              className={`${project.size} border border-neutral-800 hover:border-neutral-700 transition-colors duration-300`}
            >
              <ProjectCard project={project} showAspect={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
