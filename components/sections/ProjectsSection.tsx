const projects = [
    {
        title: "Task Manager",
        description:
           "Full-stack task management application with authentication, task CRUD operations and a clean user-focused workflow.",
           techStack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
           githubUrl: "https://github.com/AndriyAtWork25/TaskManagerAPI",
    },
    {
        title: "Blog API",
        description: 
           "REST API with authentication, role-based access, email verification and structured backend architecture.",
           techStack: ["Node.js", "Express", "MongoDB", "Swagger"],
           githubUrl: "https://github.com/AndriyAtWork25/Detective-blog.git",
    },
    {
        title: "Smart Automator",
        description: 
           "Backend-oriented automation platform focused on scalable workflows, modular architecture and practical business automation ideas.",
           techStack: ["Node.js", "Express", "MongoDB", "Swagger"],
              githubUrl: "https://github.com/AndriyAtWork25/smart-task-automator.git",
    },
];

// Das hier ist die Haupt-Komponente für die komplette Projects Section.
// Diese Funktion gibt JSX zurück, also die UI, die im Browser gerendert wird.
export default function ProjectsSection() {
  return (
    // <section> ist ein semantisches HTML-Element.
    // Wir geben ihr eine id="projects", damit wir von der Navbar aus
    // mit href="#projects" direkt hierher springen können.
    <section id="projects" className="bg-black text-white">
      
      {/* 
        Dieser Container sorgt dafür:
        - maximale Breite (max-w-6xl)
        - zentrierte Position (mx-auto)
        - Innenabstand links/rechts (px-6)
        - oben/unten Abstand (py-20)
      */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Kleine obere Section-Beschriftung */}
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-yellow-400">
          Featured Projects
        </p>

        {/* Hauptüberschrift der Section */}
        <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
          Backend-focused projects that show how I build APIs, architecture and real application logic.
        </h2>

        {/* Unterstützender Erklärungstext unter der Überschrift */}
        <p className="mt-6 max-w-3xl text-gray-300 leading-7">
          These projects reflect my focus on backend engineering, practical problem solving,
          authentication, database design, API development and scalable thinking.
        </p>

        {/* 
          Grid = Rasterlayout
          - auf kleinen Geräten: 1 Spalte
          - ab md (mittelgroß): 2 Spalten
          - ab xl (größer): 3 Spalten
          gap-6 = Abstand zwischen den Karten
        */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          
          {/* 
            .map() geht durch jedes Projekt im Array
            und erstellt für jedes Projekt eine Card.
            
            project = aktuelles Element aus dem Array
            index = Position im Array (0, 1, 2 ...)
          */}
          {projects.map((project, index) => (
            
            // article ist semantisch passend für eigenständigen Inhalt
            <article
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-400/40 hover:bg-white/10"
            >
              {/* Projekttitel */}
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Projektbeschreibung */}
              <p className="mt-4 text-sm leading-7 text-gray-300">
                {project.description}
              </p>

              {/* 
                Bereich für Tech Stack Badges
                flex-wrap sorgt dafür, dass die kleinen Tags umbrechen,
                wenn horizontal kein Platz mehr ist.
              */}
              <div className="mt-6 flex flex-wrap gap-2">
                
                {/* 
                  Noch ein .map():
                  Wir gehen jetzt durch das techStack-Array jedes Projekts.
                  Für jeden Begriff bauen wir ein kleines Badge.
                */}
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bereich für den GitHub-Link */}
              <div className="mt-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}