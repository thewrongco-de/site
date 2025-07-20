import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/constants';

export default function NotFound() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center" id="main-content">
        <div className="text-center">
          <h1 className="text-9xl md:text-[12rem] font-bold font-mono tracking-wider">
            <span className="glitch" data-text="404">404</span>
          </h1>
          <p className="text-xl md:text-2xl mt-8 font-mono">
            You&apos;re on The Wrong Page.
          </p>
        </div>
      </main>
      <Footer year={currentYear} siteName={siteConfig.name} />
    </div>
  );
}