"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  // { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 dark:bg-gray-900/60"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold"
          onClick={(e) => {
            e.preventDefault();
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          Yash<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative group text-base font-medium text-black dark:text-gray-400 hover:text-blue-500 dark:hover:text-white ${
                  active === id ? "text-blue-500 dark:text-white" : ""
                }`}
              >
                {item.label}
                {/* <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all ${
                  active === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              /> */}
              </a>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
