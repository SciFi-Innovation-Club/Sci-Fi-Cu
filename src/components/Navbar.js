// Navigation component without theme toggle
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b bg-black/90 border-gray-800">
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo, title and tagline section */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-12 h-12 mt-0 rounded-full items-center justify-center text-white font-bold text-xl">
              <Image
                src="/LOGO.png"
                alt="Sci-Fi Innovation Club Logo"
                width={64}
                height={64}
                className="rounded-full"
                priority
              />
            </div>
            {/* Title and tagline */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">
                Sci-Fi Innovation Club
              </h1>
              <span className="text-sm font-semibold text-purple-400">
                Explore • Innovate • Transform
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-purple-400 transition-colors text-gray-300">
              Home
            </Link>
            <Link href="/events" className="hover:text-purple-400 transition-colors text-gray-300">
              Events
            </Link>
            <Link href="/team" className="hover:text-purple-400 transition-colors text-gray-300">
              Team
            </Link>
            <Link href="/about" className="hover:text-purple-400 transition-colors text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors text-gray-300">
              Contact
            </Link>
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/join"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Join Now
            </a>
            <a
              href="https://chat.whatsapp.com/BklWgZNKAOTDdX2KOOAUvr"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Join WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-black/95 border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 transition-colors text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 transition-colors text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/team"
                className="block px-3 py-2 transition-colors text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 transition-colors text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 transition-colors text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Buttons */}
              <div className="mt-4 space-y-2">
                <Link
                  href="/join"
                  className="block bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-full font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                </Link>
                <a
                  href="https://chat.whatsapp.com/BklWgZNKAOTDdX2KOOAUvr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-3 py-2 rounded-full font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
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