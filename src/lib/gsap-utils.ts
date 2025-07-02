'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Animation configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
  },
  ease: {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
  },
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },
};

// Create a master timeline for page load animations
export const createPageLoadTimeline = () => {
  return gsap.timeline();
};

// Text animation utilities
export const animateText = {
  fadeInUp: (element: string | Element, options: any = {}) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
        rotationX: 90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: options.duration || ANIMATION_CONFIG.duration.normal,
        ease: options.ease || ANIMATION_CONFIG.ease.smooth,
        stagger: options.stagger || ANIMATION_CONFIG.stagger.normal,
        ...options,
      }
    );
  },

  typewriter: (element: string | Element, text: string, options: any = {}) => {
    return gsap.to(element, {
      duration: options.duration || 2,
      text: text,
      ease: 'none',
      ...options,
    });
  },

  glitch: (element: string | Element, options: any = {}) => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    return tl
      .to(element, {
        duration: 0.1,
        skewX: 10,
        filter: 'hue-rotate(90deg)',
        ...options,
      })
      .to(element, {
        duration: 0.1,
        skewX: -10,
        filter: 'hue-rotate(-90deg)',
      })
      .to(element, {
        duration: 0.1,
        skewX: 0,
        filter: 'hue-rotate(0deg)',
      });
  },
};

// Scroll animations
export const scrollAnimations = {
  fadeInOnScroll: (element: string | Element, options: any = {}) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.smooth,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...options.scrollTrigger,
        },
        ...options,
      }
    );
  },

  parallax: (element: string | Element, options: any = {}) => {
    return gsap.to(element, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options.scrollTrigger,
      },
      ...options,
    });
  },

  staggerCards: (elements: string | Element, options: any = {}) => {
    return gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 60,
        rotationX: -90,
        transformOrigin: 'center bottom',
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: ANIMATION_CONFIG.duration.slow,
        ease: ANIMATION_CONFIG.ease.bounce,
        stagger: ANIMATION_CONFIG.stagger.normal,
        scrollTrigger: {
          trigger: elements,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          ...options.scrollTrigger,
        },
        ...options,
      }
    );
  },
};

// Interactive animations
export const interactiveAnimations = {
  hoverScale: (element: string | Element, options: any = {}) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        scale: options.scale || 1.05,
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.ease.smooth,
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        scale: 1,
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.ease.smooth,
      });
    });
  },

  buttonRipple: (element: string | Element, options: any = {}) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    el.addEventListener('click', (e: any) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('div');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        transform: scale(0);
      `;

      el.appendChild(ripple);

      gsap.to(ripple, {
        scale: 2,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        },
      });
    });
  },

  magneticEffect: (element: string | Element, options: any = {}) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;

    const strength = options.strength || 0.3;

    el.addEventListener('mousemove', (e: any) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  },
};

// Background animations
export const backgroundAnimations = {
  floatingElements: (elements: string | Element, options: any = {}) => {
    return gsap.to(elements, {
      y: options.distance || -20,
      duration: options.duration || 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1,
        from: 'random',
      },
      ...options,
    });
  },

  gradientAnimation: (element: string | Element, options: any = {}) => {
    return gsap.to(element, {
      backgroundPosition: '200% center',
      duration: options.duration || 4,
      ease: 'none',
      repeat: -1,
      ...options,
    });
  },

  particleField: (container: string | Element, options: any = {}) => {
    const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
    if (!containerEl) return;

    const particleCount = options.count || 50;
    const particles: HTMLElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: rgba(6, 182, 212, ${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        pointer-events: none;
      `;

      containerEl.appendChild(particle);
      particles.push(particle);

      // Initial position
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      // Animate
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 10 + 5,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    }

    return particles;
  },
};

// Progress bar animation
export const createScrollProgress = (element: string | Element) => {
  return gsap.to(element, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });
};

// Smooth scroll to anchor
export const smoothScrollTo = (target: string | Element, options: any = {}) => {
  const targetEl = typeof target === 'string' ? document.querySelector(target) : target;
  if (!targetEl) {
    return;
  }

  const targetPosition = (targetEl as HTMLElement).offsetTop;
  
  return gsap.to(window, {
    duration: options.duration || 1.5,
    scrollTo: { y: targetPosition, offsetY: options.offset || 80 },
    ease: options.ease || 'power2.inOut',
  });
};

// Navbar scroll animations
export const createNavbarScrollEffects = (navbar: string | Element) => {
  const navEl = typeof navbar === 'string' ? document.querySelector(navbar) : navbar;
  if (!navEl) {
    return;
  }

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: '+=100',
    onUpdate: (self) => {
      if (self.direction === 1) {
        // Scrolling down
        gsap.to(navEl, {
          backgroundColor: 'rgba(10, 17, 32, 0.95)',
          backdropFilter: 'blur(20px)',
          duration: 0.3,
        });
      } else {
        // Scrolling up
        gsap.to(navEl, {
          backgroundColor: 'rgba(10, 17, 32, 0.8)',
          backdropFilter: 'blur(10px)',
          duration: 0.3,
        });
      }
    },
  });
};

// Chat bubble animations
export const chatAnimations = {
  newMessage: (element: string | Element, options: any = {}) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0,
        y: 20,
        transformOrigin: 'center bottom',
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        ...options,
      }
    );
  },

  typingIndicator: (element: string | Element) => {
    return gsap.to(element, {
      opacity: 0.5,
      duration: 0.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });
  },
};

// Initialize GSAP defaults
export const initializeGSAP = () => {
  if (typeof window === 'undefined') {
    return;
  }

  // Set default ease and duration
  gsap.defaults({
    duration: ANIMATION_CONFIG.duration.normal,
    ease: ANIMATION_CONFIG.ease.smooth,
  });

  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });

  // Create scroll progress bar
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #06B6D4, #7C3AED);
    transform-origin: left;
    transform: scaleX(0);
    z-index: 9999;
  `;
  document.body.appendChild(progressBar);
  createScrollProgress(progressBar);
};

// Cleanup function
export const cleanupGSAP = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};
