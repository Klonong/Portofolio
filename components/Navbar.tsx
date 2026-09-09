"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));
const EASE = [0.32, 0.72, 0, 1] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      setVisible(currentY < lastScrollY || currentY < 80);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <motion.header
        animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-3xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500",
            "ring-1 ring-black/5 dark:ring-white/10",
            isScrolled
              ? "bg-white/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl dark:bg-slate-900/60"
              : "bg-white/40 backdrop-blur-md dark:bg-slate-900/30"
          )}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex shrink-0 items-center rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            JHW<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-full transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-white dark:text-slate-900"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      transition={{ duration: 0.5, ease: EASE }}
                      className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-600 md:hidden dark:text-slate-300"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <span className="relative block h-3.5 w-4">
                <motion.span
                  className="absolute left-0 top-0 h-[1.5px] w-full origin-center rounded-full bg-current"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 6.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.35, ease: EASE }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-current"
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-[1.5px] w-full origin-center rounded-full bg-current"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -6.5 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.35, ease: EASE }}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-white/90 backdrop-blur-2xl md:hidden dark:bg-[#09090b]/90"
          >
            <ul className="flex flex-col items-center gap-2" role="list">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 48, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.05, ease: EASE }}
                    className={cn(
                      "block rounded-full px-5 py-2.5 text-2xl font-medium tracking-tight transition-colors",
                      activeSection === item.href.slice(1)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-300"
                    )}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
