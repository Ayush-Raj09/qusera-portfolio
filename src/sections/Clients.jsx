import React from 'react';
import { brandSlots } from '../data/data';

const Clients = () => {
  return (
    <section id="brands" className="py-24 md:py-32 bg-white px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">// Collaborations</span>
          <h3 className="text-3xl md:text-5xl font-display uppercase">Brands Worked With</h3>
          <p className="text-sm font-mono text-neutral-400 mt-2">// Empty logo slots. Ready for SVG insertion.</p>
        </div>

        {/* Logo Slots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brandSlots.map((slot) => (
            <div 
              key={slot.id} 
              className="group aspect-[2/1] bg-neutral-50 border border-dashed border-neutral-200 hover:border-black flex items-center justify-center p-6 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Tech Crosshairs on hover */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-300 group-hover:border-black transition-colors duration-300"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-300 group-hover:border-black transition-colors duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-300 group-hover:border-black transition-colors duration-300"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-300 group-hover:border-black transition-colors duration-300"></div>

              {/* Grid Diagonal Wirelines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg className="w-full h-full text-neutral-100" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Logo text placeholder */}
              <span className="text-xs font-mono text-neutral-400 group-hover:text-black tracking-widest uppercase transition-colors duration-300 z-10">
                {slot.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
