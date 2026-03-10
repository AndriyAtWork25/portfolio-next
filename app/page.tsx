// Wir importieren unsere Komponenten.
// Import bedeutet: wir holen UI-Bausteine aus anderen Dateien rein,
// damit wir sie hier benutzen können.

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

// Das ist die Hauptseite "/" deiner Website.
export default function Home() {
  return (
    // <main> ist der Hauptinhalt der Seite.
    <main className="min-h-screen bg-black">
      {/* Obere Navigation */}
      <Navbar />

      {/* Erste große Einstiegssektion */}
      <HeroSection />

      {/* Projekte-Sektion */}
      <ProjectsSection />
    </main>
  );
}