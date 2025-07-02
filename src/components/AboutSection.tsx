'use client';

import { useEffect, useRef } from 'react';
import { Brain, Zap, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Brain,
    title: 'Intelligent Assistance',
    description: 'Advanced AI capabilities for academic support, research guidance, and problem-solving across multiple domains.',
  },
  {
    icon: Zap,
    title: 'Zero Latency',
    description: 'Self-hosted on campus infrastructure ensures lightning-fast responses without external dependencies.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data stays within IIITK premises. Complete privacy and security for all your interactions.',
  },
  {
    icon: Users,
    title: 'Campus Community',
    description: 'Built by students, for students. Tailored specifically for IIITK academic and campus needs.',
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(titleRef.current,
        { 
          opacity: 0, 
          y: 50,
          rotationX: -90 
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate description with typewriter effect
      gsap.fromTo(descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate feature cards with stagger
      gsap.fromTo('.feature-card',
        {
          opacity: 0,
          y: 80,
          rotationX: -45,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate capabilities section
      gsap.fromTo(capabilitiesRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Add hover animations to cards
      document.querySelectorAll('.feature-card').forEach((card) => {
        const icon = card.querySelector('.feature-icon');
        const title = card.querySelector('.feature-title');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
          gsap.to(icon, { rotation: 360, scale: 1.2, duration: 0.6, ease: 'back.out(1.7)' });
          gsap.to(title, { color: '#06B6D4', duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
          gsap.to(icon, { rotation: 0, scale: 1, duration: 0.4, ease: 'power2.out' });
          gsap.to(title, { color: '', duration: 0.3 });
        });
      });

      // Floating background elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-vydhya-secondary to-vydhya-tertiary overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-vydhya-accent/30 rounded-full floating-element blur-sm"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-vydhya-purple/20 rounded-full floating-element blur-sm"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-vydhya-accent/25 rounded-full floating-element blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-vydhya-purple/35 rounded-full floating-element blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vydhya-accent to-vydhya-purple mb-6"
          >
            About Vydhya AI
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-vydhya-text max-w-3xl mx-auto leading-relaxed"
          >
            Vydhya AI represents the next generation of campus-specific artificial intelligence, 
            designed and deployed exclusively for the IIITK community. Our self-hosted solution 
            ensures privacy, speed, and relevance to your academic journey.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card h-full cursor-pointer"
              >
                <Card className="h-full bg-gradient-to-br from-vydhya-primary/50 to-vydhya-secondary/50 border-vydhya-accent/20 hover:border-vydhya-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-vydhya-accent/10 group backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-vydhya-accent to-vydhya-purple rounded-full flex items-center justify-center feature-icon">
                      <Icon size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-vydhya-text feature-title transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-vydhya-text/80 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional content */}
        <div 
          ref={capabilitiesRef}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-vydhya-primary/30 to-vydhya-tertiary/30 rounded-2xl p-8 border border-vydhya-accent/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-vydhya-accent mb-4">
              Capabilities
            </h3>
            <p className="text-vydhya-text leading-relaxed max-w-4xl mx-auto">
              From helping with complex algorithms and debugging code to explaining theoretical concepts 
              and providing research assistance, Vydhya AI is your comprehensive academic companion. 
              Whether you're working on assignments, preparing for exams, or exploring new domains of knowledge, 
              our AI is here to support your learning journey at IIITK.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
