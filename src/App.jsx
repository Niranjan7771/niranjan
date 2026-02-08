
import React, { useEffect } from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import SecretTerminal from './components/SecretTerminal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';

function App() {
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
      <NoiseOverlay />
      <SecretTerminal />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
