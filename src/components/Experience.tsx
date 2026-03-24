"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <TextReveal className="gradient-text">Experience</TextReveal>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan/40 animate-ping" />
                </div>

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <SpotlightCard className="glass-card rounded-xl p-6 neon-border-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-cyan whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-cyan/80 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted flex items-start gap-2"
                        >
                          <span className="text-cyan mt-1.5 text-xs">
                            &#9654;
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
