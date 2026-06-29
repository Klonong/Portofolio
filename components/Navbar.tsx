"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <motion.header
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 dark:bg-[#09090b]/80 dark:border-slate-800/80"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            JHW<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm rounded-lg transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  )}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-950/50 -z-10"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 md:hidden dark:border-slate-700 dark:text-slate-400"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-[#09090b]/95 md:hidden"
            >
              <ul className="flex flex-col px-6 py-4 gap-1" role="list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        activeSection === item.href.slice(1)
                          ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
