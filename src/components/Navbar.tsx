'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-vydhya-primary/80 via-vydhya-secondary/80 to-vydhya-tertiary/80 backdrop-blur-md border-b border-vydhya-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vydhya-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-vydhya-text hover:text-vydhya-accent transition-colors duration-300 relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vydhya-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a
              href="https://github.com/yourusername/vydhya-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vydhya-text hover:text-vydhya-accent transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <Link href="/chat">
              <Button className="bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vydhya-accent/25">
                Start Chatting
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-vydhya-text hover:text-vydhya-accent transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-vydhya-primary via-vydhya-secondary to-vydhya-tertiary backdrop-blur-md border-b border-vydhya-accent/20 animate-fade-in">
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
