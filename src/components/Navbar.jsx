'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className="w-full bg-gradient-to-r from-black via-gray-950 to-black text-white shadow-lg border-b border-blue-500/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SF</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sci-Fi CU
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 border border-blue-500/50"
              >
                Join Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/50 rounded-lg mt-2 backdrop-blur-sm border border-blue-500/20">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700/50 transition-all duration-300"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 border border-blue-500/50"
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
