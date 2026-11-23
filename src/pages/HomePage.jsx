import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import SpotlightSection from '../components/SpotlightSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import { studioInfo } from '../data/studioData';
import { ArrowUpRight, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="bg-black text-foreground">
      {/* 01: Hero Section with Pinned 500vh Horizontal Scrub Slider */}
      <HeroSlider />

      {/* 02: WHO WE ARE / Studio Section */}
      <section id="studio" className="relative bg-black text-foreground py-24 md:py-44 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/50">
              WHO WE ARE
            </span>
          </div>

          {/* Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white leading-tight">
                Architecture that connects people, place and purpose.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <p className="font-mono text-xs md:text-sm text-foreground/70 leading-relaxed">
                Founded in 2009, Studio Paradox creates architecture, interiors, planning, and landscapes across India and globally — shaped by context, detail, and a deeply personalized design approach.
              </p>
              <Link
                to="/studio"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white hover:text-accent transition-colors"
              >
                <span>STUDIO MANIFESTO & TEAM</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Recognition Badge & Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10">
            {/* The D-List 2025 Highlight Card */}
            <div className="md:col-span-5 p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-ultra uppercase text-accent">
                  RECOGNITION — 2025
                </span>
                <Award className="w-5 h-5 text-accent" />
              </div>

              <div>
                <h4 className="font-display text-2xl md:text-3xl font-light text-white mb-1">
                  The D‑List 2025
                </h4>
                <span className="font-mono text-xs text-foreground/50 tracking-wider uppercase">
                  A TIMES GROUP INITIATIVE
                </span>
              </div>

              <blockquote className="font-serif italic text-sm md:text-base text-foreground/80 border-l-2 border-accent pl-4 leading-relaxed">
                “Design should be honest, beautiful, useful and purposeful — architecture that understands how people actually live.”
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-[11px]">
                <div>
                  <span className="text-foreground/40 block">EST.</span>
                  <span className="text-white">2009</span>
                </div>
                <div>
                  <span className="text-foreground/40 block">STUDIO</span>
                  <span className="text-white">Paradox HQ</span>
                </div>
                <div>
                  <span className="text-foreground/40 block">PRACTICE</span>
                  <span className="text-white">Architecture · Interiors</span>
                </div>
                <div>
                  <span className="text-foreground/40 block">REACH</span>
                  <span className="text-white">India & Global</span>
                </div>
              </div>
            </div>

            {/* Founders Photo & 3 Stats Counters */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-10">
              {/* Studio Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Studio Paradox Principal Architects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-baseline justify-between font-mono text-xs text-foreground/80">
                  <span className="text-white font-medium">Studio Paradox Partners</span>
                  <span className="text-foreground/50 uppercase text-[10px]">
                    CO-FOUNDERS & PRINCIPAL ARCHITECTS
                  </span>
                </div>
              </div>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {studioInfo.stats.map((s, i) => (
                  <div key={i} className="space-y-1">
                    <span className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
                      {s.value}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-foreground/50 tracking-wider uppercase block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: Press, Spotlight & Awards */}
      <SpotlightSection />

      {/* 04: What We Do (Services) */}
      <ServicesSection />

      {/* 05: Our Process */}
      <ProcessSection />
    </main>
  );
}
