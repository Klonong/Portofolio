"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LINKS = [
  {
    label: "GitHub",
    href: "#",
    icon: FaGithub,
    description: "View my repositories",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
    description: "Connect with me",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("junthau@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/30"
      aria-label="Contact section"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let&apos;s work together"
          description="I'm open to full-time roles, freelance projects, and collaborations. Feel free to reach out."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start max-w-3xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Email</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      junthau@gmail.com
                    </p>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                </motion.button>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Location</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Jakarta Barat, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-colors hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {link.label}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {link.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Email CTA */}
            <motion.a
              href="mailto:junthau@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              <Mail className="h-4 w-4" />
              Send me an email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
