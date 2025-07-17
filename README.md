# The Wrong Code - Website

## 🌐 Overview

A clean, minimalist website built with modern web technologies, featuring automatic dark/light mode switching based on system preferences. The site showcases The Wrong Code's mission to help businesses transition from scrappy MVP code to production-ready, scalable solutions.

## ✨ Features

### Core Functionality
- **Automatic Dark/Light Mode**: Seamlessly switches between themes based on system preferences
- **Server-Side Rendering**: Built with Next.js 15.4.1 for optimal performance
- **Analytics & Monitoring**: Integrated Vercel Analytics and Speed Insights
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Static Generation**: Pre-rendered pages for fast loading

### Performance & SEO
- **Image Optimization**: Configured for optimal performance
- **SEO Ready**: Proper meta tags, Open Graph, and Twitter Card support
- **Core Web Vitals**: Optimized for excellent performance metrics

### Development Experience
- **TypeScript**: Full type safety and better development experience
- **ESLint 9.x**: Modern linting with flat config
- **Tailwind CSS**: Utility-first styling with custom CSS variables
- **PostCSS**: Advanced CSS processing with nesting support

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with dark mode support
│   ├── layout.tsx        # Root layout with analytics
│   └── page.tsx          # Main page content
├── public/
│   └── favicon.ico       # Site favicon
├── .gitignore           # Git ignore rules
├── eslint.config.mjs    # ESLint configuration (flat config)
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS with imports and nesting
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## 🎨 Design System

### Color Scheme
The site uses CSS variables for seamless dark/light mode switching:

**Light Mode:**
- Background: `#ffffff`
- Foreground: `#000000`
- Muted: `#6b7280`
- Border: `#e5e7eb`
- Accent: `#000000`

**Dark Mode:**
- Background: `#000000`
- Foreground: `#ffffff`
- Muted: `#9ca3af`
- Border: `#374151`
- Accent: `#ffffff`

### Typography
- **Primary Font**: Inter (variable font)
- **Font Features**: Enabled ligatures and contextual alternates
- **Responsive**: Scales appropriately across devices

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.4.1 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4.17
- **Fonts**: Next.js Font Optimization

### Development Tools
- **Linting**: ESLint 9.x with flat config
- **PostCSS**: CSS processing with imports and nesting
- **Node.js**: 22.x (latest LTS)

### Analytics & Monitoring
- **Vercel Analytics**: User analytics and insights
- **Speed Insights**: Performance monitoring
- **SEO**: Open Graph and Twitter Card support

## 📱 Responsive Design

The site follows a mobile-first approach with:
- Fluid typography scaling
- Responsive spacing and layout
- Touch-friendly interactions
- Optimized for all device sizes

## 🚀 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: Efficient font loading strategies
- **Bundle Optimization**: Tree-shaking and code splitting
- **Caching**: Optimized caching strategies

## 🌙 Dark Mode Implementation

The dark mode system uses:
- CSS `prefers-color-scheme` media query
- CSS custom properties for theme colors
- Smooth transitions between themes
- Automatic system preference detection
- No JavaScript required for theme switching

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run vercel-build # Vercel build command
```

## 📦 Dependencies

### Production
- `next`: React framework
- `react` & `react-dom`: React library
- `@vercel/analytics`: Analytics integration
- `@vercel/speed-insights`: Performance monitoring

### Development
- `typescript`: Type checking
- `eslint`: Code linting
- `tailwindcss`: Utility-first CSS
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixes

## 🌍 Deployment

The site is deployed on Vercel with:
- Automatic deployments on push to main
- Node.js 22.x runtime
- Optimized build process
- CDN distribution
- SSL/TLS encryption

## 📄 License

This project is private and proprietary to The Wrong Code.