# The Wrong Code - Development Guide

## Project Overview
A modern Next.js website for The Wrong Code - rewrite the future, starting with the wrong code.

## Architecture
- **Framework**: Next.js 15.1.3 with App Router
- **Language**: TypeScript 5.x with strict configuration
- **Styling**: Tailwind CSS 3.4.17 with CSS custom properties
- **Fonts**: Google Fonts (Roboto and Roboto Mono)
- **Analytics**: Vercel Analytics and Speed Insights
- **Deployment**: Vercel with Node.js 22.x

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (#root-layout)
│   ├── page.tsx           # Home page (#main-content)
│   ├── globals.css        # Global styles and dark mode
│   └── favicon.ico        # Site icon
├── components/            # Reusable UI components
│   ├── Header.tsx         # Site header (#site-header)
│   ├── HeroContent.tsx    # Main content (#hero-content)
│   ├── FounderLinks.tsx   # Founder information (#founders-info)
│   └── Footer.tsx         # Site footer (#site-footer)
├── lib/                   # Utility functions and configurations
│   ├── fonts.ts          # Font configurations
│   ├── constants.ts      # Site configuration and constants
│   └── metadata.ts       # SEO metadata
└── types/                 # TypeScript type definitions
    └── index.ts          # Global types (FounderLink, SiteConfig)
```

## Key Sections & IDs
- `#main-content` - Main page container (src/app/page.tsx:12)
- `#site-header` - Header with site title (src/components/Header.tsx:4)
- `#site-title` - Main site title (src/components/Header.tsx:5)
- `#hero-content` - Main messaging section (src/components/HeroContent.tsx:4)
- `#problem-statement` - Problem description (src/components/HeroContent.tsx:5)
- `#solution-statement` - Solution description (src/components/HeroContent.tsx:11)
- `#founders-info` - Founder links (src/components/FounderLinks.tsx:9)
- `#site-footer` - Footer with copyright (src/components/Footer.tsx:8)

## Key Components
- **Header** (`src/components/Header.tsx`) - Site title and branding
- **HeroContent** (`src/components/HeroContent.tsx`) - Main messaging content
- **FounderLinks** (`src/components/FounderLinks.tsx`) - Founder social links
- **Footer** (`src/components/Footer.tsx`) - Copyright and site info

## Configuration
- **Site Config** (`src/lib/constants.ts`) - Central site configuration
- **Fonts** (`src/lib/fonts.ts`) - Google Fonts setup
- **Metadata** (`src/lib/metadata.ts`) - SEO and OpenGraph metadata
- **Types** (`src/types/index.ts`) - TypeScript interfaces

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Code Reference Standards
- **Files**: `src/app/page.tsx:14` (file:line)
- **Components**: `Header component in src/components/Header.tsx`
- **Sections**: `#hero-content section`
- **Functions**: `functionName() in src/lib/utils.ts:25`

## Design System
- **Colors**: CSS custom properties in globals.css
- **Fonts**: Roboto (sans) and Roboto Mono (mono)
- **Dark Mode**: Automatic system preference detection
- **Responsive**: Mobile-first Tailwind classes

## Deployment
- **Platform**: Vercel
- **Domain**: https://www.thewrongco.de
- **Node Version**: 22.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## Key Features
- Server-side rendering with static generation
- Automatic font optimization
- CSS-only dark mode (no JavaScript)
- Performance monitoring with Vercel Analytics
- SEO optimized with OpenGraph metadata