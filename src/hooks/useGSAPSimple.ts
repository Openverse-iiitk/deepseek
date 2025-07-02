'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Simple GSAP hook
export const useGSAP = (animationFn: () => void, deps: any[] = []) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      animationFn();
    }
  }, deps);
};

// Animation helpers
export const animations = {
  fadeInUp: (element: any, delay = 0) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay, ease: 'power2.out' }
    );
  },
  
  staggerFadeIn: (elements: any, stagger = 0.2) => {
    gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger, ease: 'power2.out' }
    );
  },
  
  scaleOnHover: (element: any) => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { scale: 1.05, duration: 0.3 });
    });
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { scale: 1, duration: 0.3 });
    });
  }
};
