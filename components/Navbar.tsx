"use client";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          KB
        </a>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.hash = '#home'} 
            className="px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md border border-transparent hover:border-cyan-500/30 transition-all"
          >
            Home
          </button>
          <button 
            onClick={() => window.location.hash = '#projects'} 
            className="px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md border border-transparent hover:border-cyan-500/30 transition-all"
          >
            Projects
          </button>
          <button 
            onClick={() => window.location.hash = '#contact'} 
            className="px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md border border-transparent hover:border-cyan-500/30 transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
