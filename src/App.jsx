import React from 'react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--primary-red)', position: 'relative' }}>
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Floating Left Social Bar (Inspiration from reference image) */}
      <SocialSidebar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Sleek Minimalist Footer */}
      <Footer />
    </div>
  );
}
