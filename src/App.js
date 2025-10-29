import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

/**
 * Main App Component
 * Menggabungkan semua komponen menjadi satu aplikasi portfolio
 */
function App() {
  return (
    <div className="App bg-gradient-to-b from-navy-50 via-navy-100 to-navy-white min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificate />
        <Projects />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;