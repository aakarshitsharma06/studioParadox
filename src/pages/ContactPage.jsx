import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, CheckCircle, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('01');
  const [openFaqId, setOpenFaqId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Residential',
    message: ''
  });

  const inquiryTypes = [
    { id: '01', label: 'NEW PROJECT', desc: 'Architecture, interiors, or a full commission. Tell us the brief and we’ll respond within two working days.' },
    { id: '02', label: 'PRESS', desc: 'For publications, interviews, feature requests, and high-resolution media kits.' },
    { id: '03', label: 'CAREERS', desc: 'Join the studio. Explore internships, architecture fellowships, and senior positions.' },
    { id: '04', label: 'GENERAL', desc: 'General correspondence, lecture invitations, and student inquiries.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-foreground pt-28 pb-36 px-5 md:px-12">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01: Hero */}
        <div className="space-y-6 border-b border-white/10 pb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="font-mono text-xs tracking-ultra uppercase text-foreground/50">
              CONTACT & INQUIRIES
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter text-white leading-none">
            BEGIN A<br />
            CONVERSATION<br />
            <span className="text-white/40 italic font-serif">WITH THE STUDIO.</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 font-mono text-xs text-foreground/60">
            <p className="max-w-md leading-relaxed">
              For new commissions, press, and the people who'll build the next chapter of Studio Paradox.
            </p>
            <span className="text-accent tracking-widest uppercase">
              EST. 2009 · STUDIO PARADOX
            </span>
          </div>
        </div>

        {/* 02: Inquiry Selector & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Inquiry Types & Studio Offices */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-ultra text-foreground/40 uppercase block">
                WHAT BRINGS YOU HERE?
              </span>

              <div className="grid grid-cols-2 gap-3">
                {inquiryTypes.map((type) => {
                  const isActive = inquiryType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id)}
                      className={`p-4 rounded-xl border text-left font-mono transition-all duration-300 ${
                        isActive
                          ? 'border-white/40 bg-white/10 text-white'
                          : 'border-white/5 bg-white/[0.02] text-foreground/50 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <span className="text-xs text-accent block mb-1">{type.id}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider block">{type.label}</span>
                    </button>
                  );
                })}
              </div>

              <p className="font-mono text-xs text-foreground/60 leading-relaxed pt-2">
                {inquiryTypes.find((t) => t.id === inquiryType)?.desc} · <a href="mailto:hello@studioparadox.com" className="text-white underline">hello@studioparadox.com</a>
              </p>
            </div>

            {/* Studio Information Box */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-8 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-foreground/40 tracking-ultra uppercase text-[10px]">
                  HEADQUARTERS
                </span>
                <span className="text-accent text-[11px]">31.3°N · 75.6°E</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded bg-black flex items-center justify-center border border-white/10">
                    <img src="/studio-paradox-logo.jpg" alt="Studio Paradox" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-display text-2xl text-white font-light">
                    Studio Paradox.<br />
                    Where every project begins.
                  </h4>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <span className="text-foreground/40 block text-[10px] uppercase mb-1">PROJECT INQUIRIES</span>
                  <a href="tel:+919781934777" className="text-white hover:text-accent block">+91 97819 34777</a>
                  <a href="mailto:hello@studioparadox.com" className="text-foreground/70 hover:text-white text-[11px]">hello@studioparadox.com</a>
                </div>

                <div>
                  <span className="text-foreground/40 block text-[10px] uppercase mb-1">CAREERS</span>
                  <span className="text-foreground/60 block">HR Lead</span>
                  <a href="tel:+919780134777" className="text-white hover:text-accent block">+91 97801 34777</a>
                  <a href="mailto:careers@studioparadox.com" className="text-foreground/70 hover:text-white text-[11px]">careers@studioparadox.com</a>
                </div>

                <div>
                  <span className="text-foreground/40 block text-[10px] uppercase mb-1">VENDOR INQUIRIES</span>
                  <span className="text-foreground/60 block">Procurement Lead</span>
                  <a href="tel:+919878570777" className="text-white hover:text-accent block">+91 98785 70777</a>
                  <a href="mailto:vm@studioparadox.com" className="text-foreground/70 hover:text-white text-[11px]">vm@studioparadox.com</a>
                </div>

                <div>
                  <span className="text-foreground/40 block text-[10px] uppercase mb-1">PR & COLLABORATIONS</span>
                  <span className="text-foreground/60 block">Communications</span>
                  <a href="tel:+919872570777" className="text-white hover:text-accent block">+91 98725 70777</a>
                  <a href="mailto:pr@studioparadox.com" className="text-foreground/70 hover:text-white text-[11px]">pr@studioparadox.com</a>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://maps.google.com/?q=Studio+Paradox+Architecture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-accent text-[11px] tracking-wider uppercase"
                >
                  <span>VIEW ON MAP</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-12 md:p-16 rounded-2xl bg-white/[0.03] border border-white/15 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-accent mx-auto" />
                <h3 className="font-display text-3xl sm:text-4xl text-white">Message Dispatched</h3>
                <p className="font-mono text-xs text-foreground/70 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Studio Paradox. Our partners have received your brief and will respond within two working days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
                >
                  SEND ANOTHER NOTE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Aman Mittal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="aman@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 97819 34777"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-2">
                      PROJECT LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="City, State / Country"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 cursor-pointer"
                  >
                    <option value="Residential">Residential Villa / Bungalow</option>
                    <option value="Commercial">Commercial Headquarters / Office</option>
                    <option value="Hospitality">Hospitality / Resort / Retreat</option>
                    <option value="Cultural">Cultural / Institutional Pavilion</option>
                    <option value="Other">Other Bespoke Commission</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-2">
                    TELL US ABOUT THE PROJECT *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Site dimensions, programme requirements, target completion dates, and any reference notes…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
                  >
                    SEND MESSAGE
                  </button>
                  <span className="block text-[10px] text-foreground/40 text-center uppercase tracking-widest mt-3">
                    BY SUBMITTING YOU AGREE TO BE CONTACTED ABOUT YOUR ENQUIRY.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 03: Comprehensive 10-Question FAQ Accordion */}
        <section className="space-y-12 border-t border-white/10 pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-ultra uppercase text-accent block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-white">
                Frequently Asked
              </h2>
            </div>
            <span className="font-mono text-xs text-foreground/40 uppercase">
              10 INQUIRIES ANSWERED
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-6 space-y-3">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <div className="flex items-baseline gap-4 pr-4">
                      <span className="font-mono text-xs text-accent">{faq.id}</span>
                      <span className="font-mono text-sm sm:text-base text-foreground/90 group-hover:text-white transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-foreground/50 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2 pl-8 font-mono text-xs text-foreground/65 leading-relaxed max-w-3xl">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
