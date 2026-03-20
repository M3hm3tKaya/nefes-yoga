"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#F5EDE3]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-2xl text-text tracking-wide"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          Nefes
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-light hover:text-accent transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={clsx(
              "block w-6 h-px bg-text transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-[4px]"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-px bg-text transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-px bg-text transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-[4px]"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500 bg-[#F5EDE3]/95 backdrop-blur-md",
          mobileOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm text-text-light hover:text-accent transition-colors duration-300 tracking-wide py-2 min-h-[44px] flex items-center"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
