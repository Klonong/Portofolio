"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Klonong",
    icon: FaGithub,
    description: "View my repositories",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/junthau/",
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
      className="py-28 px-6 bg-slate-50/50 dark:bg-slate-950/30"
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
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-4"
          >
            {/* Email */}
            <div className="rounded-[1.5rem] bg-slate-100/70 p-1.5 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10">
              <div className="rounded-[1.125rem] border border-slate-200/70 bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
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
            </div>

            {/* Location */}
            <div className="rounded-[1.5rem] bg-slate-100/70 p-1.5 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10">
              <div className="rounded-[1.125rem] border border-slate-200/70 bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
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
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
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
                className="group flex items-center justify-between rounded-[1.5rem] bg-slate-100/70 p-1.5 ring-1 ring-black/5 transition-colors dark:bg-white/[0.04] dark:ring-white/10"
              >
                <div className="flex w-full items-center justify-between rounded-[1.125rem] border border-slate-200/70 bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors group-hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:group-hover:border-blue-800">
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
                </div>
              </motion.a>
            ))}

            {/* Email CTA */}
            <motion.a
              href="mailto:junthau@gmail.com"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="rest"
              animate="rest"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Send me an email
              <motion.span
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 1, y: -1, scale: 1.05 } }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15"
              >
                <Mail className="h-3.5 w-3.5" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
