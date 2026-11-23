import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'Concept',
    description:
      'This is where ideas take shape. We study the site, understand lifestyle needs, and define the core vision of the project before any form is fixed.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Walkthrough & Plan',
    description:
      'The design is translated into clear plans and walkthroughs, allowing clients to experience spaces, proportions, and flow before moving forward.',
    image:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Elevations',
    description:
      'Facades are carefully composed by balancing materials, proportions, and light, giving the project its identity and character.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Site Work',
    description:
      'Design meets execution on site, where drawings are translated into reality through close coordination, detailing, and supervision.',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
  },
];

function ProcessStepItem({ step, index, scrollYProgress }) {
  const r = index / processSteps.length;
  const n = (index + 1) / processSteps.length;
  const yParallax = useTransform(scrollYProgress, [r, n], ['5%', '-5%']);
  const scaleParallax = useTransform(scrollYProgress, [r, n], [1.08, 1]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    setTilt({ x: normY * -5, y: normX * 8 });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className="flex-shrink-0 flex flex-col h-full px-4 md:px-16 lg:px-24 justify-between pb-8 md:pb-12"
      style={{ width: '100vw' }}
    >
      {/* Step Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-4 md:mb-6 flex-shrink-0">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-mono text-xs text-foreground/30 tracking-[0.3em] uppercase">
            {step.number} / 04 — PHASE
          </span>
          <h3 className="font-display text-[1.5rem] sm:text-[2.2rem] md:text-[2.85rem] text-foreground tracking-normal leading-[1.05] whitespace-nowrap">
            {step.title}
          </h3>
        </div>
        <p className="font-mono text-xs md:text-sm text-foreground/50 leading-relaxed max-w-sm md:text-right">
          {step.description}
        </p>
      </div>

      {/* 3D Interactive Media Window */}
      <div
        ref={cardRef}
        className="relative flex-1 min-h-0 w-full max-w-5xl mx-auto overflow-hidden rounded-md border border-white/10"
        style={{ perspective: '1000px' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: isHovered
              ? 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ y: yParallax, scale: scaleParallax }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Step Meta */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-white/70 pointer-events-none">
            <span className="tracking-widest uppercase">
              STUDIO PARADOX · {step.title}
            </span>
            <span className="text-white/40">GFC SPECIFICATION</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Translates the 400vw container from 0% to -75% as user scrolls 400vh
  const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background z-10"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col z-10 bg-background">
        {/* Top Header */}
        <div className="px-4 md:px-16 lg:px-24 pt-12 pb-4 md:pt-16 md:pb-6 flex-shrink-0">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <div className="flex items-center gap-3 md:gap-4 rounded-full border border-border/70 bg-background px-4 py-2 ring-1 ring-border/30 shadow-[0_18px_60px_hsl(var(--foreground)/0.18)]">
              <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
              <span className="font-mono text-[11px] md:text-xs font-medium text-foreground tracking-[0.32em] uppercase">
                Our Process
              </span>
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-7xl lg:text-8xl text-foreground tracking-tight leading-[1.05]">
            Our Process
          </h2>
        </div>

        {/* 400vw Horizontal Track */}
        <motion.div
          className="flex flex-1 items-stretch will-change-transform"
          style={{ x: translateX, width: '400vw' }}
        >
          {processSteps.map((step, idx) => (
            <ProcessStepItem
              key={step.title}
              step={step}
              index={idx}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>

        {/* Bottom Horizontal Progress Bar */}
        <div className="px-4 md:px-16 lg:px-24 pb-4 md:pb-8 flex-shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-[1px] bg-foreground/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-foreground/40 w-full h-full"
                style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              />
            </div>
            <span className="font-mono text-[11px] text-foreground/40 tracking-widest">
              01 — 04
            </span>
          </div>
        </div>


      </div>
    </section>
  );
}
