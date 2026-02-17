"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "React & Next.js Specialist",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="py-24 flex items-center px-6 pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        
        {/* TEXT SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-500">Yash Solanki</span>
          </h1>

          {/* FIXED HEIGHT ROLE CONTAINER */}
          <div className="h-[48px] md:h-[56px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            I build high-performance, scalable web applications with modern
            technologies like React, Next.js, Node.js, and MongoDB.
          </p>

          <div className="flex gap-4 flex-wrap">
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
          </div>
        </div>

        {/* IMAGE SECTION – COMPLETELY STATIC */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <Image
              src="/images/profile.png"
              alt="Yash Solanki"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
