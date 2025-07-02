'use client';

import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Button } from '@/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
	{
		name: 'Manvith Kumar',
		role: 'Frontend-Dev',
		bio: 'Specializes in natural language processing and model optimization. Passionate about making AI accessible.',
		avatar: '/assets/manchan.jpeg',
		github: 'https://github.com/manvith12',
		linkedin: 'https://linkedin.com/in/manvith-sanisetty',
		email: 'sanisettykumar24bcs0217@iiitkottayam.ac.in',
	},
	{
		name: 'Shaun Sebastian',
		role: 'Project-lead',
		bio: 'Expert in modern web technologies and system architecture. Loves building scalable applications.',
		avatar: '/assets/shaun.jpeg',
		github: 'https://github.com/shaun-sebastian', // Replace with actual link
		linkedin: 'https://linkedin.com/in/shaun-sebastian', // Replace with actual link
		email: 'shaun@iiitk.ac.in',
	},
	{
		name: 'Aishkk Roy',
		role: 'ECE Engineer',
		bio: 'Infrastructure specialist ensuring reliable deployment and monitoring of campus AI systems.',
		avatar: '/assets/aishikk.jpg',
		github: 'https://github.com/aishkk-roy', // Replace with actual link
		linkedin: 'https://linkedin.com/in/aishkk-roy', // Replace with actual link
		email: 'rahul@iiitk.ac.in',
	},
	{
		name: 'Sneha Patel',
		role: 'UX/UI Designer',
		bio: 'Designs intuitive interfaces that make complex AI interactions simple and enjoyable.',
		avatar: '/assets/sneha.jpg',
		github: 'https://github.com/sneha-patel', // Replace with actual link
		linkedin: 'https://linkedin.com/in/sneha-patel', // Replace with actual link
		email: 'sneha@iiitk.ac.in',
	},
];

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(titleRef.current,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate description
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

      // Animate team cards with 3D effect
      gsap.fromTo('.team-card',
        {
          opacity: 0,
          y: 100,
          rotationY: 45,
          rotationX: 30,
          scale: 0.7
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate CTA section
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Team card hover effects
      document.querySelectorAll('.team-card').forEach((card) => {
        const avatar = card.querySelector('.team-avatar');
        const icons = card.querySelectorAll('.social-icon');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            scale: 1.08, 
            rotationY: 5,
            z: 50,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(avatar, { 
            scale: 1.15, 
            rotation: 5,
            duration: 0.4,
            ease: 'back.out(1.7)'
          });
          gsap.to(icons, {
            scale: 1.2,
            duration: 0.3,
            stagger: 0.05,
            ease: 'back.out(1.7)'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            scale: 1, 
            rotationY: 0,
            z: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(avatar, { 
            scale: 1, 
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out'
          });
          gsap.to(icons, {
            scale: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out'
          });
        });
      });

      // CTA button effects
      const ctaButton = document.querySelector('.cta-button');
      if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
          gsap.to(ctaButton, { 
            scale: 1.1, 
            rotation: 2,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        ctaButton.addEventListener('mouseleave', () => {
          gsap.to(ctaButton, { 
            scale: 1, 
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }

      // Floating animation for avatars
      gsap.to('.team-avatar', {
        y: -5,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-vydhya-tertiary to-vydhya-primary overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-vydhya-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-vydhya-purple/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vydhya-purple to-vydhya-accent mb-6"
          >
            Meet Our Team
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-vydhya-text max-w-3xl mx-auto leading-relaxed"
          >
            The brilliant minds behind Vydhya AI - a passionate team of students and researchers
            dedicated to advancing AI technology at IIITK.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-card h-full cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <Card className="h-full bg-gradient-to-br from-vydhya-secondary/50 to-vydhya-primary/50 border-vydhya-purple/30 hover:border-vydhya-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-vydhya-purple/20 group backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="team-avatar mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-vydhya-accent to-vydhya-purple rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={`${member.name}'s avatar`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-vydhya-text group-hover:text-vydhya-accent transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-vydhya-purple font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-vydhya-text/80 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="social-icon p-2 hover:bg-vydhya-accent/20 hover:text-vydhya-accent transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="social-icon p-2 hover:bg-vydhya-accent/20 hover:text-vydhya-accent transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="social-icon p-2 hover:bg-vydhya-accent/20 hover:text-vydhya-accent transition-colors duration-300"
                      asChild
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail size={18} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div ref={ctaRef} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-vydhya-purple/20 to-vydhya-accent/20 rounded-2xl p-8 border border-vydhya-accent/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-vydhya-accent mb-4">
              Join Our Mission
            </h3>
            <p className="text-vydhya-text leading-relaxed max-w-3xl mx-auto mb-6">
              Interested in contributing to Vydhya AI? We're always looking for passionate
              students and researchers to join our team and help shape the future of campus AI
              technology.
            </p>
            <Button className="cta-button relative bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-vydhya-accent/25 border border-gray-300/10 hover:border-gray-200/20 shadow-inner group overflow-hidden">
              <div className="absolute inset-0 border border-white/10 rounded-full"></div>
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-vydhya-accent/20 to-vydhya-purple/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
function useState(arg0: boolean): [any, any] {
	throw new Error('Function not implemented.');
}

