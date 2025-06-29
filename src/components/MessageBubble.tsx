'use client';

import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className={`flex items-start gap-3 mb-6 animate-fade-in ${isUser ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative ${
        isUser 
          ? 'bg-gradient-to-br from-vydhya-accent to-vydhya-purple' 
          : 'bg-gradient-to-br from-vydhya-purple to-vydhya-accent'
      }`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
        {isUser ? (
          <User size={16} className="text-white relative z-10" />
        ) : (
          <Bot size={16} className="text-white relative z-10" />
        )}
      </div>

      {/* Message content */}
      <div className={`flex flex-col max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`relative rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-gradient-to-r from-vydhya-accent to-vydhya-purple text-white rounded-br-none' 
            : 'advanced-glass text-vydhya-text rounded-bl-none'
        }`}>
          {!isUser && (
            <div className="absolute inset-0 rounded-2xl rounded-bl-none bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-border"></div>
          )}
          <p className="text-sm leading-relaxed whitespace-pre-wrap relative z-10">
            {message.text}
          </p>
        </div>
        
        {/* Timestamp */}
        <span className="text-xs text-vydhya-text/60 mt-1 px-1">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 mb-6 animate-fade-in">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-vydhya-purple to-vydhya-accent flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
        <Bot size={16} className="text-white relative z-10" />
      </div>

      {/* Typing animation */}
      <div className="advanced-glass rounded-2xl rounded-bl-none px-4 py-3 relative">
        <div className="absolute inset-0 rounded-2xl rounded-bl-none bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-border"></div>
        <div className="flex items-center gap-1 relative z-10">
          <div className="w-2 h-2 bg-vydhya-accent rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-vydhya-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-vydhya-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
