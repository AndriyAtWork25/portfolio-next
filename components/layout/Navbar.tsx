import Link from "next/link";
import Image from "next/image";

/*
  Diese Navbar ist jetzt deutlich stärker als vorher:
  - halb-transparent
  - blur Hintergrund
  - Logo links
  - CTA Button rechts
  - modernere Abstände
*/

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/60 backdrop-blur-xl">
      <nav className="container-shell flex items-center justify-between py-5">
        
        {/* Linke Seite: Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          {/* 
            Kleines Logo-Badge:
            - Bild aus /public/brand/logo-at.png
            - goldener Glanz
          */}
          <div className="pulse-gold overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111111]">
            <Image
              src="/brand/logo-at.png"
              alt="AT logo"
              width={44}
              height={44}
              className="h-11 w-11 object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-bold tracking-wide text-white">
              Andriy Tsar
            </p>
          </div>
        </Link>

        {/* Rechte Seite: Navigation + CTA */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#projects" className="transition hover:text-yellow-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-yellow-400">
              Skills
            </a>
            <a href="#about" className="transition hover:text-yellow-400">
              About
            </a>
            <a href="#contact" className="transition hover:text-yellow-400">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="/Andriy_Tsar_Back_End_Dev_CV_5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-glow rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400 to-yellow-600 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,160,23,0.35)]"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}