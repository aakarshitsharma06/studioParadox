import React from 'react';
import { studioInfo } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-black text-foreground pt-28 pb-36 px-5 md:px-12">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01: Hero / Studio Manifesto */}
        <div className="space-y-8 border-b border-white/10 pb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/50">
              STUDIO PHILOSOPHY & MANIFESTO
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-light tracking-tighter text-white leading-tight">
            We build stories through space, light, material, and detail — modern in approach, rooted in emotion, designed with intent.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            <div className="md:col-span-8">
              <blockquote className="font-serif italic text-lg md:text-2xl text-foreground/80 border-l-2 border-accent pl-6 leading-relaxed">
                {studioInfo.quote}
              </blockquote>
            </div>
            <div className="md:col-span-4 flex md:justify-end items-end font-mono text-xs text-foreground/50">
              <span>FOUNDED 2009 · STUDIO PARADOX</span>
            </div>
          </div>
        </div>

        {/* 02: Principal Architects Section */}
        <section className="space-y-12 border-b border-white/10 pb-20">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-ultra uppercase text-accent">
              THE TEAM · PRINCIPAL ARCHITECTS
            </span>
            <span className="font-mono text-xs text-foreground/40 uppercase">
              CO-FOUNDERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {studioInfo.founders.map((founder, i) => (
              <div key={i} className="space-y-6 p-8 rounded-2xl bg-white/[0.02] border border-white/10 group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase block">
                    {founder.role}
                  </span>
                  <h3 className="font-display text-3xl text-white font-light">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-foreground/70 leading-relaxed pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Metrics */}
          <div className="grid grid-cols-3 gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center font-mono">
            {studioInfo.stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-display text-4xl sm:text-6xl text-white font-light">
                  {s.value}
                </span>
                <span className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-widest block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 03: Inside Our Studio Tour (Spaces) */}
        <section className="space-y-12 border-b border-white/10 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-ultra uppercase text-accent block mb-2">
                INSIDE OUR STUDIO
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
                A space where design thinks before it speaks.
              </h2>
            </div>
            <p className="font-mono text-xs text-foreground/50 max-w-sm leading-relaxed">
              Inside Studio Paradox, every material, proportion, and detail is chosen with intent, restraint, and tactical calmness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioInfo.spaces.map((sp) => (
              <div key={sp.id} className="group rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sp.image}
                    alt={sp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-foreground/40">
                    <span>SPACE {sp.id}</span>
                    <span className="text-accent uppercase tracking-wider">{sp.name}</span>
                  </div>
                  <h4 className="font-display text-xl text-white font-normal">
                    {sp.title}
                  </h4>
                  <p className="font-mono text-xs text-foreground/60 leading-relaxed pt-1">
                    {sp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04: Team Directory */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-ultra uppercase text-accent block mb-2">
                WHO WE ARE · COLLABORATORS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
                A Culture Built Through Design
              </h2>
            </div>
            <p className="font-mono text-xs text-foreground/50 max-w-sm leading-relaxed">
              Behind every commission, there is a dedicated collective of architects, visualizers, researchers, and artisans.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {studioInfo.team.map((m, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all font-mono"
              >
                <span className="text-[10px] text-foreground/30 block mb-1">0{i + 1}</span>
                <h4 className="text-sm font-medium text-white mb-0.5">{m.name}</h4>
                <p className="text-[11px] text-foreground/50">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05: Call to Action */}
        <div className="p-10 md:p-16 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-accent tracking-ultra uppercase block mb-2">
              LOOKING FOR YOUR NEXT ARCHITECTURAL COMMISSION?
            </span>
            <h3 className="font-display text-3xl md:text-5xl text-white font-light">
              Let's create something together.
            </h3>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-accent transition-colors shrink-0"
          >
            START A PROJECT
          </Link>
        </div>
      </div>
    </main>
  );
}
