"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { Badge } from "./Badge";

const TECH_BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "ASP.NET Core",
  "SQL Server",
  "C#",
];

function fadeUpProps(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
      aria-label="Hero section"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(to right, #64748b 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-3xl text-center">
        {/* Availability badge */}
        <motion.div
          {...fadeUpProps(0)}
          className="mb-8 inline-flex"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUpProps(0.1)}
          className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          Junthau Hans
          <br />
          <span className="text-blue-600">William</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          {...fadeUpProps(0.2)}
          className="mt-4 text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-xl"
        >
          Full Stack Developer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          {...fadeUpProps(0.3)}
          className="mt-6 text-base leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
        >
          Full Stack Developer specializing in React, ASP.NET Core, SQL Server,
          and scalable web application development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUpProps(0.4)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <Download className="h-4 w-4" />
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUpProps(0.5)}
          className="mt-10 flex items-center justify-center gap-8"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">2+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Years of Experience</p>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">5+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Projects Delivered</p>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">10+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Technologies</p>
          </div>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          {...fadeUpProps(0.6)}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {TECH_BADGES.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
