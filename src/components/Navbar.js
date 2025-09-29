// This is the navigation bar at the top.
// To change the logo text or tagline, edit the lines near the top.
// To add or remove navigation links, look for the links section.
// To update the buttons (Register, WhatsApp), find the button code below.

// NAVIGATION COMPONENT
// Top navigation bar with logo, tagline, and links
// To change logo text or navigation links, edit lines below

'use client';

import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use global theme context
  
  const isDarkMode = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b ${isDarkMode ? 'bg-black/90 border-gray-800' : 'bg-white/100 border-gray-200'}`}>
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo, title and tagline section */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-12 h-12 mt-0 rounded-full items-center justify-center text-white font-bold text-xl">
              <Image
                src={isDarkMode ? "/LOGO.png" : "/LOGO-black.png"}
                alt="Sci-Fi Innovation Club Logo"
                width={64}
                height={64}
                className="rounded-full"
                priority
              />
            </div>
            {/* Title and tagline */}
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Sci-Fi Innovation Club
              </h1>
              <span className={`text-sm font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                Explore • Innovate • Transform
              </span>
            </div>
          </div>

        {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`hover:text-purple-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Home
            </Link>
            <Link href="/events" className={`hover:text-purple-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Events
            </Link>
            <Link href="/team" className={`hover:text-purple-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Team
            </Link>
            <Link href="/about" className={`hover:text-purple-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              About
            </Link>
            <Link href="/contact" className={`hover:text-purple-400 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/join"
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isDarkMode
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg'
              }`}
            >
              Join Now
            </Link>
            <a
              href="https://chat.whatsapp.com/your-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className={`border px-6 py-2 rounded-full font-medium transition-colors ${isDarkMode ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' : 'border-gray-800 hover:border-gray-800 text-gray-800 hover:text-gray-900'}`}
            >
              Join WhatsApp
            </a>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isDarkMode ? 'bg-black/95 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/events"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Events
              </Link>
              <Link
                href="/team"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Team
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-2">
                <Link
                  href="/join"
                  className="block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-3 py-2 rounded-full font-medium transition-all duration-300 text-center shadow-lg"
                  onClick={toggleMenu}
                >
                  Join Now
                </Link>
                <a
                  href="https://chat.whatsapp.com/your-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block border px-3 py-2 rounded-full font-medium transition-colors text-center ${isDarkMode ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white' : 'border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900'}`}
                >
                  Join WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// End NAVBAR COMPONENT