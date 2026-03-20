interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span
        className="text-warm uppercase text-xs tracking-[0.2em] block mb-3"
        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
      >
        {label}
      </span>
      <h2
        className="text-text font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
      >
        {title}
      </h2>
    </div>
  );
}
