"use client";

export default function BreathCircle() {
  return (
    <div className="animate-breathe flex items-center justify-center">
      <div
        className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-accent flex flex-col items-center justify-center gap-3"
      >
        <h1
          className="text-text font-serif italic"
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1,
          }}
        >
          Nefes
        </h1>
        <p
          className="text-warm uppercase tracking-[0.1em] sm:tracking-[0.2em] text-xs sm:text-sm px-4 text-center"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
        >
          Yoga & Meditasyon Stüdyosu
        </p>
      </div>
    </div>
  );
}
