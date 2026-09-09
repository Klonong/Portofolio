"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Server } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/use-tilt";

interface ProjectCardProps {
  title: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  githubUrl?: string;
  apiUrl?: string;
  liveUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  duration,
  description,
  responsibilities,
  technologies,
  githubUrl,
  apiUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const tilt = useTilt({ max: 4 });
  const hasLinks = githubUrl || apiUrl || liveUrl;

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      style={{ perspective: 1000 }}
      className="group rounded-[1.75rem] bg-slate-100/70 p-1.5 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10"
    >
      <motion.div
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "relative flex h-full flex-col rounded-[1.375rem] border border-slate-200/70 bg-white p-6",
          "dark:border-slate-800 dark:bg-slate-900",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
          "transition-shadow duration-300 group-hover:shadow-xl"
        )}
      >
        {/* Header */}
        <div style={{ transform: "translateZ(25px)" }} className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {duration}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {!hasLinks && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                <Lock className="h-3 w-3" />
                Private
              </span>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} frontend repository on GitHub`}
                title="Frontend repository"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
            {apiUrl && (
              <a
                href={apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} API repository on GitHub`}
                title="API repository"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
              >
                <Server className="h-4 w-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live`}
                title="Live demo"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ transform: "translateZ(15px)" }} className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>

        {/* Responsibilities */}
        <ul style={{ transform: "translateZ(15px)" }} className="mb-5 space-y-1.5">
          {responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div style={{ transform: "translateZ(20px)" }} className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="blue">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
