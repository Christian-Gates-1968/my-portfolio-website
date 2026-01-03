"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  tags?: string[];
  gradient?: string;
  background?: ReactNode;
  header?: ReactNode;
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  tags,
  gradient = "from-white/80 to-white/60",
  background,
  header,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 glass-effect row-span-1",
        gradient,
        className
      )}
    >
      {/* Background element */}
      {background && (
        <div className="absolute inset-0 z-0">
          {background}
        </div>
      )}

      {/* Header element */}
      {header && (
        <div className="relative z-10 w-full">
          {header}
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-8">
        {icon && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300"
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none rounded-3xl" />
    </motion.div>
  );
}

// Enhanced Bento Card with more customization
interface BentoFeatureCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  className?: string;
  background?: ReactNode;
  cta?: ReactNode;
}

export function BentoFeatureCard({
  name,
  description,
  icon,
  className,
  background,
  cta,
}: BentoFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative col-span-1 row-span-1 overflow-hidden rounded-3xl border border-purple-500/20 glass-effect hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500",
        className
      )}
    >
      {background && (
        <div className="absolute inset-0 z-0">
          {background}
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div className="flex items-start justify-between">
          <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
            {icon}
          </div>
          {cta && <div>{cta}</div>}
        </div>
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none rounded-3xl" />
    </motion.div>
  );
}
