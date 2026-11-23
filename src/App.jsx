import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import SmoothScroll from './components/SmoothScroll';
import StartupAnimation from './components/StartupAnimation';
import ScrollIndicator from './components/ScrollIndicator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import StudioPage from './pages/StudioPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const [startupComplete, setStartupComplete] = useState(false);

  return (
    <SmoothScroll>
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />

        {/* Cinematic Startup Intro Animation */}
        {!startupComplete && (
          <StartupAnimation onComplete={() => setStartupComplete(true)} />
        )}

        {/* Global Bottom-Right Scroll Indicator */}
        <ScrollIndicator />

        <div className="flex flex-col min-h-screen bg-black text-foreground selection:bg-white/20 selection:text-white">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/studio" element={<StudioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </SmoothScroll>
  );
}
