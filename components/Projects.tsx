"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Styx Sports (Live Project)",
    description:
      "Live sports streaming platform with real-time scores, animations, and SSR using Next.js & TypeScript.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Tailwind"],
    link: "https://www.styxsports.com/"

  },
  {
    title: "SandBrix (OTT Platform)",
    description:
      "OTT platform for live sports, entertainment, and news streaming with real-time updates.",
    tech: ["Next.js", "TypeScript", "WebSockets"],
    link: "https://www.sandbrix.com/en"
  },
  {
    title: "Voirliv",
    description:
      "Real-time location sharing and communication platform with live video, geofencing, and alerts.",
    tech: ["Next.js", "WebSockets", "Maps"],
    link: "https://teledive.com/"
  },
  {
    title: "CrixApp",
    description:
      "Cricket score & prediction app with ball-by-ball updates and AI-based win probability.",
    tech: ["Next.js", "APIs", "WebSockets"],
    link: "https://crixapp.com/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      {/* Grid Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => window.open(project.link, "_blank")}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 180 }}
            className="p-6 border rounded-xl bg-white dark:bg-gray-900 transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
