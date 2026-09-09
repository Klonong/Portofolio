"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  role: string;
  company: string;
  duration: string;
  type: string;
  responsibilities: string[];
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-800 md:left-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
            className={cn(
              "relative flex flex-col pl-12 md:pl-0",
              index % 2 === 0
                ? "md:flex-row md:pr-[calc(50%+2rem)]"
                : "md:flex-row-reverse md:pl-[calc(50%+2rem)]"
            )}
          >
            {/* Dot */}
            <span className="absolute left-[5px] top-0 h-6 w-6 rounded-full bg-blue-500/10 md:left-1/2 md:-translate-x-1/2" />
            <div className="absolute left-[9px] top-1.5 h-5 w-5 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-950 md:left-1/2 md:-translate-x-1/2" />

            {/* Card */}
            <div
              className={cn(
                "w-full rounded-[1.75rem] bg-slate-100/70 p-1.5 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10",
                "md:max-w-[calc(50%-3rem)]"
              )}
            >
              <div className="rounded-[1.375rem] border border-slate-200/70 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-shadow duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {item.company}
                </p>
                <p className="mt-1 mb-4 text-xs text-slate-400 dark:text-slate-500">
                  {item.duration}
                </p>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
