import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

// Use system font stack for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-white text-black antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
