'use client';
import { useState } from 'react';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar'; 
import StarField from './components/StarField';
import ParticleEffect from './components/ParticleEffect';
import About from './about/page';


export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <main>
      <StarField />
      <ParticleEffect />
      <Navbar />
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Hero />
      )}
      <About />
    </main>
  );
}