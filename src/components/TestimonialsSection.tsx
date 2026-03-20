"use client";

import { TESTIMONIALS } from "@/constants";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

export default function TestimonialsSection() {
  return (
    <section id="yorumlar" className="py-16 md:py-28 bg-bg-alt px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionHeader label="YORUMLAR" title="Öğrencilerimizden" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <RevealOnScroll key={t.id} delay={index * 0.1}>
              <div className="bg-white border border-border rounded-lg p-5 sm:p-8 relative">
                {/* Quote Mark */}
                <span
                  className="absolute top-3 left-4 sm:top-4 sm:left-6 text-5xl sm:text-6xl text-accent/20 leading-none"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  &ldquo;
                </span>

                <p
                  className="text-text italic text-base leading-relaxed mb-6 mt-6"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                >
                  {t.quote}
                </p>

                <div>
                  <span
                    className="text-text font-bold text-sm block"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-text-light text-xs"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    {t.title}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
