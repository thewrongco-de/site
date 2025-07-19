import React from 'react';

interface FooterProps {
  year: number;
  siteName: string;
}

export default function Footer({ year, siteName }: FooterProps) {
  return (
    <footer 
      className="mt-auto text-sm text-muted text-center opacity-60 py-6 mt-8" 
      id="site-footer"
    >
      <div className="max-w-3xl mx-auto px-4">
        <p>&copy; {year} {siteName} · Founded by <a href='https://instagram.com/anatasof' className="hover:underline hover:text-foreground hover:font-medium transition-all duration-200">@anatasof</a> with <a href='https://instagram.com/rachmanareef' className="hover:underline hover:text-foreground hover:font-medium transition-all duration-200">@rachmanareef</a></p>
      </div>
    </footer>
  );
}