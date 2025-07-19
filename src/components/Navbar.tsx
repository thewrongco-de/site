'use client';
import React, { useState, useEffect } from 'react';
import MaterialThemeToggle from './MaterialThemeToggle';

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
      className={`sticky top-0 z-50 h-16 glass-effect transition-shadow duration-200 ${
        isScrolled ? 'shadow-material' : ''
      }`}
      id="site-navbar"
    >
      <div className="max-w-3xl mx-auto px-6 h-full flex items-center justify-between">
        <h1 
          id="site-title" 
          className="text-foreground text-xl font-bold m-0 font-sans tracking-wide"
        >
          <span data-text="The Wrong Code">The Wrong Code</span>
        </h1>
        <MaterialThemeToggle />
      </div>
    </nav>
  );
}