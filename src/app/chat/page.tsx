import { ChatInterface } from '@/components/ChatInterface';
import { ParticlesBackground } from '@/components/ParticlesBackground';

export default function ChatPage() {
  return (
    <main id="main-content" className="relative" role="main" aria-label="Chat with Vydhya AI">
      <ParticlesBackground className="opacity-30" />
      <ChatInterface />
    </main>
  );
}
