
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <div className="mt-6 space-y-2">
        <p>Email: <span className="font-medium">yashsolanki0728@gmail.com</span></p>
        <p>Phone: <span className="font-medium">+91 8611234567</span></p>

        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="underline">GitHub</a>
          <a href="#" className="underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
