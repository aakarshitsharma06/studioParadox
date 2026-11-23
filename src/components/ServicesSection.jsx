import React, { useState } from 'react';
import { services } from '../data/servicesData';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(services[0].id);

  return (
    <section id="services" className="relative bg-black text-foreground py-24 md:py-40 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/40 block mb-3">
              OUR SERVICES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-white">
              What We Do
            </h2>
          </div>
          <p className="font-mono text-xs md:text-sm text-foreground/50 max-w-md leading-relaxed">
            End-to-end design solutions that transform vision into built reality.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="divide-y divide-white/10">
          {services.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                className="group py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-start transition-colors duration-300 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
              >
                {/* Number & Title */}
                <div className="md:col-span-5 flex items-baseline gap-6">
                  <span className="font-mono text-sm md:text-base text-accent font-medium">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl font-light text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-foreground/40 tracking-wider uppercase block mt-1">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-4 space-y-4">
                  <p className="font-mono text-xs md:text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {item.scope.slice(0, 3).map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-mono text-[11px] text-foreground/50">
                        <Check className="w-3 h-3 text-accent" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Preview / Details Link */}
                <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full space-y-4">
                  <div className="w-full md:w-36 h-24 overflow-hidden rounded-lg border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground/50 group-hover:text-white transition-colors"
                  >
                    <span>VIEW SCOPE</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Link */}
        <div className="pt-12 text-center md:text-right">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 font-mono text-xs tracking-ultra uppercase text-foreground/60 hover:text-white transition-colors"
          >
            <span>EXPLORE ALL 6 DISCIPLINES & SCOPES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
