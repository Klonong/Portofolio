"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6" aria-label="Education section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Education"
          title="Academic background"
          description="My formal education in Information Systems."
        />

        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Bachelor of Information System
                </h3>
                <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                  Bina Nusantara University
                </p>
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    2022 – 2026
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    Jakarta, Indonesia
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
