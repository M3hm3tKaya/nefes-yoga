"use client";

import { INSTRUCTORS } from "@/constants";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "./RevealOnScroll";

export default function InstructorsSection() {
  return (
    <section id="egitmenler" className="py-16 md:py-28 bg-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionHeader label="EĞİTMENLER" title="Deneyimli Rehberlerimiz" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {INSTRUCTORS.map((instructor, index) => (
            <RevealOnScroll key={instructor.id} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mb-6 rounded-full overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3
                  className="text-text text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {instructor.name}
                </h3>
                <p
                  className="text-text-light text-sm mb-3"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                >
                  {instructor.title}
                </p>
                <p
                  className="text-text-light text-sm leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                >
                  {instructor.bio}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
