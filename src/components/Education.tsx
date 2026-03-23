"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";
import { FiBookOpen } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "David Memorial Institute of Management",
    location: "Hyderabad, India",
    year: "2020",
  },
  {
    degree: "Intermediate — MPC (Maths, Physics, Chemistry)",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, India",
    year: "2017",
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <TextReveal className="gradient-text">Education</TextReveal>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <SpotlightCard className="glass-card rounded-xl p-6 neon-border-hover transition-all duration-300 group h-full">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan/10 text-cyan shrink-0 mt-0.5">
                  <FiBookOpen size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-cyan transition-colors text-sm leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-cyan/70 mt-1">{edu.institution}</p>
                  <p className="text-xs text-muted mt-1">
                    {edu.location} &middot; {edu.year}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
