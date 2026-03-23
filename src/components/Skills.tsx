"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/portfolio";

const categories = ["Languages", "Frameworks", "Mobile", "Tools"] as const;

const proficiencyConfig = {
  expert: { width: "90%", color: "bg-cyan", label: "Expert" },
  advanced: { width: "70%", color: "bg-cyan/70", label: "Advanced" },
  intermediate: { width: "50%", color: "bg-cyan/40", label: "Intermediate" },
} as const;

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan">&lt;</span> Skills{" "}
          <span className="text-cyan">/&gt;</span>
        </h2>
      </div>

      <div className="space-y-10">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (s) => s.category === category
          );
          return (
            <div key={category}>
              <h3 className="text-sm font-mono text-muted mb-4 uppercase tracking-widest">
                {`// ${category}`}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {categorySkills.map((skill, i) => {
                  const Icon = skill.icon;
                  const prof = proficiencyConfig[skill.proficiency];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="glass-card rounded-xl p-4 flex flex-col items-center gap-2.5 neon-border-hover transition-all duration-300 cursor-default group"
                    >
                      <Icon className="w-7 h-7 text-muted group-hover:text-cyan transition-colors duration-300" />
                      <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      {/* Proficiency bar */}
                      <div className="w-full flex flex-col items-center gap-1">
                        <div className="w-full h-1 rounded-full bg-card-border overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${prof.color}`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                            style={{ width: prof.width, transformOrigin: "left" }}
                          />
                        </div>
                        <span className="text-[9px] text-muted/60 font-mono">
                          {prof.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
