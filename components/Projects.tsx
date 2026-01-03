"use client";

import Image from "next/image";

const projects = [
  {
    title: "Therapy Co",
    description: "Full-stack MERN mental health platform with Patient/Doctor portals and GenAI chatbot.",
    tags: ["React", "Express", "MongoDB", "AI"],
    link: "https://github.com/Christian-Gates-1968/therapist-booking-website",
    image: "/project-1.png"
  },
  {
    title: "OptiRoute AI",
    description: "An intelligent middleware system designed to solve the Cost vs. Quality trade-off in GenAI scaling.",
    tags: ["Next.js", "Gemini", "Shadcn", "Clerk"],
    link: "https://github.com/Christian-Gates-1968/OptiRoute-AI",
    image: "/project-2.png"
  },
  {
    title: "IT Asset Management",
    description: "Enterprise asset tracking system with role-based access and analytics dashboard.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    link: "https://github.com/Christian-Gates-1968/it-asset-mgmt",
    image: "/project-3.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Project Gigs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card overflow-hidden group cursor-pointer"
          >
            <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-slate-800 text-cyan-400 rounded-full border border-cyan-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
