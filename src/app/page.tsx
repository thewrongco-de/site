import React from 'react';
import Header from '@/components/Header';
import HeroContent from '@/components/HeroContent';
import FounderLinks from '@/components/FounderLinks';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/constants';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className="flex-1" id="main-content">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Header />
        <HeroContent />
        <FounderLinks founders={siteConfig.founders} />
        <Footer year={currentYear} siteName={siteConfig.name} />
      </div>
    </main>
  );
}
