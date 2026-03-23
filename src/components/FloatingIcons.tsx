"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiVite,
  SiRedux,
} from "react-icons/si";
import { FiTerminal, FiCode, FiDatabase, FiGlobe } from "react-icons/fi";

const icons = [
  { Icon: SiReact, x: "3%", y: "12%", size: 32, duration: 18, delay: 0 },
  { Icon: SiNextdotjs, x: "88%", y: "18%", size: 28, duration: 22, delay: 1 },
  { Icon: SiTypescript, x: "12%", y: "68%", size: 30, duration: 20, delay: 2 },
  { Icon: SiJavascript, x: "82%", y: "72%", size: 26, duration: 24, delay: 0.5 },
  { Icon: SiTailwindcss, x: "72%", y: "8%", size: 28, duration: 19, delay: 3 },
  { Icon: SiHtml5, x: "22%", y: "82%", size: 24, duration: 21, delay: 1.5 },
  { Icon: SiCss, x: "62%", y: "88%", size: 24, duration: 23, delay: 2.5 },
  { Icon: SiGit, x: "6%", y: "42%", size: 26, duration: 17, delay: 4 },
  { Icon: FiTerminal, x: "91%", y: "48%", size: 28, duration: 20, delay: 1 },
  { Icon: FiCode, x: "48%", y: "4%", size: 26, duration: 25, delay: 3.5 },
  { Icon: SiVite, x: "32%", y: "90%", size: 24, duration: 22, delay: 2 },
  { Icon: SiRedux, x: "78%", y: "38%", size: 22, duration: 19, delay: 0 },
  { Icon: FiDatabase, x: "18%", y: "28%", size: 20, duration: 26, delay: 4.5 },
  { Icon: FiGlobe, x: "52%", y: "58%", size: 22, duration: 21, delay: 3 },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {icons.map(({ Icon, x, y, size, duration, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          animate={{
            opacity: [0.02, 0.08, 0.04, 0.08, 0.02],
            y: [0, -25, 0, 25, 0],
            x: [0, 12, 0, -12, 0],
            rotate: [0, 8, 0, -8, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} className="text-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]" />
        </motion.div>
      ))}
    </div>
  );
}
