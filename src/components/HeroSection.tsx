"use client";

import { motion } from "framer-motion";
import BreathCircle from "./BreathCircle";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg px-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <BreathCircle />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-10"
      >
        <a
          href="#iletisim"
          className="inline-block border border-accent text-accent px-8 py-3 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-accent hover:text-white"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
        >
          Deneme Dersine Katil
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10"
      >
        <a
          href="#hakkimizda"
          className="animate-bounce-slow block text-text-light text-2xl"
          aria-label="Asagi kaydir"
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
