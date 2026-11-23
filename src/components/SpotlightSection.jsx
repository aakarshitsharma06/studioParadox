import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { spotlightCollaborations, pressAchievements } from '../data/spotlightData';
import { ArrowUpRight } from 'lucide-react';

export default function SpotlightSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpotlight = spotlightCollaborations[activeTab];

  return (
    <section className="relative bg-black text-foreground py-24 md:py-36 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/40 block mb-3">
              PRESS & ACHIEVEMENTS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white">
              In the spotlight
            </h2>
          </div>
          <p className="font-mono text-xs md:text-sm text-foreground/50 max-w-md leading-relaxed uppercase tracking-wider">
            CINEMA, CULTURE AND NATIONAL PRESS —<br />
            34 FEATURES, AWARDS AND COLLABORATIONS
          </p>
        </div>

        {/* Spotlight Showcase Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 items-center">
          {/* Spotlight Image Card */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSpotlight.id}
                src={currentSpotlight.image}
                alt={currentSpotlight.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] tracking-widest uppercase text-accent">
                {currentSpotlight.tag}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-foreground/80">
              <span>{currentSpotlight.category}</span>
              <span className="text-white font-medium">{currentSpotlight.stat}</span>
            </div>
          </div>

          {/* Spotlight Description & Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                {currentSpotlight.id} / 04 · {currentSpotlight.category}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white font-normal tracking-tight">
                {currentSpotlight.title}
              </h3>
              <p className="font-mono text-xs md:text-sm text-foreground/70 leading-relaxed">
                {currentSpotlight.description}
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              {spotlightCollaborations.map((item, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'border-white/30 bg-white/10 text-white'
                        : 'border-white/5 bg-transparent text-foreground/40 hover:text-white/80 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-foreground/50">{item.id}</span>
                      <span className="font-mono text-xs font-medium uppercase tracking-wider">
                        {item.title}
                      </span>
                    </div>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-45 text-accent' : 'opacity-0'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Continuous Infinite Marquee Ribbon of 30+ Features */}
        <div className="pt-12 border-t border-white/10">
          <span className="block font-mono text-[11px] tracking-ultra text-foreground/40 uppercase mb-6">
            RECOGNITION — 30 FEATURES, AWARDS & COVERS
          </span>

          <div className="relative w-full overflow-hidden select-none py-4 bg-white/[0.02] rounded-lg border border-white/5">
            <div className="flex w-max animate-marquee space-x-8">
              {[...pressAchievements, ...pressAchievements].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/60 hover:text-white transition-colors cursor-default whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-foreground/40">({item.publication} · {item.year})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
