import React, { useState } from 'react';
import { careersCommitments, openPositions } from '../data/careersData';
import ApplicationModal from '../components/ApplicationModal';
import { ChevronDown, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState(openPositions[0].id);

  const handleApply = (pos) => {
    setSelectedPosition(pos);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-foreground pt-28 pb-36 px-5 md:px-12">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01: Hero */}
        <div className="space-y-6 border-b border-white/10 pb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/50">
              REACH FOR THE WORK
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter text-white leading-none">
            Make your mark<br />
            <span className="text-white/40 italic font-serif">with Studio Paradox</span>
          </h1>

          <p className="font-mono text-xs md:text-sm text-foreground/60 max-w-xl leading-relaxed">
            Join a collaborative team shaping spaces with ambition, detail, and an unapologetic architectural language that stands apart.
          </p>
        </div>

        {/* 02: Life at Studio Paradox (6 Commitments) */}
        <section className="space-y-12 border-b border-white/10 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-ultra uppercase text-accent block mb-2">
                LIFE AT STUDIO PARADOX
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
                What comes with joining us.
              </h2>
            </div>
            <p className="font-mono text-xs text-foreground/50 max-w-sm leading-relaxed">
              Six commitments that shape the everyday craft of working at Studio Paradox — from the room you sleep in to the world we send you to see.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careersCommitments.map((c) => (
              <div
                key={c.id}
                className="p-8 rounded-xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-white/25 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-xs text-accent">
                  <span>COMMITMENT {c.id}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
                <h3 className="font-display text-2xl text-white font-light">
                  {c.title}
                </h3>
                <p className="font-mono text-xs text-foreground/65 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 03: Open Positions Accordion */}
        <section id="positions" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div>
              <span className="font-mono text-xs tracking-ultra uppercase text-accent block mb-2">
                CURRENT OPENINGS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
                Open Positions
              </h2>
            </div>
            <span className="font-mono text-xs text-foreground/40 uppercase">
              {openPositions.length} POSITIONS AVAILABLE
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {openPositions.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div key={job.id} className="py-8 space-y-6">
                  {/* Job Header Row */}
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-accent">{job.department}</span>
                      <h3 className="font-display text-2xl md:text-4xl text-white font-light group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-6 font-mono text-xs text-foreground/50">
                      <span>{job.experience}</span>
                      <span>·</span>
                      <span>{job.type}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Job Details */}
                  {isExpanded && (
                    <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/5 font-mono text-xs">
                      <div className="lg:col-span-4 space-y-4">
                        <span className="text-foreground/40 uppercase tracking-widest block text-[10px]">
                          ROLE OVERVIEW
                        </span>
                        <p className="text-foreground/80 leading-relaxed">
                          {job.overview}
                        </p>
                        <div className="pt-4">
                          <button
                            onClick={() => handleApply(job)}
                            className="px-6 py-3 rounded-full bg-white text-black font-semibold uppercase tracking-widest hover:bg-accent transition-colors"
                          >
                            APPLY FOR THIS ROLE
                          </button>
                        </div>
                      </div>

                      <div className="lg:col-span-4 space-y-3">
                        <span className="text-foreground/40 uppercase tracking-widest block text-[10px]">
                          KEY RESPONSIBILITIES
                        </span>
                        <ul className="space-y-2 text-foreground/70">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-4 space-y-3">
                        <span className="text-foreground/40 uppercase tracking-widest block text-[10px]">
                          REQUIREMENTS
                        </span>
                        <ul className="space-y-2 text-foreground/70">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 04: Bottom Visit Studio Box */}
        <div className="p-10 md:p-16 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-accent tracking-ultra uppercase block mb-2">
              DISCOVER OUR WORKING CULTURE
            </span>
            <h3 className="font-display text-3xl md:text-5xl text-white font-light">
              Visit our studio space.
            </h3>
          </div>
          <Link
            to="/studio"
            className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-accent transition-colors shrink-0"
          >
            TAKE STUDIO TOUR
          </Link>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        position={selectedPosition}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
