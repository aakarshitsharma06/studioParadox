import React from 'react';
import { services } from '../data/servicesData';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-foreground pt-28 pb-36 px-5 md:px-12">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Hero */}
        <div className="space-y-6 border-b border-white/10 pb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/50">
              DISCIPLINES & CAPABILITIES
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tighter text-white leading-tight">
            The studio,<br />
            <span className="text-white/40 italic font-serif">drawn at</span> every scale.
          </h1>

          <p className="font-mono text-xs md:text-sm text-foreground/60 max-w-xl leading-relaxed">
            From the urban master plan of a township to the tactile grip of a custom bronze door pull — our studio operates as a singular architectural voice across all six creative disciplines.
          </p>
        </div>

        {/* Detailed Service Volumes */}
        <div className="space-y-24">
          {services.map((item, idx) => (
            <section
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10 items-center"
            >
              {/* Left Column: Number, Title, Description, Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 font-mono text-xs text-accent">
                  <span>VOLUME {item.id}</span>
                  <span>·</span>
                  <span className="text-foreground/40">DISCIPLINE</span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light">
                  {item.title}
                </h2>

                <p className="font-serif italic text-lg md:text-xl text-foreground/80 leading-relaxed">
                  “{item.subtitle}”
                </p>

                <p className="font-mono text-xs md:text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Scope of Work */}
                <div className="pt-4 space-y-3">
                  <span className="font-mono text-xs tracking-widest uppercase text-foreground/40 block">
                    SCOPE OF WORK & DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.scope.map((sc, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-xs text-foreground/75">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{sc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white hover:text-accent transition-colors"
                  >
                    <span>COMMISSION {item.title.toUpperCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/90 bg-black/60 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md">
                    23DC STUDIO DISCIPLINE REF: {item.id}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Call to action */}
        <div className="p-10 md:p-16 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-accent tracking-ultra uppercase block mb-2">
              HAVE A BRIEF IN MIND?
            </span>
            <h3 className="font-display text-3xl md:text-5xl text-white font-light">
              Let's create something together.
            </h3>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-accent transition-colors shrink-0"
          >
            START A CONVERSATION
          </Link>
        </div>
      </div>
    </main>
  );
}
