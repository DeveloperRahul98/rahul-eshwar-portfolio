"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { FiMapPin, FiBriefcase, FiDownload } from "react-icons/fi";

const stats = [
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Live Products", value: 5, suffix: "+" },
  { label: "Clients Served", value: 100, suffix: "+" },
  { label: "Team Lead", value: 3, suffix: "+" },
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
    <div ref={ref} className="text-2xl sm:text-3xl font-bold neon-text font-mono">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan">&lt;</span> About Me{" "}
          <span className="text-cyan">/&gt;</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            {personalInfo.about}
          </p>

          {/* Quick info pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="flex items-center gap-1.5 text-sm text-foreground/70 bg-card px-3 py-1.5 rounded-full border border-card-border">
              <FiMapPin className="text-cyan" size={14} />
              Hyderabad, India
            </span>
            <span className="flex items-center gap-1.5 text-sm text-foreground/70 bg-card px-3 py-1.5 rounded-full border border-card-border">
              <FiBriefcase className="text-cyan" size={14} />
              WML IT Solutions
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 text-sm text-cyan border border-cyan/30 px-4 py-2 rounded-lg hover:bg-cyan/10 transition-colors font-mono"
            >
              <FiDownload size={14} />
              Download Resume
            </a>
            <div className="flex items-center gap-2 text-sm text-cyan/70 font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Open to opportunities
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2 grid grid-cols-2 gap-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-4 text-center neon-border-hover transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
