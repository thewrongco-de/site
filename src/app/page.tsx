import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>The Wrong Code - Evolving Beyond Early-Stage Tech</title>
        <meta name="description" content="Helping businesses evolve beyond their early-stage tech stack" />
      </Head>
      
      <main className="container">
        <header>
          <div className="logo">The Wrong Code</div>
        </header>
        
        <div className="content">
          <p>Most businesses start with what they have—tight deadlines, limited resources, and a need to move fast.</p>
          <p>That&apos;s how <span className="highlight">the wrong code</span> happens. And that&apos;s okay.</p>
          
          <p>The truth is, many great companies begin this way. Quick fixes, scrappy builds, and MVPs held together by duct tape and determination. But as products grow and user expectations rise, that early code starts to crack. Scaling becomes slow. Features take longer. Bugs get harder to trace. What once worked now holds the product back.</p>
          
          <p>We exist to meet you at that turning point.</p>
          
          <p>We help businesses evolve beyond their early-stage stack. Whether it&apos;s rescuing a fragile system, scaling a platform, or re-architecting for growth—we bring clarity, structure, and quality to your codebase.</p>
          
          <p>We work with founders and teams from day one, helping them avoid common pitfalls by building it right from the start.</p>
          
          <p>Because great ideas deserve more than just code that works—they deserve code that lasts.</p>
          
          <p>Let&apos;s rewrite the future, starting with <span className="highlight">the wrong code</span>.</p>

          <p>Founded by <span className="highlight"><a href="https://instagram.com/anatasof">@anatasof</a></span> with <span className="highlight"><a href="https://instagram.com/rachmanareef">@rachmanareef</a></span></p>
        </div>
        
        <footer>
          <p>&copy; {new Date().getFullYear()} The Wrong Code</p>
        </footer>
      </main>
    </div>
  );
}
