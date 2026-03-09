export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Kleine obere Info */}
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-yellow-400">
          Backend Developer Portfolio
        </p>

        {/* Hauptüberschrift */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          I build scalable backend systems and modern full-stack applications.
        </h1>

        {/* Beschreibung */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          I specialize in Node.js, TypeScript, REST APIs, authentication,
          databases, and clean backend architecture — while also building
          polished frontend experiences with React and Next.js.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/AndriyAtWork25"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            View GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/andriy-tsar/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}