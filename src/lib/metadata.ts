import type { Metadata } from 'next';
import { siteConfig } from './constants';

export const metadata: Metadata = {
  title: `${siteConfig.name} - Rewrite the future, starting with the wrong code`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} - Rewrite the future, starting with the wrong code`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Rewrite the future, starting with the wrong code`,
    description: siteConfig.description,
  },
};