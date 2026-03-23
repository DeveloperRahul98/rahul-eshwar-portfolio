"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { achievements } from "@/data/portfolio";
import { FiAward, FiExternalLink } from "react-icons/fi";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan">&lt;</span> Achievements{" "}
          <span className="text-cyan">/&gt;</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-5 neon-border-hover transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan/10 text-cyan shrink-0">
                <FiAward size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground group-hover:text-cyan transition-colors text-sm">
                  {ach.title}
                </h3>
                <p className="text-xs text-muted mt-1">{ach.issuer}</p>
                <p className="text-xs text-muted/60 font-mono mt-0.5">
                  {ach.date}
                </p>
                {ach.link && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan/70 hover:text-cyan mt-2 transition-colors"
                  >
                    View Credential <FiExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
