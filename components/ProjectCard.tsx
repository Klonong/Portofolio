"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  githubUrl?: string;
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
  liveUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6",
        "dark:border-slate-800 dark:bg-slate-900",
        "shadow-sm hover:shadow-lg transition-all duration-300"
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {duration}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {!githubUrl && !liveUrl && (
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
              aria-label={`View ${title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>

      {/* Responsibilities */}
      <ul className="mb-5 space-y-1.5">
        {responsibilities.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            {item}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-auto flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="blue">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
