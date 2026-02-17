"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-black/60 border-b"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold">
          Yash<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group text-lg font-medium"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
