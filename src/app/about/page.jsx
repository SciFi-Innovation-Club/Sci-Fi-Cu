'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen bg-black"
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500">About Us</h1>
        <p className="text-lg text-center max-w-2xl text-white">
          Welcome to the Sci-Fi Innovation Club! We are a community of science fiction enthusiasts dedicated to exploring the intersection of technology, creativity, and imagination. Join us as we delve into the worlds of science fiction and innovation.
        </p>
      </motion.div>
    </>
  );
}
