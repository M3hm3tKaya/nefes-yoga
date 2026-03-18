"use client";

import { CLASSES } from "@/constants";
import SectionHeader from "./SectionHeader";
import ClassCard from "./ClassCard";
import RevealOnScroll from "./RevealOnScroll";

export default function ClassesSection() {
  return (
    <section id="dersler" className="py-20 md:py-28 bg-bg px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <SectionHeader label="DERSLER" title="Bedeninize Uygun Ders" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {CLASSES.map((cls, index) => (
            <RevealOnScroll key={cls.id} delay={index * 0.1}>
              <ClassCard item={cls} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
