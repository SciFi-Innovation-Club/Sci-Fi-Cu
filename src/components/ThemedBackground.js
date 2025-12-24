 'use client';

import { motion } from "framer-motion";

export default function ThemedBackground({ children }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black/95 overflow-hidden">
      {/* Soft neutral animated shapes (subtle, low-opactiy greys) */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-gray-800 rounded-full filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-gray-900 rounded-full filter blur-3xl opacity-12"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Floating Orbs (neutral tones) */}
      <motion.div
        className="absolute top-1/3 left-10 w-40 h-40 bg-gray-700 rounded-full filter blur-2xl opacity-12"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gray-700 rounded-full filter blur-2xl opacity-12"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Subtle Gradient Overlay (neutral) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/5 to-black/20" />

      {/* Soft Grid Pattern (small boxes) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:12px_12px] opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/6 to-black/40" />

        {/* faint planet arc for depth */}
        <div className="absolute -top-72 left-1/2 transform -translate-x-1/2 w-[1400px] h-[700px] rounded-full bg-gradient-to-b from-black/0 to-black/60 opacity-30 pointer-events-none" />
      </div>

      {/* Content Slot */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
