'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Sci-Fi Innovation Club';
  
  useEffect(() => {
    let currentIndex = 0;
    const typeTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: { 
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
    },
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 40px rgba(59, 130, 246, 0.8)",
        "0 0 20px rgba(59, 130, 246, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          {displayText}
          <span className="cursor">|</span>
        </motion.h1>
        
        <motion.p 
          className="tagline"
          variants={itemVariants}
        >
          Exploring the Future Through Innovation
        </motion.p>
        
        <motion.p 
          className="subtitle"
          variants={itemVariants}
        >
          Where Science Fiction Meets Reality
        </motion.p>
        
        <motion.div 
          className="hero-description"
          variants={itemVariants}
        >
          <p>Dive deep into the realms of science fiction and harness its power to inspire real-world innovation. Join our community of visionaries, creators, and technologists.</p>
        </motion.div>
        
        <motion.div 
          className="cta-buttons"
          variants={itemVariants}
        >
          <motion.button 
            className="cta-primary"
            variants={glowVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Future
          </motion.button>
          <motion.button 
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Events
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
