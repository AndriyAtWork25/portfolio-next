export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl">
       
        <h1 className="text-5xl font-bold mb-6">
          Andriy Tsar
        </h1>
        
        <h2 className="text-2xl text-gray-400 mb-6">
          BackEnd Developer | Node.js | TypeScript | APIs 
        </h2>

        <p className="text-gray-300 mb-10">
          I build scalable backend systems, REST APIs and full-stack
          applications using modern technologies like Node.js,
          TypeScript and Docker.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/AndriyAtWork25"
            className="px-6 py-3 bg-white text black rounded-lg font-medium hover:bg-gray-200 transition"
            >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/andriy-tsar/"
            className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
            LinkedIn
            </a>

        </div>

      </div>
 
    </main>
  );
}