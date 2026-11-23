import React, { useState } from 'react';
import { X, CheckCircle, Upload } from 'lucide-react';

export default function ApplicationModal({ position, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="relative w-full max-w-xl bg-card border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-white text-foreground/60 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-accent mx-auto" />
            <h3 className="font-display text-3xl text-white">Application Received</h3>
            <p className="font-mono text-xs text-foreground/70 max-w-md mx-auto leading-relaxed">
              Thank you for applying to the <span className="text-white">{position?.title}</span> position at 23DC Architects. Our hiring team will review your portfolio and reach out within 5 working days.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-6 px-8 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="font-mono text-[10px] text-accent tracking-ultra uppercase block mb-1">
                CAREERS APPLICATION · 23DC
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-light">
                Apply for {position?.title}
              </h3>
              <p className="font-mono text-xs text-foreground/50">
                {position?.department} · {position?.location}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-1.5">
                  FULL NAME *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-1.5">
                  PORTFOLIO LINK / BEHANCE / WEBSITE *
                </label>
                <input
                  required
                  type="url"
                  placeholder="https://behance.net/yourprofile or Google Drive link"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-foreground/60 uppercase tracking-wider text-[10px] mb-1.5">
                  ABOUT YOUR WORK & DESIGN ASPIRATION
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about the project you are most proud of..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-foreground/30 focus:outline-none focus:border-white/40 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
                >
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
