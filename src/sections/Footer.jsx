import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 md:pt-32 pb-8 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none mb-8">
              QUSERA
            </h2>
            <p className="text-neutral-400 font-normal text-lg max-w-md">
              A premium creative studio portfolio specializing in visual storytelling, CGI rendering, branding design, and interactive web experiences.
            </p>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-8">
            <h4 className="font-display text-lg uppercase text-accent mb-6">Quick Links</h4>
            <ul className="space-y-4 font-normal text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs">Home</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs">Featured Work</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs">Portfolio Grid</a></li>
              <li><a href="#showreel" className="hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs">Showreel</a></li>
              <li><a href="#process" className="hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs">Our Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-display text-lg uppercase text-accent mb-6">Capabilities</h4>
            <ul className="space-y-4 font-normal text-neutral-400">
              <li className="uppercase tracking-wider text-xs">Videos & Reels</li>
              <li className="uppercase tracking-wider text-xs">Branding & Identity</li>
              <li className="uppercase tracking-wider text-xs">CGI & 3D Projects</li>
              <li className="uppercase tracking-wider text-xs">Web Experiences</li>
              <li className="uppercase tracking-wider text-xs">Campaigns & Art</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-800 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 font-normal text-xs">
          <p>© 2026 QUSERA. ALL RIGHTS RESERVED.</p>
          
          {/* Social Icon */}
          <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors duration-300">TERMS OF SERVICE</a>
          </div>
        </div>
        
        {/* Massive Background Text like the screenshot */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden translate-y-[30%] pointer-events-none opacity-5 flex justify-center">
          <span className="text-[25vw] font-display uppercase leading-none whitespace-nowrap">QUSERA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
