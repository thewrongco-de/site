import React from 'react';

interface FooterProps {
  year: number;
  siteName: string;
}

export default function Footer({ year, siteName }: FooterProps) {
  return (
    <footer className="mt-12 pt-6 border-t border-border text-sm text-muted" id="site-footer">
      <p>&copy; {year} {siteName}</p>
    </footer>
  );
}