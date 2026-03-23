"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-[500px] h-[500px] rounded-full bg-cyan/[0.07] blur-[100px]" />
    </motion.div>
  );
}
