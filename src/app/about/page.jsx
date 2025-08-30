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
          <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh] gap-8">
            <div className="md:w-1/2 w-full text-left md:ml-12">
              <h1 className="text-4xl font-bold mb-4 text-yellow-400">Sci-Fi Innovation Club</h1>
              <p className="text-lg mb-6 text-gray-300">Exploring the Future Today ✨</p>
              <p className="text-md text-gray-400 mb-4">
                Our vision is to create a dynamic and inclusive community at the university where students can explore the realms of science fiction and harness its power to inspire real-world innovation. We aim to foster a culture of creativity, critical thinking, and collaboration, encouraging members to dream beyond conventional boundaries and contribute to the advancement of technology and society.
              </p>
              <p className="text-md text-gray-500">
                Join us and embark on an exciting journey to explore the future through creativity, innovation, and science fiction!
              </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="aspect-video w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wXIax8Zqcm8"
                  title="Sci-Fi Innovation Club Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
      </motion.div>
    </>
  );
}
