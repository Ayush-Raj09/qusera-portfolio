import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Counter = ({ endValue, suffix, label }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    if (!counterRef.current) return;
    
    const target = { val: 0 };
    
    // We export the GSAP tween to be controlled by ScrollTrigger in the parent
    const tween = gsap.to(target, {
      val: endValue,
      duration: 2.5,
      ease: 'power3.out',
      paused: true,
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.floor(target.val);
        }
      }
    });

    // Attach to DOM element so parent can find it
    counterRef.current.tween = tween;

    return () => tween.kill();
  }, [endValue]);

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left counter-wrapper">
      <div className="flex items-baseline mb-2">
        <span 
          ref={counterRef}
          className="text-6xl md:text-8xl font-display text-accent"
        >
          0
        </span>
        <span className="text-4xl md:text-6xl font-display text-black">{suffix}</span>
      </div>
      <span className="text-lg md:text-xl font-medium text-muted uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default Counter;
