// Footer-Komponente
// Aufgabe:
// - Seite sauber abschließen
// - zentrale Infos nochmal zeigen
// - schnelle Links anbieten
//
// Wichtig:
// Ein Footer ist meistens globales Layout,
// deshalb liegt er im Ordner components/layout.

export default function Footer() {
  return (
    // footer ist ein semantisches HTML-Element für den unteren Seitenbereich
    <footer className="border-t border-white/10 bg-black text-white">
      {/* 
        Haupt-Container:
        - max-w-6xl = maximale Breite
        - mx-auto = zentriert
        - px-6 = seitlicher Abstand
        - py-10 = Abstand oben/unten
      */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        
        {/* 
          Oberer Footer-Bereich als Grid
          - auf kleinen Geräten: 1 Spalte
          - auf mittleren/großen Geräten: mehrere Spalten
        */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Spalte 1: Name + kurze Beschreibung */}
          <div>
            <h3 className="text-lg font-semibold">Andriy Tsar</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400">
              Backend-focused developer building modern full-stack applications
              with Node.js, TypeScript, APIs and scalable project structure.
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-yellow-400">
              Navigation
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              {/* Diese Links springen zu Sections auf derselben Seite */}
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>

              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Spalte 3: Externe Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-yellow-400">
              Connect
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-300">
              <a
                href="https://github.com/AndriyAtWork25"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/andriy-tsar/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:andriy.tsar8@gmail.com"
                className="transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Untere Trennlinie + Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">
            © 2026 Andriy Tsar. Built with Next.js, TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}