"use client";

import { SectionHeading } from "./SectionHeading";
import { ExperienceTimeline } from "./ExperienceTimeline";

const EXPERIENCES = [
  {
    role: "Junior Programmer",
    company: "PT. BINOVARA",
    duration: "Mar 2024 – Present",
    type: "Full-time",
    responsibilities: [
      "Developed full-stack web applications using React.js and ASP.NET Core",
      "Built reusable React components to accelerate development",
      "Integrated JWT Authentication for secure access control",
      "Integrated OAuth for third-party authentication flows",
      "Optimized SQL Server queries for improved performance",
      "Fixed bugs and improved overall application performance",
    ],
  },
  {
    role: "Associate Member",
    company: "Bina Nusantara IT Division",
    duration: "Mar 2023 – Mar 2024",
    type: "Organization",
    responsibilities: [
      "Built reusable UI components for internal tools",
      "Developed React interfaces for division projects",
      "Optimized SQL queries to reduce load times",
      "Developed ASP.NET Core backend services",
      "Improved application performance through code reviews",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6" aria-label="Experience section">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="My professional journey building real-world applications."
        />

        <div className="mt-16">
          <ExperienceTimeline items={EXPERIENCES} />
        </div>
      </div>
    </section>
  );
}
