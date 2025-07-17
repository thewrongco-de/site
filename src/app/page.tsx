import React from 'react';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-sans">The Wrong Code</h1>
        </header>
        
        <div className="space-y-6 text-lg font-mono">
          <p>Most businesses start with what they have—tight deadlines, limited resources, and a need to move fast.</p>
          <p>That&apos;s how <strong>the wrong code</strong> happens. And that&apos;s okay.</p>
          
          <p>The truth is, many great companies begin this way. Quick fixes, scrappy builds, and MVPs held together by duct tape and determination. But as products grow and user expectations rise, that early code starts to crack. Scaling becomes slow. Features take longer. Bugs get harder to trace. What once worked now holds the product back.</p>
          
          <p>We exist to meet you at that turning point.</p>
          
          <p>We help businesses evolve beyond their early-stage stack. Whether it&apos;s rescuing a fragile system, scaling a platform, or re-architecting for growth—we bring clarity, structure, and quality to your codebase.</p>
          
          <p>We work with founders and teams from day one, helping them avoid common pitfalls by building it right from the start.</p>
          
          <p>Because great ideas deserve more than just code that works—they deserve code that lasts.</p>
          
          <p>Let&apos;s rewrite the future, starting with <strong>the wrong code</strong>.</p>

          <p className="text-muted">
            Founded by{' '}
            <a 
              href="https://instagram.com/anatasof" 
              className="text-accent hover:underline font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @anatasof
            </a>{' '}
            with{' '}
            <a 
              href="https://instagram.com/rachmanareef" 
              className="text-accent hover:underline font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rachmanareef
            </a>
          </p>
        </div>
        
        <footer className="mt-12 pt-6 border-t border-border text-sm text-muted">
          <p>&copy; {currentYear} The Wrong Code</p>
        </footer>
      </div>
    </main>
  );
}
