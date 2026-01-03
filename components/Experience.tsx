"use client";

const experiences = [
  {
    company: "Freelance / Personal Projects",
    role: "Full-Stack Developer",
    period: "2022 - Present",
    description: "Developed custom web applications using modern tech stack including React, Next.js, Express.js, and databases like MongoDB and PostgreSQL. Built projects like AskMyPDF (RAG chatbot), TaskHub (productivity app), and various full-stack solutions.",
    skills: ["MERN Stack", "TypeScript", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "Open Source Contributions",
    role: "Software Developer",
    period: "2021 - Present",
    description: "Contributed to open-source projects and built personal projects to master full-stack development, cloud deployment, and modern web technologies. Focused on learning best practices and industry-standard tools.",
    skills: ["Git", "GitHub", "Linux", "CI/CD"],
  },
  {
    company: "KIIT University",
    role: "Computer Science Student",
    period: "2021 - 2025",
    description: "Pursuing B.Tech in Computer Science with CGPA 8.04. Participated in hackathons, coding competitions, and tech events. Won hackathon at KIIT Robotics Society in 2024.",
    skills: ["Data Structures", "Algorithms", "Web Development", "Problem Solving"],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-cyan-800 pl-4 hover:border-cyan-600 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-cyan-400 text-sm mb-2 font-medium">{exp.company}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-300 hover:border-cyan-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
