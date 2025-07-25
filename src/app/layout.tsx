import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { roboto, robotoMono } from '@/lib/fonts';
import { metadata } from '@/lib/metadata';
import './globals.css';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                }
                // If no saved theme, let CSS handle system preference automatically
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-mono">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
