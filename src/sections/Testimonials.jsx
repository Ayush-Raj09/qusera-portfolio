import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialSlots } from '../data/data';
import TestimonialCard from '../components/TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(sliderRef.current, {
        x: () => -(sliderRef.current.scrollWidth - window.innerWidth + 100),
        ease: 'none'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-24 md:py-32 bg-black text-white h-screen flex flex-col justify-center overflow-hidden">
      <div className="px-6 md:px-12 mb-16 max-w-[1600px] mx-auto w-full">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">// Kind Words</span>
        <h2 className="text-5xl md:text-7xl lg:text-[8vw] leading-[0.8] font-display uppercase">
          CLIENT <span className="text-accent">STORIES</span>
        </h2>
      </div>

      <div className="w-full pl-6 md:pl-12">
        <div ref={sliderRef} className="flex gap-8 w-max pr-[20vw]">
          {testimonialSlots.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
