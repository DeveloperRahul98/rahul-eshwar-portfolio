"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";
import { projects } from "@/data/portfolio";
import { FiExternalLink, FiGithub, FiCode, FiBriefcase, FiUser, FiChevronDown, FiChevronUp } from "react-icons/fi";

const INITIAL_COUNT = 4;

const cardGradients = [
  "from-cyan-500/20 to-blue-500/10",
  "from-purple-500/20 to-pink-500/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-amber-500/20 to-orange-500/10",
  "from-rose-500/20 to-red-500/10",
  "from-blue-500/20 to-indigo-500/10",
  "from-indigo-500/20 to-violet-500/10",
];

const filters = [
  { label: "All", value: "all" },
  { label: "Professional", value: "professional" },
  { label: "Personal", value: "personal" },
] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <TextReveal className="gradient-text">Projects</TextReveal>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => {
              setActiveFilter(value);
              setShowAll(false);
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === value
                ? "bg-cyan/15 text-cyan border border-cyan/30"
                : "text-muted border border-card-border hover:border-cyan/20 hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {visible.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <SpotlightCard className="glass-card rounded-xl overflow-hidden neon-border-hover transition-all duration-300 group h-full">
                {/* Project card header */}
                <div className={`relative h-44 bg-linear-to-br ${cardGradients[i % cardGradients.length]} overflow-hidden flex items-center justify-center`}>
                  <span className="text-7xl font-bold font-mono text-white/[0.07] select-none">
                    {project.title.charAt(0)}
                  </span>
                  <div className="absolute bottom-3 right-3">
                    <FiCode className="w-6 h-6 text-white/10" />
                  </div>

                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-full ${
                        project.type === "professional"
                          ? "bg-cyan/10 text-cyan border border-cyan/20"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      {project.type === "professional" ? (
                        <FiBriefcase size={10} />
                      ) : (
                        <FiUser size={10} />
                      )}
                      {project.type === "professional"
                        ? "Professional"
                        : "Personal"}
                    </span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-cyan/20 border border-cyan/40 text-cyan hover:bg-cyan/30 transition-colors"
                        aria-label="Live demo"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-cyan/20 border border-cyan/40 text-cyan hover:bg-cyan/30 transition-colors"
                        aria-label="Source code"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan/5 text-cyan/80 border border-cyan/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visible link buttons */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-card-border">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-cyan hover:text-cyan/80 transition-colors"
                        >
                          <FiExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors"
                        >
                          <FiGithub size={13} />
                          Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View More / View Less */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-cyan border border-cyan/30 bg-cyan/5 hover:bg-cyan/15 hover:border-cyan/50 transition-all duration-300"
          >
            {showAll ? (
              <>
                Show Less <FiChevronUp size={16} />
              </>
            ) : (
              <>
                View More ({filtered.length - INITIAL_COUNT}) <FiChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
