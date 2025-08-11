'use client';
import { useEffect, useState } from 'react';
import './Stars.css';

export default function Stars() {
  const [stars, setStars] = useState([]);

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

    generateStars();
  }, []);

  return (
    <div className="stars-container">
      {/* Many tiny stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
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
    </div>
  );
}
