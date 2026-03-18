"use client";

import type { ClassItem } from "@/types";

interface ClassCardProps {
  item: ClassItem;
}

export default function ClassCard({ item }: ClassCardProps) {
  return (
    <div className="group bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      {/* Placeholder Image */}
      <div className="aspect-[4/3] bg-placeholder-green flex items-center justify-center">
        <span
          className="text-accent/40 text-sm tracking-wide"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
        >
          Fotograf Alani
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-text font-bold text-xl mb-2"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          {item.name}
        </h3>
        <p
          className="text-text-light text-sm leading-relaxed mb-3"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
        >
          {item.description}
        </p>
        <div
          className="flex gap-3 text-xs text-[#999999]"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
        >
          <span>{item.duration}</span>
          <span>|</span>
          <span>{item.level}</span>
        </div>
      </div>
    </div>
  );
}
