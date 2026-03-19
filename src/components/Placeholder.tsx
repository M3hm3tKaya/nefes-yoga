import clsx from "clsx";

interface PlaceholderProps {
  width?: string;
  height?: string;
  rounded?: boolean;
  bgColor?: string;
  text?: string;
  className?: string;
}

export default function Placeholder({
  width = "100%",
  height = "100%",
  rounded = false,
  bgColor = "#E8E0D4",
  text = "Fotoğraf Alanı",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        rounded && "rounded-full",
        className
      )}
      style={{
        width,
        height,
        backgroundColor: bgColor,
      }}
    >
      <span
        className="text-sm text-text-light/50 tracking-wide"
        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
      >
        {text}
      </span>
    </div>
  );
}
