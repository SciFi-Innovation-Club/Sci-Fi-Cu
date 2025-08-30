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
    <main className="min-h-screen bg-black text-white">
      <Navbar />
  <div className="mt-0 md:mt-0" />
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Hero />
      )}
      <About />
    </main>
  );
}