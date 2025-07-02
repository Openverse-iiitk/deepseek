'use client';

import Link from 'next/link';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/ui/button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}


export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleMeetRef = useRef<HTMLHeadingElement>(null);
  const titleVydhyaRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const ctx = gsap.context(() => {
      // Create main timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // Badge animation
      tl.fromTo(badgeRef.current,
        { 
          opacity: 0, 
          scale: 0,
          rotation: -180 
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }
      );

      // Title animations with typewriter effect
      tl.fromTo(titleMeetRef.current,
        { opacity: 0, y: 100, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'power3.out'
        },
        "-=0.3"
      );

      tl.fromTo(titleVydhyaRef.current,
        { opacity: 0, y: 100, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'power3.out'
        },
        "-=0.8"
      );

      // Description with typewriter effect
      tl.fromTo(descriptionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        },
        "-=0.6"
      );

      // Buttons animation
      if (buttonsRef.current) {
        tl.fromTo(Array.from(buttonsRef.current.children),
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)'
          },
          "-=0.5"
        );
      }

      // Features grid
      tl.fromTo('.hero-feature',
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotationY: 45
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out'
        },
        "-=0.3"
      );

      // Scroll hint
      tl.fromTo(scrollHintRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        "-=0.5"
      );

      // Continuous animations
      // Floating elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Title glow effect
      gsap.to([titleMeetRef.current, titleVydhyaRef.current], {
        textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(124, 58, 237, 0.6)',
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // Interactive button animations
      document.querySelectorAll('.interactive-button').forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { 
            scale: 1.1, 
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(button.querySelector('.button-glow'), {
            opacity: 1,
            scale: 1.2,
            duration: 0.3
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, { 
            scale: 1, 
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(button.querySelector('.button-glow'), {
            opacity: 0,
            scale: 1,
            duration: 0.3
          });
        });

        // Click ripple effect
        button.addEventListener('click', (e: Event) => {
          const rect = button.getBoundingClientRect();
          const ripple = document.createElement('div');
          const mouseEvent = e as MouseEvent;
          const size = Math.max(rect.width, rect.height);
          const x = mouseEvent.clientX - rect.left - size / 2;
          const y = mouseEvent.clientY - rect.top - size / 2;

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

          button.appendChild(ripple);

          gsap.to(ripple, {
            scale: 2,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
              }
            }
          });
        });
      });

      // Hero feature hover effects
      document.querySelectorAll('.hero-feature').forEach((feature) => {
        const icon = feature.querySelector('.hero-feature-icon');
        
        feature.addEventListener('mouseenter', () => {
          gsap.to(feature, { 
            scale: 1.05, 
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(icon, { 
            rotation: 360, 
            scale: 1.2, 
            duration: 0.6,
            ease: 'back.out(1.7)'
          });
        });

        feature.addEventListener('mouseleave', () => {
          gsap.to(feature, { 
            scale: 1, 
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(icon, { 
            rotation: 0, 
            scale: 1, 
            duration: 0.4,
            ease: 'power2.out'
          });
        });
      });

      // Scroll hint animation
      gsap.to(scrollHintRef.current, {
        y: 10,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: aboutSection, offsetY: 80 },
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vydhya-primary/70 via-vydhya-secondary/70 to-vydhya-tertiary/70 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div 
          ref={badgeRef}
          className="inline-flex items-center px-4 py-2 rounded-full glass-texture border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          IIITK's Self Hosted AI
        </div>

        <h2 
          ref={titleMeetRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mb-4"
        >
          Meet
        </h2>
        <h2 
          ref={titleVydhyaRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 mb-8"
        >
          Vydhya AI
        </h2>
        
        <p 
          ref={descriptionRef}
          className="text-xl md:text-2xl text-vydhya-text mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Your on‑campus, zero‑latency assistant.{" "}
          <span className="text-vydhya-accent font-semibold">Privacy-first AI</span>{" "}
          built by students, for students.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/chat">
            <Button className="interactive-button group relative bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 border border-gray-300/10 hover:border-gray-200/20 shadow-inner overflow-hidden">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span className="relative z-10">Start Chatting</span>
              <div className="button-glow absolute inset-0 bg-gradient-to-r from-vydhya-accent/20 to-vydhya-purple/20 rounded-full blur-xl opacity-0"></div>
              <div className="absolute inset-0 border border-white/10 rounded-full"></div>
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={scrollToAbout}
            className="interactive-button border-2 border-gray-300/20 hover:border-gray-200/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 shadow-inner relative overflow-hidden group"
          >
            <div className="button-glow absolute inset-0 border border-gray-400/10 rounded-full opacity-0"></div>
            <span className="relative z-10">Learn More</span>
          </Button>
        </div>

        {/* Features Preview */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Zero Latency",
              description: "On-campus servers for instant responses",
              icon: "⚡",
            },
            {
              title: "Privacy First",
              description: "Your data stays within IIITK infrastructure",
              icon: "🔒",
            },
            {
              title: "Student Built",
              description: "Developed by IIITK students for the community",
              icon: "🎓",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="hero-feature glass-texture rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="hero-feature-icon text-3xl mb-3 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div 
          ref={scrollHintRef}
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 z-30"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 group px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              Scroll for more
            </span>
            <ChevronDown size={24} className="group-hover:text-cyan-400 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-vydhya-accent rounded-full opacity-30 floating-element blur-sm"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-vydhya-purple rounded-full opacity-20 floating-element blur-sm"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-vydhya-accent rounded-full opacity-25 floating-element blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-vydhya-purple rounded-full opacity-35 floating-element blur-sm"></div>
    </section>
  );
}
