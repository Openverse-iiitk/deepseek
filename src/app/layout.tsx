import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vydhya AI – IIITK's Self-Hosted Chatbot",
  description: "Ask questions, explore knowledge, and interact with your campus AI. Vydhya AI is IIITK's zero-latency, privacy-first AI assistant built by students, for students.",
  keywords: ["AI", "chatbot", "IIITK", "artificial intelligence", "student assistant", "campus AI", "privacy-first", "self-hosted"],
  authors: [{ name: "IIITK Vydhya AI Team" }],
  creator: "IIITK Students",
  publisher: "Indian Institute of Information Technology Kota",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vydhya-ai.iiitk.ac.in',
    siteName: 'Vydhya AI',
    title: 'Vydhya AI – IIITK\'s Self-Hosted Chatbot',
    description: 'Ask questions, explore knowledge, and interact with your campus AI. Vydhya AI is IIITK\'s zero-latency, privacy-first AI assistant built by students, for students.',
    images: [
      {
        url: '/assets/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Vydhya AI - IIITK Campus AI Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vydhya AI – IIITK\'s Self-Hosted Chatbot',
    description: 'Ask questions, explore knowledge, and interact with your campus AI. Zero-latency, privacy-first AI assistant built by students, for students.',
    images: ['/assets/logo.svg'],
    creator: '@IIITK_Official',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#06B6D4' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1120' },
  ],
  manifest: '/manifest.json',
  icons: {
    icon: '/assets/logo.svg',
    shortcut: '/assets/logo.svg',
    apple: '/assets/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vydhya AI" />
        <meta name="application-name" content="Vydhya AI" />
        <meta name="msapplication-TileColor" content="#0A1120" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-vydhya-primary text-vydhya-text selection:bg-vydhya-accent/20 selection:text-vydhya-accent`}
        role="document"
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-vydhya-accent text-white px-4 py-2 rounded-md z-50 focus:z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
