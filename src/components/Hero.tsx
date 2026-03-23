"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const codeLines = [
  { indent: 0, text: "const rahul = {", delay: 0 },
  {
    indent: 1,
    delay: 0.3,
    key: "name",
    value: `"${personalInfo.name}"`,
  },
  {
    indent: 1,
    delay: 0.6,
    key: "role",
    value: `"${personalInfo.role}"`,
  },
  {
    indent: 1,
    delay: 0.9,
    key: "experience",
    value: `"4+ years"`,
  },
  {
    indent: 1,
    delay: 1.2,
    key: "skills",
    value: `["React", "Next.js", "TypeScript", "Tailwind"]`,
    isArray: true,
  },
  {
    indent: 1,
    delay: 1.5,
    key: "shipped",
    value: `"5+ live products"`,
  },
  {
    indent: 1,
    delay: 1.8,
    key: "exploring",
    value: `["Full-Stack", "Generative AI"]`,
    isArray: true,
  },
  {
    indent: 1,
    delay: 2.1,
    key: "passion",
    value: `"${personalInfo.tagline}"`,
  },
  { indent: 0, text: "};", delay: 2.4 },
];

function renderArrayValue(value: string) {
  const items = value.slice(1, -1).split(", ");
  return (
    <>
      <span className="text-foreground">[</span>
      {items.map((item, i) => (
        <span key={i}>
          <span className="text-[#9ece6a]">{item}</span>
          {i < items.length - 1 && (
            <span className="text-foreground">, </span>
          )}
        </span>
      ))}
      <span className="text-foreground">]</span>
    </>
  );
}

function CodeLine({
  line,
  lineNumber,
}: {
  line: (typeof codeLines)[number];
  lineNumber: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: line.delay, duration: 0.3 }}
      className="flex"
    >
      <span className="w-8 text-right mr-4 text-muted/40 select-none text-xs">
        {lineNumber}
      </span>
      <span className="flex-1">
        {"  ".repeat(line.indent)}
        {line.key ? (
          <>
            <span className="text-[#9d7cd8]">{line.key}</span>
            <span className="text-foreground">: </span>
            {line.isArray ? (
              renderArrayValue(line.value)
            ) : (
              <span className="text-[#9ece6a]">{line.value}</span>
            )}
            <span className="text-foreground">,</span>
          </>
        ) : (
          <span className="text-[#7dcfff]">{line.text}</span>
        )}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-bg overflow-hidden"
    >
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-12">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full order-2 lg:order-1"
          >
            {/* Editor window */}
            <TiltCard className="rounded-xl border border-card-border bg-card/90 backdrop-blur-sm overflow-hidden neon-border gradient-border">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-card-border bg-card">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs text-muted font-mono">
                  rahul.config.ts
                </span>
              </div>

              {/* Code content */}
              <div className="p-4 sm:p-6 font-mono text-sm sm:text-base leading-relaxed">
                {codeLines.map((line, i) => (
                  <CodeLine key={i} line={line} lineNumber={i + 1} />
                ))}
                {/* Blinking cursor */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                  className="flex mt-1"
                >
                  <span className="w-8 mr-4" />
                  {showCursor && (
                    <span className="w-2 h-5 bg-cyan cursor-blink" />
                  )}
                </motion.div>
              </div>
            </TiltCard>

            {/* CTA Buttons with Magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
            >
              <MagneticButton
                as="button"
                onClick={() => scrollTo("#projects")}
                className="px-6 py-3 bg-cyan/10 border border-cyan/30 text-cyan rounded-lg font-medium text-sm hover:bg-cyan/20 hover:border-cyan/50 transition-all duration-300"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                as="button"
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3 border border-card-border text-foreground rounded-lg font-medium text-sm hover:border-cyan/30 hover:text-cyan transition-all duration-300"
              >
                Get In Touch
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative flex flex-col items-center order-1 lg:order-2"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 animate-float">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-cyan/20 blur-2xl animate-glow-pulse" />
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full border-2 border-cyan/40 overflow-hidden">
                <Image
                  src="/my-pic-2.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover scale-120 pb-7"
                  priority
                  sizes="(max-width: 720px) 300px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cyan/60" />
              <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-cyan/40" />
            </div>
            {/* Tagline */}
            <p className="mt-5 text-sm text-muted italic font-mono text-center">
              &quot;Put your energy into things you have a future with&quot;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cyan/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
