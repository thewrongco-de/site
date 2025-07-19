import React from 'react';
import Navbar from '@/components/Navbar';
import HeroContent from '@/components/HeroContent';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/constants';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1" id="main-content">
        <div className="max-w-3xl mx-auto p-6">
          <HeroContent />
        </div>
      </main>
      <Footer year={currentYear} siteName={siteConfig.name} />
    </div>
  );
}
