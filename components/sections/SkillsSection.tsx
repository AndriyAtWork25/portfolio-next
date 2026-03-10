const skillCategories = [
     {
    title: "API Development",
    description:
      "Designing and building REST APIs with clean route structure, controllers, services and scalable backend logic.",
    items: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "Swagger"],
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing secure authentication flows, protecting routes and managing user access with practical backend security concepts.",
    items: ["JWT", "Role-Based Access", "Password Hashing", "Middleware", "Validation"],
  },
  {
    title: "Databases",
    description:
      "Working with structured and document-based data, modeling entities and managing application data reliably.",
    items: ["MongoDB", "Mongoose", "SQL Basics", "Data Modeling", "Queries"],
  },
  {
    title: "Architecture & Tooling",
    description:
      "Building projects with maintainable structure, version control and deployment-ready workflows.",
    items: ["TypeScript", "Docker", "Git", "Postman", "Render"],
  },
];

// Haupt-Komponente der Skills Section
export default function SkillsSection() {
  return (
    // id="skills" erlaubt später Navigation aus der Navbar
    <section id="skills" className="bg-black text-white">
      {/* 
        Zentraler Container:
        - max-w-6xl = maximale Breite
        - mx-auto = horizontal zentrieren
        - px-6 = seitlicher Abstand
        - py-20 = Abstand oben/unten
      */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        {/* Kleine obere Beschriftung */}
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-yellow-400">
          Backend Expertise
        </p>

        {/* Hauptüberschrift der Section */}
        <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
          Core backend skills that define how I build reliable applications.
        </h2>

        {/* Kurzer erklärender Absatz */}
        <p className="mt-6 max-w-3xl leading-7 text-gray-300">
          My focus is on backend development with Node.js and TypeScript,
          including API design, authentication, validation, database work
          and maintainable project architecture.
        </p>

        {/* 
          Grid für die Skill Cards:
          - auf kleinen Geräten 1 Spalte
          - ab md 2 Spalten
        */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* 
            Wir gehen wieder mit .map() durch unser Daten-Array.
            Für jede Kategorie erzeugen wir automatisch eine Card.
          */}
          {skillCategories.map((category, index) => (
            <article
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {/* Titel der Skill Card */}
              <h3 className="text-2xl font-semibold text-white">
                {category.title}
              </h3>

              {/* Beschreibung */}
              <p className="mt-4 text-sm leading-7 text-gray-300">
                {category.description}
              </p>

              {/* 
                Liste der Unterpunkte / Technologien
                flex-wrap = Umbruch auf neue Zeile wenn kein Platz mehr da ist
              */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs font-medium text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}