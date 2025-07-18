import React from 'react';

interface FooterProps {
  year: number;
  siteName: string;
}

export default function Footer({ year, siteName }: FooterProps) {
  return (
    <footer 
      className="mt-auto border-t border-border text-sm text-muted text-center" 
      id="site-footer"
      style={{ 
        opacity: 0.6,
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        marginTop: '2rem'
      }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <p>&copy; {year} {siteName}</p>
      </div>
    </footer>
  );
}