// Import aller Layout- und Section-Komponenten
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

// Hauptseite "/"
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Obere Navigation */}
      <Navbar />

      {/* Start / Hero */}
      <HeroSection />

      {/* Projekte */}
      <ProjectsSection />

      {/* Technische Kernkompetenzen */}
      <SkillsSection />

      {/* Über mich */}
      <AboutSection />

      {/* Kontakt */}
      <ContactSection />

      {/* Abschluss der Seite */}
      <Footer />
    </main>
  );
}