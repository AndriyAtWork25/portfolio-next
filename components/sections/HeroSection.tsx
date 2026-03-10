import Image from "next/image";

/*
  HeroSection = die wichtigste Section deiner Website.
  Ziel:
  - in 3 Sekunden klar machen, wer du bist
  - starke visuelle Wirkung
  - dein Foto hochwertig einbauen
  - Gold/Black Brand Design sichtbar machen
*/

const techBadges = ["Node.js", "TypeScript", "REST APIs", "SQL", "Docker", "MongoDB"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      
      {/* 
        Absoluter Hintergrund-Layer
        - Grid für Tech-Look
        - goldene Glow-Flecken für Tiefe
      */}
      <div className="pointer-events-none absolute inset-0">
        <div className="tech-grid absolute inset-0 opacity-40" />
        <div className="absolute left-[-120px] top-[80px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-[5%] top-[20%] h-[260px] w-[260px] rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="container-shell relative min-h-[calc(100vh-88px)] py-16">
        
        {/* 
          Hauptgrid:
          - mobil untereinander
          - desktop: 2 Spalten
        */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Kleines Label oben */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-gray-200">
              Full Stack / Back-End Developer
            </div>

            {/* Headline */}
            <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[1.02] text-white sm:text-6xl xl:text-7xl">
              Building{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                reliable APIs
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                automation systems
              </span>{" "}
              with Node.js, TypeScript, SQL and Docker.
            </h1>

            {/* Supporting text */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300">
              Backend-focused developer based in Germany, specialized in practical
              API architecture, authentication, automation workflows and scalable
              full-stack project building with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="gold-glow rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,160,23,0.35)]"
              >
                View Projects
              </a>

              <a
                href="https://github.com/AndriyAtWork25"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/4 px-6 py-3 font-medium text-white transition duration-300 hover:border-yellow-400/30 hover:bg-white/8 hover:text-yellow-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/andriy-tsar/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/4 px-6 py-3 font-medium text-white transition duration-300 hover:border-yellow-400/30 hover:bg-white/8 hover:text-yellow-300"
              >
                LinkedIn
              </a>
            </div>

            {/* Tech badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200 transition hover:border-yellow-400/30 hover:text-yellow-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative">
            
            {/* Hintergrund-Glow hinter dem Foto */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2rem] bg-yellow-500/10 blur-3xl" />

            {/* Foto-Card */}
            <div className="soft-card relative overflow-hidden rounded-[2rem] p-4">
              
              {/* Goldene Linie oben als Premium-Detail */}
              <div className="mb-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/images/andriy-photo.jpg"
                  alt="Portrait of Andriy Tsar"
                  width={900}
                  height={1200}
                  priority
                  className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Kleine Info unten */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-yellow-400">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Backend Architecture
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-yellow-400">
                    Based In
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}