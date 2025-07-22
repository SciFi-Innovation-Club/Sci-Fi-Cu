'use client';
import { useEffect, useState } from 'react';

export default function Stars() {
  const [stars, setStars] = useState([]);
  const [asteroids, setAsteroids] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      const numStars = 100; // Number of stars

      for (let i = 0; i < numStars; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100, // Random x position (percentage)
          y: Math.random() * 100, // Random y position (percentage)
          originalX: 0, // Will be set after creation
          originalY: 0, // Will be set after creation
          size: Math.random() * 3 + 1, // Random size between 1-4px
          opacity: Math.random() * 0.8 + 0.2, // Random opacity between 0.2-1
          animationDelay: Math.random() * 3, // Random animation delay
          duration: Math.random() * 4 + 2, // Random animation duration between 2-6s
          deflectionRadius: 50 + Math.random() * 30, // Smaller deflection radius for stars
        });
      }
      
      // Set original positions
      starArray.forEach(star => {
        star.originalX = star.x;
        star.originalY = star.y;
      });
      
      setStars(starArray);
    };

    // Generate asteroids
    const generateAsteroids = () => {
      const asteroidArray = [];
      const numAsteroids = 15; // Number of asteroids

      for (let i = 0; i < numAsteroids; i++) {
        asteroidArray.push({
          id: i,
          x: Math.random() * 90 + 5, // Keep asteroids away from edges
          y: Math.random() * 90 + 5,
          originalX: 0, // Will be set after creation
          originalY: 0, // Will be set after creation
          size: Math.random() * 8 + 4, // Random size between 4-12px
          color: ['gray-400', 'gray-500', 'gray-600', 'stone-400', 'slate-400'][Math.floor(Math.random() * 5)],
          rotationSpeed: Math.random() * 4 + 2, // Random rotation speed
          deflectionRadius: 100 + Math.random() * 50, // Deflection sensitivity radius
        });
      }
      
      // Set original positions
      asteroidArray.forEach(asteroid => {
        asteroid.originalX = asteroid.x;
        asteroid.originalY = asteroid.y;
      });
      
      setAsteroids(asteroidArray);
    };

    generateStars();
    generateAsteroids();
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x: mouseX, y: mouseY });

      // Update star positions based on mouse proximity
      setStars(prev => prev.map(star => {
        const distanceX = mouseX - star.originalX;
        const distanceY = mouseY - star.originalY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < star.deflectionRadius) {
          // Calculate deflection (lighter for stars)
          const force = (star.deflectionRadius - distance) / star.deflectionRadius;
          const deflectionX = -distanceX * force * 0.15; // Lighter deflection for stars
          const deflectionY = -distanceY * force * 0.15;
          
          return {
            ...star,
            x: star.originalX + deflectionX,
            y: star.originalY + deflectionY,
          };
        } else {
          // Return to original position
          return {
            ...star,
            x: star.originalX + (star.x - star.originalX) * 0.95, // Faster return for stars
            y: star.originalY + (star.y - star.originalY) * 0.95,
          };
        }
      }));

      // Update asteroid positions based on mouse proximity
      setAsteroids(prev => prev.map(asteroid => {
        const distanceX = mouseX - asteroid.originalX;
        const distanceY = mouseY - asteroid.originalY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < asteroid.deflectionRadius) {
          // Calculate deflection
          const force = (asteroid.deflectionRadius - distance) / asteroid.deflectionRadius;
          const deflectionX = -distanceX * force * 0.3; // Deflection strength
          const deflectionY = -distanceY * force * 0.3;
          
          return {
            ...asteroid,
            x: asteroid.originalX + deflectionX,
            y: asteroid.originalY + deflectionY,
          };
        } else {
          // Return to original position
          return {
            ...asteroid,
            x: asteroid.originalX + (asteroid.x - asteroid.originalX) * 0.9, // Smooth return
            y: asteroid.originalY + (asteroid.y - asteroid.originalY) * 0.9,
          };
        }
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse transition-all duration-200 ease-out"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Asteroids */}
      {asteroids.map((asteroid) => (
        <div
          key={`asteroid-${asteroid.id}`}
          className={`absolute bg-${asteroid.color} rounded-full transition-all duration-300 ease-out`}
          style={{
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            transform: `rotate(${Date.now() * 0.001 * asteroid.rotationSpeed}rad)`,
            boxShadow: '0 0 10px rgba(75, 85, 99, 0.5)',
            background: `radial-gradient(circle at 30% 30%, #9ca3af, #6b7280, #374151)`,
          }}
        />
      ))}
      
      {/* Add some special twinkling stars with different colors */}
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
