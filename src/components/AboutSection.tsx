'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, Zap, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-vydhya-secondary to-vydhya-tertiary"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vydhya-accent to-vydhya-purple mb-6">
            About Vydhya AI
          </h2>
          <p className="text-xl text-vydhya-text max-w-3xl mx-auto leading-relaxed">
            Vydhya AI represents the next generation of campus-specific artificial intelligence, 
            designed and deployed exclusively for the IIITK community. Our self-hosted solution 
            ensures privacy, speed, and relevance to your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="h-full bg-gradient-to-br from-vydhya-primary/50 to-vydhya-secondary/50 border-vydhya-accent/20 hover:border-vydhya-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vydhya-accent/10 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-vydhya-accent to-vydhya-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-vydhya-text group-hover:text-vydhya-accent transition-colors duration-300">
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
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
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
