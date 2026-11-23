import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { signatureProjects } from '../data/projectsData';

export default function HeroSlider() {
  const sectionRef = useRef(null);
  const touchContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile horizontal swipe to vertical scroll conversion (matches 23dcarchitects.com)
  useEffect(() => {
    const el = touchContainerRef.current;
    if (!el) return;
    let startX = 0, startY = 0, lastX = 0, direction = 'none';

    const onTouchStart = (e) => {
      const t = e.touches[0];
      startX = lastX = t.clientX;
      startY = t.clientY;
      direction = 'none';
    };

    const onTouchMove = (e) => {
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (direction === 'none') {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        direction = Math.abs(dx) > Math.abs(dy) * 1.2 ? 'x' : 'y';
      }
      if (direction !== 'x') return;
      const deltaX = t.clientX - lastX;
      lastX = t.clientX;
      window.scrollBy({ top: -deltaX * 1.4, behavior: 'auto' });
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Initial Hero Scroll Nudge after 4 seconds (matches 23dcarchitects.com)
  useEffect(() => {
    if (window.scrollY !== 0 || sessionStorage.getItem('heroNudgeShown')) return;
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
      cleanup();
    };

    const timer = setTimeout(() => {
      if (cancelled || window.scrollY !== 0) return;
      sessionStorage.setItem('heroNudgeShown', '1');
      const lenis = window.__lenis;
      const nudgeAmount = window.innerHeight * 0.12;

      if (lenis?.scrollTo) {
        lenis.scrollTo(nudgeAmount, { duration: 0.9 });
        setTimeout(() => lenis.scrollTo(0, { duration: 1.1 }), 1000);
      } else {
        window.scrollTo({ top: nudgeAmount, behavior: 'smooth' });
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 1000);
      }
      cleanup();
    }, 4000);

    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener('scroll', cancel);
      window.removeEventListener('touchstart', cancel);
      window.removeEventListener('wheel', cancel);
    }

    window.addEventListener('scroll', cancel, { passive: true, once: true });
    window.addEventListener('touchstart', cancel, { passive: true, once: true });
    window.addEventListener('wheel', cancel, { passive: true, once: true });

    return cleanup;
  }, []);

  // Framer Motion useScroll hook on the 500vh container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // V = 0.1 marks the end of the initial hero shrink / compression phase
  const V = 0.1;
  const m = useTransform(scrollYProgress, [0, V], [0, 1]);

  // Card 0 Width: expands 100vw -> 50vw on desktop (or 92vw on mobile)
  const p = isMobile ? 92 : 50;
  const card0Width = useTransform(m, (L) => `calc(${100 * (1 - L)}vw + ${p * L}vw)`);

  // Card 0 Height: 100svh -> 28.125vw (16:9 ratio) on desktop (or 52vh on mobile)
  const x = isMobile ? 52 : 28.125;
  const f = isMobile ? 'vh' : 'vw';
  const card0Height = useTransform(m, (L) => `calc(${100 * (1 - L)}svh + ${x * L}${f})`);

  // Card 0 Border Radius: 0px -> 8px
  const card0Radius = useTransform(scrollYProgress, [0, V * 0.4, V], [0, 4, 8]);

  // Track Layout: Padding left and gap interpolate from 0 to target
  const trackPaddingLeft = useTransform(scrollYProgress, [0, V], ['0px', isMobile ? '4vw' : '64px']);
  const trackGap = useTransform(scrollYProgress, [0, V], ['0px', isMobile ? '12px' : '32px']);

  // Horizontal scrub translation (W):
  // Stays 0vw from [0 to V], then scrubs from V to 1.0
  const trackTranslateX = isMobile
    ? useTransform(scrollYProgress, [V, V + 0.06, 1], ['0vw', '-95vw', '-465vw'])
    : useTransform(scrollYProgress, [V, 1], ['0vw', '-220vw']);

  // Floating Elements Opacity: Fades in immediately once user begins scrolling (0.002 -> 0.02)
  const badgeOpacity = useTransform(scrollYProgress, [0.002, 0.02], [0, 1]);
  const badgeY = useTransform(scrollYProgress, [0.002, 0.02], [10, 0]);
  const badgeScale = useTransform(scrollYProgress, [0.002, 0.02], [0.995, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.002, 0.02], [0, 1]);

  // Lead Card Logo mark transformation (shrinks and ascends toward header)
  const markScale = useTransform(scrollYProgress, [0, V * 0.4], [1, 0.08]);
  const markY = useTransform(scrollYProgress, [V * 0.2, V * 0.4, V * 0.6], [-30, -450, -520]);
  const markOpacity = useTransform(scrollYProgress, [V * 0.35, V * 0.55], [1, 0]);
  const taglineOpacity = useTransform(scrollYProgress, [0, V * 0.2], [1, 0]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ height: '500vh' }}
      className="relative bg-background text-foreground"
    >
      {/* Sticky Fullscreen Viewport */}
      <div
        ref={touchContainerRef}
        className="sticky top-0 h-[100svh] overflow-hidden"
      >
        {/* Floating Top Badge: "Our Projects" */}
        <motion.div
          style={{ opacity: badgeOpacity, y: badgeY, scale: badgeScale }}
          className="pointer-events-none absolute top-0 left-0 right-0 z-40 flex items-center justify-center md:justify-start px-4 md:px-16 pt-20 md:pt-24 pb-4"
        >
          <div className="flex items-center gap-3 md:gap-4 rounded-full border border-border/70 bg-background px-4 py-2.5 ring-1 ring-border/30 shadow-[0_18px_60px_hsl(var(--foreground)/0.18),0_0_80px_hsl(var(--foreground)/0.06)]">
            <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
            <span className="font-mono text-[11px] md:text-xs font-medium text-foreground tracking-[0.32em] uppercase">
              Our Projects
            </span>
          </div>
        </motion.div>

        {/* Center Horizontal Track Container */}
        <div className="h-full flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ paddingLeft: trackPaddingLeft }}
            className="flex items-center w-full"
          >
            <motion.div
              style={{ x: trackTranslateX, gap: trackGap }}
              className="flex items-center will-change-transform"
            >
              {/* 00: Lead Hero Intro Card */}
              <motion.div
                className={`flex-shrink-0 group ${isMobile ? 'w-[92vw]' : 'w-[50vw]'}`}
                style={{ width: card0Width }}
              >
                <motion.div
                  className="relative overflow-hidden bg-background"
                  style={{
                    height: card0Height,
                    borderRadius: card0Radius,
                  }}
                >
                  {/* Hero Media Background */}
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Studio Paradox Hero Reel"
                    className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.03] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none" />

                  {/* Centered Brand Mark & Tagline */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:justify-end pb-12 md:pb-20 px-6 text-center select-none">
                    <motion.div
                      style={{ scale: markScale, y: markY, opacity: markOpacity }}
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        src="/logo-icon.png"
                        alt="Studio Paradox"
                        className="h-14 sm:h-24 md:h-36 w-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                      />
                      <span className="font-display text-sm sm:text-2xl md:text-3xl tracking-[0.22em] text-white font-light mt-2 sm:mt-3 uppercase">
                        STUDIO PARADOX
                      </span>
                    </motion.div>

                    <motion.div
                      style={{ opacity: taglineOpacity }}
                      className="mt-4 md:mt-6"
                    >
                      <span className="font-mono text-foreground/70 tracking-[0.22em] text-[10px] md:text-xs uppercase block">
                        Visualising this world and the next
                      </span>
                    </motion.div>
                  </div>

                  <span className="absolute bottom-3 md:bottom-4 right-4 md:right-6 text-display text-4xl md:text-5xl lg:text-7xl text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-1000 pointer-events-none">
                    00
                  </span>
                </motion.div>
              </motion.div>

              {/* 01 — 05: Signature Projects */}
              {signatureProjects.map((project, idx) => (
                <div
                  key={project.id || idx}
                  className={`flex-shrink-0 group ${isMobile ? 'w-[92vw]' : 'w-[50vw]'}`}
                >
                  <Link to={`/projects/${project.slug}`} className="block">
                    <div
                      className={`relative overflow-hidden bg-background ${
                        isMobile ? 'h-[52vh] w-full rounded-sm' : 'aspect-[16/9] rounded-sm'
                      }`}
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out group-hover:scale-[1.03] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />

                      {/* Number Watermark */}
                      <span className="absolute bottom-3 md:bottom-4 right-4 md:right-6 font-display text-4xl md:text-5xl lg:text-7xl text-foreground/[0.06] group-hover:text-foreground/[0.12] transition-colors duration-1000 select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Project Title & Category */}
                    <motion.div
                      style={{ opacity: overlayOpacity }}
                      className="mt-3 md:mt-5 overflow-hidden flex items-baseline justify-between"
                    >
                      <h3 className="font-display text-xs md:text-base tracking-[0.18em] md:tracking-[0.24em] text-foreground/95 group-hover:text-foreground transition-colors duration-700 uppercase truncate">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] md:text-xs text-foreground/40 tracking-widest uppercase ml-4 flex-shrink-0">
                        {project.category} · {project.year}
                      </span>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Navigation Pill: "WHO WE ARE" */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute bottom-20 md:bottom-24 left-0 right-0 z-40 flex justify-center md:justify-start px-4 md:px-16 lg:px-24"
        >
          <a
            href="#studio"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('studio');
              if (el) {
                if (window.__lenis) {
                  window.__lenis.scrollTo(el);
                } else {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="inline-flex items-center gap-4 group cursor-pointer"
          >
            <span className="w-12 h-px bg-foreground/70 group-hover:w-20 group-hover:bg-foreground transition-all duration-700" />
            <span className="font-mono text-[12px] font-medium text-foreground group-hover:text-foreground transition-colors duration-700 tracking-[0.3em] uppercase">
              WHO WE ARE
            </span>
          </a>
        </motion.div>


      </div>
    </section>
  );
}
