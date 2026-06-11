import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { statistics } from '../data/data';
import Counter from '../components/Counter';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Find all counter instances by their wrapper and trigger their tweens
      const counters = gsap.utils.toArray('.counter-wrapper span:first-child');
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 75%',
        onEnter: () => {
          counters.forEach(counter => {
            if (counter.tween) {
              counter.tween.play();
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white border-y border-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {statistics.map((stat, index) => (
            <Counter key={index} endValue={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
