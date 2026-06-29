"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-6 dark:border-slate-800 dark:bg-[#09090b]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <a
              href="#hero"
              className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              JHW<span className="text-blue-600">.</span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Designed &amp; Built by Junthau Hans William
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: "#", icon: FaGithub, label: "GitHub" },
              { href: "#", icon: FaLinkedin, label: "LinkedIn" },
              { href: "mailto:junthau@gmail.com", icon: Mail, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href === "#" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
              >
                <link.icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
          <p className="text-center text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Junthau Hans William. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
