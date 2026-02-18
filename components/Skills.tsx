"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind",
  "Node.js", "MongoDB", "WebSockets", "Redux",
  "Azure", "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-7">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="p-3 md:p-4 bg-white dark:bg-gray-800 rounded-xl text-center shadow-sm cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
