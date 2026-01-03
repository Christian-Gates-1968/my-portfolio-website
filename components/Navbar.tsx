"use client";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          KB
        </a>
        <div className="flex gap-8">
          <a href="#home" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
