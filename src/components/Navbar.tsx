'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const ctx = gsap.context(() => {
      // Initial navbar animation
      gsap.fromTo(navRef.current,
        { opacity: 0, y: -100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power2.out',
          delay: 0.2
        }
      );

      // Logo animation
      gsap.fromTo(logoRef.current,
        { opacity: 0, x: -50, rotation: -180 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      );

      // Desktop links animation
      if (linksRef.current) {
        gsap.fromTo(Array.from(linksRef.current.children),
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.8
          }
        );
      }

      // Navbar scroll effect
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: '+=100',
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scrolling down
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(10, 17, 32, 0.98)',
              backdropFilter: 'blur(20px)',
              borderColor: 'rgba(6, 182, 212, 0.3)',
              duration: 0.3,
            });
          } else {
            // Scrolling up
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(10, 17, 32, 0.8)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(6, 182, 212, 0.2)',
              duration: 0.3,
            });
          }
        },
      });

      // Link hover animations
      document.querySelectorAll('.nav-link').forEach((link) => {
        const underline = link.querySelector('.nav-underline');
        
        link.addEventListener('mouseenter', () => {
          gsap.to(underline, { 
            scaleX: 1, 
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(link, { 
            color: '#06B6D4', 
            duration: 0.3 
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(underline, { 
            scaleX: 0, 
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(link, { 
            color: '', 
            duration: 0.3 
          });
        });
      });

      // Button hover effects
      document.querySelectorAll('.nav-button').forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { 
            scale: 1.05, 
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, { 
            scale: 1, 
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu toggle with animation
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    if (!isMobileMenuOpen) {
      // Opening
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        }
      );
    } else {
      // Closing
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.2,
        ease: 'power2.in'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: 'power2.inOut'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-vydhya-primary/80 via-vydhya-secondary/80 to-vydhya-tertiary/80 backdrop-blur-md border-b border-vydhya-accent/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef}>
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Image
                  src="/assets/logo.svg"
                  alt="Vydhya AI Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-vydhya-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-vydhya-text group-hover:text-vydhya-accent transition-colors duration-300">
                Vydhya AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 relative group"
            >
              About
              <span className="nav-underline absolute -bottom-1 left-0 w-full h-0.5 bg-vydhya-accent transform scale-x-0 transition-transform duration-300 origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="nav-link text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 relative group"
            >
              Team
              <span className="nav-underline absolute -bottom-1 left-0 w-full h-0.5 bg-vydhya-accent transform scale-x-0 transition-transform duration-300 origin-left"></span>
            </button>
            <a
              href="https://github.com/yourusername/vydhya-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-vydhya-text hover:text-vydhya-accent transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <Link href="/chat">
              <Button className="nav-button bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-vydhya-accent/25">
                Start Chatting
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-vydhya-text hover:text-vydhya-accent transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-vydhya-primary via-vydhya-secondary to-vydhya-tertiary backdrop-blur-md border-b border-vydhya-accent/20"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block w-full text-left text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 py-2"
              >
                Team
              </button>
              <a
                href="https://github.com/yourusername/vydhya-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 py-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <Link href="/chat" className="block">
                <Button className="w-full bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-semibold py-3 rounded-full transition-all duration-300">
                  Start Chatting
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
