import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StartupAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Freeze scroll while startup animation is active
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    if (window.__lenis) window.__lenis.stop();

    // Increment progress counter from 0 to 100 smoothly
    const startTime = performance.now();
    const duration = 1600; // 1.6 seconds

    let frameId;
    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        // Hold at 100% briefly, then trigger exit
        setTimeout(() => {
          setShow(false);
          document.body.style.overflow = originalOverflow;
          document.body.style.touchAction = originalTouchAction;
          if (window.__lenis) window.__lenis.start();
          if (onComplete) onComplete();
        }, 400);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      if (window.__lenis) window.__lenis.start();
    };
  }, [onComplete]);

  const easeCurve = [0.76, 0, 0.24, 1];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="startup-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: easeCurve }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none"
          style={{ pointerEvents: 'auto' }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {/* Radial blur & vignette backdrops matching 23DC */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(15,15,18,0.7) 0%, rgba(0,0,0,0.92) 65%, #000000 100%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)',
            }}
          />

          {/* Centered Brand Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm px-6"
          >
            {/* Studio Paradox Skyline Wireframe Logo */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-xl">
              <img
                src="/studio-paradox-logo.jpg"
                alt="Studio Paradox"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Typography */}
            <div className="space-y-1">
              <h1 className="font-display text-2xl md:text-3xl font-light tracking-[0.2em] text-white uppercase">
                STUDIO PARADOX
              </h1>
              <p className="font-mono text-[11px] md:text-xs text-[#E53935] tracking-[0.35em] uppercase font-medium">
                ARCHITECTURE
              </p>
            </div>

            {/* Progress Counter & Line */}
            <div className="w-48 pt-4 space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px] text-white/50 tracking-widest">
                <span>LOADING</span>
                <span className="text-white font-medium">{progress}%</span>
              </div>
              <div className="w-full h-[1.5px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-white/40 via-white to-[#E53935]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
