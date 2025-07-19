'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 h-16 bg-background transition-shadow duration-200 ${
        isScrolled ? 'shadow-material' : ''
      }`}
      id="site-navbar"
    >
      <div className="max-w-3xl mx-auto px-6 h-full flex items-center">
        <h1 
          id="site-title" 
          className="text-foreground text-xl font-medium m-0 font-sans tracking-wide"
        >
          The Wrong Code
        </h1>
      </div>
    </nav>
  );
}