"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/use-tilt";

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  const tilt = useTilt({ max: 6 });

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      style={{ perspective: 900 }}
      className="rounded-[1.75rem] bg-slate-100/70 p-1.5 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10"
    >
      <motion.div
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "rounded-[1.375rem] border border-slate-200/70 bg-white p-6",
          "dark:border-slate-800 dark:bg-slate-900",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
          "transition-shadow duration-300 hover:shadow-lg"
        )}
      >
        <div style={{ transform: "translateZ(30px)" }} className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            {category}
          </h3>
        </div>
        <div style={{ transform: "translateZ(15px)" }} className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
