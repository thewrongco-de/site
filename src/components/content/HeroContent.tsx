import React from 'react';

export default function HeroContent() {
  return (
    <section className="text-lg font-mono" id="hero-content">
      <div id="problem-statement" className="mb-8">
        <p className="mb-6">Most businesses start with tight deadlines, limited resources, and the need to move fast. That&apos;s how <strong>the wrong code</strong> happens—and that&apos;s okay.</p>
        
        <p className="mb-6">Many great companies begin with quick fixes and MVPs held together by determination. But as they grow, early code can&apos;t keep up. Scaling slows, bugs pile up, and progress stalls.</p>
      </div>
      
      <div id="solution-statement">
        <p className="mb-6">That&apos;s where we come in.</p>
        
        <p className="mb-6">We help teams evolve beyond their scrappy beginnings—rescuing fragile systems, scaling platforms, and re-architecting for growth. From day one, we guide founders to build it right.</p>
        
        <p className="mb-6">Because great ideas deserve more than code that works—they deserve code that lasts.</p>
        
        <p>Let&apos;s rewrite the future, starting with <strong>the wrong code</strong>.</p>
      </div>
    </section>
  );
}