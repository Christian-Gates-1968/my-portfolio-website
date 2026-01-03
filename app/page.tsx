"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsAndAchievements } from "@/components/SkillsAndAchievements";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { DinoGame } from "@/components/DinoGame";
import { ProfileIntro } from "@/components/ProfileIntro";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showGame, setShowGame] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasPlayed = sessionStorage.getItem("hasPlayedGame");
    if (hasPlayed) {
      setShowGame(false);
    }
  }, []);

  const handleGameOver = () => {
    sessionStorage.setItem("hasPlayedGame", "true");
    setShowGame(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showGame ? (
          <DinoGame key="game" onGameOver={handleGameOver} />
        ) : (
          <PageTransition key="main">
            <main className="min-h-screen">
              <Navbar />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-5xl mx-auto px-6"
              >
                <ProfileIntro />
                <Hero />
                <SkillsAndAchievements />
                <Projects />
              </motion.div>
              <Footer />
            </main>
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  );
}
