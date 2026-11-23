import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setIstTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = 'auto';
      if (window.__lenis) window.__lenis.start();
    }
  }, [menuOpen]);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'STUDIO', path: '/studio' },
    { label: 'SERVICES', path: '/services' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { name: 'YouTube', url: 'https://www.youtube.com/' },
    { name: 'Pinterest', url: 'https://pinterest.com/' },
    { name: 'Facebook', url: 'https://facebook.com/' },
    { name: 'X', url: 'https://x.com/' },
  ];

  return (
    <>
      {/* Top Navbar Header matching 23dcarchitects.com exactly */}
      <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none bg-background/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-foreground/5 md:border-transparent transition-all duration-300">
        <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 pb-5 md:pb-6">
          {/* Left: Live IST Time */}
          <span className="font-mono text-foreground/50 text-[10px] md:text-xs pointer-events-auto tracking-widest uppercase">
            IST {istTime || '18:30'} GMT +5:30
          </span>

          {/* Center: Brand Mark & Studio Paradox Title (NO ARCHITECTURE SUBTITLE) */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Studio Paradox Home"
            >
              <div className="h-6 md:h-7 w-6 md:w-7 rounded overflow-hidden bg-black flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors p-0.5">
                <img
                  src="/logo-icon.png"
                  alt="Studio Paradox Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-xs md:text-sm tracking-[0.24em] font-light text-white uppercase group-hover:text-accent transition-colors leading-none">
                STUDIO PARADOX
              </span>
            </Link>
          </div>

          {/* Right: Menu Trigger */}
          <div className="pointer-events-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="font-mono text-xs tracking-widest text-foreground/80 group-hover:text-foreground">
                MENU
              </span>
              <div className="flex flex-col gap-1 w-4">
                <span className="w-full h-px bg-foreground/80 group-hover:bg-foreground transition-all duration-300" />
                <span className="w-2/3 h-px bg-foreground/80 group-hover:bg-foreground transition-all duration-300 group-hover:w-full" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[120] bg-black text-foreground flex flex-col justify-between p-6 sm:p-10 md:p-16 overflow-y-auto"
          >
            {/* Top Bar of Overlay */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded overflow-hidden bg-black flex items-center justify-center border border-white/10 p-0.5">
                  <img
                    src="/logo-icon.png"
                    alt="Studio Paradox Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-display text-sm tracking-[0.24em] text-white uppercase font-light">
                  STUDIO PARADOX
                </span>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-white font-mono text-xs tracking-widest uppercase transition-colors"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-12">
              <div className="md:col-span-8 flex flex-col space-y-4 sm:space-y-6">
                {navItems.map((item, idx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.4 }}
                    >
                      <Link
                        to={item.path}
                        className={`group inline-flex items-baseline gap-4 font-display text-3xl sm:text-5xl md:text-7xl font-light tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-white pl-4 border-l-2 border-accent'
                            : 'text-foreground/50 hover:text-white hover:translate-x-3'
                        }`}
                      >
                        <span className="font-mono text-xs md:text-sm text-foreground/30 tracking-widest">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                        <ArrowRight className="w-5 h-5 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Directory & Coordinates */}
              <div className="md:col-span-4 flex flex-col justify-end space-y-6 font-mono text-xs text-foreground/60 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                <div>
                  <span className="text-foreground/40 block mb-1 uppercase tracking-widest">
                    PRACTICE
                  </span>
                  <p className="text-foreground/90">
                    Architecture · Interior Design · Master Planning · Landscape
                  </p>
                </div>

                <div>
                  <span className="text-foreground/40 block mb-1 uppercase tracking-widest">
                    CONTACT
                  </span>
                  <p className="text-foreground/90">contact@studioparadox.com</p>
                  <p className="text-foreground/90">+91 98140 00000</p>
                </div>

                <div>
                  <span className="text-foreground/40 block mb-1 uppercase tracking-widest">
                    HQ
                  </span>
                  <p className="text-foreground/90">Studio Paradox Headquarters</p>
                  <p className="text-foreground/90">Punjab & Delhi NCR, India</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Social Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
              <span className="text-foreground/40">
                © {new Date().getFullYear()} STUDIO PARADOX. ALL RIGHTS RESERVED.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
