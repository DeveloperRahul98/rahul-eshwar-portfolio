"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <Image
              src="/logo.png"
              alt="RKE Logo"
              width={120}
              height={86}
              className="drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              priority
            />
            {/* Glow pulse behind logo */}
            <div className="absolute inset-0 rounded-full bg-cyan/20 blur-3xl animate-glow-pulse -z-10" />
            {/* Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text tracking-wide">
                Rahul Kumar Eshwar
              </h1>
              <p className="mt-2 text-sm sm:text-base text-cyan font-mono">
                Software Engineer II
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
