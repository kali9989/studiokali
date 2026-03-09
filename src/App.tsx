import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css'

import Hero from './components/Hero';
import Services from './components/Services';
import Manifesto from './components/Manifesto';
import ThreadLine from './components/ThreadLine';
import CustomCursor from './components/CustomCursor';
import ContactForm from './components/ContactForm';
import Work from './components/Work';
import FloatingContact from './components/FloatingContact';
import ScrollProgress from './components/ScrollProgress';
import VHSOverlay from './components/VHSOverlay';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy load non-critical sections
const Pricing = lazy(() => import('./components/Pricing'));
const Process = lazy(() => import('./components/Process'));
const RadioStation = lazy(() => import('./components/RadioStation'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="relative min-h-screen selection:bg-hot-pink selection:text-white bg-noir">
      <ScrollProgress />
      <CustomCursor />
      <VHSOverlay />
      <FloatingContact />
      <ContactForm />
      
      {/* Global Halftone Overlay */}
      <div className="halftone-overlay"></div>

      <Navbar />

      {/* The VHS Film Strip — traverses the entire page */}
      <ThreadLine />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Work />
        <Manifesto />
        <Suspense fallback={<div className="h-96 bg-noir flex items-center justify-center font-bebas text-hot-pink animate-pulse text-2xl">CARGANDO MÓDULO...</div>}>
          <Pricing />
          <Process />
          <RadioStation />
          <Footer />
        </Suspense>
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
