
const projects = [
  {
    title: "Styx Sports (Live Project)",
    description:
      "Live sports streaming platform with real-time scores, animations, and SSR using Next.js & TypeScript.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Tailwind"],
  },
  {
    title: "SandBrix (OTT Platform)",
    description:
      "OTT platform for live sports, entertainment, and news streaming with real-time updates.",
    tech: ["Next.js", "TypeScript", "WebSockets"],
  },
  {
    title: "Voirliv",
    description:
      "Real-time location sharing and communication platform with live video, geofencing, and alerts.",
    tech: ["Next.js", "WebSockets", "Maps"],
  },
  {
    title: "CrixApp",
    description:
      "Cricket score & prediction app with ball-by-ball updates and AI-based win probability.",
    tech: ["Next.js", "APIs", "WebSockets"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
