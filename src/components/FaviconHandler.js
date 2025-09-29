'use client';

import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';

export function FaviconHandler() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const updateFavicon = () => {
      // Remove existing favicon links
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(link => link.remove());

      // Determine which favicon to use based on theme
      let faviconPath;
      
      if (theme === 'dark') {
        faviconPath = '/LOGO.png'; // Light logo for dark theme
      } else if (theme === 'light') {
        faviconPath = '/LOGO-black.png'; // Dark logo for light theme
      } else {
        // System theme - detect user's preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        faviconPath = prefersDark ? '/LOGO.png' : '/LOGO-black.png';
      }

      // Create new favicon link elements
      const createFaviconLink = (href, sizes = null, type = null) => {
        const link = document.createElement('link');
        link.rel = sizes ? 'icon' : 'icon';
        link.href = href;
        if (sizes) link.setAttribute('sizes', sizes);
        if (type) link.type = type;
        return link;
      };

      // Add the new favicon links
      const head = document.getElementsByTagName('head')[0];
      
      // Add PNG favicon for modern browsers
      head.appendChild(createFaviconLink(faviconPath, '32x32', 'image/png'));
      head.appendChild(createFaviconLink(faviconPath, '16x16', 'image/png'));
      
      // Add general favicon
      head.appendChild(createFaviconLink(faviconPath));
      
      // Apple touch icon
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = faviconPath;
      appleTouchIcon.setAttribute('sizes', '180x180');
      head.appendChild(appleTouchIcon);
    };

    // Update favicon when component mounts or theme changes
    updateFavicon();

    // Listen for system theme changes when using 'system' theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => updateFavicon();
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return null; // This component doesn't render anything
}