
const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React.js", "Next.js", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB",
  "WebSocket", "Socket.IO", "Redux", "Redux Toolkit",
  "Firebase", "Azure", "Git", "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white dark:bg-gray-800 border rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
