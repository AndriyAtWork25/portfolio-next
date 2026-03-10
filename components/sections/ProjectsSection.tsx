import Image from "next/image";
import { projects } from "@/data/projects";

/*
  Neue Projects Section:
  - deutlich hochwertiger
  - große Showcase Cards
  - echte Screenshots + GIFs
  - modernes Layout statt einfacher Mini-Karten
*/

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-black text-white">
      {/* Hintergrund-Layer für mehr Tiefe */}
      <div className="pointer-events-none absolute inset-0">
        <div className="tech-grid absolute inset-0 opacity-25" />
        <div className="absolute left-[8%] top-20 h-56 w-56 rounded-full bg-yellow-500/6 blur-3xl" />
      </div>

      <div className="container-shell section-space relative">
        
        {/* Kleine obere Beschriftung */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(212,160,23,0.5)]" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Projects
          </p>
        </div>

        {/* Große Überschrift */}
        <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          Real backend projects with documented APIs, product workflows and visual proof of implementation.
        </h2>

        {/* Beschreibung */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          These projects are designed to show not only backend logic, but also
          the practical product side of development: authentication flows,
          automation dashboards, documentation, CRUD systems and user-facing integration.
        </p>

        {/* Abstand nach oben vor den Cards */}
        <div className="mt-14 space-y-10">
          
          {/* 
            Wir rendern jede große Project Card dynamisch.
            index nutzen wir hier für Layout-Variation:
            bei jeder zweiten Card drehen wir das Innenlayout.
          */}
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.title}
                className="
                soft-card
                overflow-hidden
                rounded-[2rem]
                p-6
                md:p-8
                transition
                duration-300
                hover:shadow-[0_0_40px_rgba(212,160,23,0.15)]
                "
              >
                <div
                  className={`grid items-start gap-8 xl:grid-cols-2 ${
                    isReversed ? "xl:[&>*:first-child]:order-2 xl:[&>*:last-child]:order-1" : ""
                  }`}
                >
                  
                  {/* ================= TEXT SIDE ================= */}
                  <div>
                    {/* Kleine Kategorie-Zeile */}
                    <p className="text-sm leading-7 text-gray-400">
                      {project.eyebrow}
                    </p>

                    {/* Titel */}
                    <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                      {project.title}
                    </h3>

                    {/* Beschreibung */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-8">
                      <p className="text-sm uppercase tracking-[0.16em] text-yellow-400">
                        Key Highlights
                      </p>

                      <ul className="mt-4 space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-gray-200"
                          >
                            {/* Goldener Punkt */}
                            <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech badges */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                          rounded-full
                          border
                          border-yellow-400/20
                          bg-yellow-400/10
                          px-4
                          py-2
                          text-sm
                          text-yellow-200
                          transition
                          hover:bg-yellow-400/20
                          hover:border-yellow-400/40
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gold-glow rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,160,23,0.35)]"
                      >
                        View GitHub
                      </a>

                      <a
                        href="#contact"
                        className="rounded-2xl border border-white/10 bg-white/4 px-6 py-3 font-medium text-white transition duration-300 hover:border-yellow-400/30 hover:bg-white/8 hover:text-yellow-300"
                      >
                        Ask About Project
                      </a>
                    </div>
                  </div>

                  {/* ================= VISUAL SIDE ================= */}
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
                    {project.previewImages.map((image) => (
                      <div
                        key={image.src}
                        className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30"
                      >
                        {/* Label oberhalb des Bildinhalts */}
                        <div className="border-b border-white/8 px-4 py-3">
                          <p className="text-sm font-semibold text-yellow-400">
                            {image.label}
                          </p>
                        </div>

                        {/* Bild / GIF */}
                        <div className="p-4 relative">
                          <div className="group overflow-hidden rounded-[1rem] border border-white/8 bg-black relative">
                           <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none"/>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1400}
                              height={900}
                              className="
                              h-auto 
                              w-full 
                              object-cover
                              transition
                              duration-700
                              ease-out
                              group-hover:scale-105
                              "
                              />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}