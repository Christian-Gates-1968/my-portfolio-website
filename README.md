# Advanced Portfolio Website

A modern, highly interactive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Bento Grid Layout** - Masonry-style project showcase
- 🌙 **Dark Mode UI** - Deep zinc backgrounds with high contrast
- ✨ **Micro-Interactions** - Smooth hover effects and animations
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **Performance Optimized** - Built with Next.js App Router
- 🎭 **Framer Motion Animations** - Bouncy entry animations and transitions

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter
- **Language:** TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with font configuration
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles and Tailwind imports
├── components/
│   ├── BentoGrid.tsx   # Reusable bento grid and card components
│   ├── Navbar.tsx      # Floating navigation bar
│   ├── Hero.tsx        # Hero section with animated intro
│   ├── TechStack.tsx   # Tech stack marquee
│   ├── Experience.tsx  # Timeline-based experience section
│   ├── Projects.tsx    # Bento grid project showcase
│   ├── Contact.tsx     # Contact form and social links
│   └── Footer.tsx      # Simple footer
├── lib/
│   └── utils.ts        # Utility functions (cn helper)
└── public/             # Static assets
```

## Customization

### Update Personal Information

Edit the following files to add your information:

1. **Hero Section** - [components/Hero.tsx](components/Hero.tsx)
   - Update name, title, and bio

2. **Tech Stack** - [components/TechStack.tsx](components/TechStack.tsx)
   - Add/remove technologies in the `techStack` array

3. **Experience** - [components/Experience.tsx](components/Experience.tsx)
   - Update the `experiences` array with your work history

4. **Projects** - [components/Projects.tsx](components/Projects.tsx)
   - Modify the `projects` array with your projects

5. **Contact** - [components/Contact.tsx](components/Contact.tsx)
   - Update social links and email

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT
