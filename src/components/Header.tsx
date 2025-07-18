import React from 'react';

export default function Header() {
  return (
    <header className="mb-12" id="site-header">
      <h1 
        id="site-title" 
        style={{ 
          fontFamily: 'Roboto, sans-serif', 
          fontSize: '2rem',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '2rem'
        }}
      >
        The Wrong Code
      </h1>
    </header>
  );
}