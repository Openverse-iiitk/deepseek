'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Lightbulb } from 'lucide-react';
import { Button } from '@/ui/button';
import { Textarea } from '@/ui/textarea';
import { MessageBubble, TypingIndicator } from './MessageBubble';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const examplePrompts = [
  "How do I deploy Vydhya AI?",
  "Explain the HEFT scheduling algorithm.",
  "Show me a Next.js dark-mode example.",
  "What are the latest trends in machine learning?",
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showExamples, setShowExamples] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateSophisticatedResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Academic and technical topics
    if (lowerMessage.includes('algorithm') || lowerMessage.includes('data structure')) {
      return generateAlgorithmResponse();
    }
    
    if (lowerMessage.includes('machine learning') || lowerMessage.includes('ml') || lowerMessage.includes('ai')) {
      return generateMLResponse();
    }
    
    if (lowerMessage.includes('next.js') || lowerMessage.includes('react') || lowerMessage.includes('web dev')) {
      return generateWebDevResponse();
    }
    
    if (lowerMessage.includes('deploy') || lowerMessage.includes('deployment') || lowerMessage.includes('production')) {
      return generateDeploymentResponse();
    }
    
    if (lowerMessage.includes('campus') || lowerMessage.includes('iiitk') || lowerMessage.includes('college')) {
      return generateCampusResponse();
    }
    
    if (lowerMessage.includes('research') || lowerMessage.includes('paper') || lowerMessage.includes('publication')) {
      return generateResearchResponse();
    }
    
    if (lowerMessage.includes('code') || lowerMessage.includes('programming') || lowerMessage.includes('debug')) {
      return generateProgrammingResponse();
    }
    
    // Default sophisticated response
    return generateDefaultResponse(userMessage);
  };

  const generateAlgorithmResponse = () => {
    return `Great question about algorithms! 🧠

As your IIITK AI assistant, I can help you understand complex algorithmic concepts with practical examples. Algorithms are the backbone of computer science and form the foundation for efficient problem-solving.

**Key areas I can assist with:**
• **Time & Space Complexity Analysis** - Big O notation, optimization strategies
• **Popular Algorithms** - Sorting, searching, graph algorithms, dynamic programming
• **Implementation Guidance** - Code examples in Python, C++, Java
• **Interview Preparation** - Common algorithmic challenges

**Did you know?** The HEFT (Heterogeneous Earliest Finish Time) algorithm you mentioned is crucial for task scheduling in distributed systems. It's widely used in cloud computing and parallel processing.

What specific algorithm would you like to explore deeper? I can provide detailed explanations, code implementations, and real-world applications! 🚀`;
  };

  const generateMLResponse = () => {
    return `Excellent! Machine Learning is one of the most exciting fields in computer science today! 🤖✨

**Current ML Trends & Opportunities:**
• **Large Language Models (LLMs)** - GPT, BERT, and transformer architectures
• **Computer Vision** - Object detection, image segmentation, generative models
• **Reinforcement Learning** - Game AI, robotics, autonomous systems
• **Edge AI** - Deploying models on mobile and IoT devices
• **Ethical AI** - Bias detection, explainable AI, responsible deployment

**At IIITK, you can leverage:**
• Research labs with cutting-edge GPU infrastructure
• Faculty expertise in neural networks and deep learning
• Industry collaborations for real-world project experience
• Access to datasets and computing resources

**Getting Started:**
1. **Foundation**: Linear algebra, statistics, Python programming
2. **Frameworks**: TensorFlow, PyTorch, scikit-learn
3. **Practice**: Kaggle competitions, personal projects
4. **Specialization**: Choose your area of interest

What specific ML topic interests you most? I can suggest resources, project ideas, and learning paths! 📚🎯`;
  };

  const generateWebDevResponse = () => {
    return `Perfect! Next.js is an amazing framework for modern web development! 🌐⚡

Here's a sophisticated dark-mode implementation approach:

**Theme Management Strategy:**
• System preference detection with media queries
• Local storage persistence for user preferences
• Context API for global state management
• Smooth transitions between themes

**Advanced Next.js Features to Explore:**
• **App Router** - New routing system with layouts and loading states
• **Server Components** - Improved performance and SEO
• **API Routes** - Full-stack capabilities
• **Image Optimization** - Automatic WebP conversion and lazy loading
• **Middleware** - Authentication, redirects, and request processing

**Performance Optimization:**
• Code splitting and lazy loading
• Static generation vs server-side rendering
• Edge runtime deployment
• Bundle analysis and optimization

Need help with specific Next.js concepts or want to build something amazing? 🚀`;
  };

  const generateDeploymentResponse = () => {
    return `Deployment is a crucial skill! Let me guide you through modern deployment strategies! 🚀📦

**Vydhya AI Deployment Architecture:**

**Frontend (Next.js):**
• **Vercel** - Seamless Next.js deployments with edge functions
• **Netlify** - JAMstack optimized with form handling
• **AWS Amplify** - Full-stack deployment with CI/CD
• **Docker + Kubernetes** - Containerized deployment for scalability

**Backend & AI Models:**
• **Docker Containers** - Consistent environment across dev/prod
• **NGINX** - Reverse proxy and load balancing
• **GPU Servers** - For AI model inference (CUDA support)
• **Redis** - Caching and session management
• **PostgreSQL** - Reliable data persistence

**DevOps Best Practices:**
• Container orchestration with Docker Compose
• Environment variable management
• SSL/TLS encryption with Let's Encrypt
• Rate limiting and DDoS protection
• Health checks and automatic restarts
• Logging with centralized monitoring

**Monitoring & Security:**
• Performance monitoring with real-time alerts
• Security scanning and vulnerability assessment
• Backup strategies and disaster recovery
• Load testing and capacity planning

What type of application are you looking to deploy? I can provide specific guidance! 🛠️`;
  };

  const generateCampusResponse = () => {
    return `Welcome to IIITK! 🎓 I'm here to help you navigate campus life and academics!

**IIITK Resources & Opportunities:**

**🏛️ Academic Excellence:**
• **Research Labs** - AI/ML, Cybersecurity, IoT, Robotics
• **Industry Partnerships** - Internships with top tech companies
• **Faculty Mentorship** - Direct access to experienced professors
• **Project-Based Learning** - Real-world problem solving

**💡 Innovation Ecosystem:**
• **Incubation Center** - Support for student startups
• **Hackathons & Competitions** - Regular coding challenges
• **Technical Societies** - Join communities of like-minded peers
• **Open Source Contributions** - Collaborate on global projects

**🌟 Campus Life:**
• **Modern Infrastructure** - High-speed internet, smart classrooms
• **Sports Facilities** - Cricket, football, basketball courts
• **Cultural Activities** - Technical and cultural festivals
• **Mess & Cafeteria** - Diverse food options

**🚀 Career Development:**
• **Placement Cell** - Industry connections and job opportunities
• **Skill Development** - Workshops on emerging technologies
• **Alumni Network** - Mentorship from successful graduates
• **Research Opportunities** - Contribute to cutting-edge projects

What specific aspect of IIITK life would you like to know more about? I'm here to help you make the most of your time here! 🌟`;
  };

  const generateResearchResponse = () => {
    return `Research is the heart of innovation! 📚🔬 Let me guide you through the research landscape at IIITK!

**Research Methodology & Best Practices:**

**🎯 Finding Your Research Niche:**
• **Literature Review** - Use IEEE Xplore, ACM Digital Library, arXiv
• **Gap Analysis** - Identify unsolved problems in your field
• **Trend Analysis** - Follow conferences like NeurIPS, ICML, ICCV
• **Collaboration** - Work with faculty and senior students

**📊 Research Process:**
1. **Problem Formulation** - Define clear, measurable objectives
2. **Hypothesis Development** - Create testable predictions
3. **Methodology Design** - Choose appropriate research methods
4. **Data Collection** - Gather relevant, high-quality datasets
5. **Analysis & Interpretation** - Apply statistical and computational methods
6. **Documentation** - Maintain detailed research logs

**✍️ Publication Strategy:**
• **Conference Papers** - AAAI, IJCAI, ICSE, CHI for quick dissemination
• **Journal Articles** - IEEE Transactions, ACM journals for detailed work
• **Workshop Papers** - Test ideas and get early feedback
• **Preprints** - Share work early on arXiv or bioRxiv

**🛠️ Research Tools:**
• **Reference Management** - Zotero, Mendeley for citation tracking
• **Writing** - LaTeX with Overleaf for professional formatting
• **Data Analysis** - Python (pandas, numpy), R, MATLAB
• **Visualization** - Matplotlib, Plotly, ggplot2
• **Version Control** - Git for code and document management

What research area interests you most? I can help you find relevant papers, datasets, and potential collaborators! 🚀`;
  };

  const generateProgrammingResponse = () => {
    return `Let's solve this together! 💻✨ Programming is an art, and I'm here to help you master it!

**Debug Like a Pro:**

**🔍 Systematic Debugging Approach:**
1. **Reproduce** - Consistently recreate the issue
2. **Isolate** - Narrow down to the smallest failing case
3. **Hypothesize** - Form theories about the root cause
4. **Test** - Validate each hypothesis systematically
5. **Fix** - Implement the solution
6. **Verify** - Ensure the fix doesn't break anything else

**🛠️ Essential Debugging Tools:**
• **IDE Debuggers** - Step-through debugging in VS Code, PyCharm
• **Print Debugging** - Strategic console.log() or print() statements
• **Logging Frameworks** - Winston (JS), logging (Python), spdlog (C++)
• **Browser DevTools** - Network, Console, Performance tabs
• **Profilers** - Identify performance bottlenecks

**📝 Code Quality Best Practices:**
• **Clean Code Principles** - Readable, maintainable, and testable
• **Error Handling** - Graceful failure management
• **Documentation** - Clear comments and API documentation
• **Testing Strategy** - Unit tests, integration tests, end-to-end tests

**🚀 Performance Optimization:**
• **Algorithmic Efficiency** - Choose the right data structures
• **Memory Management** - Avoid memory leaks and excessive allocation
• **Caching** - Store computed results for reuse
• **Parallel Processing** - Utilize multiple cores effectively
• **Database Optimization** - Efficient queries and indexing

What specific programming challenge are you facing? Share your code, and I'll help you debug and optimize it! 🎯`;
  };

  const generateDefaultResponse = (userMessage: string) => {
    return `Thank you for reaching out! 🌟 I'm Vydhya AI, your intelligent campus companion at IIITK.

**Understanding Your Query:**
I've analyzed your message: "${userMessage}" and I'm ready to provide comprehensive assistance.

**🎯 How I Can Help You:**

**📚 Academic Excellence:**
• **Subject Expertise** - Computer Science, Mathematics, Physics, Electronics
• **Assignment Guidance** - Step-by-step problem solving approaches
• **Exam Preparation** - Study strategies and practice problems
• **Research Support** - Literature reviews and methodology guidance

**💻 Technical Mastery:**
• **Programming Languages** - Python, Java, C++, JavaScript, Go, Rust
• **Frameworks & Tools** - React/Next.js, Django, Spring Boot, Docker
• **Data Science & AI** - Machine Learning, Deep Learning, Data Analysis
• **System Design** - Architecture patterns and scalability solutions

**🏛️ Campus Life Integration:**
• **Course Planning** - Optimal semester scheduling and prerequisites
• **Project Collaboration** - Team formation and project management
• **Industry Connections** - Internship and placement preparation
• **Innovation Support** - Startup ideas and technical feasibility

**🚀 Let's Dive Deeper:**
To provide you with the most relevant and detailed assistance, could you tell me more about:
• What specific area you'd like to explore?
• Any particular challenges you're facing?
• Your current academic year or specialization?
• Whether this is for a project, assignment, or personal learning?

I'm equipped with extensive knowledge across multiple domains and can adapt my responses to your learning style and current level. Let's make your IIITK journey exceptional! 🎓⚡`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    const currentInput = inputValue.trim();
    setInputValue('');
    setShowExamples(false);
    setIsTyping(true);

    // Generate sophisticated AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateSophisticatedResponse(currentInput),
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1500); // Random delay between 1.5-2.5 seconds for more natural feel
  };

  const handleExampleClick = (prompt: string) => {
    setInputValue(prompt);
    setShowExamples(false);
    textareaRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-vydhya-primary via-vydhya-secondary to-vydhya-tertiary relative overflow-hidden" role="application" aria-label="Vydhya AI Chat Interface">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <Image
          src="/assets/logo.svg"
          alt=""
          width={300}
          height={300}
          className="opacity-5"
        />
      </div>

      {/* Header */}
      <header className="flex-shrink-0 advanced-glass border-b border-vydhya-accent/20 p-4" role="banner">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/logo.svg"
              alt="Vydhya AI Logo"
              width={32}
              height={32}
            />
            <div>
              <h1 className="text-xl font-bold text-vydhya-text">Vydhya AI</h1>
              <p className="text-sm text-vydhya-text/70">Your IIITK AI Assistant</p>
            </div>
          </div>
          <div className="flex items-center space-x-2" role="status" aria-label="Connection status">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="text-sm text-vydhya-text/70">Online</span>
          </div>
        </div>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-hidden" role="main">
        <div className="h-full overflow-y-auto px-4 py-6" role="log" aria-label="Chat messages" aria-live="polite">
          <div className="max-w-4xl mx-auto">
            {/* Welcome message and examples */}
            {showExamples && messages.length === 0 && (
              <div className="text-center mb-8 animate-fade-in" role="region" aria-label="Welcome section">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-vydhya-accent to-vydhya-purple mb-4">
                    Welcome to Vydhya AI!
                  </h2>
                  <p className="text-vydhya-text/80 max-w-2xl mx-auto">
                    I'm here to help you with academics, research, and campus life at IIITK. 
                    Try one of these examples or ask me anything:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto" role="group" aria-label="Example prompts">
                  {examplePrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleClick(prompt)}
                      className="group advanced-glass hover:glass-texture border border-vydhya-accent/20 hover:border-vydhya-accent/40 rounded-xl p-4 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vydhya-accent/10 focus:outline-none focus:ring-2 focus:ring-vydhya-accent focus:ring-offset-2 focus:ring-offset-vydhya-primary relative overflow-hidden"
                      aria-label={`Try example prompt: ${prompt}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex items-start space-x-3 relative z-10">
                        <Lightbulb size={16} className="text-vydhya-accent mt-1 flex-shrink-0" aria-hidden="true" />
                        <span className="text-vydhya-text group-hover:text-vydhya-accent transition-colors duration-300">
                          {prompt}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {/* Typing indicator */}
            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input area */}
      <footer className="flex-shrink-0 advanced-glass border-t border-vydhya-accent/20 p-4" role="contentinfo">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Vydhya AI anything..."
                className="w-full advanced-glass border-vydhya-accent/20 focus:border-vydhya-accent focus:ring-vydhya-accent/20 text-vydhya-text placeholder:text-vydhya-text/50 rounded-2xl resize-none min-h-[50px] max-h-32"
                rows={1}
                aria-label="Message input"
                aria-describedby="input-help"
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="p-3 bg-gradient-to-r from-vydhya-accent to-vydhya-purple hover:from-vydhya-purple hover:to-vydhya-accent disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-vydhya-accent/25 focus:outline-none focus:ring-2 focus:ring-vydhya-accent focus:ring-offset-2 focus:ring-offset-vydhya-primary"
              aria-label="Send message"
            >
              <Send size={20} className="text-white" />
            </Button>
          </div>
          
          <p id="input-help" className="text-xs text-vydhya-text/50 mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </footer>
    </div>
  );
}
