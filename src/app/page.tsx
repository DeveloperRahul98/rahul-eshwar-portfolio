"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import FloatingIcons from "@/components/FloatingIcons";
import CommandPalette from "@/components/CommandPalette";
import ScrollToTop from "@/components/ScrollToTop";
import LookingFor from "@/components/LookingFor";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <FloatingIcons />
      <Navbar onCommandPalette={() => setCommandPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <LookingFor />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
