import { NAV_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-bg-dark py-10 md:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Description */}
          <div>
            <h3
              className="text-white text-2xl mb-4"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Nefes
            </h3>
            <p
              className="text-[#888888] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              İstanbul&apos;un kalbinde, beden ve zihin dengesi için kurulmuş
              bir yoga ve meditasyon stüdyosu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              Hızlı Erişim
            </h4>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#888888] text-sm hover:text-white transition-colors duration-300 py-1.5 min-h-[44px] flex items-center md:min-h-0 md:py-0"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-white text-sm uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              Sosyal Medya
            </h4>
            <div className="flex flex-wrap gap-4">
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[#888888] text-sm hover:text-white transition-colors duration-300 py-2 min-h-[44px] flex items-center md:min-h-0 md:py-0"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#333333] pt-6">
          <p
            className="text-[#666666] text-xs text-center"
            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Nefes Yoga Studio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
