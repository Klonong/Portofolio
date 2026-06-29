"use client";

import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";
import { Code2, Server, Database, Wrench } from "lucide-react";

const SKILLS = [
  {
    category: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "ASP.NET Core",
      "C#",
      ".NET MVC",
      "REST API",
      "JWT Authentication",
      "OAuth",
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["SQL Server", "LINQ", "Stored Procedure", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git", "GitHub", "VS Code", "Visual Studio", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/30" aria-label="Skills section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated collection of tools and technologies I use to build modern web applications."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, i) => (
            <SkillCard
              key={group.category}
              category={group.category}
              skills={group.skills}
              icon={group.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
