import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Link auf die Startseite */}
        <Link href="/" className="text-lg font-bold tracking-wide text-white">
          Andriy Tsar
        </Link>

        {/* Navigationslinks zu Sections auf derselben Seite */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
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
      </nav>
    </header>
  );
}