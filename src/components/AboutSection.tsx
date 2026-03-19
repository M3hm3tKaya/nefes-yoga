"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-bg px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text */}
        <RevealOnScroll delay={0}>
          <div>
            <span
              className="text-warm uppercase text-xs tracking-[0.2em] block mb-4"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              HAKKIMIZDA
            </span>
            <h2
              className="text-text text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Ic Huzurunuzu Kesfedin
            </h2>
            <p
              className="text-text-light text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              Nefes Yoga Studio, Istanbul&apos;un kalbinde, sehrin kaosundan
              uzak bir huzur adasidir. 2018 yilinda kurulan studiomuzda, deneyimli
              egitmenlerimiz esliginde bedeninizi ve zihninizi dengeye kavusturabilirsiniz.
              Her seviyeden ogrenciye uygun derslerimizle, yoga ve meditasyonun
              donusturucu gucunu kesfetmenize yardimci oluyoruz.
            </p>
            <div className="w-[60px] h-[2px] bg-accent" />
          </div>
        </RevealOnScroll>

        {/* Right: Studio Image */}
        <RevealOnScroll delay={0.15}>
          <div className="aspect-square max-w-[500px] mx-auto w-full overflow-hidden rounded-sm">
            <img
              src="/images/about-studio.png"
              alt="Nefes Yoga Studio"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
