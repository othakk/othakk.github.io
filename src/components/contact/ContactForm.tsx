"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import Return from "@/components/ui/Return";

export default function ContactForm() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "othakkar11@gmail.com",
      href: "mailto:othakkar11@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (630) 917-6984",
      href: "tel:+16309176984",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/omthak",
      href: "https://www.linkedin.com/in/omthak",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-center px-4 py-12">
      <Return href="/" label="return" className="mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full max-w-lg flex flex-col gap-8"
      >
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Get in touch
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Feel free to reach out for opportunities, collaborations, or just to say hi.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "LinkedIn" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  {contact.label}
                </p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
