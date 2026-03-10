// Diese Section beschreibt dich als Entwickler.
// Ziel:
// Nicht nur Technologien zeigen, sondern auch deine Denkweise,
// deinen Fokus und deinen Entwicklungsweg.
//
// Wir bauen die Section in zwei Spalten:
// links = Text über dich
// rechts = kompakte Faktenkarten / Highlights

export default function AboutSection() {
  return (
    // id="about" erlaubt Navigation aus der Navbar mit href="#about"
    <section id="about" className="bg-black text-white">
      {/* 
        Haupt-Container:
        - max-w-6xl = maximale Breite
        - mx-auto = zentriert den Inhalt
        - px-6 = seitlicher Abstand
        - py-20 = Abstand oben/unten
      */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Kleine obere Section-Beschriftung */}
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-yellow-400">
          About Me
        </p>

        {/* Große Überschrift */}
        <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
          A backend-focused developer building real-world projects with discipline, structure and long-term growth in mind.
        </h2>

        {/* 
          Grid mit 2 Spalten ab größeren Screens.
          Auf kleinen Geräten bleibt alles untereinander.
        */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          
          {/* Linke Spalte: längerer Text */}
          <div>
            {/* Erster Absatz */}
            <p className="text-gray-300 leading-8">
              I am a self-taught developer focused on backend engineering,
              API design and practical full-stack application development.
              My main stack includes Node.js, TypeScript, Express, MongoDB,
              SQL, Docker and modern frontend tools like React and Next.js.
            </p>

            {/* Zweiter Absatz */}
            <p className="mt-6 text-gray-300 leading-8">
              What matters most to me is not only writing code that works,
              but building applications with clean structure, maintainable logic
              and clear technical decisions. I enjoy turning ideas into
              functional systems and improving them step by step.
            </p>

            {/* Dritter Absatz */}
            <p className="mt-6 text-gray-300 leading-8">
              My goal is to grow into a strong backend and full-stack engineer
              by combining hands-on project work, continuous learning and
              increasingly production-oriented thinking.
            </p>
          </div>

          {/* Rechte Spalte: kleine Highlight Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                Focus
              </p>
              <h3 className="mt-3 text-xl font-semibold">Backend Development</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                APIs, authentication, validation, database design and maintainable architecture.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                Stack
              </p>
              <h3 className="mt-3 text-xl font-semibold">Node.js & TypeScript</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Strong focus on modern JavaScript backend development and scalable project structure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                Mindset
              </p>
              <h3 className="mt-3 text-xl font-semibold">Continuous Improvement</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Learning by building, refactoring, documenting and improving projects over time.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                Goal
              </p>
              <h3 className="mt-3 text-xl font-semibold">Production-Ready Growth</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Growing from strong project work toward professional engineering standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}