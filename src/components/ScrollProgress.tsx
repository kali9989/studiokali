import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress: React.FC = () => {
  useEffect(() => {
    gsap.to('.scroll-progress-bar', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-hot-pink/20 z-[100] origin-left">
      <div className="scroll-progress-bar w-full h-full bg-hot-pink origin-left scale-x-0 shadow-[0_0_10px_rgba(255,45,120,0.8)]" />
    </div>
  );
};

export default ScrollProgress;
