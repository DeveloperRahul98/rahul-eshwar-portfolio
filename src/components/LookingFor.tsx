"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";
import { FiBriefcase, FiMapPin, FiMonitor, FiCalendar, FiTrendingUp } from "react-icons/fi";

const items = [
  {
    icon: FiBriefcase,
    label: "Ideal Role",
    value: "Full Stack Developer (Frontend-heavy)",
  },
  {
    icon: FiMonitor,
    label: "Work Mode",
    value: "Onsite / Remote for outstation roles",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Hyderabad, India",
  },
  {
    icon: FiCalendar,
    label: "Availability",
    value: "Open to opportunities",
  },
];

export default function LookingFor() {
  return (
    <SectionWrapper id="hiring">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <TextReveal className="gradient-text">What I&apos;m Looking For</TextReveal>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <SpotlightCard className="glass-card rounded-xl p-5 neon-border-hover transition-all duration-300 group h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan/10 text-cyan shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-1 group-hover:text-cyan transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* Currently exploring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto"
      >
        <SpotlightCard className="glass-card rounded-xl p-5 neon-border-hover transition-all duration-300 group"
          spotlightColor="rgba(139, 92, 246, 0.12)"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan/10 text-cyan shrink-0 mt-0.5">
              <FiTrendingUp size={18} />
            </div>
            <div>
              <p className="text-xs text-muted font-mono uppercase tracking-wider">
                Currently Expanding Into
              </p>
              <p className="text-sm font-medium text-foreground mt-1 group-hover:text-cyan transition-colors">
                Generative AI &amp; Backend Development — actively building full-stack and AI-powered applications to complement my frontend expertise
              </p>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </SectionWrapper>
  );
}
