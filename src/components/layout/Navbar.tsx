'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MaterialThemeToggle } from '../ui';

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
        <Link href="/" className="group">
          <h1 
            id="site-title" 
            className="site-title-button text-foreground text-xl font-bold m-0 font-sans tracking-wide cursor-pointer transition-all duration-200 relative overflow-hidden"
          >
            The Wrong Code
            <span className="absolute inset-0 rounded-[20px] bg-foreground opacity-0 scale-75 group-active:opacity-[0.2] group-active:scale-100 transition-all duration-150 ease-out pointer-events-none"></span>
          </h1>
        </Link>
        <MaterialThemeToggle />
      </div>
    </nav>
  );
}