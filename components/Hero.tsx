"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { Badge } from "./Badge";
import { useTilt } from "@/hooks/use-tilt";

const TECH_BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "NestJS",
  "ASP.NET Core",
  "SQL Server",
  "C#",
];

const EASE = [0.32, 0.72, 0, 1] as const;

function fadeUpProps(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 28, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease: EASE },
  };
}

export function Hero() {
  const tilt = useTilt({ max: 4 });

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-24"
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

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[400px] animate-float-slow-reverse rounded-full bg-blue-400/[0.04] blur-3xl" />

      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{ perspective: 1400 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div
          style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
        >
          {/* Availability badge */}
          <motion.div {...fadeUpProps(0)} style={{ transform: "translateZ(20px)" }} className="mb-8 inline-flex">
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
            style={{ transform: "translateZ(50px)" }}
            className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Junthau Hans
            <br />
            <span className="text-blue-600">William</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            {...fadeUpProps(0.2)}
            style={{ transform: "translateZ(35px)" }}
            className="mt-4 text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-xl"
          >
            Full Stack Developer
          </motion.p>

          {/* Subtitle */}
          <motion.p
            {...fadeUpProps(0.3)}
            style={{ transform: "translateZ(25px)" }}
            className="mt-6 text-base leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
          >
            Full Stack Developer specializing in React, ASP.NET Core, SQL Server,
            and scalable web application development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUpProps(0.4)}
            style={{ transform: "translateZ(30px)" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="rest"
              animate="rest"
              href="/cv.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-full bg-slate-900 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Download CV
              <motion.span
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 1, y: -1, scale: 1.05 } }}
                transition={{ duration: 0.3, ease: EASE }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 dark:bg-slate-900/10"
              >
                <Download className="h-3.5 w-3.5" />
              </motion.span>
            </motion.a>
            <motion.a
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="rest"
              animate="rest"
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white py-1.5 pl-5 pr-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Contact Me
              <motion.span
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 1, y: -1, scale: 1.05 } }}
                transition={{ duration: 0.3, ease: EASE }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                <Mail className="h-3.5 w-3.5" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUpProps(0.5)}
            style={{ transform: "translateZ(20px)" }}
            className="mt-10 flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">2+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Years of Experience</p>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">7+</p>
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
            style={{ transform: "translateZ(15px)" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {TECH_BADGES.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </motion.div>
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
