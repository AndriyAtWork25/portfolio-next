// Import der einzelnen UI-Komponenten / Sections
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

// Startseite deiner Website
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Obere Navigation */}
      <Navbar />

      {/* Hero / Einstieg */}
      <HeroSection />

      {/* Projekte */}
      <ProjectsSection />

      {/* Skills / Backend Expertise */}
      <SkillsSection />
    </main>
  );
}