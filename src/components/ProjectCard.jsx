import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block relative overflow-hidden rounded-xl bg-card border border-white/10 hover:border-white/30 transition-all duration-500"
    >
      {/* Image Container with Zoom */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black/40">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] tracking-widest uppercase text-foreground/80">
            {project.category}
          </span>
          {project.year && (
            <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 font-mono text-[10px] text-foreground/50">
              {project.year}
            </span>
          )}
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6 space-y-2">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl md:text-2xl font-light text-white tracking-tight group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-foreground/40 uppercase">
            {project.typology || project.style}
          </span>
        </div>

        <p className="font-mono text-xs text-foreground/50 tracking-wider">
          {project.location}
        </p>
      </div>
    </Link>
  );
}
