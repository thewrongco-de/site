export interface FounderLink {
  name: string;
  handle: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  founders: FounderLink[];
}