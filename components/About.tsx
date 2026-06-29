"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./Badge";
import { GraduationCap, Code2, Server, Database } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Code2, label: "Frontend", value: "React · Next.js · TypeScript" },
  { icon: Server, label: "Backend", value: "ASP.NET Core · REST API · Auth" },
  { icon: Database, label: "Database", value: "SQL Server · Stored Procedures" },
  { icon: GraduationCap, label: "Education", value: "B.S. Information System" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6" aria-label="About section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Passionate about great software"
          description="I build scalable web applications with clean architecture and excellent user experiences."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              I&apos;m{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Junthau Hans William
              </span>
              , a Full Stack Developer currently pursuing a{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                Bachelor of Information System
              </span>{" "}
              at{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                Bina Nusantara University
              </span>
              .
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              With hands-on experience at PT. BINOVARA, I&apos;ve developed
              full-stack web applications using{" "}
              <span className="font-medium text-slate-900 dark:text-white">React</span> and{" "}
              <span className="font-medium text-slate-900 dark:text-white">ASP.NET Core</span>,
              integrated{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                JWT Authentication & OAuth
              </span>
              , and optimized{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                SQL Server
              </span>{" "}
              queries for high-performance applications.
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              I&apos;m passionate about clean architecture, database optimization,
              and delivering REST APIs that power great user experiences.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {[
                "React",
                "ASP.NET Core",
                "SQL Server",
                "REST API",
                "Authentication",
                "Database Optimization",
              ].map((skill) => (
                <Badge key={skill} variant="blue">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <item.icon className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
