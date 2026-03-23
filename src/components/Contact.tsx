"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono mb-4">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <TextReveal className="gradient-text">Contact</TextReveal>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
        <p className="text-muted text-sm sm:text-base mb-10">
          Have a project in mind or just want to say hi? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        {/* Email CTA with magnetic effect */}
        <MagneticButton
          as="a"
          href={`mailto:${personalInfo.email}`}
          strength={0.2}
          className="inline-block px-8 py-4 text-sm sm:text-base font-mono text-cyan border-2 border-cyan/40 rounded-xl hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300 neon-border mb-10"
        >
          {personalInfo.email}
        </MagneticButton>

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
