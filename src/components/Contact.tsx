"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
          <span className="text-cyan">&lt;</span> Contact{" "}
          <span className="text-cyan">/&gt;</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-10">
          Have a project in mind or just want to say hi? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        {/* Email CTA */}
        <motion.a
          href={`mailto:${personalInfo.email}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-4 text-sm sm:text-base font-mono text-cyan border-2 border-cyan/40 rounded-xl hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300 neon-border mb-10"
        >
          {personalInfo.email}
        </motion.a>

        {/* Social links */}
        <div className="flex justify-center gap-5 mt-2">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-3 rounded-xl glass-card neon-border-hover transition-all duration-300 text-muted hover:text-cyan"
                aria-label={social.platform}
              >
                <Icon size={22} />
              </motion.a>
            );
          })}
        </div>

        <p className="text-sm text-muted/50 mt-10 font-mono">
          Let&apos;s build something together.
        </p>
      </div>
    </SectionWrapper>
  );
}
