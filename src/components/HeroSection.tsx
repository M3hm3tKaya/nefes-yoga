"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BreathCircle from "./BreathCircle";

export default function HeroSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const dur = reducedMotion ? 0.01 : undefined;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: dur ?? 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <BreathCircle />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: dur ?? 0.8, delay: reducedMotion ? 0 : 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-8 sm:mt-10"
      >
        <a
          href="#iletisim"
          className="inline-block border border-accent text-accent px-6 sm:px-8 py-3 min-h-[44px] text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase transition-all duration-300 hover:bg-accent hover:text-white active:bg-accent active:text-white"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
        >
          Deneme Dersine Katıl
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: dur ?? 0.8, delay: reducedMotion ? 0 : 1.2 }}
        className="absolute bottom-6 sm:bottom-10"
      >
        <a
          href="#hakkimizda"
          className="animate-bounce-slow block text-text-light text-2xl p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Aşağı kaydır"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
