"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const techStack = {
    languages: [
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "HTML", icon: "fa-brands fa-html5" },
      { name: "CSS", icon: "fa-brands fa-css3-alt" },
      { name: "SQL", icon: "fa-solid fa-database" },
      { name: "C++", icon: "fa-solid fa-file-code" },
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
    ],
    frameworks: [
      { name: "React/NextJS", icon: "fa-brands fa-react" },
      { name: "ExpressJS", icon: "fa-solid fa-server" },
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-solid fa-database" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
    ],
    tools: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "VS Code", icon: "fa-solid fa-code" },
      { name: "Linux CLI", icon: "fa-brands fa-linux" },
      { name: "AWS", icon: "fa-brands fa-aws" },
      { name: "Docker", icon: "fa-brands fa-docker" },
      { name: "Postman", icon: "fa-solid fa-paper-plane" },
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Premiere Pro", icon: "fa-solid fa-video" },
    ],
  };

  return (
    <motion.section 
      id="home" 
      className="pb-16 mt-[40vh]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-6">About me</h2>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm <span className="text-cyan-400 font-semibold">Krishanu Barman</span>, a passionate software developer with a knack for creating dynamic and 
              user-friendly web applications. My journey in tech has been a thrilling ride, from building 
              full-stack applications to exploring the realms of blockchain, AI, and creative coding. I am 
              currently a senior at <span className="text-cyan-400">KIIT University</span>, pursuing a degree in{" "}
              <span className="font-semibold">Computer Science</span>. I thrive 
              on challenges and am always eager to learn new technologies and contribute to impactful projects.
            </p>
          </div>

          <div>
            <p className="text-gray-400 mb-4">Here are some technologies I have been working with:</p>
            
            {/* Languages */}
            <div className="mb-6">
              <p className="text-cyan-400 text-sm font-semibold mb-3">Languages:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.languages.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-6">
              <p className="text-cyan-400 text-sm font-semibold mb-3">Frameworks:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.frameworks.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="text-cyan-400 text-sm font-semibold mb-3">Tools:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    <i className={tech.icon}></i>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-400 italic">
            When I'm not coding, I'm more into sports—namely football—and pushing my fitness goals ahead 
            with my consistency in working out at the gym.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="flex items-start justify-center md:justify-end">
          <div className="bento-card inline-block">
            <Image
              src="/profile-image.jpeg"
              alt="Krishanu Barman"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
