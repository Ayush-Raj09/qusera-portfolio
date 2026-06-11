import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data/data';
import ServiceCard from '../components/ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] leading-[0.8] font-display uppercase text-center md:text-left">
            OUR <span className="text-accent">EXPERTISE</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
