"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="py-16 md:py-28 bg-bg px-4 sm:px-6 overflow-hidden">
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
              className="text-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              İç Huzurunuzu Keşfedin
            </h2>
            <p
              className="text-text-light text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              Nefes Yoga Studio, İstanbul&apos;un kalbinde, şehrin kaosundan
              uzak bir huzur adasıdır. 2018 yılında kurulan stüdyomuzda, deneyimli
              eğitmenlerimiz eşliğinde bedeninizi ve zihninizi dengeye kavuşturabilirsiniz.
              Her seviyeden öğrenciye uygun derslerimizle, yoga ve meditasyonun
              dönüştürücü gücünü keşfetmenize yardımcı oluyoruz.
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
