# agent.md

## Role

You are a senior Frontend Engineer and UI/UX designer specializing in modern developer portfolios.

Your goal is to build a professional portfolio website that helps recruiters immediately understand my skills as a Full Stack Developer.

The website should feel similar in quality to portfolios from Vercel engineers.

---

# Tech Stack

Use ONLY the following stack:

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Framer Motion
- React Icons
- next/image
- next/font
- Responsive Design
- Dark/Light Theme

Do not use Bootstrap.

---

# Design Style

The design should be:

- Minimal
- Modern
- Premium
- Clean
- Spacious
- Professional

Inspired by:

- Vercel
- Linear
- Raycast
- Stripe
- Aceternity UI

Avoid:

- Bright rainbow colors
- Cartoon style
- Heavy gradients
- Too many animations

Use smooth transitions only.

---

# Color Palette

Primary:
Black / White

Accent:
Blue (#2563eb)

Neutral:
Slate

Background:
Light:
white

Dark:
#09090b

Cards:
rounded-2xl

Shadows:
soft

---

# Typography

Use:

Geist Font

Font weights:

- Bold for headings
- Medium for titles
- Regular for paragraphs

Spacing should be generous.

---

# Portfolio Structure

## Hero

Include:

Name:
Junthau Hans William

Title:

Full Stack Developer

Subtitle:

Full Stack Developer specializing in React, ASP.NET Core, SQL Server, and scalable web application development.

CTA buttons:

- Download CV
- Contact Me

Include:

- Availability badge
- Years of experience
- Technology badges

---

## About

Create an About section summarizing:

Bachelor of Information System

Bina Nusantara University

Experienced Full Stack Developer passionate about building scalable web applications with clean architecture and excellent user experiences.

Mention:

- React
- ASP.NET Core
- SQL Server
- REST API
- Authentication
- Database Optimization

---

## Skills

Display using cards grouped by category.

Frontend

- React
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI

Backend

- ASP.NET Core
- C#
- .NET MVC
- REST API
- JWT Authentication
- OAuth

Database

- SQL Server
- LINQ
- Stored Procedure
- Supabase

Tools

- Git
- GitHub
- VS Code
- Visual Studio
- Postman

---

## Experience

Timeline style.

### Junior Programmer

Company:
PT. BINOVARA

Duration:
Mar 2024 – Present

Responsibilities:

- Developed full-stack web applications using React.js and ASP.NET Core
- Built reusable React components
- Integrated JWT Authentication
- Integrated OAuth
- Optimized SQL Server queries
- Fixed bugs and improved performance

---

### Associate Member

Organization:
Bina Nusantara IT Division

Duration:
Mar 2023 – Mar 2024

Responsibilities:

- Built reusable UI components
- Developed React interfaces
- Optimized SQL queries
- Developed ASP.NET Core applications
- Improved application performance

---

## Projects

Create premium project cards.

### Student Registration System

Duration

Apr 2025 – Oct 2025

Description

Developed a full-stack student registration system to streamline student enrollment.

Responsibilities

- React + TypeScript frontend
- ASP.NET Core backend
- SQL Server
- Stored Procedures
- LINQ optimization
- Responsive UI

Technologies

React
TypeScript
.NET
SQL Server

Include GitHub button (placeholder).

---

### Event Registration System

Duration

Mar 2024 – Jun 2024

Description

Online registration platform for event participants.

Responsibilities

- Registration workflow
- SQL optimization
- Email notification
- LINQ optimization

Technologies

React
ASP.NET Core
SQL Server

---

## Education

Bachelor of Information System

Bina Nusantara University

2022 – 2026

---

## Contact

Include:

Email

junthau@gmail.com

Location

Jakarta Barat

Buttons:

GitHub
LinkedIn
Email

Use placeholder URLs.

---

## Footer

Simple footer.

"Designed & Built by Junthau Hans William"

---

# Animations

Use Framer Motion.

Hero

fade-up

Cards

stagger animation

Timeline

slide-in

Buttons

hover scale

Do not over animate.

---

# Components

Create reusable components.

components/

Hero.tsx

About.tsx

Skills.tsx

Experience.tsx

Projects.tsx

Education.tsx

Contact.tsx

Footer.tsx

Navbar.tsx

ThemeToggle.tsx

SectionHeading.tsx

SkillCard.tsx

ProjectCard.tsx

ExperienceTimeline.tsx

Badge.tsx

---

# Folder Structure

app/

components/

lib/

hooks/

public/

styles/

---

# Accessibility

Use semantic HTML.

Proper heading hierarchy.

Keyboard navigation.

ARIA labels where necessary.

Good color contrast.

---

# Performance

Use:

next/image

Lazy loading

Dynamic imports if needed

Optimize fonts

Minimize bundle size

---

# SEO

Create metadata including:

Title

Junthau Hans William | Full Stack Developer

Description

Full Stack Developer specializing in React, ASP.NET Core, SQL Server, TypeScript, and scalable web applications.

OpenGraph

Twitter Card

robots

sitemap

favicon

---

# Coding Standards

- Strict TypeScript
- Functional Components
- Server Components by default
- Client Components only when necessary
- Reusable code
- Clean architecture
- No duplicated components
- Consistent naming

---

# Extra Features

Add:

- Dark / Light Mode
- Active Navbar Scroll Spy
- Scroll Progress Indicator
- Smooth Scrolling
- Animated Skill Badges
- Copy Email Button
- Download CV Button
- Project Technology Tags
- Mobile Responsive Navigation
- Scroll Reveal Animations

# Animations

Use:

- Framer Motion for component animations
- Lenis for smooth scrolling

Requirements:

- Smooth scrolling across the entire website
- Integrate Lenis using the App Router layout
- Ensure compatibility with Framer Motion
- Preserve native browser accessibility
- Support hash link navigation
- Avoid animation jank
- Maintain 60 FPS where possible

Animation Guidelines

Hero
- Fade up on load
- Slight stagger for heading, subtitle, and buttons

Sections
- Fade in when entering viewport
- Animate only once

Cards
- Slight translateY + opacity
- Stagger children

Project Cards
- Hover elevation
- Image zoom
- Technology badges animate in

Buttons
- Scale on hover
- Press animation on tap

Navbar
- Blur background while scrolling
- Hide/reveal smoothly on scroll direction

Scrolling
- Smooth anchor navigation using Lenis
- Preserve browser history
- Support "Back to Top" button

Keep animations subtle and professional.
Avoid excessive motion.

---

# Future Ready

Structure the code so it is easy to add:

- Blog
- Certifications
- Testimonials
- GitHub Contributions
- Tech Stack Timeline
- Resume Page
- Case Studies



without refactoring the existing architecture.