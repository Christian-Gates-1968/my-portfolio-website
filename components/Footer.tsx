"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-800 py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Let's Connect</h2>
        <p className="text-gray-400 mb-8 leading-relaxed text-center">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to build something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <a
            href="mailto:krishanubarman719@gmail.com"
            className="flex items-center gap-3 px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all group"
          >
            <Mail size={20} className="text-gray-400 group-hover:text-white" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://github.com/Christian-Gates-1968"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all group"
          >
            <Github size={20} className="text-gray-400 group-hover:text-white" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/krishanu-barman-71ba62250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all group"
          >
            <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Krishanu Barman. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
