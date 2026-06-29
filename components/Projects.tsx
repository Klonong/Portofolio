"use client";

import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

const PROJECTS = [
  {
    title: "Student Registration System",
    duration: "Apr 2025 – Oct 2025",
    description:
      "Developed a full-stack student registration system to streamline student enrollment processes with a modern, responsive interface.",
    responsibilities: [
      "Built React + TypeScript frontend with responsive UI",
      "Developed ASP.NET Core backend REST APIs",
      "Designed and optimized SQL Server schema",
      "Implemented Stored Procedures for complex queries",
      "Applied LINQ optimization for efficient data access",
    ],
    technologies: ["React", "TypeScript", ".NET", "SQL Server"],
  },
  {
    title: "Event Registration System",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Online registration platform for event participants featuring automated workflows and email notifications.",
    responsibilities: [
      "Designed end-to-end registration workflow",
      "Optimized SQL queries to handle concurrent registrations",
      "Implemented email notification system",
      "Applied LINQ optimization for reporting queries",
    ],
    technologies: ["React", "ASP.NET Core", "SQL Server"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/30"
      aria-label="Projects section"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="A selection of projects that showcase my full-stack development capabilities."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
