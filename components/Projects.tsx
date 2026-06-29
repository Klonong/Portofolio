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
  {
    title: "Pioma E-Commerce",
    duration: "June 2026 – Present",
    description:
      "A modern full-stack e-commerce platform for discovering and purchasing local bag products, featuring secure authentication, product catalog management, shopping cart, wishlist, and responsive user experience.",
    responsibilities: [
      "Developed a full-stack e-commerce application using Next.js App Router and TypeScript",
      "Designed responsive and reusable UI components with shadcn/ui and Tailwind CSS",
      "Implemented authentication, user profiles, wishlist, and shopping cart using Supabase Auth",
      "Designed the database schema and managed data access using Prisma ORM with Supabase PostgreSQL",
      "Built product browsing, filtering, search, and category-based shopping experiences",
      "Integrated server actions and optimized data fetching for improved performance and SEO",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://pioma.vercel.app",
    githubUrl: "#",
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
