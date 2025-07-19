# The Wrong Site

## Tech Stack

- **Framework**: Next.js 15.1.3 with App Router
- **Language**: TypeScript 5.x with strict configuration  
- **Styling**: Tailwind CSS 3.4.17 + CSS custom properties
- **UI Components**: Material Design Web Components 2.3.0
- **Fonts**: Google Fonts (Roboto family) with optimization
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel (Node.js 22.x)

## Project Structure

```
src/
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Root layout with theme system
│   ├── page.tsx                     # Homepage with three-section layout
│   ├── globals.css                  # Global styles + Material Design overrides
│   └── favicon.ico                  # Site icon
├── components/                       # UI Components
│   ├── Navbar.tsx                  # Glass navbar with scroll detection
│   ├── HeroContent.tsx             # Problem → Solution messaging
│   ├── Footer.tsx                  # Founder links with hover effects
│   ├── MaterialThemeToggle.tsx     # MD theme toggle button
│   └── icons/                      # Material Design SVG icons
│       ├── MaterialLightModeIcon.tsx
│       └── MaterialDarkModeIcon.tsx
├── lib/                             # Utilities & Config
│   ├── fonts.ts                    # Google Fonts setup
│   ├── constants.ts                # Site config & founder data
│   └── metadata.ts                 # SEO metadata
└── types/                           # TypeScript Definitions
    └── index.ts                    # Interfaces (FounderLink, SiteConfig)
```

## Features

### Core Features
- **Monochrome Design System**: Pure black/white aesthetic with alpha variations
- **System Theme Detection**: Automatically follows OS dark/light preferences
- **Manual Theme Override**: Material Design toggle with persistent localStorage
- **Glass Morphism**: Navbar with backdrop blur and transparency effects
- **Material Design Integration**: Authentic MD components with custom theming

### Technical Features
- **Server-Side Rendering**: Static generation with Next.js App Router
- **TypeScript Strict Mode**: Full type safety with path aliases
- **Component Architecture**: Modular, reusable React components
- **Performance Optimization**: Font optimization, CSS optimization, bundle analysis
- **SEO & Analytics**: OpenGraph metadata, Vercel Analytics integration

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive States**: Smooth hover effects and transitions
- **Material Ripples**: Authentic Material Design button interactions
- **Flash Prevention**: Blocking scripts prevent theme loading flashes
- **Accessibility**: Semantic HTML with proper ARIA attributes