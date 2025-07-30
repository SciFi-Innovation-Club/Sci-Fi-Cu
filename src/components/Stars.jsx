'use client';
import { useEffect, useState } from 'react';

export default function Stars() {
  const [stars, setStars] = useState([]);
  const [asteroids, setAsteroids] = useState([]);
  const [shootingAsteroids, setShootingAsteroids] = useState([]);

  useEffect(() => {
    // Generate many more tiny stars
    const generateStars = () => {
      const starArray = [];
      const numStars = 300; // Increased number of stars

      for (let i = 0; i < numStars; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5, // Smaller stars (0.5-2.5px)
          opacity: Math.random() * 0.7 + 0.1, // More varied opacity
          animationDelay: Math.random() * 5,
          duration: Math.random() * 6 + 2,
        });
      }
      
      setStars(starArray);
    };

    // Generate static asteroids
    const generateAsteroids = () => {
      const asteroidArray = [];
      const numAsteroids = 8;

      for (let i = 0; i < numAsteroids; i++) {
        asteroidArray.push({
          id: i,
          x: Math.random() * 90 + 5,
          y: Math.random() * 90 + 5,
          size: Math.random() * 6 + 3,
          rotationSpeed: Math.random() * 2 + 1,
          rotation: Math.random() * 360,
        });
      }
      
      setAsteroids(asteroidArray);
    };

    generateStars();
    generateAsteroids();
  }, []);

  // Generate shooting asteroids every few seconds
  useEffect(() => {
    const generateShootingAsteroid = () => {
      const newAsteroid = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: -5, // Start from top
        size: Math.random() * 4 + 2,
        speed: Math.random() * 3 + 1,
        angle: Math.random() * 60 + 60, // 60-120 degrees
        opacity: 0.8,
        trail: [],
      };

      setShootingAsteroids(prev => [...prev, newAsteroid]);

      // Remove asteroid after animation
      setTimeout(() => {
        setShootingAsteroids(prev => prev.filter(ast => ast.id !== newAsteroid.id));
      }, 4000);
    };

    // Generate 1-2 asteroids every 3-6 seconds
    const interval = setInterval(() => {
      const numAsteroids = Math.random() < 0.6 ? 1 : 2; // 60% chance for 1, 40% for 2
      for (let i = 0; i < numAsteroids; i++) {
        setTimeout(() => generateShootingAsteroid(), i * 500); // Slight delay between multiple asteroids
      }
    }, 3000 + Math.random() * 3000); // Every 3-6 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate shooting asteroids
  useEffect(() => {
    const animateShootingAsteroids = () => {
      setShootingAsteroids(prev => prev.map(asteroid => {
        const radians = (asteroid.angle * Math.PI) / 180;
        const newX = asteroid.x + Math.cos(radians) * asteroid.speed;
        const newY = asteroid.y + Math.sin(radians) * asteroid.speed;
        
        // Add to trail
        const newTrail = [...asteroid.trail, { x: asteroid.x, y: asteroid.y }];
        if (newTrail.length > 8) newTrail.shift(); // Keep trail length manageable

        return {
          ...asteroid,
          x: newX,
          y: newY,
          trail: newTrail,
          opacity: asteroid.y > 100 ? 0 : asteroid.opacity, // Fade out when off screen
        };
      }).filter(asteroid => asteroid.y < 120 && asteroid.x > -20 && asteroid.x < 120)); // Remove off-screen asteroids
    };

    const interval = setInterval(animateShootingAsteroids, 50);
    return () => clearInterval(interval);
  }, []);

  // Rotate static asteroids continuously
  useEffect(() => {
    const rotateAsteroids = () => {
      setAsteroids(prev => prev.map(asteroid => ({
        ...asteroid,
        rotation: asteroid.rotation + asteroid.rotationSpeed,
      })));
    };

    const interval = setInterval(rotateAsteroids, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Many tiny stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `pulse ${star.duration}s infinite ${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Static asteroids */}
      {asteroids.map((asteroid) => (
        <div
          key={`asteroid-${asteroid.id}`}
          className="absolute rounded-full"
          style={{
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            transform: `rotate(${asteroid.rotation}deg)`,
            background: `radial-gradient(circle at 30% 30%, #9ca3af, #6b7280, #374151)`,
            boxShadow: '0 0 8px rgba(75, 85, 99, 0.4)',
          }}
        />
      ))}

      {/* Shooting asteroids with trails */}
      {shootingAsteroids.map((asteroid) => (
        <div key={`shooting-${asteroid.id}`}>
          {/* Trail */}
          {asteroid.trail.map((point, index) => (
            <div
              key={`trail-${asteroid.id}-${index}`}
              className="absolute rounded-full"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                width: `${asteroid.size * (index / asteroid.trail.length)}px`,
                height: `${asteroid.size * (index / asteroid.trail.length)}px`,
                background: `rgba(156, 163, 175, ${0.2 * (index / asteroid.trail.length)})`,
              }}
            />
          ))}
          {/* Main asteroid */}
          <div
            className="absolute rounded-full"
            style={{
              left: `${asteroid.x}%`,
              top: `${asteroid.y}%`,
              width: `${asteroid.size}px`,
              height: `${asteroid.size}px`,
              background: `radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)`,
              boxShadow: '0 0 12px rgba(251, 191, 36, 0.6)',
              opacity: asteroid.opacity,
            }}
          />
        </div>
      ))}
      
      {/* Special twinkling stars */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-400 rounded-full animate-ping" 
           style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-purple-400 rounded-full animate-ping" 
           style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-cyan-400 rounded-full animate-ping" 
           style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute top-[80%] right-[25%] w-2 h-2 bg-pink-400 rounded-full animate-ping" 
           style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-yellow-400 rounded-full animate-ping" 
           style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      <div className="absolute top-[70%] left-[60%] w-1 h-1 bg-green-400 rounded-full animate-ping" 
           style={{ animationDelay: '2.5s', animationDuration: '3s' }} />
    </div>
  );
}
