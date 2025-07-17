import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      
      <main className="flex-grow flex flex-col justify-center">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold font-sans">The Wrong Code</h1>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Most businesses start with what they have—tight deadlines, limited resources, and a need to move fast.</p>
            <p className="mb-6">That&apos;s how <span className="font-semibold">the wrong code</span> happens. And that&apos;s okay.</p>
            
            <p className="mb-6">The truth is, many great companies begin this way. Quick fixes, scrappy builds, and MVPs held together by duct tape and determination. But as products grow and user expectations rise, that early code starts to crack. Scaling becomes slow. Features take longer. Bugs get harder to trace. What once worked now holds the product back.</p>
            
            <p className="mb-6">We exist to meet you at that turning point.</p>
            
            <p className="mb-6">We help businesses evolve beyond their early-stage stack. Whether it&apos;s rescuing a fragile system, scaling a platform, or re-architecting for growth—we bring clarity, structure, and quality to your codebase.</p>
            
            <p className="mb-6">We work with founders and teams from day one, helping them avoid common pitfalls by building it right from the start.</p>
            
            <p className="mb-6">Because great ideas deserve more than just code that works—they deserve code that lasts.</p>
            
            <p className="mb-8">Let&apos;s rewrite the future, starting with <span className="font-semibold">the wrong code</span>.</p>

            <p className="text-gray-600">
              Founded by{' '}
              <a 
                href="https://instagram.com/anatasof" 
                className="text-black hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @anatasof
              </a>{' '}
              with{' '}
              <a 
                href="https://instagram.com/rachmanareef" 
                className="text-black hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rachmanareef
              </a>
            </p>
          </div>
          
          <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} The Wrong Code</p>
          </footer>
        </div>
      </main>
    </>
  );
}
