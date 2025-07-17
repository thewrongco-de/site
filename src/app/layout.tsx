import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'The Wrong Code - Evolving Beyond Early-Stage Tech',
  description: 'Helping businesses evolve beyond their early-stage tech stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
