export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
        Feel free to reach out for collaborations or opportunities. 
      </p>

      <div className="mt-6 space-y-2 md:text-lg">
        <p>
          Email: <span className="font-medium">yashsolanki0728@gmail.com</span>
        </p>
        <p>
          Phone: <span className="font-medium">+91 8619556348</span>
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Yash0770"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yash-solanki-45a6b41bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
