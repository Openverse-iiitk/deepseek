'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initializeGSAP, cleanupGSAP } from '@/lib/gsap-utils';

// Custom hook for GSAP animations
export const useGSAP = (
  animationFn: (context: { timeline: gsap.core.Timeline; ref: React.RefObject<any> }) => void | gsap.core.Timeline,
  dependencies: any[] = []
) => {
  const ref = useRef<any>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    // Create a new timeline
    timeline.current = gsap.timeline();
    
    // Call the animation function
    const result = animationFn({ timeline: timeline.current, ref });
    
    // If the function returns a timeline, use that instead
    if (result) {
      timeline.current = result;
    }

    return () => {
      // Cleanup on unmount or dependency change
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, dependencies);

  return ref;
};

// Hook for scroll-triggered animations
export const useScrollTrigger = (
  animationFn: (element: Element) => gsap.core.Tween | gsap.core.Timeline,
  options: ScrollTrigger.Vars = {},
  dependencies: any[] = []
) => {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const animation = animationFn(ref.current);

    ScrollTrigger.create({
      trigger: ref.current,
      animation: animation,
      ...options,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, dependencies);

  return ref;
};

// Hook for hover animations
export const useHoverAnimation = (
  enterAnimation: (element: Element) => gsap.core.Tween | gsap.core.Timeline,
  leaveAnimation: (element: Element) => gsap.core.Tween | gsap.core.Timeline,
  dependencies: any[] = []
) => {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let enterTween: gsap.core.Tween | gsap.core.Timeline;
    let leaveTween: gsap.core.Tween | gsap.core.Timeline;

    const handleMouseEnter = () => {
      if (leaveTween) leaveTween.kill();
      enterTween = enterAnimation(element);
    };

    const handleMouseLeave = () => {
      if (enterTween) enterTween.kill();
      leaveTween = leaveAnimation(element);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (enterTween) enterTween.kill();
      if (leaveTween) leaveTween.kill();
    };
  }, dependencies);

  return ref;
};

// Hook for page load animations
export const usePageLoad = (
  animationFn: () => gsap.core.Timeline,
  dependencies: any[] = []
) => {
  useLayoutEffect(() => {
    const timeline = animationFn();
    
    return () => {
      timeline.kill();
    };
  }, dependencies);
};

// Hook to initialize GSAP on component mount
export const useGSAPInit = () => {
  useEffect(() => {
    initializeGSAP();
    
    return () => {
      cleanupGSAP();
    };
  }, []);
};

// Hook for stagger animations
export const useStaggerAnimation = (
  selector: string,
  animationProps: gsap.TweenVars,
  staggerOptions: gsap.StaggerVars = {},
  dependencies: any[] = []
) => {
  const containerRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    
    const animation = gsap.fromTo(
      elements,
      animationProps.from || {},
      {
        ...animationProps,
        stagger: staggerOptions,
      }
    );

    return () => {
      animation.kill();
    };
  }, dependencies);

  return containerRef;
};

// Hook for text animations
export const useTextAnimation = (
  text: string,
  animationType: 'typewriter' | 'fadeIn' | 'slideUp' = 'fadeIn',
  options: any = {},
  dependencies: any[] = []
) => {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    let animation: gsap.core.Tween | gsap.core.Timeline;

    switch (animationType) {
      case 'typewriter':
        animation = gsap.to(ref.current, {
          duration: options.duration || 2,
          text: text,
          ease: 'none',
          ...options,
        });
        break;
      case 'slideUp':
        animation = gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: options.duration || 1, ...options }
        );
        break;
      default:
        animation = gsap.fromTo(
          ref.current,
          { opacity: 0 },
          { opacity: 1, duration: options.duration || 1, ...options }
        );
    }

    return () => {
      animation.kill();
    };
  }, [text, animationType, ...dependencies]);

  return ref;
};
