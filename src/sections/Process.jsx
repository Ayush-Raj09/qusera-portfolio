import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processSteps } from '../data/data';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray('.process-step');
      
      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-24 md:py-32 bg-black text-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] leading-[0.8] font-display uppercase text-white">
            OUR <span className="text-accent">PROCESS</span>
          </h2>
        </div>

        <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-8 lg:space-x-12 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/20"></div>

          {processSteps.map((step, index) => (
            <div key={index} className="process-step relative flex-1">
              <div className="md:mb-8 flex items-center mb-4">
                <span className="text-4xl md:text-6xl font-display text-accent relative z-10 bg-black pr-4 md:pr-0">
                  {step.number}
                </span>
                <div className="md:hidden flex-1 h-[1px] bg-white/20 ml-4"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display uppercase mb-4">{step.title}</h3>
              <p className="text-white/60 font-medium text-lg leading-relaxed">{step.desc || "Strategic approach to scaling your brand."}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
