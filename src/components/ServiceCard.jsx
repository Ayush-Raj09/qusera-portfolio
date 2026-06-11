import React from 'react';

const ServiceCard = ({ service, index }) => {
  return (
    <div className="service-card bg-accent p-10 md:p-14 flex flex-col justify-between group overflow-hidden relative cursor-pointer min-h-[300px]">
      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 mb-8 text-black group-hover:text-accent transition-colors duration-300">
          <span className="font-display text-4xl">{(index + 1).toString().padStart(2, '0')}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-display uppercase mb-6 text-black group-hover:text-white transition-colors duration-300 pr-8">
          {service}
        </h3>
      </div>
      
      <div className="relative z-10 mt-auto pt-8 flex justify-between items-center border-t border-black/20 group-hover:border-white/20 transition-colors duration-300">
        <span className="font-medium text-black group-hover:text-white transition-colors duration-300">Explore</span>
        <div className="w-12 h-12 rounded-full border-2 border-black group-hover:border-accent flex items-center justify-center text-black group-hover:text-accent transition-colors duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
