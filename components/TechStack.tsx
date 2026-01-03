"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras",
  "Pandas", "NumPy", "SQL", "Docker", "Git",
  "AWS", "Azure", "FastAPI", "Flask", "React",
  "Next.js", "TypeScript", "JavaScript", "Node.js", "MongoDB"
];

export function TechStack() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0e27] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0e27] to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-4 pr-4"
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 glass-effect border border-purple-500/30 rounded-2xl text-gray-300 font-medium whitespace-nowrap hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
