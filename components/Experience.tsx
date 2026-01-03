"use client";

const experiences = [
  {
    company: "Tech Startup",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description: "Building and maintaining full-stack web applications using React, Next.js, Node.js, and MongoDB. Implemented responsive UIs and RESTful APIs.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2022 - 2023",
    description: "Developed custom websites and web applications for clients using modern frameworks. Focused on performance optimization and user experience.",
  },
  {
    company: "Personal Projects",
    role: "Independent Developer",
    period: "2021 - 2022",
    description: "Built various web applications to learn and master full-stack development with MERN stack, TypeScript, and cloud deployment.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-800 pl-4 hover:border-gray-600 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
