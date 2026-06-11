import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { client, company, quote } = testimonial;

  return (
    <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 bg-neutral-900 border border-neutral-800 p-10 md:p-16 flex flex-col justify-between hover:border-neutral-700 transition-colors duration-500 relative group">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-[1px] bg-neutral-800 group-hover:bg-accent transition-colors"></div>
      <div className="absolute top-0 left-0 h-4 w-[1px] bg-neutral-800 group-hover:bg-accent transition-colors"></div>

      <div>
        {/* Placeholder review badge */}
        <div className="flex gap-2 mb-10">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-neutral-600 group-hover:text-accent transition-colors duration-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-2 leading-none self-center">
            // Verified Slot
          </span>
        </div>
        
        {/* Quote text placeholder */}
        <p className="text-xl md:text-3xl font-normal leading-relaxed text-neutral-400 group-hover:text-white transition-colors duration-500 mb-12">
          "{quote}"
        </p>
      </div>

      {/* Client Meta Info Footer */}
      <div className="flex items-center gap-6 border-t border-neutral-800 pt-8 mt-auto">
        <div className="w-16 h-16 rounded-full border border-dashed border-neutral-700 group-hover:border-accent flex items-center justify-center text-neutral-500 group-hover:text-accent font-mono text-lg uppercase transition-all duration-500">
          U
        </div>
        <div>
          <h4 className="font-display text-xl uppercase text-neutral-300 group-hover:text-white transition-colors duration-300">
            {client}
          </h4>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
