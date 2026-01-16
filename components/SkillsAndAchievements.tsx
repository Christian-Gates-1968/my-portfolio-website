"use client";

import { motion } from "framer-motion";
import { Code2, Award, Zap, Trophy, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "cyan",
    skills: [
      { name: "React & Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Zap,
    color: "blue",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Other",
    icon: Star,
    color: "purple",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Python", level: 80 },
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Finalist",
    description: "AISOC Hackathon-2025",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Full-Stack Developer",
    description: "MERN Stack & Next.js Expert",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Star,
    title: "CGPA 8.07",
    description: "KIIT University, B.Tech CSE",
    color: "from-purple-500 to-pink-500",
  },
];

export function SkillsAndAchievements() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={
                category.color === "cyan" 
                  ? "p-3 rounded-lg bg-cyan-900/30 border border-cyan-700/50"
                  : category.color === "blue"
                  ? "p-3 rounded-lg bg-blue-900/30 border border-blue-700/50"
                  : "p-3 rounded-lg bg-purple-900/30 border border-purple-700/50"
              }>
                <category.icon className={
                  category.color === "cyan"
                    ? "text-cyan-400"
                    : category.color === "blue"
                    ? "text-blue-400"
                    : "text-purple-400"
                } size={24} />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1 }}
                      className={
                        category.color === "cyan"
                          ? "h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                          : category.color === "blue"
                          ? "h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          : "h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-600 transition-all"
          >
            <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${achievement.color} mb-4`}>
              <achievement.icon className="text-white" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
            <p className="text-gray-400 text-sm">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
