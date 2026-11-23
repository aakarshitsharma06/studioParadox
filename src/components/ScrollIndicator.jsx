import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Hide indicator when near the bottom (less than 250px from footer)
      const nearBottom = totalHeight - (scrollY + windowHeight) < 250;
      setVisible(!nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollClick = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(window.innerHeight * 0.9, { duration: 1.2 });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleScrollClick}
          role="button"
          tabIndex={0}
          aria-label="Scroll down"
          className="fixed right-4 md:right-8 bottom-5 md:bottom-8 z-[90] flex flex-col items-center gap-2 cursor-pointer select-none group"
        >
          {/* 9 Cascading Chevrons */}
          <div
            className="flex flex-col items-center -space-y-1 text-foreground"
            style={{ filter: 'drop-shadow(0 0 12px hsl(var(--background)))' }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((c) => (
              <svg
                key={c}
                className="scroll-cue-chevron"
                style={{ animationDelay: `${c * 0.09}s` }}
                width="20"
                height="14"
                viewBox="0 0 18 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 2 L9 9 L16 2" />
              </svg>
            ))}
          </div>

          {/* Scroll label */}
          <span
            className="font-sans text-foreground/90 text-xs md:text-sm tracking-[0.2em] uppercase font-light group-hover:text-white transition-colors"
            style={{ textShadow: '0 0 12px rgba(0,0,0,0.8)' }}
          >
            Scroll
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
