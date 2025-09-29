'use client';

import { motion } from "framer-motion";

export default function ThemedBackground({ children }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-40"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-100 dark:bg-pink-900/30 rounded-full filter blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/3 left-10 w-40 h-40 bg-purple-200 dark:bg-purple-800/20 rounded-full filter blur-2xl opacity-20"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-800/20 rounded-full filter blur-2xl opacity-25"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-transparent to-pink-50 dark:from-indigo-900/20 dark:via-transparent dark:to-pink-900/20 opacity-60 animate-pulse" />

      {/* Soft Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white dark:from-transparent dark:via-black/20 dark:to-black" />
      </div>

      {/* Content Slot */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
