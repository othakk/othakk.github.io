"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Paperclip } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "othakkar11@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-12 pb-8 pt-8 border-t border-border/40 text-sm text-muted-foreground font-mono">
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className="space-y-2"
        >
          <h3 className="text-foreground font-medium text-base tracking-tight">
            Let&apos;s connect
          </h3>
          <p className="text-muted-foreground/80 max-w-md leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just chatting about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.08 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <motion.a
            href="https://www.linkedin.com/in/omthak"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">
              →
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.15 }}
          className="flex flex-col gap-4 mt-2"
        >
          <div className="flex items-center text-sm text-muted-foreground">
            <span>email me at&nbsp;</span>
            <motion.button
              onClick={copyEmail}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-0 cursor-pointer"
            >
              <span className={`inline-flex items-center overflow-hidden transition-all duration-300 ease-out ${copied ? "w-5" : "w-0 group-hover:w-5"}`}>
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="inline-flex items-center shrink-0"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="inline-flex items-center shrink-0"
                    >
                      <Copy className="w-3.5 h-3.5 text-primary" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
              <span className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 group-hover:decoration-primary group-hover:text-primary transition-colors duration-200">
                {email}
              </span>
            </motion.button>
          </div>

          <motion.div
            whileHover={{ y: -2, transition: { type: "spring", stiffness: 300, damping: 15 } }}
            whileTap={{ scale: 0.95 }}
            className="w-fit"
          >
            <Link
              href="/resume"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Paperclip className="w-4 h-4" />
              <span>view resume</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
