
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I’m{" "}
          <span className="text-blue-500 relative">
            Yash Solanki
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-500 rounded-full animate-pulse" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Frontend-focused Full Stack Developer with 3+ years of experience
          building modern, scalable, and real-time web applications.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
