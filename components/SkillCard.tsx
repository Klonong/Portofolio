"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6",
        "dark:border-slate-800 dark:bg-slate-900",
        "shadow-sm hover:shadow-md transition-shadow duration-300"
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-100 dark:border-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
