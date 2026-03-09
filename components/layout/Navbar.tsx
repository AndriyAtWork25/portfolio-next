import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <Link href="/" className="text-lg font-bold tracking-wide text-white">
          Andriy Tsar
        </Link>

       
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}