import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allProjects } from '../data/projectsData';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize2, Layers } from 'lucide-react';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = allProjects.findIndex((p) => p.slug === slug);
  const project = allProjects[projectIndex];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-foreground flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display text-4xl sm:text-6xl text-white mb-4">Project Not Found</h1>
        <p className="font-mono text-sm text-foreground/60 mb-8">The requested architectural commission could not be located.</p>
        <Link
          to="/projects"
          className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase"
        >
          Return to Selected Works
        </Link>
      </main>
    );
  }

  // Next Project
  const nextProject = allProjects[(projectIndex + 1) % allProjects.length];

  return (
    <main className="bg-black text-foreground min-h-screen pt-24 pb-32">
      {/* 01: Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-4 flex items-center justify-between border-b border-white/10 text-xs font-mono text-foreground/50">
        <Link to="/projects" className="flex items-center gap-2 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="uppercase tracking-widest">ALL PROJECTS</span>
        </Link>
        <span className="uppercase tracking-widest">
          COMMISSION REF · {project.slug.toUpperCase()}
        </span>
      </div>

      {/* 02: Hero Section */}
      <div className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

        <div className="absolute bottom-10 left-5 md:left-12 right-5 md:right-12 max-w-6xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-accent uppercase tracking-widest">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.location}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-light text-white tracking-tight uppercase leading-none">
            {project.title}
          </h1>

          <p className="font-mono text-xs md:text-base text-foreground/80 max-w-2xl leading-relaxed">
            {project.tagline || project.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 space-y-24 pt-16">
        {/* 03: Overview & Metrics Table */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs tracking-ultra uppercase text-accent block">
              01 — OVERVIEW
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-tight">
              A bespoke architectural vision tuned to context and light.
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-foreground/40 block text-[10px] tracking-wider uppercase">LOCATION</span>
              <div className="flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{project.location}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-foreground/40 block text-[10px] tracking-wider uppercase">YEAR</span>
              <div className="flex items-center gap-1.5 text-white">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>{project.year || '2024'}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-foreground/40 block text-[10px] tracking-wider uppercase">BUILT AREA</span>
              <div className="flex items-center gap-1.5 text-white">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
                <span>{project.area || '14,000 sq.ft'}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-foreground/40 block text-[10px] tracking-wider uppercase">TYPOLOGY</span>
              <div className="flex items-center gap-1.5 text-white">
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>{project.typology || 'Residential'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 04: Story Chapters (if available) */}
        {project.chapters && project.chapters.length > 0 && (
          <section className="space-y-12 border-b border-white/10 pb-20">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-ultra uppercase text-accent">
                02 — THE STORY
              </span>
              <span className="font-mono text-xs text-foreground/40 uppercase">
                SPATIAL CHOREOGRAPHY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.chapters.map((ch, i) => (
                <div key={i} className="p-8 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
                  <span className="font-mono text-xs text-accent">CHAPTER {ch.number}</span>
                  <h3 className="font-display text-xl text-white font-normal uppercase tracking-wide">
                    {ch.title}
                  </h3>
                  <p className="font-mono text-xs text-foreground/70 leading-relaxed">
                    {ch.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 05: Architectural Drawings / Elevation Blueprints */}
        {project.drawings && project.drawings.length > 0 && (
          <section className="space-y-8 border-b border-white/10 pb-20">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-ultra uppercase text-accent">
                03 — THE DRAWINGS
              </span>
              <span className="font-mono text-xs text-foreground/40 uppercase">
                SECTIONS & PLANS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.drawings.map((draw, idx) => (
                <div key={idx} className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/60 group">
                  <img
                    src={draw}
                    alt={`Drawing ${idx + 1}`}
                    className="w-full h-full object-cover filter contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/80 bg-black/80 px-3 py-1 rounded-md border border-white/10">
                    GFC ELEVATION SHEET · 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 06: Cinematic Photo Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-8 border-b border-white/10 pb-20">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-ultra uppercase text-accent">
                04 — GALLERY
              </span>
              <span className="font-mono text-xs text-foreground/40 uppercase">
                BUILT SPACES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src={img}
                    alt={`${project.title} detail ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 07: Specifications Table */}
        {project.specs && (
          <section className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
            <h3 className="font-mono text-xs tracking-ultra uppercase text-foreground/40">
              COMMISSION SPECIFICATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <span className="text-foreground/40 block text-[10px] mb-1 uppercase">CLIENT</span>
                <span className="text-white">{project.specs.client}</span>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px] mb-1 uppercase">PRINCIPAL ARCHITECTS</span>
                <span className="text-white">{project.specs.principalArchitects}</span>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px] mb-1 uppercase">PROJECT TEAM</span>
                <span className="text-white">{project.specs.team}</span>
              </div>
              <div>
                <span className="text-foreground/40 block text-[10px] mb-1 uppercase">STRUCTURAL CONSULTANT</span>
                <span className="text-white">{project.specs.structuralConsultant}</span>
              </div>
            </div>
          </section>
        )}

        {/* 08: Next Chapter / Next Project Teaser */}
        <section className="pt-8 border-t border-white/10">
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group block p-8 md:p-14 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-ultra uppercase text-accent block">
                  ↓ NEXT CHAPTER · {nextProject.year || '2024'}
                </span>
                <h3 className="font-display text-4xl sm:text-6xl text-white font-light uppercase tracking-tight group-hover:text-accent transition-colors">
                  {nextProject.title}
                </h3>
                <span className="font-mono text-xs text-foreground/50 tracking-wider uppercase block">
                  {nextProject.location}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white">
                <span>VIEW PROJECT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
