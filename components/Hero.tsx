
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-blue-500">Yash</span>
      </h1>
      <p className="mt-4 text-gray-500 text-lg">
        Frontend Developer | React | Next.js
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-6 py-3 border rounded-lg"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
