"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto px-6 py-20"
        >
          <Hero />
          <Experience />
          <Projects />
        </motion.div>
        <Footer />
      </main>
    </PageTransition>
  );
}
