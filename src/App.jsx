import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import FloatingOrbs from './components/FloatingOrbs';

function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#181A20] selection:bg-[#FF202B] selection:text-white overflow-hidden">
      {/* Floating & Blinking Colorful Orbs */}
      <FloatingOrbs />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
