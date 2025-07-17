import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

// Load fonts with explicit subsets and display settings
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
});

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  preload: true,
});

export const metadata: Metadata = {
  title: 'The Wrong Code - Evolving Beyond Early-Stage Tech',
  description: 'Helping businesses evolve beyond their early-stage tech stack',
  metadataBase: new URL('https://www.thewrongco.de'),
  openGraph: {
    title: 'The Wrong Code - Evolving Beyond Early-Stage Tech',
    description: 'Helping businesses evolve beyond their early-stage tech stack',
    url: 'https://www.thewrongco.de',
    siteName: 'The Wrong Code',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${roboto.variable} ${robotoMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href={roboto.variable}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={robotoMono.variable}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full bg-white text-black antialiased font-mono">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
