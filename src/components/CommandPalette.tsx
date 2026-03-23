"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiArrowRight, FiDownload, FiExternalLink } from "react-icons/fi";
import { personalInfo, socialLinks } from "@/data/portfolio";

interface Command {
  label: string;
  action: () => void;
  icon: React.ReactNode;
  category: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = useCallback(
    (id: string) => {
      onClose();
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [onClose]
  );

  const commands: Command[] = [
    {
      label: "Go to Home",
      action: () => scrollTo("#home"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to About",
      action: () => scrollTo("#about"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Skills",
      action: () => scrollTo("#skills"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Experience",
      action: () => scrollTo("#experience"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Projects",
      action: () => scrollTo("#projects"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Achievements",
      action: () => scrollTo("#achievements"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Education",
      action: () => scrollTo("#education"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Hiring Preferences",
      action: () => scrollTo("#hiring"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Go to Contact",
      action: () => scrollTo("#contact"),
      icon: <FiArrowRight size={14} />,
      category: "Navigation",
    },
    {
      label: "Download Resume",
      action: () => {
        onClose();
        const link = document.createElement("a");
        link.href = personalInfo.resumeUrl;
        link.download = "";
        link.click();
      },
      icon: <FiDownload size={14} />,
      category: "Actions",
    },
    ...socialLinks.map((s) => ({
      label: `Open ${s.platform}`,
      action: () => {
        onClose();
        window.open(s.url, "_blank");
      },
      icon: <FiExternalLink size={14} />,
      category: "Links",
    })),
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((i) => (i + 1) % filtered.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
          break;
        case "Enter":
          e.preventDefault();
          if (filtered[selectedIndex]) {
            filtered[selectedIndex].action();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-[90vw] max-w-lg"
          >
            <div className="rounded-xl border border-card-border bg-card shadow-2xl shadow-cyan/5 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-card-border bg-card">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted font-mono ml-2">
                  terminal
                </span>
              </div>

              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-card-border">
                <FiSearch className="text-cyan shrink-0" size={16} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder-muted/50 outline-none font-mono"
                />
                <kbd className="text-[10px] text-muted border border-card-border rounded px-1.5 py-0.5 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-64 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-6 text-sm text-muted text-center font-mono">
                    No commands found.
                  </div>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.label}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                        i === selectedIndex
                          ? "bg-cyan/10 text-cyan"
                          : "text-muted hover:bg-card-hover"
                      }`}
                    >
                      {cmd.icon}
                      <span className="flex-1">{cmd.label}</span>
                      <span className="text-[10px] text-muted/40 font-mono">
                        {cmd.category}
                      </span>
                    </button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
