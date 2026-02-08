
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NoiseOverlay from './components/NoiseOverlay';
import SecretTerminal from './components/SecretTerminal';
import BootScreen from './components/BootScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import TacticalBackground3D from './components/TacticalBackground3D';

import './App.css';
import './styles/Mobile.css';

function App() {
  const [booting, setBooting] = useState(true);

  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      {/* Boot Screen Overlay */}
      <AnimatePresence>
        {booting && <BootScreen onComplete={() => setBooting(false)} />}
      </AnimatePresence>

      {/* Main Content (Reveals after boot) */}
      {!booting && (
        <>
          <TacticalBackground3D />
          <NoiseOverlay />
          <SecretTerminal />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
