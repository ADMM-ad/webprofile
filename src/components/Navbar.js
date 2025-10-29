import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Floating Top Navbar Component
 * Navigation bar dengan desain floating di bagian atas layar, pill-shaped buttons, dan smooth scroll.
 * Pada mobile, hanya tampilkan ikon profil dan hamburger; hamburger menampilkan dropdown floating menu ke bawah.
 * Navbar memiliki animasi slide-down menggunakan Framer Motion dengan durasi 1 detik (sesuai Hero).
 * Lebar navbar diperpanjang untuk 5 menu (home, about, skills, certificate, projects) agar muat dengan rapi.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Fungsi untuk smooth scroll ke section tertentu
   * @param {string} sectionId - ID dari section target
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Tutup mobile menu setelah klik
  };

  // Konfigurasi animasi untuk navbar, durasi disamakan dengan Hero (1 detik)
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.nav
      className="fixed top-4 left-2 right-2 z-50 mx-auto max-w-lg bg-white rounded-full shadow-lg transition-all duration-100 md:max-w-2xl"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="flex justify-between items-center h-14 px-4">
        {/* Logo/Brand (Ikon Profil) */}
        <div className="flex-shrink-0">
          <img
            src="/image/pp4.png"
     
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover "
          />
        </div>

        {/* Desktop Navigation (Pill-shaped buttons) */}
        <div className="hidden md:flex items-center justify-center space-x-3 w-full">
          {['home', 'about', 'skills', 'certificate', 'projects'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-navy-600 hover:text-white hover:bg-navy-800 px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 capitalize"
            >
              {item === 'home' ? 'Home' : item}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-navy-600 hover:text-navy-800 p-2 rounded-full transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (muncul di bawah navbar, memanjang ke bawah) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white rounded-2xl shadow-lg absolute top-16 left-0 right-0 mx-auto max-w-lg border-t border-gray-200 flex flex-col items-center py-2">
          {['home', 'about', 'skills', 'certificate', 'projects'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-navy-600 hover:text-white hover:bg-navy-800 w-[90%] my-1 px-4 py-2 rounded-full text-base font-medium transition-colors duration-200 capitalize"
            >
              {item === 'home' ? 'Home' : item}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;