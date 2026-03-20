"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function ContactSection() {
  return (
    <section id="iletisim" className="py-16 md:py-28 bg-bg px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Form */}
          <RevealOnScroll delay={0}>
            <div>
              <span
                className="text-warm uppercase text-xs tracking-[0.2em] block mb-4"
                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
              >
                İLETİŞİM
              </span>
              <h2
                className="text-text text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Bize Ulaşın
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-0"
              >
                {/* Name */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder=" "
                    id="name"
                  />
                  <label htmlFor="name" className="form-label">
                    İsim
                  </label>
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    placeholder=" "
                    id="email"
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>

                {/* Phone */}
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-input"
                    placeholder=" "
                    id="phone"
                  />
                  <label htmlFor="phone" className="form-label">
                    Telefon
                  </label>
                </div>

                {/* Class Preference */}
                <div className="form-group">
                  <select className="form-input" id="class-pref" defaultValue="">
                    <option value="" disabled>
                      Ders seçiniz...
                    </option>
                    <option value="hatha">Hatha Yoga</option>
                    <option value="vinyasa">Vinyasa Flow</option>
                    <option value="yin">Yin Yoga</option>
                    <option value="meditasyon">Meditasyon</option>
                  </select>
                  <label htmlFor="class-pref" className="form-label">
                    Ders Tercihi
                  </label>
                </div>

                {/* Message */}
                <div className="form-group">
                  <textarea
                    className="form-input min-h-[120px] resize-y"
                    placeholder=" "
                    id="message"
                    rows={4}
                  />
                  <label htmlFor="message" className="form-label">
                    Mesaj
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 min-h-[44px] text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-accent/90 active:bg-accent/80 rounded-sm"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                >
                  Gönder
                </button>
              </form>
            </div>
          </RevealOnScroll>

          {/* Right: Info */}
          <RevealOnScroll delay={0.15}>
            <div className="flex flex-col justify-center">
              <h3
                className="text-text text-2xl mb-8"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                <div>
                  <h4
                    className="text-warm uppercase text-xs tracking-[0.15em] mb-2"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    Adres
                  </h4>
                  <p
                    className="text-text text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    Cihangir Mah. Akarsu Cad. No: 12/A
                    <br />
                    Beyoğlu, İstanbul
                  </p>
                </div>

                <div>
                  <h4
                    className="text-warm uppercase text-xs tracking-[0.15em] mb-2"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    Telefon
                  </h4>
                  <p
                    className="text-text text-sm"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    +90 (212) 555 0123
                  </p>
                </div>

                <div>
                  <h4
                    className="text-warm uppercase text-xs tracking-[0.15em] mb-2"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    Email
                  </h4>
                  <p
                    className="text-text text-sm"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    info@nefesyoga.com
                  </p>
                </div>

                <div>
                  <h4
                    className="text-warm uppercase text-xs tracking-[0.15em] mb-2"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    Çalışma Saatleri
                  </h4>
                  <p
                    className="text-text text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                  >
                    Pazartesi - Cuma: 07:00 - 21:00
                    <br />
                    Cumartesi: 08:00 - 18:00
                    <br />
                    Pazar: 09:00 - 15:00
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
