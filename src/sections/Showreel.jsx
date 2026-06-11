import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="py-24 md:py-32 bg-white px-6 md:px-12 border-t border-neutral-100">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Title */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">// Creative Motion</span>
            <h2 className="text-6xl md:text-8xl lg:text-[9vw] leading-[0.8] font-display uppercase">
              SHOW<span className="text-accent">REEL</span>
            </h2>
          </div>
          <div className="hidden md:block text-right font-mono text-xs text-neutral-400">
            SPEC // 16:9 SCREEN RENDER<br />
            DUR // 01:30 ESTIMATED
          </div>
        </div>

        {/* Large Premium Video Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full bg-neutral-900 border border-neutral-800 flex flex-col justify-between p-6 md:p-12 overflow-hidden group cursor-pointer"
        >
          {/* Inner Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
          
          {/* Glowing pulse effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] pointer-events-none group-hover:bg-accent/10 transition-all duration-700"></div>

          {/* Top Row: Meta info */}
          <div className="flex justify-between items-start z-10 w-full font-mono text-[10px] md:text-xs text-neutral-500">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-red-600 animate-pulse transition-colors duration-300"></span>
              <span className="tracking-wider uppercase">STATUS: STANDBY // READY FOR REEL</span>
            </div>
            <div className="tracking-widest">
              4K_UHD_STILL_RAW.MOV
            </div>
          </div>

          {/* Center Play Button Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-neutral-700 group-hover:border-accent group-hover:scale-105 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm transition-all duration-500">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white group-hover:border-l-accent border-b-[10px] border-b-transparent translate-x-1.5 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Bottom Row: Interface Controls Mock */}
          <div className="flex justify-between items-end z-10 w-full mt-auto">
            {/* Left: Player Labels */}
            <div className="flex flex-col">
              <span className="text-xs font-mono text-neutral-500 tracking-wider">// TIMECODE</span>
              <span className="text-xl md:text-2xl font-display text-neutral-300 uppercase tracking-tighter">00:00:00:00</span>
            </div>

            {/* Center-Right: Action Prompt */}
            <div className="flex items-center space-x-6 text-[10px] md:text-xs font-mono text-neutral-400">
              <span className="hidden sm:inline">// REEL RATIO: 21:9 WIDESCREEN SUPPORTED</span>
              <span className="text-white group-hover:text-accent font-bold tracking-widest uppercase transition-colors duration-300">
                [ REPLACE WITH REEL.MP4 ]
              </span>
            </div>
          </div>
          
          {/* Decorative Corner Brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-neutral-700"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neutral-700"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-neutral-700"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-neutral-700"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Showreel;
