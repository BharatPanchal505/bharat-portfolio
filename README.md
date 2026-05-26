# Bharat Panchal – Portfolio

Futuristic cyberpunk-themed developer portfolio for **Bharat Pravinbhai Panchal**, IoT & AI Developer.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations & transitions
- **React Three Fiber / Three.js** — 3D holographic orb in hero
- **GSAP** — advanced animations
- **Lenis** — smooth scrolling
- **React Type Animation** — typing effect
- **React Icons** — icon library

## Features

- ⚡ Futuristic loading screen with progress bar
- 🖱️ Custom animated cursor with glow follower
- 🌐 3D holographic orb with React Three Fiber
- 🔢 Matrix rain digital background
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Cyberpunk dark neon UI (cyan + purple + pink)
- 🏆 All resume data from Bharat's CV
- ✉️ Working contact form UI

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
bharat-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── MatrixRain.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo at vercel.com/new
```

## Customization

Edit `src/data/portfolio.js` to update all content (name, projects, skills, etc.)
