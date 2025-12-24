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

  const whatappLink = "https://chat.whatsapp.com/BklWgZNKAOTDdX2KOOAUvr";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-full mx-auto px-8 relative">
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
              <span className="text-sm font-medium text-gray-400">
                Explore • Innovate • Transform
              </span>
            </div>
          </div>

          {/* Centered Navigation Pill - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-3">
            <div className="bg-black/60 backdrop-blur-md rounded-full px-6 py-2 flex items-center gap-6 border border-white/10">
              <Link href="/" className="text-gray-200 hover:text-white transition-colors font-medium px-3 py-1">
                Home
              </Link>
              <Link href="/events" className="text-gray-200 hover:text-white transition-colors font-medium px-3 py-1">
                Events
              </Link>
              <Link href="/team" className="text-gray-200 hover:text-white transition-colors font-medium px-3 py-1">
                Team
              </Link>
              <Link href="/about" className="text-gray-200 hover:text-white transition-colors font-medium px-3 py-1">
                About
              </Link>
              <Link href="/contact" className="text-gray-200 hover:text-white transition-colors font-medium px-3 py-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/join"
              className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:opacity-95 transition-all duration-200"
            >
              Apply Now
            </a>
            <a
              href={whatappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 text-white px-4 py-2.5 rounded-full font-medium hover:bg-white/5 transition-colors"
            >
              Join WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/98">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 transition-colors text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/events"
                className="block px-4 py-3 transition-colors text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/team"
                className="block px-4 py-3 transition-colors text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 transition-colors text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 transition-colors text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Buttons */}
              <div className="mt-4 space-y-2 px-2">
                <Link
                  href="https://cuintranet.in/clubs"
                  className="block bg-white text-black hover:bg-gray-200 px-4 py-3 rounded-lg font-semibold transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                </Link>
                <a
                  href={whatappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center"
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