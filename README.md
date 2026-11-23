# Studio Paradox — Architecture & Interior Design

A high-performance editorial web platform for **Studio Paradox**, crafted with React 18, Vite 5, Tailwind CSS, Lenis Smooth Scroll, and Framer Motion. Features pinned multi-phase horizontal scroll experiences, cinematics, interactive portfolio showcases, and responsive design modeled on premium architectural aesthetics.

---

## 🌟 Key Architectural Features

1. **Editorial Architecture Aesthetics**:
   - Ultra-dark theme (`#000000` / `#050505` with `#F2F2F2` typography and `#3df599` accents).
   - Typography: Space Grotesk, Cormorant Garamond, and Orbitron.
   - Smooth inertia-driven scrolling powered by Lenis (`lerp: 0.1`, `wheelMultiplier: 1`).

2. **Cinematic Startup Sequence**:
   - Radial vignette reveal with blurred scale-in of the Studio Paradox skyline mark and 0% → 100% progress counter.

3. **Pinned Hero Horizontal Scrub (`500vh`)**:
   - Stage 1: Card 0 contracts from `100vw` down to `50vw` (and `100svh` to `28.125vw`) while stationary.
   - Stage 2: Smooth horizontal travel across signature commissions (*ANANDA*, *RESIDENCE ONDRA*, *THE GRAND ALABASTER*, *IVORY ROYALE*, *AMERBAGH*).
   - Auto-nudge indicator and mobile touch swipe translation.

4. **Pinned "Our Process" Section (`400vh`)**:
   - Pinned 4-phase horizontal journey (*Concept*, *Walkthrough & Plan*, *Elevations*, *Site Work*) across `400vw` with 3D tilt perspective and active progress indicator.

5. **Projects Archive & Detailed Case Studies**:
   - Responsive filterable project grid (`/projects`) and rich spatial breakdown (`/projects/:slug`).

6. **Studio, Services, Careers & Contact**:
   - Full practice overview, team directory, service scope deliverables, open roles with application modal, and interactive contact page.

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **Animations & Physics**: Framer Motion 11
- **Smooth Scroll**: Lenis 1.3
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
