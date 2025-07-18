import React from 'react';
import type { FounderLink } from '@/types';

interface FounderLinksProps {
  founders: FounderLink[];
}

export default function FounderLinks({ founders }: FounderLinksProps) {
  return (
    <p className="text-muted" id="founders-info" style={{ marginTop: '2rem' }}>
      Founded by{' '}
      {founders.map((founder, index) => (
        <React.Fragment key={founder.name}>
          <a 
            href={founder.url} 
            className="text-accent hover:underline font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            {founder.handle}
          </a>
          {index < founders.length - 1 && ' with '}
        </React.Fragment>
      ))}
    </p>
  );
}