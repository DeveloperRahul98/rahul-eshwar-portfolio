"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";
import { personalInfo } from "@/data/portfolio";
import { FiMapPin, FiBriefcase, FiDownload, FiCode, FiUsers, FiPackage, FiClock } from "react-icons/fi";

const stats = [
  { label: "Years Experience", value: 4, suffix: "+", icon: FiClock },
  { label: "Live Products", value: 5, suffix: "+", icon: FiPackage },
  { label: "Clients Served", value: 100, suffix: "+", icon: FiUsers },
  { label: "Team Lead", value: 3, suffix: "+", icon: FiBriefcase },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold neon-text font-mono">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <TextReveal className="gradient-text">About Me</TextReveal>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Bio — spans 2 cols, 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="col-span-2 row-span-2"
        >
          <SpotlightCard className="glass-card rounded-2xl p-6 h-full neon-border-hover transition-all duration-300 gradient-border">
            <div className="flex items-center gap-2 mb-4">
              <FiCode className="text-cyan" size={18} />
              <span className="text-xs font-mono text-cyan uppercase tracking-wider">Who I Am</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <span className="flex items-center gap-1.5 text-sm text-foreground/70 bg-background/50 px-3 py-1.5 rounded-full border border-card-border">
                <FiMapPin className="text-cyan" size={14} />
                Hyderabad, India
              </span>
              <span className="flex items-center gap-1.5 text-sm text-foreground/70 bg-background/50 px-3 py-1.5 rounded-full border border-card-border">
                <FiBriefcase className="text-cyan" size={14} />
                WML IT Solutions
              </span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Stats — 4 individual bento cards */}
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="glass-card rounded-2xl p-5 h-full neon-border-hover transition-all duration-300 group hover:-translate-y-1">
                <Icon className="text-cyan/60 mb-3 group-hover:text-cyan transition-colors" size={20} />
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-xs text-muted mt-1.5 font-mono">{stat.label}</div>
              </SpotlightCard>
            </motion.div>
          );
        })}

        {/* Resume + Status — wide card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <SpotlightCard className="glass-card rounded-2xl p-5 h-full neon-border-hover transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </div>
                <span className="text-sm text-foreground font-medium">
                  Open to opportunities
                </span>
              </div>
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center gap-2 text-sm text-cyan border border-cyan/30 px-5 py-2.5 rounded-xl hover:bg-cyan/10 transition-colors font-mono"
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Currently Exploring — wide card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <SpotlightCard
            className="glass-card rounded-2xl p-5 h-full neon-border-hover transition-all duration-300 group"
            spotlightColor="rgba(139, 92, 246, 0.12)"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Currently Exploring</span>
            </div>
            <p className="text-sm text-muted group-hover:text-foreground/80 transition-colors">
              Generative AI & Backend Development — building full-stack and AI-powered apps
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
