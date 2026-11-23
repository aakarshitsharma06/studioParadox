import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black text-foreground border-t border-white/10 pt-20 pb-12 px-6 md:px-16 overflow-hidden">
      {/* Editorial Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none editorial-grid" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="block font-mono text-xs text-foreground/40 tracking-ultra uppercase mb-4">
              NEW COMMISSIONS & DIALOGUE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-light tracking-tighter leading-none text-white">
              Let's create<br />
              <span className="text-white/40 italic font-serif">something</span><br />
              together.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-8">
            <p className="font-mono text-xs md:text-sm text-foreground/60 max-w-sm lg:text-right leading-relaxed">
              Studio Paradox undertakes selected architectural, interior, and landscape commissions across India and internationally.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs tracking-widest font-semibold uppercase rounded-full hover:bg-accent transition-all duration-300"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/10 text-xs font-mono">
          {/* Navigation */}
          <div>
            <h4 className="text-foreground/40 tracking-widest uppercase mb-4">Directory</h4>
            <ul className="space-y-2.5 text-foreground/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Selected Projects</Link></li>
              <li><Link to="/studio" className="hover:text-white transition-colors">The Studio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Disciplines</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers at Paradox</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & FAQ</Link></li>
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h4 className="text-foreground/40 tracking-widest uppercase mb-4">Disciplines</h4>
            <ul className="space-y-2.5 text-foreground/70">
              <li>Architecture</li>
              <li>Interior Design</li>
              <li>Urban Planning</li>
              <li>Landscape Design</li>
              <li>Structural Consultancy</li>
              <li>Product Design</li>
            </ul>
          </div>

          {/* Inquiries */}
          <div>
            <h4 className="text-foreground/40 tracking-widest uppercase mb-4">Inquiries</h4>
            <div className="space-y-3 text-foreground/70">
              <div>
                <span className="text-foreground/40 block text-[10px]">NEW PROJECTS</span>
                <a href="mailto:hello@studioparadox.com" className="hover:text-white transition-colors">hello@studioparadox.com</a>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px]">DIRECT PHONE</span>
                <a href="tel:+919781934777" className="hover:text-white transition-colors">+91 97819 34777</a>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px]">PRESS & PR</span>
                <a href="mailto:pr@studioparadox.com" className="hover:text-white transition-colors">pr@studioparadox.com</a>
              </div>
            </div>
          </div>

          {/* Studio Details */}
          <div>
            <h4 className="text-foreground/40 tracking-widest uppercase mb-4">Headquarters</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded bg-black flex items-center justify-center border border-white/10">
                <img src="/logo-icon.png" alt="Studio Paradox" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-xs text-white uppercase tracking-wider">Studio Paradox</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              31.3°N · 75.6°E<br />
              Punjab, India<br />
              Mon — Sat 09:30 to 18:30 IST
            </p>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-foreground/40">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} STUDIO PARADOX</span>
            <span>·</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <span className="inline-block transition-transform group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
