
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-500">Yash Solanki</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Frontend-focused Full Stack Developer with 3+ years of experience
          building modern, scalable, and real-time web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
