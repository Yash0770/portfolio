
export default function Resume() {
  return (
    <section id="resume" className="py-10 md:py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Resume</h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Download my resume to learn more about my professional experience,
          education, and technical background.
        </p>

        <a
          href="/YashSolanki_Resume.pdf"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
