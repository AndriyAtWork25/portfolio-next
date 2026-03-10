// Diese Section ist dafür da, dass Besucher direkt mit dir Kontakt aufnehmen können.
// Ziel:
// - leicht scannbar
// - professionell
// - direkte Call-to-Actions
//
// Wir bauen hier:
// 1. Einleitungstext
// 2. Kontaktkarten
// 3. Buttons für wichtige Aktionen

export default function ContactSection() {
  return (
    // id="contact" ist wichtig für die Navigation aus der Navbar
    <section id="contact" className="bg-black text-white">
      {/* 
        Haupt-Container:
        - max-w-6xl = maximale Breite
        - mx-auto = zentriert den Inhalt
        - px-6 = Abstand links/rechts
        - py-20 = Abstand oben/unten
      */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Kleine obere Beschriftung */}
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-yellow-400">
          Contact
        </p>

        {/* Hauptüberschrift */}
        <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
          Let&apos;s connect and talk about backend development, projects or opportunities.
        </h2>

        {/* Unterstützender Text */}
        <p className="mt-6 max-w-3xl leading-7 text-gray-300">
          I am open to developer opportunities, project discussions and professional networking.
          The easiest way to reach me is through LinkedIn, GitHub or email.
        </p>

        {/* 
          Grid mit zwei Bereichen:
          links = Kontaktkarten
          rechts = CTA Box
        */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Linke Spalte: Kontaktkarten */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* GitHub Karte */}
            <a
              href="https://github.com/AndriyAtWork25"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                GitHub
              </p>
              <h3 className="mt-3 text-xl font-semibold">View my repositories</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Explore my backend and full-stack projects, code structure and ongoing development work.
              </p>
            </a>

            {/* LinkedIn Karte */}
            <a
              href="https://www.linkedin.com/in/andriy-tsar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                LinkedIn
              </p>
              <h3 className="mt-3 text-xl font-semibold">Connect professionally</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Reach out for job opportunities, networking and professional conversations in software development.
              </p>
            </a>

            {/* Email Karte */}
            <a
              href="mailto:andriy.tsar8@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
                Email
              </p>
              <h3 className="mt-3 text-xl font-semibold">Send me a message</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                For direct contact, collaboration ideas or interview discussions, email is always a good option.
              </p>
            </a>
          </div>

          {/* Rechte Spalte: CTA Box */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-yellow-400">
              Let&apos;s Build Something Strong
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Open to backend and full-stack opportunities
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              I am focused on growing as a backend developer while building strong, production-oriented
              full-stack skills. If you are looking for someone who takes project work seriously and
              keeps improving step by step, let&apos;s get in touch.
            </p>

            {/* Button Bereich */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:your-email@example.com"
                className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                Send Email
              </a>

              <a
                href="https://github.com/AndriyAtWork25"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}