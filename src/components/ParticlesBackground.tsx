'use client';

import { useCallback, useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticlesBackgroundProps {
  className?: string;
  particleCount?: number;
}

export function ParticlesBackground({ 
  className = '', 
  particleCount = 50 
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    setParticles(newParticles);
  }, [dimensions, particleCount]);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }

          // Mouse interaction
          const dx = mousePos.x - newX;
          const dy = mousePos.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            newVx += (dx / distance) * force * 0.01;
            newVy += (dy / distance) * force * 0.01;
          }

          // Apply friction
          newVx *= 0.999;
          newVy *= 0.999;

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [particles.length, mousePos, dimensions]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Render connections between nearby particles */}
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
              const opacity = (120 - distance) / 120 * 0.3;
              return (
                <line
                  key={`${particle.id}-${otherParticle.id}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="#06B6D4"
                  strokeWidth="1"
                  opacity={opacity}
                />
              );
            }
            return null;
          })
        )}

        {/* Render particles */}
        {particles.map(particle => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="#06B6D4"
            opacity={particle.opacity}
            filter="url(#glow)"
          />
        ))}
      </svg>
    </div>
  );
}
