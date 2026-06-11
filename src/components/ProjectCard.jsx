import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, showAspect = true }) => {
  const { index, category, title, size, note, tag } = project;

  // Retrieve approximate aspect ratio text for display
  const getAspectText = (sizeClass) => {
    if (sizeClass.includes('aspect-[16/9]') || sizeClass.includes('aspect-video')) return '16:9 / Video or CGI';
    if (sizeClass.includes('aspect-square')) return '1:1 / Photo or Branding';
    if (sizeClass.includes('aspect-[9/16]')) return '9:16 / Vertical Reel';
    if (sizeClass.includes('aspect-[4/5]')) return '4:5 / Campaign Portrait';
    if (sizeClass.includes('aspect-[21/9]')) return '21:9 / Cinematic Showreel';
    return 'Media Placeholder';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col justify-between p-8 bg-neutral-50 border border-neutral-200 overflow-hidden cursor-pointer hover:border-black transition-colors duration-500 ${size || ''}`}
    >
      {/* Premium Tech Grid Background on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-black"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-black"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-black"></div>
      </div>

      {/* Card Header Info */}
      <div className="flex justify-between items-start z-10">
        <span className="font-display text-2xl tracking-tight text-neutral-400 group-hover:text-black transition-colors duration-300">
          {index}
        </span>
        <div className="flex flex-col items-end">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-accent transition-colors duration-300">
            {tag || category}
          </span>
          {showAspect && (
            <span className="text-[10px] font-mono text-neutral-300 mt-1 uppercase">
              {getAspectText(size || '')}
            </span>
          )}
        </div>
      </div>

      {/* Dynamic Visual Centerpiece (Placeholder Indicator) */}
      <div className="flex items-center justify-center py-6 z-10 my-auto">
        <div className="w-16 h-16 rounded-full border border-dashed border-neutral-300 group-hover:border-solid group-hover:border-black group-hover:scale-110 flex items-center justify-center transition-all duration-500">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-neutral-400 group-hover:text-black transition-colors duration-300"
          >
            {category.includes('Video') || category.includes('Reel') || category.includes('Motion') ? (
              <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z" />
            ) : category.includes('Web') ? (
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            ) : category.includes('Photography') ? (
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            ) : (
              <circle cx="12" cy="12" r="10" />
            )}
          </svg>
        </div>
      </div>

      {/* Card Footer Info */}
      <div className="z-10 mt-auto">
        <div className="text-[10px] font-mono text-neutral-400 mb-1 group-hover:text-black transition-colors duration-300">
          {category}
        </div>
        <h3 className="text-xl md:text-2xl font-display uppercase leading-tight tracking-tight text-neutral-400 group-hover:text-black transition-colors duration-300">
          {title}
        </h3>
        {note && (
          <p className="text-xs font-mono text-neutral-300 mt-2 line-clamp-1">
            // {note}
          </p>
        )}
      </div>

      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-accent group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
};

export default ProjectCard;
