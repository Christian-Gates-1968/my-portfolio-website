"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";

export function ProfileIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="w-full max-w-4xl">
        {/* Name and Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 cursor-default"
          >
            <span className="inline-block relative group mr-4">
              <span className="text-white transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-105 inline-block">
                Hi, I'm
              </span>
              <span className="absolute inset-0 blur-xl bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
            <span className="inline-block relative group">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 group-hover:scale-110 inline-block">
                Krishanu
              </span>
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 cursor-default group"
          >
            <span className="inline-block transition-all duration-300 hover:text-cyan-400 hover:scale-105">
              Full-Stack Developer & Problem Solver
            </span>
          </motion.p>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I build full-stack web applications with modern technologies. Currently exploring the intersection of 
            AI, blockchain, and web development. Passionate about creating seamless user experiences and scalable solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-cyan-900/30 border border-cyan-700/50 rounded-full text-cyan-400">
              React & Next.js
            </span>
            <span className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-purple-900/30 border border-purple-700/50 rounded-full text-purple-400">
              Node.js
            </span>
            <span className="px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full text-green-400">
              PostgreSQL
            </span>
            <span className="px-4 py-2 bg-orange-900/30 border border-orange-700/50 rounded-full text-orange-400">
              AWS & Docker
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
