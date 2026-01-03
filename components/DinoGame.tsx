"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DinoGameProps {
  onGameOver: () => void;
}

export function DinoGame({ onGameOver }: DinoGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameStateRef = useRef({
    dino: { x: 50, y: 150, width: 40, height: 40, velocityY: 0, jumping: false },
    obstacles: [] as { x: number; width: number; height: number }[],
    gameSpeed: 5,
    gravity: 0.6,
    jumpPower: -12,
    score: 0,
    gameOver: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = gameStateRef.current;
    let animationId: number;
    let lastObstacleTime = 0;

    const jump = () => {
      if (!state.dino.jumping && gameStarted) {
        state.dino.velocityY = state.jumpPower;
        state.dino.jumping = true;
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (!gameStarted) {
          setGameStarted(true);
        }
        jump();
      }
    };

    const handleClick = () => {
      if (!gameStarted) {
        setGameStarted(true);
      }
      jump();
    };

    window.addEventListener("keydown", handleKeyPress);
    canvas.addEventListener("click", handleClick);

    const gameLoop = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#4a5568";
      ctx.fillRect(0, 200, canvas.width, 2);

      if (!gameStarted) {
        // Draw instructions with pixel font
        ctx.fillStyle = "#22d3ee";
        ctx.font = "bold 20px 'Courier New', monospace";
        ctx.textAlign = "center";
        ctx.fillText("PRESS SPACE OR CLICK TO START", canvas.width / 2, 100);
        ctx.font = "16px 'Courier New', monospace";
        ctx.fillText("JUMP OVER THE CACTI!", canvas.width / 2, 130);
        animationId = requestAnimationFrame(gameLoop);
        return;
      }

      if (state.gameOver) {
        ctx.fillStyle = "#22d3ee";
        ctx.font = "bold 28px 'Courier New', monospace";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER!", canvas.width / 2, 100);
        ctx.font = "20px 'Courier New', monospace";
        ctx.fillText(`SCORE: ${Math.floor(state.score)}`, canvas.width / 2, 135);
        ctx.fillText("LOADING PORTFOLIO...", canvas.width / 2, 165);
        
        setTimeout(() => {
          onGameOver();
        }, 2000);
        return;
      }

      // Update dino
      state.dino.velocityY += state.gravity;
      state.dino.y += state.dino.velocityY;

      // Ground collision
      if (state.dino.y >= 150) {
        state.dino.y = 150;
        state.dino.velocityY = 0;
        state.dino.jumping = false;
      }

      // Draw pixel dinosaur (improved design)
      ctx.fillStyle = "#22d3ee";
      const dinoX = state.dino.x;
      const dinoY = state.dino.y;
      
      // Dinosaur design - more detailed pixel art
      // Head
      ctx.fillRect(dinoX + 18, dinoY, 16, 8);
      ctx.fillRect(dinoX + 20, dinoY - 4, 12, 4);
      // Eye
      ctx.fillStyle = "#000";
      ctx.fillRect(dinoX + 26, dinoY + 2, 3, 3);
      ctx.fillStyle = "#22d3ee";
      // Neck
      ctx.fillRect(dinoX + 16, dinoY + 8, 8, 6);
      // Body
      ctx.fillRect(dinoX + 8, dinoY + 14, 24, 16);
      // Tail
      ctx.fillRect(dinoX + 2, dinoY + 18, 8, 8);
      ctx.fillRect(dinoX, dinoY + 22, 4, 4);
      // Front leg
      ctx.fillRect(dinoX + 20, dinoY + 30, 6, 10);
      // Back leg  
      ctx.fillRect(dinoX + 10, dinoY + 30, 6, 10);
      // Add some detail lines
      ctx.fillStyle = "#0891b2";
      ctx.fillRect(dinoX + 12, dinoY + 18, 16, 2);
      ctx.fillRect(dinoX + 14, dinoY + 24, 12, 2);

      // Add obstacles (cacti)
      if (timestamp - lastObstacleTime > 1500) {
        const height = Math.random() > 0.5 ? 40 : 30;
        state.obstacles.push({ x: canvas.width, width: 20, height });
        lastObstacleTime = timestamp;
      }

      // Update and draw cactus obstacles
      state.obstacles.forEach((obstacle, index) => {
        obstacle.x -= state.gameSpeed;

        // Draw pixelated cactus
        ctx.fillStyle = "#10b981"; // green color
        const cactusX = obstacle.x;
        const cactusY = 200 - obstacle.height;
        
        // Main cactus body
        ctx.fillRect(cactusX + 7, cactusY, 6, obstacle.height);
        
        // Cactus arms (if tall enough)
        if (obstacle.height >= 35) {
          ctx.fillRect(cactusX + 2, cactusY + 10, 5, 2); // left arm
          ctx.fillRect(cactusX + 13, cactusY + 15, 5, 2); // right arm
          ctx.fillRect(cactusX + 2, cactusY + 10, 2, 8); // left arm vertical
          ctx.fillRect(cactusX + 16, cactusY + 15, 2, 8); // right arm vertical
        }

        // Collision detection
        if (
          state.dino.x < obstacle.x + obstacle.width &&
          state.dino.x + state.dino.width > obstacle.x &&
          state.dino.y + state.dino.height > 200 - obstacle.height
        ) {
          state.gameOver = true;
        }

        // Remove off-screen obstacles
        if (obstacle.x + obstacle.width < 0) {
          state.obstacles.splice(index, 1);
          state.score += 10;
          setScore(Math.floor(state.score));
        }
      });

      // Increase difficulty
      state.score += 0.1;
      state.gameSpeed = 5 + state.score * 0.005;

      // Draw score with pixel font
      ctx.fillStyle = "#22d3ee";
      ctx.font = "bold 18px 'Courier New', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`SCORE: ${Math.floor(state.score)}`, 20, 30);

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKeyPress);
      canvas.removeEventListener("click", handleClick);
    };
  }, [gameStarted, onGameOver]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
          KRISHANU'S PORTFOLIO
        </h1>
        <p className="text-gray-400 text-sm" style={{ fontFamily: "'Courier New', monospace" }}>LET'S PLAY A QUICK GAME FIRST!</p>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={250}
          className="border-2 border-gray-700 rounded-lg bg-gray-900 max-w-full"
        />
        <div className="mt-4 text-center text-gray-500 text-sm" style={{ fontFamily: "'Courier New', monospace" }}>
          USE SPACE OR CLICK TO JUMP • AVOID THE CACTI
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onGameOver}
        className="mt-8 text-gray-600 hover:text-gray-400 text-sm transition-colors font-mono"
      >
        Skip game →
      </motion.button>
    </motion.div>
  );
}
