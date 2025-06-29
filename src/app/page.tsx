import { Navbar } from '@/components/Navbar';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { TeamSection } from '@/components/TeamSection';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-vydhya-primary via-vydhya-secondary to-vydhya-tertiary">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
    </main>
  );
}
