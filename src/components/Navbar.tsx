"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { FiMenu, FiX, FiCommand } from "react-icons/fi";
import Image from "next/image";

interface NavbarProps {
  onCommandPalette: () => void;
}

export default function Navbar({ onCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="group relative shrink-0"
        >
          <Image
            src="/logo.png"
            alt="RKE Logo"
            width={56}
            height={40}
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)] group-hover:drop-shadow-[0_0_16px_rgba(0,229,255,0.6)]"
            priority
          />
        </button>

        {/* Mobile center name */}
        <span className="md:hidden text-sm font-semibold text-foreground tracking-wide">
          Rahul Eshwar
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === href.slice(1)
                  ? "text-cyan"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
              {activeSection === href.slice(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Command palette hint */}
          <button
            onClick={onCommandPalette}
            className="ml-3 flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted border border-card-border rounded-md hover:border-cyan/40 hover:text-cyan transition-colors"
          >
            <FiCommand className="w-3 h-3" />
            <span className="font-mono">Ctrl+K</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-card-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === href.slice(1)
                      ? "text-cyan bg-cyan/5"
                      : "text-muted hover:text-foreground hover:bg-card"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
