import React from 'react';

/**
 * Footer Component
 * Footer website dengan informasi kontak dan social links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Handler untuk scroll ke top
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Muhammad Adam Abdurrahman</h3>
            {/* <p className="text-navy-200 leading-relaxed">
              Frontend Developer yang passionate dalam menciptakan 
              pengalaman web yang menarik dan fungsional.
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['home', 'about', 'skills', 'certificate','projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-navy-200 hover:text-white text-left transition-colors duration-200 capitalize"
                >
                  {item === 'home' ? 'Home' : item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hubungi Saya</h4>
            <div className="space-y-2 text-navy-200">
              <p>📧 adamabdurrahman514@gmail.com</p>
              <p>📱 +62 823-3842-8435</p>
              <p>📍 Kota Kediri, Jawa Timur, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Links */}
            <div className="flex space-x-6">
              
            </div>

            {/* Copyright & Back to Top */}
            <div className="flex items-center space-x-6">
              <p className="text-navy-200">
                © {currentYear} M Adam. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="bg-navy-700 hover:bg-navy-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Back to top"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;