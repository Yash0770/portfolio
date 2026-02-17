export default function Resume() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">Resume</h2>
      <p className="mt-4 text-gray-500">
        Download my resume for more details
      </p>
      <a
        href="/resume.pdf"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Download Resume
      </a>
    </section>
  );
}
