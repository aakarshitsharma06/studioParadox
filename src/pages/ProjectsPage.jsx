import React, { useState, useMemo } from 'react';
import { allProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { Search } from 'lucide-react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    'ALL',
    'ARCHITECTURE',
    'INTERIORS',
    'MODERN',
    'CLASSICAL',
    'COMMERCIAL',
    'TROPICAL'
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Filter tab logic
      const matchesTab = () => {
        if (activeFilter === 'ALL') return true;
        if (activeFilter === 'ARCHITECTURE') return project.category.toLowerCase().includes('architecture');
        if (activeFilter === 'INTERIORS') return project.category.toLowerCase().includes('interiors');
        if (project.style) return project.style.toUpperCase() === activeFilter;
        return true;
      };

      // Search query logic
      const matchesSearch = () => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(q) ||
          project.location.toLowerCase().includes(q) ||
          project.category.toLowerCase().includes(q) ||
          project.typology?.toLowerCase().includes(q)
        );
      };

      return matchesTab() && matchesSearch();
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-black text-foreground pt-28 pb-32 px-5 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Hero Title */}
        <div className="space-y-4 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/50">
              ARCHITECTURAL ARCHIVE
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter text-white leading-none">
            SELECTED<br />WORKS.
          </h1>

          <p className="font-mono text-xs md:text-sm text-foreground/60 max-w-xl leading-relaxed pt-2">
            A curated portfolio of luxury residences, commercial headquarters, and contemplative interiors crafted across India and worldwide.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/[0.04] text-foreground/60 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, city, style..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-10 pr-4 py-2 font-mono text-xs text-white placeholder-foreground/40 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-white/10 rounded-2xl space-y-4">
            <span className="font-mono text-xs tracking-widest uppercase text-foreground/40 block">
              NO MATCHING PROJECTS FOUND
            </span>
            <p className="font-mono text-sm text-foreground/60">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button
              onClick={() => {
                setActiveFilter('ALL');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs tracking-widest uppercase transition-colors"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
