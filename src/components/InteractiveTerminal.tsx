"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, skills, experiences, socialLinks } from "@/data/portfolio";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

const COMMANDS: Record<string, () => string> = {
  help: () =>
    `Available commands:
  about       — Who I am
  skills      — My tech stack
  experience  — Work history
  projects    — What I've built
  contact     — Get in touch
  social      — Social links
  resume      — Download resume
  clear       — Clear terminal
  whoami      — Quick intro
  help        — Show this help`,

  about: () => personalInfo.about,

  whoami: () =>
    `${personalInfo.name} — ${personalInfo.role}
"${personalInfo.tagline}"`,

  skills: () => {
    const grouped: Record<string, string[]> = {};
    skills.forEach((s) => {
      if (!grouped[s.category]) grouped[s.category] = [];
      grouped[s.category].push(`${s.name} (${s.proficiency})`);
    });
    return Object.entries(grouped)
      .map(([cat, items]) => `[${cat}]\n  ${items.join(", ")}`)
      .join("\n\n");
  },

  experience: () =>
    experiences
      .map((e) => `${e.role} @ ${e.company}\n  ${e.duration}\n  ${e.description}`)
      .join("\n\n"),

  contact: () =>
    `Email: ${personalInfo.email}\nSend me a message — I'd love to hear from you!`,

  social: () =>
    socialLinks.map((s) => `${s.platform}: ${s.url}`).join("\n"),

  resume: () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = personalInfo.resumeUrl;
      link.download = "";
      link.click();
    }
    return "Downloading resume...";
  },

  projects: () =>
    `Type "projects" to see my work above, or visit:
  GitHub: https://github.com/DeveloperRahul98
  Portfolio: You're looking at it!`,
};

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: `Welcome to Rahul's terminal. Type "help" for commands.` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: trimmed },
    ];

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setLines([
        { type: "output", content: "Terminal cleared." },
      ]);
      setInput("");
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      newLines.push({ type: "output", content: handler() });
    } else {
      newLines.push({
        type: "error",
        content: `Command not found: "${trimmed}". Type "help" for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  return (
    <SectionWrapper id="terminal">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold font-mono">
          <span className="text-cyan align-middle mx-1">&lt;</span>
          <span className="gradient-text">Terminal</span>
          <span className="text-cyan align-middle mx-1">/&gt;</span>
        </h2>
        <p className="text-muted text-sm mt-3">
          Try typing <span className="text-cyan font-mono">help</span> to explore
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="rounded-xl border border-card-border bg-card/90 backdrop-blur-sm overflow-hidden neon-border">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-card">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 text-xs text-muted font-mono">
              rahul@portfolio ~ %
            </span>
          </div>

          {/* Terminal content */}
          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            data-lenis-prevent
            className="p-4 sm:p-6 font-mono text-sm h-72 overflow-y-auto cursor-text space-y-1.5"
          >
            {lines.map((line, i) => (
              <div key={i}>
                {line.type === "input" ? (
                  <div className="flex gap-2">
                    <span className="text-cyan shrink-0">$</span>
                    <span className="text-foreground">{line.content}</span>
                  </div>
                ) : line.type === "error" ? (
                  <div className="text-red-400/80 whitespace-pre-wrap pl-4">
                    {line.content}
                  </div>
                ) : (
                  <div className="text-muted whitespace-pre-wrap pl-4">
                    {line.content}
                  </div>
                )}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <span className="text-cyan shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none caret-cyan"
                autoComplete="off"
                spellCheck={false}
              />
              <span className="w-2 h-5 bg-cyan cursor-blink shrink-0" />
            </form>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
