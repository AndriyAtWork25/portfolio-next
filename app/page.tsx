// Import aller Sections / Layout-Komponenten
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

// Hauptseite "/"
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Einstieg / Hero */}
      <HeroSection />

      {/* Projekte */}
      <ProjectsSection />

      {/* Fachliche Stärken */}
      <SkillsSection />

      {/* Über mich */}
      <AboutSection />

      {/* Kontakt */}
      <ContactSection />
    </main>
  );
}