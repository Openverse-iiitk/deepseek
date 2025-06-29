'use client';

import Link from 'next/link';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/ui/button';
import { ParticlesBackground } from './ParticlesBackground';

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticlesBackground className="absolute inset-0 z-0" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-vydhya-primary/70 via-vydhya-secondary/70 to-vydhya-tertiary/70 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-texture border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            IIITK's Self Hosted AI
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 mb-4 animate-pulse-glow">
            Meet
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 mb-8 animate-pulse-glow">
            Vydhya AI
          </h2>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-vydhya-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Your on‑campus, zero‑latency assistant.{" "}
            <span className="text-vydhya-accent font-semibold">Privacy-first AI</span>{" "}
            built by students, for students.
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/chat">
              <Button className="group relative bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-vydhya-accent/30 btn-glow border border-gray-300/10 hover:border-gray-200/20 shadow-inner">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <span className="relative z-10">Start Chatting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-vydhya-accent/20 to-vydhya-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-white/10 rounded-full"></div>
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="border-2 border-gray-300/20 hover:border-gray-200/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-inner relative overflow-hidden group"
            >
              <div className="absolute inset-0 border border-gray-400/10 rounded-full"></div>
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="animate-slide-up grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{ animationDelay: '0.9s' }}>
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
              className="glass-texture rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-3xl mb-3 group-hover:animate-bounce relative z-10">
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

        {/* Scroll hint - moved lower */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 group px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <span className="text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              Scroll for more
            </span>
            <ChevronDown size={24} className="animate-pulse group-hover:text-cyan-400 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-vydhya-accent rounded-full opacity-30 animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-vydhya-purple rounded-full opacity-20 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-vydhya-accent rounded-full opacity-25 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-vydhya-purple rounded-full opacity-35 animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
    </section>
  );
}
